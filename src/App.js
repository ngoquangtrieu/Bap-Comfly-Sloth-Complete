import Header from "./parts/Header";
import Footer from "./parts/Footer";
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ProductsPage from './pages/ProductsPage'
import CartPage from './pages/CartPage'
import LoginPage from './pages/LoginPage'
import SinglePage from './pages/SinglePage'
import {Routes , Route} from 'react-router-dom'
import { useContext } from "react";
import { cartContext } from "./context/CartContext";

function App() {
  const {state} = useContext(cartContext)
  return (
    <>
      <Header title={state.totalItem}/>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/About' element={<AboutPage />} />
        <Route path='/Products' element={<ProductsPage />} />
        <Route path='/Cart' element={<CartPage />} />
        <Route path='/Login' element={<LoginPage />} />
        <Route path='/products/:id' element={<SinglePage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
