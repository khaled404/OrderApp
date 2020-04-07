export const ADD_TO_CART = 'ADD_TO_CART';
export const CHECKED = 'CHECKED';
export const PLUS = 'PLUS';
export const MINUS = 'MINUS';

export const addToCart = () => {
  return {
    type: ADD_TO_CART,
  };
};

export const checked = (id, checked) => {
  return {
    type: CHECKED,
    id: id,
    checked: checked,
  };
};

export const plus = id => {
  return {
    type: PLUS,
    id: id,
  };
};
export const minus = id => {
  return {
    type: MINUS,
    id: id,
  };
};

// export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
// export const removeFromCart = productId => {
//   return {type: REMOVE_FROM_CART, pid: productId};
// };
