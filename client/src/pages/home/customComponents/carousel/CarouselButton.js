const CarouselButton = ({ href, buttonLabel }) => {
  return (
    <>
      <a className="button button-lg button-primary not-animated"
        href={href} data-caption-animate="fadeInUpSmall" data-caption-delay={250}>
        {buttonLabel}
      </a>
    </>
  );
};

export default CarouselButton;
