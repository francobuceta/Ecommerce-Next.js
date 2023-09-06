export const calculatedItemsQty = (cart, fn) => {
  if (cart.length > 0) {
    let count = cart.reduce((total, product) => total + product.quantity, 0);

    return fn(count);
  }
  return fn(0);
};

export const calculatedTotalPrice = (cart, fn) => {
  let sum = 0;

  cart.map((elem) => {
    sum += elem.price * elem.quantity;
  });

  fn(FormatNumber(sum));
};

export const FormatNumber = (number) => { 
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(number);
};
