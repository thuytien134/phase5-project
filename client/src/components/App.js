
import Header from "./Header";
import { Routes, Route } from "react-router-dom"
import ProducList from "./ProducList";
import LoginForm from "./LoginForm";
import { useEffect, useState,useContext } from 'react'
import Activity from "./Activity";
import SignupForm from "./SignupForm";
import ProductReviews from "./ProductReviews";
import { UserContext } from "./context/User";
import { IsLoginContext } from "./context/IsLogin";



function App() {
  const { setUser } = useContext(UserContext);
  const {isLogin, setIsLogin} = useContext(IsLoginContext)




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
    <div className="App" style={{ padding: "2rem" }}>

      <Header />
      <Routes>
        <Route path="/" element={<ProducList />} />
          <Route path="/login" element={isLogin ?
            <Activity /> :
            <LoginForm  />}
          />
        <Route path="/signup" element={<SignupForm   />} />
        <Route path="/product-reviews" element={<ProductReviews  />} />
      </Routes>

    </div>
  );
}

export default App;
