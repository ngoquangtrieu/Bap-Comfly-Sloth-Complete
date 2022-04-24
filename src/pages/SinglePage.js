import { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { single_url } from "../constants/constants";
import { context } from "../context/Context";
import Address from "../components/Address";
import Loading from "../components/Loading";
import ProductImage from "../components/ProductImage";
import "../css/cssComponents/SinglePage.css";
import AddToCart from "../components/AddToCart";

function SinglePage() {
  const { state, getSingleAPI } = useContext(context);

  const { singleProducts, isLoadingSingle } = state;

  const { id } = useParams();
  useEffect(() => {
    getSingleAPI(`${single_url}${id}`);
  }, [id]);

  if (isLoadingSingle) {
    return (
      <>
        <Loading />
      </>
    );
  }

  return (
    <>
      <Address title={singleProducts.name} />
      <div className="singleProducts">
        <Link className="backToProducts" to="/products">
          BACK TO PRODUCTS
        </Link>
        <div className="infor">
          <div className="inforImg">
            <ProductImage images={singleProducts.images} />
          </div>
          <div className="inforText">
            <h2 className="inforTextName">{singleProducts.name}</h2>
            <span className="inforTextStar">
              {singleProducts.stars} <i className="fa-solid fa-star"></i> (
              {singleProducts.reviews} Reviewers)
            </span>
            <h5 className="inforTextPrice">
              {"$"}
              {singleProducts.price / 100}
            </h5>
            <p className="inforTextDescription">{singleProducts.description}</p>
            <p className="inforTextAvailable">
              <span>Available :</span>
              {singleProducts.stock > 0 ? "In stock" : "Out of stock"}
            </p>
            <p className="inforTextSku">
              <span>SKU :</span>
              {singleProducts.id}
            </p>
            <p className="inforTextBrand">
              <span>Brand :</span>
              {singleProducts.company}
            </p>
            <hr />
            <AddToCart
              colors={singleProducts.colors}
              name={singleProducts.name}
              price={singleProducts.price}
              image={singleProducts.images}
              id={singleProducts.id}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default SinglePage;
