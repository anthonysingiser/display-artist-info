import SpotifyWebApi from 'spotify-web-api-js'
import axios from 'axios'

const client_id = process.env.SPOTIFY_CLIENT_ID
const client_secret = process.env.SPOTIFY_CLIENT_SECRET

const authOptions = {
  url: 'https://accounts.spotify.com/api/token',
  headers: {
    'Authorization': 'Basic' + (new Buffer.from(client_id + ':' + client_secret).toString('base64'))
  },
  form: {
    grant_type: 'client_credentials'
  },
};

const getAccessToken = async () => {
  
  const spotifyApi = new SpotifyWebApi({
    clientId: client_id,
    clientSecret: client_secret,
  })

  try {
    const response = await axios.post(authOptions.url, authOptions.form, {
      headers: authOptions.headers
    });

    if (response.status === 200) {
      const token = await response.data.access_token
      console.log(token, 'this is the token')
      
      spotifyApi.setAccessToken(token)
    
      return spotifyApi
    }

  } catch (error) {
    console.log(error)
  }
};

export default getAccessToken;