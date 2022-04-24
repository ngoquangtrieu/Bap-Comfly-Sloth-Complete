import { useContext } from "react";
import { context } from "../context/Context";
import "../css/cssComponents/ProductImage.css";

function ProductImage({ images = [[]] }) {
  const { state, changeImage } = useContext(context);
  const { indexImage } = state;
  return (
    <>
      <div className="imgMain">
        <img src={images[indexImage].url} />
      </div>
      <div className="listImg">
        {images.map((item, index) => {
          return (
            <img
              key={index}
              className={`${indexImage === index ? "borderImage" : null}`}
              onClick={() => changeImage(index)}
              src={item.url}
            />
          );
        })}
      </div>
    </>
  );
}

export default ProductImage;
