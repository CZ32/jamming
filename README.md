# Jammming 

### A react app where you can link your Spotify account, create new playlists, search for songs, and add/remove them from your playlist. 

[LIVE VERSION up and running. Please visit here](https://cengiz-jammming.surge.sh)

### Tech-stack

React, Spotify API, Surge

### Learning objectives

* Learn how to pass props to child components.  
* Utilizes handlers to change the state of components. 
* Learn how to call 3rd party APIs and handle their responses.
* Creating and using API Keys and storing as environment variables. 
* Implicit Grant Flow for Client Authentication. 
* Comparing, matching, updating client tokens from url params.
* Async fetch requests using promises. 
* Obtain Song URIs from the Spotify API response and saving them to component state. 
* Deploying front-end application using Surge.

### Key features 

* Search for song by artist or song name using the Spotify API. 
* Create and save new Spotify playlist. 
* Add or remove songs from Spotify playlist (using song uri).
* View saved playlist and songs on [Spotify profile](https://open.spotify.com/user/4f1gscmhwi86f3ul4vq9tryyy)

### Known Bugs

* User has to search for a song twice before the API begins to work. 

### How to use the live version. 

![Gif showing the Jamming application](https://github.com/CZ32/jamming/blob/readme/public/jammming_final.gif)

1. Open live site at [https://cengiz-jammming.surge.sh](https://cengiz-jammming.surge.sh)
2. Rename playlist by clicking on the 'New Playlist' text field and editing. 
3. In the search bar, type your favourite artist or song (Search twice due to bug).
4. Add your favourite songs to the play list.
5. (Optional) remove songs from the playlist if they are unwanted. 
6. Save newly created playlists by clicking the 'Save to Spotify' button. 
7. [Visit the cengiz-jammming Spotify account](https://open.spotify.com/user/4f1gscmhwi86f3ul4vq9tryyy) and see the playlist saved to the profile.

### Dependencies 

* Spotify Account.
* Spotify API. 

### How to install and run locally. 

1. Clone this repositiory to your local machine.
2. Create a .env.development.local file in the route of the directory. 
3. Create a [Spotify developer account](https://developer.spotify.com/dashboard/).
4. From within the developer dashboard, create an app by give it a name, description and agreeing to Spotify's terms of service. 
5. From the app dashboard in Spotify, select 'Edit Settings'
6. Under the option 'Redirect URIs'; add 'http://localhost:3000/'
7. Save the redirect URI (http://localhost:3000/) to a variable named 'REACT_APP_REDIRECT_URI' in the .env.development.local f
8. Save the client id within the .env.development.local file. Giving it the variable name 'REACT_APP_SPOTIFY_API_KEY'

**Note**

Format of environment variables should be named accordingly
 
REACT_APP_VARIABLE_NAME="[string]"

9. Run 'npm install' in the command line of the route directory to install dependencies.  
10. Run 'npm start' to run Jammming application locally. 

### Challenges 

* Getting used to chaining promises using the fetch/then syntax.
* Understanding how new tokens are matched and compared in Implicit Grant Flow. 

### Future Developments

1. Create user profiles.
2. Enable the ability to view playlists saved to account within Jammming. 
3. Delete playlists from within Jammming.


