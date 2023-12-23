import { Inter } from 'next/font/google'
import './globals.css'
import StarsCanvas from '@/components/StarBackground'
import light_theme from '@/public/svg/light_theme.svg'
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: '< RITIK JAISWAL />',
  description: 'Full Stack Developer || Software Engineeer',
}

export default function RootLayout({ children }) {
  return ( 
    <html lang="en">
      <body style={{fontFamily: 'Azonix'}} className='{inter.className}'>
      <StarsCanvas />
        {children}
      </body>
    </html>
  )
}
