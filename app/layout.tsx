import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Providers from './providers'
import NavBar from '@/components/navbar/NavBar'
import Container from '@/components/global/Container'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'oladapo blog',
  description:
    'A safe place to share my thoughts and emotions. Explore personal reflections, insights, and stories on my blog, built with Next.js and Tailwind CSS ',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <NavBar />
          <Container className="py-20">{children}</Container>
        </Providers>
      </body>
    </html>
  )
}
