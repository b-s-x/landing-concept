import React, { useEffect } from 'react'
import { Expo, TimelineLite } from 'gsap'
import './App.scss'

import { Loader } from './components/Loader/Loader'
import { Content } from './components/Content/Content'
import { Navbar } from './components/Navbar/Navbar'

export const App = () => {

  const line1 = new TimelineLite()
  const line2 = new TimelineLite()

  useEffect(() => {

    line1.from(".copyright", {
      delay: 2,
      duration: 3,
      opacity: 0,
      y: 20,
      ease: Expo.easeInOut
    });
  }, [])


  return (
    <div>
      <Navbar/>

      <div className="app__container">
        <Content className="app__content" />
        <Loader className="app__loader"/>
      </div>

      <div className="copyright">2021 by bsx_mars</div>
    </div>
  );
}