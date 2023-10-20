import AuthContext from '@/components/AuthProvider'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AuthContext>
        <main>
          <body>{children}</body>
        </main>
      </AuthContext>
    </html>
  )
}