"use client"

import { SessionProvider } from 'next-auth/react'

function AuthContext({ children }) {
    return (
        <SessionProvider session={session}>
            {children}
        </SessionProvider>
    )
}

module.exports = AuthContext;