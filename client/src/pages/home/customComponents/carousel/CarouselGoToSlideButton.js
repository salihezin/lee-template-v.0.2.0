const CarouselGoToSlideButton = ({ index, current }) => {
  return (
    <>
      <span
        className="swiper-pagination-bullet swiper-pagination-bullet-active"
        tabIndex={0}
        role="button"
        aria-label={`Go to slide ${index}`}
        {...current && { 'aria-current': true }}
      />
      </>
  );
}

export default CarouselGoToSlideButton;
