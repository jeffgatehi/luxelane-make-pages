import Hero from './components/Hero'
import Heritage from './components/Heritage'
import Models from './components/Models'
import ImportKenya from './components/ImportKenya'
import BestCountry from './components/BestCountry'
import ImportVsBuy from './components/ImportVsBuy'
import CTA from './components/CTA'

// BrandBar is rendered inside Hero → MakePageHero
export default function App() {
  return (
    <main>
      <Hero />
        <Heritage />
        <Models />
        <ImportKenya />
        <BestCountry />
        <ImportVsBuy />
        <CTA />
    </main>
  )
}
