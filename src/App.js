import Header from "./components/header";
import './App.css';
import Main from "./components/main";
import { useState } from 'react';
import Cart from "./components/Cart/Cart";
import CartProvider from './store/CartProvider';

function App() {

  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler}/>
      <Main/>
    </CartProvider>
  );
}

export default App;
