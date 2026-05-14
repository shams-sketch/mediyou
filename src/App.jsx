import Loader from './components/Loader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Specialities from './components/Specialities'
import WeightLoss from './components/WeightLoss'
import HowItWorks from './components/HowItWorks'
import WhyMediYou from './components/WhyMediYou'
import Insurance from './components/Insurance'
import Surgeons from './components/Surgeons'
import Reviews from './components/Reviews'
import CTABanner from './components/CTABanner'
import Cities from './components/Cities'
import Footer from './components/Footer'
import { PopupProvider } from './context/PopupContext'
import PopupModal from './components/PopupModal'

export default function App() {
  return (
    <PopupProvider>
      <Loader />
      <div className="announce">
        Free consultation + insurance support on every surgery — Call <strong>1800-XXX-XXXX</strong> · Mon–Sat 8am–8pm
      </div>
      <Navbar />
      <Hero />
      <Stats />
      <Specialities />
      <WeightLoss />
      <HowItWorks />
      <WhyMediYou />
      <Insurance />
      <Surgeons />
      <Reviews />
      <CTABanner />
      <Cities />
      <Footer />
      <PopupModal />
    </PopupProvider>
  )
}
