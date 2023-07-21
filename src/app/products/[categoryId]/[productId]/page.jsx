import Image from "next/image";
import { getRequest } from "@/services/serverFetching";
import CountButton from "@/components/products/CountButton";

const getProductDetail = async (id) => {
  try {
    const response = await getRequest(`/api/products/${id}`);
    return response.productId;
  } catch (error) {
    console.log(error);
  }
};

const ProductDetail = async ({ params }) => {
  const { productId } = params;
  const productDetail = await getProductDetail(productId);

  return (
    <section className="mt-20 mx-20">
      <div className="flex justify-center gap-20">
        {productDetail ? (
          <>
            <div>
              <Image
                src={productDetail.image}
                width={0}
                height={0}
                sizes="100vw"
                alt={productDetail.title}
                className="w-full h-auto object-cover rounded-md"
              />
            </div>
            <div className="w-[60%] text-white">
              <h2 className="text-4xl font-main">{productDetail.title}</h2>
              <p className="text-xl mt-10">{productDetail.description}</p>
              <p className="text-3xl mt-10">$ {productDetail.price}</p>
              <p className="text-2xl mt-5">
                Unidades disponibles: {productDetail.stock}
              </p>
              <CountButton stock={productDetail.stock} />
            </div>
          </>
        ) : (
          <p className="text-white">Cargando..</p>
        )}
      </div>
    </section>
  );
};

export default ProductDetail;
