import React, { useEffect, useState } from 'react'
import Loader from './Loader'
import Header from './Header';
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
          <Header/>
        </>

      }
      
    </>
  )
}

export default App