let accessToken
const clientID = process.env.REACT_APP_SPOTIFY_API_KEY
const redirectURI = process.env.REACT_APP_REDIRECT_URI

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
					id: track.id,
					name: track.name,
					artist: track.artists[0].name,
					album: track.album.name,
					uri: track.uri,
				}
			})
		}
	},
	async savePlaylist(playlistName, trackURIs) {
		if (!playlistName || trackURIs.length === 0) {
			return
		}

		const accessToken = Spotify.getAccessToken()
		const headers = { Authorization: `Bearer ${accessToken}` }
		let userId

		return fetch('https://api.spotify.com/v1/me', { headers })
			.then(response => response.json())
			.then(jsonResponse => {
				userId = jsonResponse.id
				return fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
					headers: headers,
					method: 'POST',
					body: JSON.stringify({ name: playlistName }),
				})
			})
			.then(response => response.json())
			.then(jsonResponse => {
				const playlistId = jsonResponse.id
				return fetch(
					`https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}/tracks`,
					{
						headers: headers,
						method: 'POST',
						body: JSON.stringify({uris: trackURIs})
					}
				)
			})
	},
}

export default Spotify
