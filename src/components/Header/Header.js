import React from 'react'
import './Header.css'
import {Link} from '@mui/material'
import bell from '../../img/bell.svg'
import avatar from '../../img/Avatar.png'
function Header() {
  return (
      <div className='header'>

          <div className='header__icons'>
              <img className='notifications' src={bell} alt="" />
              <Link href='#'>
              <img className='profile' src={avatar} alt="" /></Link>
          </div>
      </div>
        
  )
}

export default Header