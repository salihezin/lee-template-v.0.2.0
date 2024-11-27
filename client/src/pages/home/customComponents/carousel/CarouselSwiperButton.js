const CarouselSwiperButton = ({prev}) => {
  return (
    <div
      className={`swiper-button-${prev ? 'prev' : 'next'}`}
      tabIndex={0}
      role="button"
      // aria-label="Previous slide"
      aria-label={(prev ? 'Previous' : 'Next') +  ' slide'}
      aria-controls="swiper-wrapper-24137effdb229f9c"
    />
  );
}

export default CarouselSwiperButton;
