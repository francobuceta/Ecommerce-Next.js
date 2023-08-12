export const calculatedItemsQty = (cart, fn) => {
  if (cart.length > 0) {
    let count = cart.reduce((total, product) => total + product.quantity, 0);

    fn(count);
  }
  return;
};

export const calculatedTotalPrice = (cart, fn) => {
  let sum = 0;

  cart.map((elem) => {
    sum += elem.price * elem.quantity;
  });

  fn(sum.toFixed(3)); //Solucionar esto en bd o buscar solución desde el front.
};

//Ejemplo solución desde front

/* const number = 2255.768;
const formattedNumber = number.toLocaleString(undefined, { maximumFractionDigits: 3 });

console.log(formattedNumber); // Resultado: "2.255.768" */
