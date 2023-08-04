import toast from 'react-hot-toast';

export const productToCartSucceeded = () => {
    toast.success('Producto agregado con éxito');
}

export const productToCartFailed = () => {
    toast.error('Error: Stock insuficiente');
}