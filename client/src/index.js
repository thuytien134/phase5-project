import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from './components/context/User';
import { IsLoginProvider } from './components/context/IsLogin';
import { ReviewsProvider } from './components/context/Reviews';
import { ProductsProvider } from './components/context/Products';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <IsLoginProvider>
      <UserProvider>
        <ReviewsProvider>
          <ProductsProvider>
            <App />
          </ProductsProvider>
        </ReviewsProvider>
      </UserProvider>
    </IsLoginProvider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

