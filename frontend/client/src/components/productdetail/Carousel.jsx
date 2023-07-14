import { useState, useEffect } from "react";

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
    <div className="flex w-100 box-border">
      <div className="w-1/6">
        {images?.slice(0, 7).map((img, i) => (
          <div className="w-auto flex justify-center items-center" key={i}>
            <img
              src={img}
              alt={`Image - ${i}`}
              className="w-16 h-16 object-contain p-2 m-2 cursor-pointer rounded border border-grey hover:border-ligthblue"
              onMouseOver={() => changeImg(i)}
            />
          </div>
        ))}
      </div>
      <div className="w-5/6 flex justify-center items-center">
        {RenderizarImg(images, indexImg)}
      </div>
    </div>
  );
};
export default Carousel;
