export const addItemToCart = (cartItems, itemToAdd) => {
  const existingCartItem = cartItems.find(cartItem => cartItem.id === itemToAdd.id);

  if (existingCartItem) {
    return cartItems.map(cartItem => 
      cartItem.id === itemToAdd.id
        ? {...cartItem, quantity: cartItem.quantity + 1}
        : cartItem 
        )
  }

  return [...cartItems, { ...itemToAdd, quantity: 1 }];
}

export const removeItemFromCart = (cartItems, itemToRemove) => {

  if (itemToRemove.quantity === 1) {return clearItemFromCart(cartItems, itemToRemove)}

  return cartItems.map(cartItem =>
    cartItem.id === itemToRemove.id
    ? {...itemToRemove, quantity: itemToRemove.quantity - 1 }
    : cartItem
    )
    
}

export const clearItemFromCart = (cartItems, cartItem) => {
  return cartItems.filter(item => item.id !== cartItem.id);
}