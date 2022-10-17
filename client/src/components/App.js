
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
import { ProductsContext } from "./context/Products";
import { ReviewsContext } from "./context/Reviews";
import Contact from "./Contact";



function App() {
  const { user, setUser } = useContext(UserContext);
  const {  setIsLogin } = useContext(IsLoginContext)
  const { setReviews } = useContext(ReviewsContext)
  const { setProducts } = useContext(ProductsContext)

  useEffect(() => {
    fetch("/products")
      .then((r) => r.json())
      .then((data) => setProducts(data));
  }, []);

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
    <div className="App" style={{ padding: "1rem", backgroundColor: "aliceblue", color: "cadetblue" }}>
      <Header />
      <Routes>
        <Route path="/" element={<ProducList />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/product/:id/reviews" element={<ProductReviews />} />
        <Route path="/login" element={user !== null ?
          <Activity /> :
          <LoginForm />}
        />
        <Route path="/signup" element={<SignupForm />} />
      </Routes>
    </div>
  );
}

export default App;

