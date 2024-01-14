import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'



export const metadata: Metadata = {
  title: 'Explore Mumbai Delicacies',
  description: "Embark on a culinary exploration with MumBite, your go-to guide for discovering the authentic flavors of Mumbai's bustling streets. From iconic street-side snacks to hidden gems, MumBite curates the city's gastronomic treasures. Join us on a mouthwatering journey through vivid descriptions, insightful recommendations, and immersive food experiences. Uncover the essence of Mumbai's culinary scene, one delicious bite at a time!",
  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel='icon' href='/favicon.ico' />
      </head>
      <body>
        <Navbar/>
        <main className='relative overflow-hidden'>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
