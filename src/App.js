import Header from "./components/header";
import "./App.css";
import Main from "./components/main";
import { useContext, useState } from "react";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
import { BrowserRouter,Switch,Route, useParams,Redirect } from "react-router-dom";
import AuthForm from "./Auth/AuthForm";
import AuthContext from "./store/auth-context"
import React,{Suspense} from "react";

const Contact=React.lazy(()=>import('./components/contact'));

function App() {
  const authCtx = useContext(AuthContext);
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  const ProductDetails=()=>{
    const params=useParams();
    return(<div>Title:{params.title}</div>);
}
  return (
    <BrowserRouter>
    <Suspense fallback={<div>Loading....</div>}>
      <CartProvider>
        {cartIsShown && <Cart onClose={hideCartHandler} />}
        <Header onShowCart={showCartHandler} />
        <Switch>
        {!authCtx.isLoggedIn && (
          <Route path='/Login'>
            <AuthForm />
          </Route>
        )}
          <Route path="/Store" exact>
          {authCtx.isLoggedIn && <Main />}
          {!authCtx.isLoggedIn && <Redirect to='/Login' />}
          </Route>
          <Route path="/Home" exact>
          <div>Upcoming Feature Home</div>
          </Route>
          <Route path="/About" exact>
          <div>Upcoming Feature About</div>
          </Route>
          <Route path="/Contact" exact>
          <Contact/>
          </Route>
          <Route path="/Product/:title" exact>
            <ProductDetails/>
          </Route>
        </Switch>
      </CartProvider>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
