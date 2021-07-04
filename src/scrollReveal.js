import ScrollReveal from 'scrollreveal'
export default ScrollReveal()

export const defaultScrollTop = (elementRef, sr) => {
  const config = {
    origin: 'top',
    duration: 900,
    delay: 0,
    distance: '80px',
    scale: 1,
    easing: 'ease',
    reset: true,
  }

  sr.reveal(elementRef, config)
}

export const defaultScrollBottom = (elementRef, sr) => {
  const config = {
    origin: 'bottom',
    duration: 700,
    delay: 100,
    distance: '50px',
    scale: 1,
    easing: 'ease',
    reset: true,
  }

  sr.reveal(elementRef, config)
}

export const defaultScrollRight = (elementRef, sr) => {
  const config = {
    origin: 'right',
    duration: 700,
    delay: 100,
    distance: '50px',
    scale: 1,
    easing: 'ease',
    reset: true,
  }

  sr.reveal(elementRef, config)
}

export const defaultScrollLeft = (elementRef, sr) => {
  const config = {
    origin: 'left',
    duration: 700,
    delay: 100,
    distance: '50px',
    scale: 1,
    easing: 'ease',
    reset: true,
  }

  sr.reveal(elementRef, config)
}
