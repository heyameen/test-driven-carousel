import PropTypes from 'prop-types'
import styled from 'styled-components'

const Img = styled.img`
  object-fit: cover;
  width: 100%;
  height: ${(
    props // 1
  ) =>
    typeof props.imgHeight === 'number'
      ? `${props.imgHeight}px`
      : props.imgHeight};
`
const CarouselSlide = ({
  imgUrl,
  description,
  attribution,
  imgHeight,
  ...rest
}) => (
  <figure {...rest}>
    <Img src={imgUrl} imgHeight={imgHeight} />
    <figcaption>
      <strong>{description}</strong> {attribution}
    </figcaption>
  </figure>
)

CarouselSlide.propTypes = {
  Img: PropTypes.elementType,
  imgHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]), 
  imgUrl: PropTypes.string.isRequired,
  description: PropTypes.node.isRequired,
  attribution: PropTypes.node,
}

CarouselSlide.defaultProps = {
  imgHeight: 500
}


export default CarouselSlide;
