// 'use client'
// import { useState } from "react";

// function FetchArtist() {
//     const [artistName, setArtistName] = useState('')
//     const [artistList, setArtistLists] = useState([])

//     const handleSearch = async() => {
//         console.log(spotifyApi)
//         const { artists } = await spotifyApi.searchArtists(artistName)
//         setArtistLists(artists.items)
//     }

//     const handleArtistClick = async (artist) => {
//         // Get the Wikipedia page for the artist
//         const response = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${artist.name}`)
//         const data = await response.json()

//         // Display the artist's Wikipedia page summary
//         alert(data.extract)
//     }

//     return (
//         <div>
//             <input type="text" value={artistName} onChange={e => setArtistName(e.target.value)} />
//             <button onClick={handleSearch}>Search</button>
//             <ul>
//                 {artistList.map(artist => (
//                     <li key={artist.id} onClick={() => handleArtistClick(artist)}>{artist.name}</li>
//                 ))}
//             </ul>    
//         </div>
//     )
// }

// export default FetchArtist;