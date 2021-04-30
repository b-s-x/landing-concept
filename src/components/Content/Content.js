import React, { useEffect } from 'react'
import { animateContent } from '../../utils/animate'
import content from './content.module.scss'

export const Content = () => {
  useEffect(() => {
    animateContent(
      content.content__title,
      content.text1,
      content.text2,
      content.one,
      content.two,
      content.media__item
    )
  }, [])

  return (
    <div className={content.content}>
      <div className={content.content__title} >
        <span className={content.content__title__item}> The connected world</span>
      </div>

      <div className={content.content__text}>
        <div className={content.text + ' ' + content.text1}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Tempore mollitia velit asperiores, quia corrupti ipsa non reiciendis
          cum libero atque? Inventore dolorum rem saepe tempore minima,
          magni iusto corporis doloremque.
        </div>

        <div className={content.text + ' ' + content.text2}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Nam asperiores excepturi repellendus quis alias illum autem.
        </div>
      </div>

      <div className={content.media}>
        <div className={content.btn__container}>
          <button className={content.btn__item} id={content.one}>LEARN MORE</button>
          <button className={content.btn__item} id={content.two}>BUY NOW</button>
        </div>

        <div className={content.media__container}>
          <div className={content.media__item}><ion-icon name="logo-facebook"></ion-icon></div>
          <div className={content.media__item}><ion-icon name="logo-instagram"></ion-icon></div>
          <div className={content.media__item}><ion-icon name="logo-twitter"></ion-icon></div>
          <div className={content.media__item}><ion-icon name="logo-youtube"></ion-icon></div>
        </div>
      </div>

    </div>
  )
}