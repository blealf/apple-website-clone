import React, { useState, useRef, useEffect } from 'react'
import { AiFillApple } from 'react-icons/ai'
import { BiSearch } from 'react-icons/bi'
import { BsBag } from 'react-icons/bs'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import { VscChromeClose } from 'react-icons/vsc'
import '../../assets/styles/header.scss'

const Header = () => {
  const [showMenu, setShowMenu] = useState(false)

  const navItems = [
    { name: 'Store' },
    { name: 'Mac' },
    { name: 'iPad' },
    { name: 'iPhone' },
    { name: 'Watch' },
    { name: 'AirPods' },
    { name: 'TV & Home' },
    { name: 'Only on Apple' },
    { name: 'Accessories' },
    { name: 'Support' },
  ]

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 834) {
        setShowMenu(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  return (
    <nav className="navbar">
      <div  className={`mobile-menu ${showMenu ? 'open' : ''}`}>
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
        { showMenu ? <VscChromeClose className="menu-icon" onClick={() => setShowMenu(false)}/> 
          : <HiOutlineMenuAlt4 className="menu-icon" onClick={() => setShowMenu(true)}/> 
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
          style={{ opacity: showMenu ? '0' : '1' }}
        >
        <BsBag className="cart-icon"/>
        </li>
      </ul>
    </nav>
  )
}

export default Header
