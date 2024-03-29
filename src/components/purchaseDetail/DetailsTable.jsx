"use client";
import { FormatNumber } from "@/utils/CartCounts";
import Image from "next/image";

const DetailsTable = ({ purchaseData }) => {
  const totalPrice = purchaseData?.reduce((total, product) => {
    return total + product.price * product.quantity;
  }, 0);

  return (
    <div className="overflow-x-auto text-white">
      <table className="table purchaseDetail_border-darkMode">
        <thead>
          <tr className="text-white">
            <th></th>
            <th>Producto</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {purchaseData.map((elem) => {
            return (
              <tr key={elem.title}>
                <th></th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <Image
                          src={elem.image}
                          width={0}
                          height={0}
                          sizes="100vw"
                          alt={elem.title}
                          className="w-full h-auto object-contain"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{elem.title}</div>
                      <div className="text-sm opacity-50 hidden sm:block">
                        Código: {elem.code}
                      </div>
                    </div>
                  </div>
                </td>
                <td>{FormatNumber(elem.price)}</td>
                <td>x {elem.quantity}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="flex justify-center mt-16">
        <div className="w-fit bg-custome-primary p-2">
          <p className="text-2xl text-black">
            TOTAL: {FormatNumber(totalPrice)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DetailsTable;
