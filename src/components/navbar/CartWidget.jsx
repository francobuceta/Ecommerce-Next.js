"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
import { calculatedItemsQty, calculatedTotalPrice } from "@/utils/CartCounts";

const CartIcon = () => {
  const [items, setItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    calculatedItemsQty(cart, setItems);
    calculatedTotalPrice(cart, setTotalPrice);
  }, [cart]);

  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <div className="indicator">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#BAFF29"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          <span className="badge badge-sm indicator-item text-black text-sm font-main">
            {items}
          </span>
        </div>
      </label>
      <div
        tabIndex={0}
        className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
      >
        <div className="card-body">
          <span className="font-bold text-lg">{items} Items</span>
          <span className="text-custome-secondary">Total: $ {totalPrice}</span>
          <Link href="/cart">
            <div className="card-actions">
              <button className="btn btn-custome-secondary btn-block">
                Ver carrito
              </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartIcon;
