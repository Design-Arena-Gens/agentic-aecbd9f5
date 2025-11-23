export const metadata = {
  title: 'Modern Portrait - Digital Influencer',
  description: 'Contemporary portrait with professional aesthetic',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  )
}
