import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Landing from './pages/Landing/Landing'
import Login from './pages/Login/Login'
import Navbar from './component/Navbar/Navbar'
import Footer from './component/Footer/Footer'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
            <>
              <Navbar />
              <Landing />
              <Footer />
            </> 
          } />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
