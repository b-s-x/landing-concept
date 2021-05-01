import React, { useEffect } from 'react'
import { Loader } from './components/Loader/Loader'
import { Content } from './components/Content/Content'
import { Navbar } from './components/Navbar/Navbar'
import { animateCopyright } from './utils/animate'
import './App.scss'

export const App = () => {

  useEffect(() => {
    animateCopyright("copyright")
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