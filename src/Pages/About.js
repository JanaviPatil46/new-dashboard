import React from 'react'
import NewNavbar from '../navabr/NewNavbar'
import { Routes,Route } from 'react-router-dom'
import Contact from './Contact'
import Services from './Services'
import Product from './Product'
import './about.css'

const About = () => {
  return (
    <>
 <div className='content '>
            <NewNavbar/>
            <div className='content2'>
            <Routes>
            <Route path='/contact' element={<Contact/>}/>
            </Routes>
        
         </div>
          </div>
     

    </>

  )
}

export default About