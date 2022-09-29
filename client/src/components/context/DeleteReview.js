import React,{useState}from "react";



const DeleteReviewContext = React.createContext();
function ProductsProvider({ children }) {
    const [products, setProducts] = useState([]);
   
    return <ProductsContext.Provider value={{ products, setProducts }}>{children}</ProductsContext.Provider>;
  }
  
  export { ProductsContext, ProductsProvider };