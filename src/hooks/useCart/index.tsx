import { useContext } from 'react';

import { CartContext } from './provider';

export interface IUseCartContext {
  addQuantityCart(productQuantity: number): void;
  cartQuantity: number;
}

function useCart(): IUseCartContext {
  const cartContext = useContext(CartContext);

  return cartContext;
}

export default useCart;
