import React, {useContext} from "react";
import {Link} from "react-router-dom";
import Xmark from "@heroicons/react/24/outline/XMarkIcon";
import MinusIcon from "@heroicons/react/24/outline/MinusIcon";
import PlusIcon from "@heroicons/react/24/outline/PlusIcon";
import {CartContext} from "../context/CartContext";

const CartItem = ({item}) => {
  const {removeItem, increaseAmount, decreaseAmount} = useContext(CartContext);
  const {id, title, image, price, amount} = item;
  const finalPrice = price * amount;
  return (
    <div className="flex w-full h-32 items-center gap-5 py-3 border-b">
      <Link to={`/product/${id}`}>
        <img className="w-20 h-20 border rounded-lg" src={image} />
      </Link>
      <div className="flex-col flex gap-2 w-full">
        <div className=" flex justify-between text-sm uppercase">
          <Link className="w-[75%] text-xs font-medium" to={`/product/${id}`}>
            {title}
          </Link>
          <button onClick={() => removeItem(id)}>
            <Xmark className="w-5 text-gray-500 hover:text-red-400 transition" />
          </button>
        </div>
        <div className=" flex gap-2 h-8 items-center text-sm">
          <div className="flex gap-5 h-full items-center border">
            <button className="px-2" onClick={() => decreaseAmount(id)}>
              <MinusIcon className="w-3" />
            </button>
            {amount}
            <button className="px-2" onClick={() => increaseAmount(id)}>
              <PlusIcon className="w-3" />
            </button>
          </div>
          <div className="flex flex-1 justify-around font-light text-gray-500">${price}</div>
          <div className="flex flex-1 justify-end font-medium">${parseFloat(finalPrice).toFixed(2)}</div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
