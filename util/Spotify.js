let accessToken 
const clientID = '7836f4951eb24ba48c00e4b765fc04db'
const redirectURI = 'http://localhost:3000/'

const Spotify = {
    getAccessToken: function () {
        //If already exists, return token
        if (accessToken){
            return accessToken
        }

        //Checks for access token match.
        const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/)
        const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/)

        if(accessTokenMatch && expiresInMatch){
            accessToken = accessTokenMatch[1]
            const expiresIn = Number(expiresInMatch[1])
            //This clearns the parameters, allowing us to grab a new access token when it expires.
            window.setTimeout(() => accessToken = '', expiresIn * 1000)
            window.history.pushState('Access Token', null, '/')
            return accessToken
        }else{
            const accessURL = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`
            window.location.redirect(accessURL)
        }
    }


}

export default Spotify
