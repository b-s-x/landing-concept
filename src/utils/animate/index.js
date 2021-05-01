import gsap, { TimelineLite, Expo, Linear, Power3 } from 'gsap'

export const animateNavBar = (
  logo,
  contact,
  menu
) => {

  gsap.from(`.${logo}`, {
    delay: 5,
    duration: 3,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
  })
  gsap.from(`.${contact}`, {
    duration: 3,
    delay: 5,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
  })
  gsap.from(`.${menu}`, {
    duration: 3,
    delay: 5,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
  });
}

export const animateLoader = (
  item,
  overlay
) => {

  const line1 = new TimelineLite()
  const line2 = new TimelineLite()

  line1.to(`.${item}`, {
    delay: 3,
    duration: 3,
    x: 170,
    ease: Linear
  })
  .to(`.${item}`, {
    duration: 1,
    ease: Linear,
    fill: 'black',
    opacity: 0.7
  })

  line2.to(`.${overlay}`, {
    delay: 4,
    duration: 4,
    top: "-110%",
    ease: Expo.easeInOut
  });
}

export const animateContent = (
  contentTitle,
  text1,
  text2,
  one,
  two,
  mediaItem
) => {
  const line = new TimelineLite()
  const line2 = new TimelineLite()

  line.from(`.${contentTitle}`, {
    delay: 5,
    duration: 3,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
  })
  .from(`.${text1}`, {
    duration: 2,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
  }, "-=1")
  .from(`.${text2}`, {
    delay: 1,
    duration: 2,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
  }, "-=2")
  .from(`#${one}`, {
    delay: 1,
    duration: 2,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
  }, "-=2")
  .from(`#${two}`, {
    duration: 2,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
  }, "-=2")

  line2.staggerFrom(`.${mediaItem}`, 1, {
    delay: 10,
    opacity: 0,
    stagger: 0.25,
    y: 20,
    ease: Power3.easeInOut
  });
}
