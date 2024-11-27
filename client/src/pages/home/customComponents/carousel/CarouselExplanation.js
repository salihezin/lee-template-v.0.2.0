const CarouselExplanation = ({ explanation }) => {
  return (
    <>
      <p className="quote-classic__text call-subtitle_text not-animated"
        data-caption-animate="fadeInUpSmall" data-caption-delay={200} >
        {explanation}
        <span className="group-item" />
      </p>
    </>
  );
}

export default CarouselExplanation;
