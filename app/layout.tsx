import type { Metadata, Viewport } from 'next'
import { Space_Grotesk, IBM_Plex_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { OrganizationJsonLd, ProfessionalServiceJsonLd, WebsiteJsonLd } from '@/components/json-ld'
import './globals.css'

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" })
const ibmPlexMono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-ibm-plex-mono" })

export const metadata: Metadata = {
  metadataBase: new URL('https://www.rank-4.com'),
  title: 'Rank4 | Post-Modern Technology Solutions',
  description: 'Post-modern technology solutions specializing in high-end FPGA, RFSoC, and Digital Signal Processing (DSP) design services. Precision-engineered solutions for demanding applications.',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Rank4',
    title: 'Rank4 | Post-Modern Technology Solutions',
    description: 'Post-modern technology solutions specializing in high-end FPGA, RFSoC, and Digital Signal Processing (DSP) design services.',
    images: [
      {
        url: '/images/hero-bg.jpg',
        width: 1200,
        height: 630,
        alt: 'Rank4 - FPGA and RFSoC Design Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rank4 | Post-Modern Technology Solutions',
    description: 'Post-modern technology solutions specializing in high-end FPGA, RFSoC, and Digital Signal Processing (DSP) design services.',
    images: ['/images/hero-bg.jpg'],
  },
  alternates: {
    canonical: 'https://www.rank-4.com',
  },
}

export const viewport: Viewport = {
  themeColor: '#211103',
  viewportFit: 'cover',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <OrganizationJsonLd />
        <ProfessionalServiceJsonLd />
        <WebsiteJsonLd />
      </head>
      <body className={`${spaceGrotesk.variable} ${ibmPlexMono.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
