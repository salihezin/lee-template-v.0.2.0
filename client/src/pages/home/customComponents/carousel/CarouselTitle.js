const CarouselTitle = ({ title }) => {
  return (
    <>
      <h1 data-caption-animate="fadeInUpSmall" className="not-animated">
        {title}
      </h1>
    </>
  );
}

export default CarouselTitle;
