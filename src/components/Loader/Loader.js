import React, { useEffect } from 'react'
import { ReactComponent as Square } from '../../images/stop.svg'
import { animateLoader } from '../../utils/animate'
import loader from './loader.module.scss'

export const Loader = () => {

  useEffect(() => {
    animateLoader(
      loader.loader__item,
      loader.loader__overlay
    )
  }, [])

  return (
    <div className={loader.loader__container}>
      <div className={loader.loader__overlay}></div>

      <div className={loader.loader__item}>
        <Square className={loader.squareOne  + ' ' + loader.square} />
        <Square className={loader.squareTwo + ' ' + loader.square} />
      </div>
    </div>
  )
}