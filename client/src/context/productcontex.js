import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from "../reducer/productReducer";

const AppContext = createContext();

const API ="http://localhost:5000/Productreadalluser";

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featureProducts: [],
  isSingleLoading: false,
  singleProduct: {},
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getProducts = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await axios.get(url);
      const products = await res.data;
      dispatch({ type: "SET_API_DATA", payload: products });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };

  // my 2nd api call for single product

  const getSingleProduct = async (url) => {
    dispatch({ type: "SET_SINGLE_LOADING" });
    try {
      const res = await axios.get(url);
      const singleProduct = await res.data;
      console.log(singleProduct);
      dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProduct });
    } catch (error) {
      dispatch({ type: "SET_SINGLE_ERROR" });
    }
  };

  useEffect(() => {
    getProducts(API);
  }, []);

  return (
    <AppContext.Provider value={{ ...state, getSingleProduct }}>
      {children}
    </AppContext.Provider>
  );
};

// custom hooks
const useProductContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useProductContext };

// import { createContext, useContext, useEffect, useReducer } from "react";
// import axios from "axios";
// import reducer from "../reducer/productReducer";

// const AppContext = createContext();

// const API = "https://api.pujakaitem.com/api/products";
// const APIs = "https://dummyjson.com/products";
// const API ="http://localhost:5000/Productreadalluser";

// const initialState = {
//   isLoading: false,
//   isError: false,
//   products: [],
//   myProducts: [],
//   featureProducts: [],
//   myFeatureProducts: [],
//   singleProduct: {},
//   mySingleProducts: {},
//   isSingleLoading: false,
//   ismySingleLoading: false,  
// };

// const AppProvider = ({ children }) => {
 
//   const [state, dispatch] = useReducer(reducer, initialState);


//   const getProducts = async (url) => {
//     dispatch({ type: "SET_LOADING" });
//     try {
//       const res = await axios.get(url);
//       const products = await res.data;
//       dispatch({ type: "SET_API_DATA", payload: products });
//     } catch (error) {
//       dispatch({ type: "API_ERROR" });
//     }
//   };
//   // my 3nd api call for single product kmslymann

//   const getMyProducts =async (url) =>{
//     dispatch({ type: "MY_SET_LOADING" });
//    try{
//     const res = await axios.get(url);
//     const myProducts = await res.data.products;
//     dispatch({ type:"MY_APIs_DATA"  , payload: myProducts})
//    }catch(error){
//     dispatch({ type:"APIs_ERROR"})

//      }
//     }

//   // my 2nd api call for single product

//   const getSingleProduct = async (url) => {
//     dispatch({ type: "SET_SINGLE_LOADING" });
//     try {
//       const res = await axios.get(url);
//       const singleProduct = await res.data;
//       dispatch({ type: "SET_SINGLE_PRODUCT", payload:singleProduct });
//     } catch (error) {
//       dispatch({ type: "SET_SINGLE_ERROR" });
//     }
//   };

//     // my 4nd api call for single product kmslymann
    
//     const getMySingleProducts = async (url) =>{
//       dispatch({ type: "SET_MY_SINGLE_LOADING" });
//      try{
//       const res = await axios.get(url);
//       const mySingleProducts = await res.data.products;
//       dispatch({ type:"SET_MY_SINGLE_PRODUCT", payload:mySingleProducts });
 
//     }catch(error){
//       dispatch({ type:"SET_MY_SINGLE_ERROR"})
  
//        }
//       }


//   useEffect(() => {
//     getProducts(API);
//     getMyProducts(APIs);

//   }, []);

//   return (
//     <AppContext.Provider value={{ ...state,getMySingleProducts,getSingleProduct}}>
//       {children}
//     </AppContext.Provider>
//   );
// };

// // custom hooks
// const useProductContext = () => {
//   return useContext(AppContext);
// };

// export { AppProvider, AppContext, useProductContext };