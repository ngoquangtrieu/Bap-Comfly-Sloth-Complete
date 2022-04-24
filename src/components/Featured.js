import { context } from "../context/Context";
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/cssComponents/Featured.css";

function Featured() {
  const { state } = useContext(context);
  const { products } = state;
  const featureds = [];
  
  let j = 0;
  for (let i = 0; i < products.length; i++) {
    if (products[i].featured == true) {
      featureds[j] = products[i];
      j++;
    }
  }
  return (
    <>
      <>
        <div className="featured">
          <h1>Featured Products</h1>
          <div className="underline"></div>
          <ul className="featuredList">
            {featureds.slice(0, 3).map((featured) => (
              <li className="featuredIteam" key={featured.id}>
                <div className="featuredImg">
                  <img src={featured.image} />
                  <Link
                    to={`/products/${featured.id}`}
                    className="featuredSearch"
                  >
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </Link>
                </div>
                <div className="featuredInfor">
                  <span className="featuredText">{featured.name}</span>
                  <span className="featuredPrice">{featured.price / 100}</span>
                </div>
              </li>
            ))}
          </ul>
          <Link className="allProducts" to="/products">
            ALL PRODUCTS
          </Link>
        </div>
      </>
    </>
  );
}

export default Featured;
