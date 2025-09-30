import type { Metadata } from 'next'
import { Orbitron, Rajdhani, Source_Code_Pro } from 'next/font/google'
import './globals.css'

const orbitron = Orbitron({ 
  subsets: ['latin'],
  variable: '--font-orbitron',
  display: 'swap',
})

const rajdhani = Rajdhani({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-rajdhani',
  display: 'swap',
})

const sourceCodePro = Source_Code_Pro({ 
  subsets: ['latin'],
  variable: '--font-source-code-pro',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'SleeperScan - Intelligence & Analytics Dashboard',
  description: 'Real-time protocol monitoring and narrative tension analysis',
  keywords: ['intelligence', 'analytics', 'protocol', 'monitoring', 'cybersecurity'],
  authors: [{ name: 'SleeperScan Team' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${orbitron.variable} ${rajdhani.variable} ${sourceCodePro.variable} font-body`}>
        <div className="min-h-screen cyber-grid">
          {children}
        </div>
      </body>
    </html>
  )
}