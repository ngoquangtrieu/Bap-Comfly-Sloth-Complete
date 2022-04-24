import { Category, Company, Colors } from "../constants/constants";
import View from "./View";
import { context } from "../context/Context";
import { useContext } from "react";
import "../css/cssComponents/ProductsContent.css";

function ProductsContent() {
  const {
    state,
    gridViewAction,
    changeSearch,
    changeSort,
    changeFillter,
    removeFilter,
  } = useContext(context);

  const { gridView, search, fillter, found } = state;

  const { category, company, colors, price, freeShip, maxPrice } = fillter;

  const { fillterProducts } = state;
  let newColors = fillterProducts.map((item) => item.colors).flat();
  newColors = new Set(newColors);
  newColors = ["All", ...newColors];

  return (
    <>
      <div className="productsContent">
        <div className="productsContentNavbar">
          <div className="search">
            <input
              placeholder="Search"
              value={search}
              onChange={(e) => changeSearch(e.target.value)}
            />
          </div>
          <div className="category">
            <ul className="categoryList">
              <p>Category</p>
              {Category.map((item) => (
                <li
                  key={item}
                  className="categoryIteam"
                  onClick={(e) => changeFillter(e.target.name, "category")}
                >
                  <button
                    className={`${item === category ? "active" : null}`}
                    name={item}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="company">
            <p>Company</p>
            <select
              onChange={(e) => changeFillter(e.target.value, "company")}
              value={company}
            >
              {Company.map((company) => (
                <option key={company} value={company}>
                  {company}
                </option>
              ))}
            </select>
          </div>
          <div className="colors">
            <p>Colors</p>
            <ul className="colorsList">
              {newColors.map((colorsItem) => (
                <li
                  key={colorsItem}
                  className={`colorIteam ${
                    colorsItem === colors ? "activeColor" : null
                  }`}
                  style={{ background: `${colorsItem}` , opacity:'0.6' }}
                  onClick={(e) => changeFillter(e.target.value, "colors")}
                >
                  <button value={colorsItem}>{colorsItem}</button>
                </li>
              ))}
            </ul>
          </div>
          <div className="price">
            <p>Price</p>
            <div className="priceText">$ {price / 100}</div>
            <input
              onChange={(e) => changeFillter(e.target.value, "price")}
              min="0"
              value={price}
              max={maxPrice}
              type="range"
            />
          </div>
          <div className="freeShip">
            <label htmlFor="shipping">Free Shipping</label>
            <input
              id="shipping"
              type="checkbox"
              onChange={(e) => changeFillter(e.target.checked, "freeShip")}
              checked={freeShip}
            />
          </div>
          <button className="clearFilter" onClick={removeFilter}>
            Clear Filters
          </button>
        </div>
        <div className="productsContentShow">
          <div className="control">
            <div
              onClick={gridViewAction}
              className={`controlIcon1 ${gridView ? "active" : "alo"}`}
            >
              <i className="fa-solid fa-table-cells"></i>
            </div>
            <div
              onClick={gridViewAction}
              className={`controlIcon2 ${!gridView ? "active" : "alo"}`}
            >
              <i className="fa-solid fa-bars"></i>
            </div>
            <span>{found} Products Found</span>
            <div className="controlVector"></div>
            <label htmlFor="sortBy">Sort By</label>
            <select id="sortBy" onChange={(e) => changeSort(e.target.value)}>
              <option value="nameAZ">Name(A - Z)</option>
              <option value="nameZA">Name(Z - A)</option>
              <option value="priceLowest">Price(Lowest)</option>
              <option value="priceHighest">Price(Highest)</option>
            </select>
          </div>
          <div className="show">
            <View gridView={gridView} />
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductsContent;
