import AuthProvider from '@/components/AuthProvider'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AuthProvider>
        <main>
          <body>{children}</body>
        </main>
      </AuthProvider>
    </html>
  )
}