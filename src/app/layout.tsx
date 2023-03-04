'use client'

import { ChakraProvider } from '@chakra-ui/react'
import Footer from '../../components/Footer/Footer'
import Navbar from "../../components/Navbar/Navbar"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang='en'>
      <head />
      <body>
          <ChakraProvider>
            <Navbar />
            <div style={{ position: 'inherit', top: '60px'}}>
              {children}
            </div>
            <Footer />
          </ChakraProvider>
      </body>
    </html>
  )
}
