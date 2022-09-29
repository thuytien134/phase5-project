
import Header from "./Header";
import { Routes, Route } from "react-router-dom"
import ProducList from "./ProducList";
import LoginForm from "./LoginForm";
import { useEffect, useContext } from 'react'
import Activity from "./Activity";
import SignupForm from "./SignupForm";
import ProductReviews from "./ProductReviews";
import { UserContext } from "./context/User";
import { IsLoginContext } from "./context/IsLogin";
import { ProductsProvider } from "./context/Products";
import { ReviewsContext } from "./context/Reviews";


function App() {
  const { setUser } = useContext(UserContext);
  const { isLogin, setIsLogin } = useContext(IsLoginContext)
  const {setReviews } = useContext(ReviewsContext)


  useEffect(() => {
    fetch("/reviews")
      .then((r) => r.json())
      .then((data) => setReviews(data));
  }, []);


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
      <ProductsProvider>
          <Routes>
            <Route path="/" element={<ProducList />} />
            <Route path="/product/:id/reviews" element={<ProductReviews />} />
            <Route path="/login" element={isLogin ?
              <Activity /> :
              <LoginForm />}
            />
            <Route path="/signup" element={<SignupForm />} />
          </Routes>
      </ProductsProvider>

    </div>
  );
}

export default App;
