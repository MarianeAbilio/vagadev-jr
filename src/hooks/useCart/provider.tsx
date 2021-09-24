import { createContext, useCallback, useState } from 'react';

import { IUseCartContext } from './index';

const CartContext = createContext<IUseCartContext>(
  {} as IUseCartContext,
);
CartContext.displayName = 'useCart';

const CartProvider: React.FC = ({ children }) => {
  const [cartQuantity, setCartQuantity] = useState<number>(0);

  const addQuantityCart = useCallback((productQuantity: number) => {
    setCartQuantity(cartQuantity + productQuantity);
  }, []);

  const handlesExported = {
    addQuantityCart,
  };

  const statesExported = { cartQuantity };

  return (
    <CartContext.Provider value={{ ...handlesExported, ...statesExported }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext };
export default CartProvider;
