import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const Carousel = ({ images }) => {
  const [indexImg, setIndexImg] = useState(0);
  const changeImg = i => {
    setIndexImg(i);
  };

  const RenderizarImg = (images, indexImg) => {
    if (images && images.length > 0 && indexImg >= 0 && indexImg < images.length) {
      return <img className="max-h-96" src={images[indexImg]} />;
    } else {
      return null;
    }
  };

  useEffect(() => {
    RenderizarImg;
  }, [indexImg]);

  return (
    <div className="flex flex-col-reverse md:flex-row w-full box-border ">
      <div className="flex md:flex-col w-full md:w-1/6 justify-between">
        {images?.slice(0, 5).map((img, i) => (
          <div className="w-full flex justify-center items-center mt-10 md:mt-0" key={i}>
            <img
              src={img}
              alt={`Image - ${i}`}
              className="w-20 h-20 object-contain p-2 m-2 cursor-pointer rounded border border-grey hover:border-ligthblue"
              onMouseOver={() => changeImg(i)}
            />
          </div>
        ))}
      </div>
      <div className="w-full flex justify-center items-center">
        {RenderizarImg(images, indexImg)}
      </div>
    </div>
  );
};
export default Carousel;

Carousel.propTypes = {
  images: PropTypes.array.isRequired
};
