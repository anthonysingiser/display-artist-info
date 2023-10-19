import React from "react";
import { useSession, signIn, signOut } from "next-auth/react"

export default function Page() {
  const session = useSession()

  return (
    <>
      {!!session?.data ? 
        <span onClick = {
          () => signIn('spotify')
          }> Sign in with Spotify </span>
      : 
        <span onClick = {
          () => signOut() 
          }> Sign out </span>
      }
    </>
  )
}