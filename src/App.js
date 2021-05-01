import React, { useEffect } from 'react'
import { Loader } from './components/Loader/Loader'
import { Content } from './components/Content/Content'
import { Navbar } from './components/Navbar/Navbar'
import { Footer } from './components/Footer/Footer'
import './App.scss'

export const App = () => {

  return (
    <div>
      <Navbar />

      <div className="app__container">
        <Content className="app__content" />
        <Loader className="app__loader" />
      </div>

      <Footer />
    </div>
  );
}