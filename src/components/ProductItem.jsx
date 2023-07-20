import {Card} from "flowbite-react";
import {Link} from "react-router-dom";
import EyeIcon from "@heroicons/react/24/solid/EyeIcon";
import {CartContext} from "../context/CartContext";
import {useContext} from "react";

const ProductItem = ({item}) => {
  const {id, title, image, description, price, category} = item;
  const {addItem} = useContext(CartContext);
  return (
    <div className="flex flex-col">
      <Card className="">
        <div className="flex flex-col group">
          <span className="flex justify-center items-center text-xs uppercase pb-2 text-slate-400 border-b">
            {category}
          </span>
          <div className="flex bg-white items-center justify-center py-3 rounded  transition">
            <img className="w-44 h-48" src={image} alt={description} />
          </div>
          <div className="flex justify-around gap-5 absolute px-3 -mt-6">
            <Link
              to={`/product/${id}`}
              className="flex items-center justify-center absolute top-0 right-0 bg-red-400 rounded w-12 h-12 opacity-0 group-hover:opacity-80"
            >
              <EyeIcon className="w-5 h-5" />
            </Link>
          </div>
          <span className="flex justify-center font-bold text-gray-900 bg-cyan-100 rounded-lg dark:text-white">
            ${price}
          </span>
        </div>
      </Card>
      <h5 className=" flex justify-center items-center font-medium tracking-tight text-sm text-gray-90 h-20">
        <p> {title} </p>
      </h5>
      <button
        className="flex justify-center rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800  group-hover:opacity-100"
        onClick={() => addItem(item, id)}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductItem;
