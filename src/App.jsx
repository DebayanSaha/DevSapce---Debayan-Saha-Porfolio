import React, { useState } from 'react'
import Page1 from './pages/Intro-Page1'
import Header from './components/common/Header'
import Page2 from './pages/Impact-Text-Page2'
import Page3 from './pages/Aboutme-Page3'
import Page4 from './pages/Myworks-Page5'
import Page5 from './pages/Myimpact-Page4'
import Page6 from './pages/Contactme-Page6'
import Loader from './components/loading-animation/Loader'
import Stairs from './components/common/Stairs'
import Page0 from './pages/Landing-Page0'
import NavBar from './components/Navigation/NavBar'

const App = () => {
  const[isLoading,setIsLoading]=useState(true)
  const [stairs, setStairs] = useState(false)

  const handleOnComplete=()=>{
    setIsLoading(false)
    setTimeout(()=>setStairs(true))
    
  }
  return (
    <>
      <div>{isLoading ?
        (
          <Loader onComplete={handleOnComplete}/>
        ):
        (
          <>
            <Header />
            <Stairs trigger={stairs}>
              <div id='main'>
                <Page0 />
                <Page1 />
                <Page2 />
                <Page3 />
                <Page5 />
                <Page4 />
                <Page6 />
              </div>
            </Stairs>
          </>
          
        )}
      </div>
    </>
  )
}

export default App 