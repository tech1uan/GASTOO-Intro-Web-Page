import CoinField from './components/CoinField.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Features from './components/Features.jsx'
import Showcase from './components/Showcase.jsx'
import DeveloperCard from './components/DeveloperCard.jsx'
import Footer from './components/Footer.jsx'
import BackToTop from './components/BackToTop.jsx'
import MascotSection from './components/MascotSection.jsx'
import { navLinks, hero, features, showcaseSlots, stats, developer, footerLinks, pushNotification, mascotIntro, mascotBubbles } from './data/content.js'
import NotificationShowcase from './components/NotificationShowcase.jsx'
export default function App() {
  return (
    <>
      <div className="noise" aria-hidden="true" />
      <CoinField />
      <Navbar links={navLinks} />
      <Hero data={hero} />
      <Features items={features} />
      <MascotSection intro={mascotIntro} bubbles={mascotBubbles} />
      <Showcase slots={showcaseSlots} stats={stats} />
      <NotificationShowcase data={pushNotification} />
      <DeveloperCard dev={developer} />
      <Footer links={footerLinks} />
      <BackToTop />
    </>
  )
}
