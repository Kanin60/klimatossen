import './App.css'
import { Arrangement } from './component/content/Arrangement'
import { Bidrage } from './component/content/Bidrage'
import { Co2 } from './component/content/Co2'
import { Klima } from './component/content/Klima'
import { Quote } from './component/content/quote'
import { Footer } from './component/footer/Footer'
import { Header } from './component/header/Header'

function App() {

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js')
      .then(reg => console.log('service worker registered', reg))
      .catch(err => console.error('service worker not registered', err))
  }

  return (
    <>
      <Header />
      <Quote />
      <Co2 />
      <Klima />
      <Bidrage />
      <Arrangement />
      <Footer />
    </>
  )
}

export default App
