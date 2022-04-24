import {
  GRID_VIEW,
  CHANGE_SEARCH,
  CHANGE_SORT,
  LOADING,
  GET_DATA,
  GET_SINGLE_DATA,
  ERROR,
  CHANGE_FOUND,
  CHANGE_FILLTER,
  CHANGE_IMAGE,
  FILTER_PRODUCTS,
  REMOVE_FILTER,
  LOADING_SINGLE,
  ERROR_SINGLE,
} from "../action";
const productReducer = (state, action) => {
  switch (action.type) {
    case GRID_VIEW: {
      return { ...state, gridView: !state.gridView };
    }

    case CHANGE_SEARCH: {
      let newProducts = [...state.fillterProducts];
      newProducts = newProducts.filter((items) => {
        return items.name.indexOf(action.payload) != -1;
      });
      return { ...state, search: action.payload, products: newProducts };
    }

    case CHANGE_SORT: {
      let newProducts = [...state.fillterProducts]
      if(action.payload === "priceLowest"){
        newProducts = newProducts.sort((a,b) => {
          return a.price - b.price
        })
      }
      if(action.payload === "priceHighest"){
        newProducts = newProducts.sort((a,b) => {
          return b.price - a.price
        })
      }
      if(action.payload === "nameAZ"){
        newProducts = newProducts.sort((a,b) => {
          return a.name.localeCompare(b.name)
        })
      }
      if(action.payload === "nameZA"){
        newProducts = newProducts.sort((a,b) => {
          return b.name.localeCompare(a.name)
        })
      }
      return { ...state, valueSort: action.payload , products:newProducts};
    }

    case LOADING: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case LOADING_SINGLE: {
      return {
        ...state,
        isLoadingSingle : true
      }
    }

    case GET_DATA: {
      let maxPrice = Math.max.apply(
        Math,
        action.payload.map((item) => item.price)
      );
      return {
        ...state,
        products: action.payload,
        isLoading: false,
        isError: false,
        fillterProducts: action.payload,
        fillter: {
          ...state.fillter,
          price: maxPrice,
          maxPrice: maxPrice,
        },
      };
    }

    case CHANGE_FOUND: {
      return {
        ...state,
        found : state.products.length
      }
    }

    case CHANGE_IMAGE: {
      return {
        ...state,
        indexImage:action.payload,
      }
    }

    case GET_SINGLE_DATA: {
      return{
        ...state,
        isErrorSingle:false,
        singleProducts:action.payload,
        isLoadingSingle:false,
        indexImage:0
      }
    }

    case ERROR: {
      return {
        ...state,
        isError: true,
        isLoading: false,
      };
    }

    case ERROR_SINGLE: {
      return{
        ...state,
        isErrorSingle:true,
        isLoadingSingle:false,
      }
    }

    case CHANGE_FILLTER: {
      const { data, check } = action.payload;
      return { ...state, fillter: { ...state.fillter, [check]: data } };
    }

    case FILTER_PRODUCTS: {
      let newProducts = [...state.fillterProducts];
      const { category, company, colors, price, freeShip } = state.fillter;
      if (category !== "All") {
        newProducts = newProducts.filter((item) => {
          return item.category === category.toLowerCase();
        });
      }
      if (company !== "All") {
        newProducts = newProducts.filter((item) => {
          return item.company === company.toLowerCase();
        });
      }
      if (colors !== "All") {
        newProducts = newProducts.filter((items) => {
          return items.colors.find((c) => c === colors);
        });

        console.log(newProducts);
      }
      newProducts = newProducts.filter((item) => {
        return item.price <= price;
      });
      if (freeShip === true) {
        newProducts = newProducts.filter((item) => {
          return item.shipping == freeShip;
        });
      }
      return { ...state, products: newProducts };
    }

    case REMOVE_FILTER: {
      return {
        ...state,
        search:"",
        fillter: {
          ...state.fillter,
          category: "All",
          company: "All",
          colors: "All",
          price: state.fillter.maxPrice,
          freeShip: false,
        },
      };
    }

    default: {
      return state;
    }
  }
};

export default productReducer;
