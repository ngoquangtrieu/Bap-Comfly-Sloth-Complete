import { context } from "../context/Context";
import { useContext } from "react";
import { Link } from "react-router-dom";
import "../css/cssComponents/ListView.css";

function ListView() {
  const { state } = useContext(context);
  const { products,isLoading } = state;
  return (
    <>
      <ul className="listViewList">
        {products.map((product) => (
          <li key={product.id} className="listViewIteam">
            <div className="listViewImg">
              <img className={`black ${isLoading ? "black" : null}`} src={product.image} />
            </div>
            <div className="listViewText">
              <h2>{product.name}</h2>
              <p>{product.price / 100}</p>
              <span>{product.description}</span>
              <Link to={`/products/${product.name}`}>Details</Link>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListView;
