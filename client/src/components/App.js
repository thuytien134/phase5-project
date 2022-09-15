import React from "react";
import Header from "./Header";
import { Routes, Route } from "react-router-dom"
import ProducList from "./ProducList";
import LoginForm from "./LoginForm";
import { useEffect, useState } from 'react'
import Activity from "./Activity";

function App() {
  const [user, setUser] = useState(null);
  const [isLogin, setIsLogin] = useState(false)
// debugger


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
    <div className="App">

      <Header isLogin={isLogin} user={user} />
      <Routes>
        <Route path="/" element={<ProducList />} />
        <Route path="/login" element={isLogin?
          <Activity onLogout={setUser} setIsLogin={setIsLogin} /> :
           <LoginForm onLogin={setUser} setIsLogin={setIsLogin} />} 
          />
         
      </Routes>

    </div>
  );
}

export default App;
