"use client";
import { useSelector } from "react-redux";
import { FormatNumber } from "@/utils/CartCounts";
import Image from "next/image";

const DetailsTable = () => {
  const purchaseData = useSelector((state) => state.purchase);

  const totalPrice = purchaseData?.reduce((total, product) => {
    return total + product.price * product.quantity;
  }, 0);

  return (
    <div className="overflow-x-auto text-white">
      <table className="table">
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
                      <div className="text-sm opacity-50">Código: {elem.code}</div>
                    </div>
                  </div>
                </td>
                <td>
                  {FormatNumber(elem.price)}
                </td>
                <td>x {elem.quantity}</td>
                <th>
                  <button className="btn btn-ghost btn-xs">detalle</button>
                </th>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="flex justify-center mt-20">
        <p className="text-2xl">TOTAL: {FormatNumber(totalPrice)}</p>
      </div>
    </div>
  );
};

export default DetailsTable;
