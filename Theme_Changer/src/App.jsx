
import './App.css'
import NavBar from './components/NavBar'
import { ThemeProvider } from './Context'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import Homepage from './pages/Homepage'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
 

  return (
    <>

    <ThemeProvider>
      <BrowserRouter>
        <NavBar/>
        <Routes>
           <Route path="/" element={<Homepage/>}/>
           <Route path="/about" element={<AboutPage/>}/>
           <Route path="/contact" element={<ContactPage/>}/>
        </Routes>
      </BrowserRouter>
      </ThemeProvider>
    </>
  )
}

export default App
