import React from "react";
import Header from "./Header";
import { Routes, Route } from "react-router-dom"
import ProducList from "./ProducList";
import LoginForm from "./LoginForm";
import { useEffect, useState } from 'react'
import Activity from "./Activity";
import SignupForm from "./SignupForm";
import ProductReviews from "./ProductReviews";

function App() {
  const [user, setUser] = useState(null);
  const [isLogin, setIsLogin] = useState(false)




  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json()
          .then((user) => {
            setIsLogin(true);
            setUser(user)
          });
      }
    });
  }, []);

  // function handleAddProductInBag(newProduct) {
  //   const updatedProductInBagArr = [...productInBags, newProduct];
  //   setProductInBags(updatedProductInBagArr);
  // }

  return (
    <div className="App">

      <Header isLogin={isLogin} user={user} />
      <Routes>
        <Route path="/" element={<ProducList isLogin={isLogin} user={user}/>} />
        <Route path="/login" element={isLogin?
          <Activity onLogout={setUser} setIsLogin={setIsLogin} /> :
           <LoginForm onLogin={setUser} setIsLogin={setIsLogin} />} 
          />
         <Route path="/signup" element={<SignupForm setUser={setUser} setIsLogin={setIsLogin}/>}/>
         <Route path="/product-reviews" element={<ProductReviews user={user}/>}/>
      </Routes>

    </div>
  );
}

export default App;
