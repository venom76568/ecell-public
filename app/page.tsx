'use client'
import Image from 'next/image'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import InitAndEvents from './InitAndEvents'
export default function Home() {
  return (
    <div>
      <InitAndEvents/>
    </div>
  )
}
