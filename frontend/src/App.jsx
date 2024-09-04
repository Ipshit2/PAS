
import LandingPage from './pages/LandingPage.jsx'
import Signup from './pages/Signup.jsx'
import Login from './pages/Login.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Header from './components/Header'
import Footer from './components/Footer'
import { Route,Routes,} from "react-router-dom"
function App() {


  return (
    <>
      <Header/>
        
        <Routes>
        <Route path='/' element={<LandingPage />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
        
        </Routes>
       
      
      <Footer/> 
      
    </>
  )
}

export default App
