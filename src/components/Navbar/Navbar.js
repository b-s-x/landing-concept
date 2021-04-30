import React, { useEffect } from 'react'
import { ReactComponent as Clubs } from '../../images/clubs.svg'
import { animateNavBar } from '../../utils/animate'
import navbar from './navbar.module.scss'

export const Navbar = () => {

  useEffect(() => {
    animateNavBar(
      navbar.logo,
      navbar.navbar__contact,
      navbar.navbar__menu
    )
  }, [])

  return (
    <div className={navbar.navbar}>
      <Clubs className={navbar.logo} />

      <div className={navbar.navbar__box}>
        <div className={navbar.navbar__contact}>GET IN TOUCH</div>
        <div className={navbar.navbar__menu}>MENU</div>
      </div>
    </div>
  )
}