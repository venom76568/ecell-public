import Navbar from '@/components/Navbar'
import Initiatives from '@/components/Initiatives'
import Events from '@/components/Events'
import Landing from '@/components/Landing'
import About from '@/components/About'

export default function Home() {
  return (
    <div>
      <Navbar />
      <Landing />
      {/* <About />
      <Initiatives />
      <Events /> */}
    </div>
  )
}
