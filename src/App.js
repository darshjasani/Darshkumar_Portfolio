import React, { useEffect, useState } from 'react'
import Loader from './Loader'
import Header from './Header';
import Navbar  from './Navbar';
import Contact from './Contact';
import Footer from './Footer';
import './App.css'


function App() {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() =>{
    const timer = setInterval(()=>{
      setShowLoader(false);
    }, 3500);

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {
        showLoader ? <Loader/>
         :
        <>
          <Navbar/>
          <Header/>
          <Contact/>
          <Footer/>
        </>

      }
      
    </>
  )
}

export default App