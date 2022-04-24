import React, { useReducer, useEffect } from "react";
import productReducer from "../reducers/productReducer";
import axios from "axios";
import {
  GRID_VIEW,
  CHANGE_SEARCH,
  CHANGE_SORT,
  LOADING,
  LOADING_SINGLE,
  ERROR_SINGLE,
  GET_DATA,
  GET_SINGLE_DATA,
  ERROR,
  CHANGE_IMAGE,
  CHANGE_FOUND,
  CHANGE_FILLTER,
  FILTER_PRODUCTS,
  REMOVE_FILTER,
} from "../action";
import { products_url } from "../constants/constants";

const context = React.createContext();

const initialState = {
  gridView: true,
  search: "",
  valueSort: "nameAZ",
  isLoading: false,
  isError: false,
  isLoadingSingle: false,
  isErrorSingle: false,
  products: [],
  found:0,
  indexImage:0,
  singleProducts: [],
  fillterProducts: [],
  fillter: {
    category: "All",
    company: "All",
    colors: "All",
    price: 0,
    maxPrice: 0,
    freeShip: false,
  },
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialState);

  const getAPI = async () => {
    dispatch({ type: LOADING });
    try {
      const data = await axios.get(products_url);
      dispatch({ type: GET_DATA, payload: data.data }); // truyền dữ liệu + hủy loading
    } catch (error) {
      dispatch({ type: ERROR }); // xử lý error + hủy loadding
    }
  };

  useEffect(() => {
    getAPI();
  }, []);

  const getSingleAPI = async (url) => {
    dispatch({ type: LOADING_SINGLE });
    try {
      const data = await axios.get(url);
      dispatch({ type: GET_SINGLE_DATA, payload: data.data }); // truyền dữ liệu + hủy loading
    } catch (error) {
      dispatch({ type: ERROR_SINGLE }); // xử lý error + hủy loadding
    }
  };

  useEffect(() => {
    dispatch({ type: FILTER_PRODUCTS });
  }, [state.fillter]);

  useEffect(() => {
    dispatch({type: CHANGE_FOUND})
  },[state.products])

  const changeImage = (index) => {
    dispatch({type: CHANGE_IMAGE , payload:index})
  }

  const gridViewAction = () => {
    dispatch({ type: GRID_VIEW });
  };

  const changeSearch = (text) => {
    dispatch({ type: CHANGE_SEARCH, payload: text });
  };

  const changeSort = (sort) => {
    dispatch({ type: CHANGE_SORT, payload: sort });
  };

  const changeFillter = (data, type) => {
    dispatch({ type: CHANGE_FILLTER, payload: { data, check: type } });
  };

  const removeFilter = () => {
    dispatch({ type: REMOVE_FILTER });
  };
  return (
    <context.Provider
      value={{
        state,
        getAPI,
        getSingleAPI,
        changeImage,
        gridViewAction,
        changeSearch,
        changeSort,
        changeFillter,
        removeFilter,
      }}
    >
      {children}
    </context.Provider>
  );
};

export { context, AppProvider };
