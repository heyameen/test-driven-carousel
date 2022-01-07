import React, { useState } from 'react'

import CarouselButton from './CarouselButton'
import CarouselSlide from './CarouselSlide'

class Carousel extends React.PureComponent {
  state = {
    slideIndex: 0,
  }

  handlePrevClick = () => {
    const { slides } = this.props
    this.setState(({ slideIndex }) => ({
      slideIndex: (slideIndex + slides.length - 1) % slides.length, // 1
    }))
  }

  handleNextClick = () => {
    const { slides } = this.props
    this.setState(({ slideIndex }) => ({
      slideIndex: (slideIndex + 1) % slides.length,
    }))
  }

  static defaultProps = {
      defaultImgHeight: CarouselSlide.defaultProps.imgHeight
  }

  render() {
    const { defaultImgHeight, slides, ...rest } = this.props
    return (
      <div {...rest}>
        <CarouselSlide {...slides[this.state.slideIndex]} imgHeight={defaultImgHeight}/>
        <CarouselButton data-action="prev" onClick={this.handlePrevClick}>
          Prev
        </CarouselButton>
        <CarouselButton data-action="next" onClick={this.handleNextClick}>
          Next
        </CarouselButton>
      </div>
    )
  }
}

export default Carousel
