import Navbar from '@/components/Navbar'
import Initiatives from '@/components/Initiatives'
import Events from '@/components/Events'
import Landing from '@/components/Landing'
import About from '@/components/About'
import Stats from '@/components/Stats'

export default function Home() {
  return (
    <div className=''>
      <Navbar />
      <Landing />
      <About />
      <Stats />
      {/* <Initiatives /> */}
      {/* <Events /> */}
    </div>
  )
}
