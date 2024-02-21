import { CartItem, addToCart, removeFromCart } from '../store/cart-slice';
import { useAppSelector, useAppDispatch } from '../store/hooks';

export default function CartItems() {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.items);

  const totalPrice = cartItems.reduce(
    (currVal, currItem) => currVal + currItem.price * currItem.quantity,
    0
  );

  const formattedTotalPrice = totalPrice.toFixed(2);

  const handleAddToCart = function (item: CartItem) {
    dispatch(addToCart({ ...item }));
  };

  const handleRemoveFromCart = function (id: string) {
    dispatch(removeFromCart(id));
  };
  return (
    <div id='cart'>
      {cartItems.length === 0 && <p>No items in cart!</p>}

      {cartItems.length > 0 && (
        <ul id='cart-items'>
          {cartItems.map((item) => {
            const formattedPrice = `$${item.price.toFixed(2)}`;

            return (
              <li key={item.id}>
                <div>
                  <span>{item.title}</span>
                  <span> ({formattedPrice})</span>
                </div>
                <div className='cart-item-actions'>
                  <button onClick={() => handleRemoveFromCart(item.id)}>
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleAddToCart(item)}>+</button>
                </div>
              </li>
            );
          })}
        </ul>
      )}

      <p id='cart-total-price'>
        Cart Total: <strong>${formattedTotalPrice}</strong>
      </p>
    </div>
  );
}
