import SpotifyWebApi from 'spotify-web-api-js'
import axios from 'axios'
import { encode as base64Encode } from 'base-64'
import { sha256 } from 'crypto-hash'

const client_id = process.env.SPOTIFY_CLIENT_ID
const redirect_uri = process.env.SPOTIFY_REDIRECT_URI

const getAccessToken = async (code) => {
  const spotifyApi = new SpotifyWebApi({
    clientId: client_id,
  })

  try {
    const codeVerifier = await sha256(Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15))
    const codeChallenge = await base64Encode(codeVerifier)

    const response = await axios.post('https://accounts.spotify.com/api/token', {
      grant_type: 'authorization_code',
      code: code,
      redirect_uri: redirect_uri,
      code_verifier: codeVerifier,
      client_id: client_id,
    })

    if (response.status === 200) {
      const token = await response.data.access_token
      const refresh_token = await response.data.refresh_token

      spotifyApi.setAccessToken(token)
      spotifyApi.setRefreshToken(refresh_token)

      return spotifyApi
    }

  } catch (error) {
    console.log(error)
  }
};

export default getAccessToken;