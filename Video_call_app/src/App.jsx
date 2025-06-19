
import './App.css'
import {Routes,Route,} from 'react-router-dom'
import HomePage from './components/HomePage'
import CallPage from './components/CallPage'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/callpage/:roomId' element={<CallPage/>}/>
      </Routes>
    </>
  )
}

export default App
