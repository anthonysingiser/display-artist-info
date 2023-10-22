"use client"

import { SessionProvider, useSession } from 'next-auth/react'

function AuthContext({ children, session }) {
  const { data: clientSession } = useSession()

  return (
    <>
      {children}
    </>
  )
}

export default function AuthProvider({ children }) {
  const { data: session } = useSession()

  return (
    <SessionProvider>
        <AuthContext session={session}>
          {children}
        </AuthContext>
    </SessionProvider>
  )
}