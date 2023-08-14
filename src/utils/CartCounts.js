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

  fn(sum.toFixed(3)); //Solucionar esto en bd o buscar solución desde el front.
};

export const FormatNumber = (number) => { 
  const priceToString = number.toString().replace(/\./g, ''); //Remover puntos que vienen desde la base de datos en el precio
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(priceToString); //Dar nuevo formato al precio
};
