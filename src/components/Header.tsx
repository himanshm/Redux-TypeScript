import { useState } from 'react';

import Cart from './Cart.tsx';
import { useAppSelector } from '../store/hooks.ts';

export default function Header() {
  const [cartIsVisible, setCartIsVisible] = useState(false);
  /* the Current value in the reduce method will be that starting value (the second argument), if it's the first time this function is being executed. Otherwise, it will be the last value returned by that function, */
  const cartQuantity = useAppSelector((state) =>
    state.cart.items.reduce(
      (currVal, CurrItem) => currVal + CurrItem.quantity,
      0
    )
  );

  function handleOpenCartClick() {
    setCartIsVisible(true);
  }

  function handleCloseCartClick() {
    setCartIsVisible(false);
  }

  return (
    <>
      {cartIsVisible && <Cart onClose={handleCloseCartClick} />}
      <header id='main-header'>
        <div id='main-title'>
          <img
            src='logo.png'
            alt='Elegant model'
          />
          <h1>Elegant Redux</h1>
        </div>
        <p>
          <button onClick={handleOpenCartClick}>Cart ({cartQuantity})</button>
        </p>
      </header>
    </>
  );
}
