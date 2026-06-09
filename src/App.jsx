import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Progress from './components/Progress'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'
import './styles/global.css'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Progress />
        <Services />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}
