import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'PDF Interactive Embedder — Embed Games, Forms & Widgets into PDFs',
  description: 'Drag-and-drop tool to add interactive elements like forms, games, and widgets to PDFs. No complex programming required. Perfect for marketing teams, educators, and consultants.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="7995cfb8-b6a1-4a43-897a-21a298f2d51c"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
