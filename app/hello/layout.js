import '../globals.css'

export const metadata = {
  title: 'hello',
  description: 'dynamic hello route',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
