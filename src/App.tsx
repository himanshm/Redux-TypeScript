import { Provider } from 'react-redux';

import Header from './components/Header.tsx';
import Shop from './components/Shop.tsx';
import Product from './components/Product.tsx';
import { DUMMY_PRODUCTS } from './dummy-products.ts';
import { store } from './store/store.ts';

/*  just as with the context provider component this provider component, which is provided by that third party library, react-redux, should be wrapped around all components that need to change the data in the Redux store or that want to read the data. */

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Shop>
        {DUMMY_PRODUCTS.map((product) => (
          <li key={product.id}>
            <Product {...product} />
          </li>
        ))}
      </Shop>
    </Provider>
  );
}

export default App;
