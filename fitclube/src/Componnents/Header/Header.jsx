import React, { useState } from 'react'
import './Header.css'
import logo from '../../assets/logo.png'
import bars from '../../assets/bars.png'
import { Link } from 'react-scroll'

export const Header = () => {

  const mobile = window.innerWidth<=768 ? true:false;
  const [menuOpened, setMenuOpened] = useState(false);
  return (
    <div className='header'>
      <img className='logo' src={logo} alt="" />
      {menuOpened === false && mobile===true ? (
        <div
          style={{
            backgroundColor: "var(--appColor)",
            padding: "0.5rem",
            borderRadius: "5px"
          }

          
          }
          onClick = {() => setMenuOpened(true)}
        >
          <img src={bars} alt=""  style={{width: '1.5rem', height: '1.5rem'}}/>
        </div>
      ):(
        <ul className='header-menu'>
          <li>
            <Link
            onClick={()=> setMenuOpened(false)}
            to='Hero'
            span={true}
            smooth={true}
            >Home</Link>
            </li>
          <li>
            <Link
            onClick={()=> setMenuOpened(false)}
            to='program'
            span={true}
            smooth={true}
            >Programs</Link>
            </li>
          <li>
            <Link
            onClick={()=> setMenuOpened(false)}
            to='Reasons'
            span={true}
            smooth={true}
            >Why Us</Link>
            </li>
          <li>
            <Link
            onClick={()=> setMenuOpened(false)}
            to='plan'
            span={true}
            smooth={true}
            >
            Plans
            </Link>
          </li>
          <li >
            <Link
            onClick={()=> setMenuOpened(false)}
            to='Testimonials'
            span={true}
            smooth={true}
            >Testimoials</Link></li>
        </ul>
      )}
      
    </div>
  )
}
