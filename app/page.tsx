'use client'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Landing from './landing'
import AboutEcell from './about'
const inter = Inter({ subsets: ['latin'] })
import InitAndEvents from './InitAndEvents'
export default function Home() {
  return (
    <div>
      <Landing/>
      <AboutEcell/>
      <InitAndEvents/>
    </div>
  )
}
