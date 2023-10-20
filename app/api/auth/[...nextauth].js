import NextAuth from 'next-auth';
import SpotifyProvider from 'next-auth/providers/spotify';

const authOptions = {
    providers: [
        SpotifyProvider({
            clientId: process.env.SPOTIFY_CLIENT_ID,
            clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
            scope: 'user-read-email user-read-private user-top-read user-read-recently-played user-library-read playlist-read-private playlist-read-collaborative',
        }),
    ],
};

const authHandler = (req, res) => NextAuth(req, res, authOptions);

export default authHandler;