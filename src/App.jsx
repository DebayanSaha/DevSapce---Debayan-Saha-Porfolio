import React, { useState } from 'react'
import Page1 from './pages/Page1'
import Header from './components/Header'
import Page2 from './pages/Page2'
import Page3 from './pages/Page3'
import Page4 from './pages/Page4'
import Page5 from './pages/Page5'
import Page6 from './pages/Page6'
import Loader from './components/Loader'

const App = () => {
  const[isLoading,setIsLoading]=useState(true)

  return (
    <>
      <div>{isLoading ?
        (
          <Loader onComplete={()=>setIsLoading(false)}/>
        ):
        (
          <div id='main'>
            <Header />
            <Page1 />
            <Page2 />
            <Page3 />
            <Page5 />
            <Page4 />
            <Page6 />
          </div>
        )}
      </div>
    </>
  )
}

export default App 