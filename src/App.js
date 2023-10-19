import React, {useState} from "react";
import Header from "./Components/Header";
import Meals from "./Components/Meals";
import Cart from "./Components/Cart/Cart";



function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const enableCart = () =>{
    setCartIsShown(true);
  };

  const disableCart = () =>{
    setCartIsShown(false);
  };

  return (
    <div>
      {cartIsShown && <Cart disableCartHandler={disableCart}/>}
      <Header enableCartHandler={enableCart}/>
      <Meals />
    </div>
  );
}

export default App;
