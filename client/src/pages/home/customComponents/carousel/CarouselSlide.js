import React from "react";
import CarouselTitle from './CarouselTitle';
import CarouselExplanation from './CarouselExplanation';
import CarouselButton from './CarouselButton';

const CarouselSlide = ({
  className = "",
  role = "group",
  ariaLabel,
  carouselData
}) => {
  return (
    <div
      className={`swiper-slide bg-image-dark ${className}`}
      data-slide-bg={carouselData.imageUrl}
      style={{
        width: 1570,
        backgroundImage: `url("${carouselData.imageUrl}")`
      }}
      role={role}
      aria-label={ariaLabel}
    >
      <div className="swiper-slide-caption">
        <div className="container text-start">
          <div className="row justify-content-center">
            <div className="col-md-10 col-sm-12">
              <CarouselTitle title={carouselData.title} />
              <CarouselExplanation explanation={carouselData.explanation} />
              <CarouselButton href={carouselData.href} buttonLabel={carouselData.buttonLabel} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselSlide;
