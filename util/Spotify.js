let accessToken
const clientID = process.env.REACT_APP_SPOTIFY_API_KEY
const redirectURI = 'http://localhost:3000/'

console.log(clientID)

const Spotify = {
	getAccessToken() {
		//If already exists, return token
		if (accessToken) {
			return accessToken
		}

		//Checks for access token match.
		const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/)
		const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/)

		if (accessTokenMatch && expiresInMatch) {
			accessToken = accessTokenMatch[1]
			const expiresIn = Number(expiresInMatch[1])
			//This clearns the parameters, allowing us to grab a new access token when it expires.
			window.setTimeout(() => (accessToken = ''), expiresIn * 1000)
			window.history.pushState('Access Token', null, '/')
			return accessToken
		} else {
			const accessURL = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`
			window.location = accessURL
		}
	},
	async search(term) {
		const accessToken = Spotify.getAccessToken()
		const response = await fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
            headers: { Authorization: ` Bearer ${accessToken}` },
        })
        const jsonResponse = await response.json()
        if (!jsonResponse.tracks) {
            return []
        } else {
            return jsonResponse.tracks.items.map(track => {
                return {
                    ID: track.id,
                    Name: track.name,
                    Artist: track.artists[0].name,
                    Album: track.album.name,
                    URI: track.uri,
                }
            })
        }
	},
}

export default Spotify
