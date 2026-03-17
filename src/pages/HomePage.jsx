import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import DeveloperCard from '../components/DeveloperCard'
import TrustSection from '../components/TrustSection'
import Footer from '../components/Footer'

const HomePage = () => {
  return (
    <>
      <div className='min-h-screen bg-[#101622]' 
            style={{ 
            backgroundImage: 'radial-gradient(#1e293b 1px, transparent 1px)', 
            backgroundSize: '24px 24px' 
          }}>
        <Navbar />
        <Hero />
        <DeveloperCard />
        <TrustSection />
        <Footer />
      </div>
    </>
  )
}

export default HomePage
