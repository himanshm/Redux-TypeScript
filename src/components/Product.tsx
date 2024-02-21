import { addToCart } from '../store/cart-slice.ts';
import { useAppDispatch } from '../store/hooks.ts';

type ProductProps = {
  id: string;
  image: string;
  title: string;
  price: number;
  description: string;
};

export default function Product({
  id,
  image,
  title,
  price,
  description,
}: ProductProps) {
  /* Now, it's actually recommended to not use the useDispatch hook like this though, but to instead create your own version of that hook, for extra type safety. Extra type-safety when working with 'thunks'- action creators that perform some (async) action before the actual action is created and dispatched. */

  const dispatch = useAppDispatch();
  function handleAddToCart() {
    // dispatch the action
    dispatch(addToCart({ id, title, price }));
  }

  return (
    <article className='product'>
      <img
        src={image}
        alt={title}
      />
      <div className='product-content'>
        <div>
          <h3>{title}</h3>
          <p className='product-price'>${price}</p>
          <p>{description}</p>
        </div>
        <p className='product-actions'>
          <button onClick={handleAddToCart}>Add to Cart</button>
        </p>
      </div>
    </article>
  );
}
