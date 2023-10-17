import NextAuth from 'next-auth';
import SpotifyProvider from 'next-auth/providers/spotify';

const authOptions = {
    providers: [
        SpotifyProvider({
            clientId: process.env.SPOTIFY_CLIENT_ID,
            clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
        }),
    ],
};

const authHandler = (req, res) => NextAuth(req, res, authOptions);

export default authHandler;