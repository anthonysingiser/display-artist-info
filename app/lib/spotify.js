import SpotifyWebApi from 'spotify-web-api-js'

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
  json: true
};

request.post(authOptions, function(error, response, body) {
  if(!error && response.statusCode === 200) {
    const token = body.access_token
    console.log(token)
  }
})

const spotifyApi = new SpotifyWebApi({
  clientId: client_id,
  clientSecret: client_secret,
})

spotifyApi.setAccessToken(token)

export default spotifyApi