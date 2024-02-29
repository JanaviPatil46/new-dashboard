import React from 'react'
import NavItems from './NavItems'
import { Link } from 'react-router-dom'
const NewNavbar = () => {
  return (
    <>
     <nav className='col-12' style={{border:'1px solid red'}}>
      <ul>
        {NavItems.map(item => (
          <li key={item.id}>
            <Link to={item.link}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
    </>
  )
}

export default NewNavbar