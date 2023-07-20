import React, {useContext} from "react";
import {SidebarContext} from "../context/SidebarContext";
import {CartContext} from "../context/CartContext";
import CartItem from "./CartItem";
import ArrowIcon from "@heroicons/react/24/outline/ArrowRightIcon";

const Sidebar = () => {
  const {open, closeSidebar} = useContext(SidebarContext);
  const {cart, clearCart, itemAmount, totalPrice} = useContext(CartContext);
  return (
    <div
      className={`${
        open ? "right-0" : "-right-full"
      } fixed top-0 bg-white h-full w-[500px] rounded transition-all z-10 shadow-2xl`}
    >
      <div className="flex items-center justify-between px-5 py-5 border-b rounded text-sm font-semibold uppercase">
        <div>Cart Item ({itemAmount})</div>
        <ArrowIcon className=" w-5 cursor-pointer" onClick={closeSidebar} />
      </div>
      <div className="flex flex-col gap-3 py-5 px-10 w-full max-h-[85%] overflow-x-hidden overflow-y-auto">
        {cart.map((item) => (
          <CartItem item={item} key={item.id} />
        ))}
      </div>
      <div
        className={
          cart.length === 0 ? "hidden" : "w-full flex justify-between px-10 pt-8 text-sm font-medium uppercase border-t"
        }
      >
        <div className="py-2">
          <span>Total: ${parseFloat(totalPrice).toFixed(2)}</span>
        </div>
        <button className="bg-red-300  px-5 py-2 rounded-lg" onClick={clearCart}>
          Clear Cart
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
