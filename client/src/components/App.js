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



  return (
    <div className="App" style={{padding:"2rem"}}>

      <Header isLogin={isLogin} user={user} />
      <Routes>
        <Route path="/" element={<ProducList isLogin={isLogin} user={user} />} />
        <Route path="/login" element={isLogin ?
          <Activity onLogout={setUser} setIsLogin={setIsLogin} /> :
          <LoginForm onLogin={setUser} setIsLogin={setIsLogin} />}
        />
        {/* {isLogin ? <Route path="/activities" element={<Activity onLogout={setUser} setIsLogin={setIsLogin} />} /> :
          <Route path="/login" element={<LoginForm onLogin={setUser} setIsLogin={setIsLogin} />} />} */}
        <Route path="/signup" element={<SignupForm setUser={setUser} setIsLogin={setIsLogin} />} />
        <Route path="/product-reviews" element={<ProductReviews user={user} />} />
      </Routes>

    </div>
  );
}

export default App;
