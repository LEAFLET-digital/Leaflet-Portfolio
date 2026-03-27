import { Hero } from './components/Hero'
import { CurrentLandscape } from './components/CurrentLandscape'
import { Paradigm } from './components/Paradigm'
import { Features } from './components/Features'
import { AgenticCapabilities } from './components/AgenticCapabilities'
import { Architecture } from './components/Architecture'
import { TechnicalViability } from './components/TechnicalViability'
import { Security } from './components/Security'
import { Roadmap } from './components/Roadmap'
import { Closing } from './components/Closing'
import { ReadyToPrompt } from './components/ReadyToPrompt'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-leaflet-dark">
      <Hero />
      <CurrentLandscape />
      <Paradigm />
      <Features />
      <AgenticCapabilities />
      <Architecture />
      <TechnicalViability />
      <Security />
      <Roadmap />
      <Closing />
      <ReadyToPrompt />
      {/* <ImageSources /> */}
      <Footer />
    </div>
  )
}

export default App
