'use client'

import spotifyApi from "../lib/spotify";
import { useState } from "react";

function FetchArtist() {
    const [searchTerm, setSearchTerm] = useState('')
    const [searchResults, setSearchResults] = useState([])

    const handleSearch = async() => {
        const { artists } = await spotifyApi.search(searchTerm, ['artist'])
        setSearchResults(artists.items)
    }

    const handleArtistClick = async (artist) => {
        // Get the Wikipedia page for the artist
        const response = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${artist.name}`)
        const data = await response.json()

        // Display the artist's Wikipedia page summary
        alert(data.extract)
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
        </div>
    )
}

export default FetchArtist;