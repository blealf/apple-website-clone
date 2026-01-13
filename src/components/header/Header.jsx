import React, { useState, useRef, useEffect } from 'react'
import { AiFillApple } from 'react-icons/ai'
import { BiSearch } from 'react-icons/bi'
import { BsBag } from 'react-icons/bs'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import { VscChromeClose } from 'react-icons/vsc'
import '../../assets/styles/header.scss'

const Header = () => {
  const [showMenu, setShowMenu] = useState(true)
  
  useEffect(() => {
    const resetMenu = () => {
      if (window.innerWidth >= 834) {
        setShowMenu(true)
        mobileRef.current.style.top = '-100vh'
      } else {
        setShowMenu(false)
        mobileRef.current.style.top = '0'
      }
    }
    window.addEventListener('resize', resetMenu)
      
    return () => {
      window.removeEventListener('resize', resetMenu)
    }
  }, [])
  
  const mobileRef = useRef()
  const navItems = [
    { name: 'Store', path: ''},
    { name: 'Mac', path: ''},
    { name: 'iPad', path: ''},
    { name: 'iPhone', path: ''},
    { name: 'Watch', path: ''},
    { name: 'AirPods', path: ''},
    { name: 'TV & Home', path: ''},
    { name: 'Only on Apple', path: ''},
    { name: 'Acessories', path: ''},
    { name: 'Support', path: ''}
  ]
  
  const toggleMenu = () => {
    setShowMenu(!showMenu)
    if (showMenu) {
      mobileRef.current.style.top = '0'
      mobileRef.current.style.background = '#000000'
    } else {
      mobileRef.current.style.top = '-100vh'
      mobileRef.current.style.background = '#333333'
    }
  }
  return (
    <nav className="navbar">
      <div className="mobile-menu" ref={mobileRef}>
        <div className="mobile-nav-content">
        
          <input
            type="search" 
            className="search-box" 
            placeholder="Search apple.com"
          />
        </div>
        <div className="divider"></div>
        <div className="mobile-nav-content">
          { navItems.map((item) => <p key={item.name}>{item.name}</p>)}         
        </div>
      </div>
      <ul className="navbar__wrapper">
        <li className="navbar__item menu icons">
        { showMenu ? <HiOutlineMenuAlt4 className="menu-icon" onClick={toggleMenu}/>
          : <VscChromeClose className="menu-icon" onClick={toggleMenu}/>
        }
        </li>
        <li className="navbar__item logo icons">
        <AiFillApple className="apple-icon"/>
        </li>
        { navItems.map((item) => <li key={item.name} className="navbar__item">{item.name}</li>)}
        <li className="navbar__item">
        <BiSearch className="search-icon"/>
        </li>
        <li 
            className="navbar__item cart icons"
            style={{ opacity: showMenu ? '1' : '0' }}
        >
        <BsBag className="cart-icon"/>
        </li>
      </ul>
    </nav>
  )
}

export default Header
