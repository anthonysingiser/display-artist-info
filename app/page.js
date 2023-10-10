'use client'

import FetchArtist from "./components/FetchArtist"

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <p>This is the home page</p>
      <FetchArtist />
    </div>
  )
}