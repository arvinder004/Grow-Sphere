import React from 'react'
import Aos from 'aos'
import { useEffect,useState } from 'react'
import './index.css'
import { Banner } from './components/Banner'


function App() {
  const [orderPopup , setOrderPopup] = useState(fales)

  const handleOrderPopup = () =>{
    setOrderPopup(!orderPopup);
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
     <div className='bg-white dark:bg-gray-900 dark:text-white duration-200'>
     <Banner></Banner>
     </div>
    </>
  )
}

export default App
