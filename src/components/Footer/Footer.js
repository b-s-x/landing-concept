import React from 'react'
import footer from './footer.module.scss'

export const Footer = () => {
  return (
    <a
      href="https://github.com/b-s-x/landing-concept"
      target="_blank"
      rel="noreferrer"
      className={footer.copyright}
    >
      2021 by bsx_mars
    </a>
  )
}