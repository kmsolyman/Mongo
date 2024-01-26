const ProductReducer = (state, action) => {
  // if (action.type === "SET_LOADING") {
  //   return {
  //     ...state,
  //     isLoading: true,
  //   };
  // }

  // if (action.type === "API_ERROR") {
  //   return {
  //     ...state,
  //     isLoading: false,
  //     isError: true,
  //   };
  // }

  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };

    case "SET_API_DATA":
      const featureData = action.payload.filter((curElem) => {
        // return curElem.featured === true;
        return curElem.featured === true;
      });

      return {
        ...state,
        isLoading: false,
        products: action.payload,
        // featureProducts:action.payload ,
        featureProducts: featureData,
      };

    case "API_ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    case "SET_SINGLE_LOADING":
      return {
        ...state,
        isSingleLoading: true,
      };

    case "SET_SINGLE_PRODUCT":
      return {
        ...state,
        isSingleLoading: false,
        singleProduct: action.payload,
      };

    case "SET_SINGLE_ERROR":
      return {
        ...state,
        isSingleLoading: false,
        isError: true,
      };

    default:
      return state;
  }
};

export default ProductReducer;

// const ProductReducer = (state, action) => {
//     // if (action.type === "SET_LOADING") {
//     //   return {
//     //     ...state,
//     //     isLoading: true,
//     //   };
//     // }
  
//     // if (action.type === "API_ERROR") {
//     //   return {
//     //     ...state,
//     //     isLoading: false,
//     //     isError: true,
//     //   };
//     // }
//   // 1ST API //
//     switch (action.type) {
//       case "SET_LOADING":
//         return {
//           ...state,
//           isLoading: true,
//         };
  
//       case "SET_API_DATA":
//         const featureData = action.payload.filter((curElem) => {
//           return curElem.featured === true;
//         });
  
//         return {
//           ...state,
//           isLoading: false,
//           products: action.payload,
//           featureProducts: featureData,
//         };
  
//       case "API_ERROR":
//         return {
//           ...state,
//           isLoading: false,
//           isError: true,
//         };
//           //3RD API //
//           case "MY_SET_LOADING":
//             return {
//               ...state,
//               isLoading: true,
//             };
      
//           case "MY_APIs_DATA":
//             const myFeatureData = action.payload.filter((curElem) => {
//               return curElem.category === "laptops";
//             });
      
//             return {
//               ...state,
//               isLoading: false,
//               myProducts: action.payload,
//               myFeatureProducts:myFeatureData,
               
//             };
       
//         case "APIs_ERROR":
//           return {
//             ...state,
//             isLoading: false,
//             isError: true,
//           };
//      // 2API //

//      case "SET_SINGLE_LOADING":
//       return {
//         ...state,
//         isSingleLoading: true,
//       };

//     case "SET_SINGLE_PRODUCT":
//       return {
//         ...state,
//         isSingleLoading: false,
//         singleProduct: action.payload,
//       };

//     case "SET_SINGLE_ERROR":
//       return {
//         ...state,
//         isSingleLoading: false,
//         isError: true,
//       };
//           //4ND API //
   
//           case "SET_MY_SINGLE_LOADING":
//         return {
//           ...state,
//           ismySingleLoading:true,
//         };
      
//         case "SET_MY_SINGLE_PRODUCT" : 
//          return{
//            ...state,
//            ismySingleLoading: false,
//            mySingleProducts : action.payload,
//        };
//        case "SET_MY_SINGLE_ERROR":
//           return {
//             ...state,
//             ismySingleLoading: false,
//             isError: true,
//           };
//       default:
//         return state;
//     }
//   };
  
//   export default ProductReducer;