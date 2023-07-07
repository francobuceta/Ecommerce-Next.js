import CategorySelect from "@/components/products/CategorySelect";
import ProductCard from "@/components/products/ProductCard";

const products = [
  {
    title: "Silla Corsair T1 RACE",
    description: "Ergonomía | Comodidad | Ajustabilidad",
    img: "/img/chair-corsair.jpeg",
    url: "/",
    price: "40.000"
  },
  {
    title: "Auricular Redragon Lamia 2",
    description: "Calidad | Portabilidad | Aislamiento",
    img: "/img/headphone-dragon.jpeg",
    url: "/",
    price: "40.000"
  },
  {
    title: "Teclado Galax Stealth 03",
    description: "Sensibilidad | Comodidad | Ergonomía",
    img: "/img/keyboard-galax.jpeg",
    url: "/",
    price: "40.000"
  },
  {
    title: "Mouse Logitech G502X",
    description: "Precisión | Durabilidad | Conectividad",
    img: "/img/mouse-logi.jpeg",
    url: "/",
    price: "40.000"
  },
  {
    title: "Parlante Logitech Z607",
    description: "Conectividad | Potencia | Durabilidad",
    img: "/img/phone-speaker-logi.jpeg",
    url: "/",
    price: "40.000"
  },
  {
    title: "Barra De Sonido Noblex 2.1",
    description: "Potencia | Estética | Calidad",
    img: "/img/phone-speaker-noblex.jpeg",
    url: "/",
    price: "40.000"
  },
  {
    title: "Volante Logitech G29",
    description: "Sensibilidad | Durabilidad | Precisión",
    img: "/img/steering-wheel-logi.jpeg",
    url: "/",
    price: "40.000"
  },
];

const Products = () => {
  return (
    <>
      <CategorySelect />

      <section className="flex justify-center flex-wrap gap-8 mt-12">
        {
          products.map(product =>
            <ProductCard image={product.img} 
              title={product.title} 
              description={product.description} 
              price={product.price}
            />
          )
        }
      </section>
    </>
  );
};

export default Products;
