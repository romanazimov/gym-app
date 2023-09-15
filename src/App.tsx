import './App.css'
import Home from './sections/Home.tsx'
import Nav from './sections/Nav.tsx'
import Advantages from './sections/Advantages.tsx'
import Membership from './sections/Membership.tsx'
import About from './sections/About.tsx'
import Team from './sections/Team.tsx'
import Footer from './sections/Footer.tsx'

function App() {
  return (
    <>
      <Nav/>
      <Home/>
      <Advantages/>
      <Membership/>
      <About/>
      <Team/>
      <Footer/>
    </>
  )
}

export default App
