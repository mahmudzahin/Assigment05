import './index.css'
import {Navbar} from  './compononts/Navbar/Navbar'
import MainSection from './compononts/MainSection/MainSection'
import Card from './compononts/Card/Card'
import Footer from './compononts/Footer/Footer'
function App() {
  return (
    <div>
      <Navbar/>
      <MainSection/>
      <Card/>
      <Footer/>
    </div>
  )
}

export default App