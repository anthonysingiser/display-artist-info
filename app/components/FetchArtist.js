import spotifyApi from "../lib/spotify";
import { useState } from "react";

function FetchArtist() {
    const [searchTerm, setSearchTerm] = useState('')
    const [searchResults, setSearchResults] = useState([])
    const [albums, setAlbums] = useState([])

    const handleSearch = async() => {
        const { artists } = await spotifyApi.search(searchTerm, ['artist'])
        setSearchResults(artists.items)
    }

    const handleArtistClick = async (artist) => {
        // Get the artist's albums
        const response = await spotifyApi.getArtistAlbums(artist.id)
        setAlbums(response.items)
    }

    return (
        <div>
            <input type="text" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
            <button onClick={handleSearch}>Search</button>
            <ul>
                {searchResults.map(artist => (
                    <li key={artist.id} onClick={() => handleArtistClick(artist)}>{artist.name}</li>
                ))}
            </ul>
            <ul>
                {albums.map(album => (
                    <li key={album.id}>{album.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default FetchArtist;