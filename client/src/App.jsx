import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Landing from './pages/Landing/Landing'
import Login from './pages/Login/Login'
import Signup from './pages/Signup/Signup'
import Navbar from './component/Navbar/Navbar'
import Footer from './component/Footer/Footer'
import './App.css'
import WorkspacePage from './pages/WorkspacePage/WorkspacePage'

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
        <Route path="/signup" element={<Signup />} />
        <Route path="/workspacePage" element={<WorkspacePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
