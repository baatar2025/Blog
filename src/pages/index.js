import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useState,useEffect } from 'react'
import { Articles } from '@/components/Articles'
import { Nav } from '@/components/Nav'
import { Trending } from '@/components/trend/Trending'
import { Allpost } from '@/components/allpost/Allpost'
import { Footer } from '@/components/Footer'
import { Usereff } from './Usereff'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className=''>
      <div className=''>
        {/* <Usereff/> */}
       <Nav/>
       <Trending/>
       <Allpost/>
       <Footer/>
      </div>
    </main>
  )
}
