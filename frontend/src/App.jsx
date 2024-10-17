
import Header from './components/Header'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'
import {Toaster} from 'react-hot-toast'

function App() {


  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/> 
      <Toaster position="top-center" reverseOrder={false}/>
      
    </>
  )
}

export default App
