
import { Inter } from 'next/font/google'
import { Nav } from '@/components/Nav'
import { Trending } from '@/components/trend/Trending'
import { Allpost } from '@/components/allpost/Allpost'
import { Footer } from '@/components/Footer'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className=''>
      <div className=''>
       <Nav/>
       <Trending/>
       <Allpost/>
       <Footer/>
      </div>
    </main>
  )
}
