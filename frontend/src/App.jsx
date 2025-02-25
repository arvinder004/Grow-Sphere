import React from 'react'
import { Navbar } from './components/Navbar'
import Aos from 'aos'
import { useEffect,useState } from 'react'
import './index.css'


function App() {
  const [orderPopup , setOrderPopup] = useState(fales)

  const handleOrderPopup = () =>{
    setOrderPopup(!orderPopup)
  }

  useEffect(() =>{
    Aos.init({
      offset:100,
      duration: 800,
      easing: "ease-in-out-sine",
      delay: 100,     
    })
    Aos.refresh();
  },[])

  return (
    <>
     <div className='bg-white dark:bg-gray-900 dark:text-white duration-200'></div>
    </>
  )
}

export default App
