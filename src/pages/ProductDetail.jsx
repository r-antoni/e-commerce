import {useContext} from "react";
import {useParams} from "react-router-dom";
import {ProductContext} from "../context/ProductContext";
import {CartContext} from "../context/CartContext";
import {Card, Rating} from "flowbite-react";

const ProductDetail = () => {
  const {id} = useParams();
  const {product} = useContext(ProductContext);
  const {addItem} = useContext(CartContext);
  const productItem = product.find((item) => item.id === parseInt(id));
  const {title, price, description, image, category} = productItem;

  if (!productItem) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  return (
    <Card className="container mx-auto flex items-center h-screen -z-10">
      <div className="flex w-full mt-10">
        <div className="flex flex-col w-1/2 items-center gap-5">
          <img className="w-1/2 px-5 py-5 border rounded-lg" src={image} />
          <Rating className="flex justify-center w-1/2 bg-slate-100 px-10 py-5 rounded-lg">
            <Rating.Star />
            <Rating.Star />
            <Rating.Star />
            <Rating.Star />
            <Rating.Star />
            <p className="ml-2 text-sm font-medium">| 4.95 out of 5</p>
          </Rating>
        </div>
        <div className="flex flex-col justify-between w-1/2 px-5">
          <div>
            <p className="uppercase text-sm text-gray-500">{category}</p>
            <p className="py-4 text-xl font-semibold underline">{title}</p>
            <span className="py-4 font-semibold text-red-500">${price}</span>
            <p className="py-4">{description}</p>
          </div>
          <button
            className="rounded-lg bg-cyan-700 px-5 py-2.5 w-1/2 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800  group-hover:opacity-100"
            onClick={() => addItem(productItem, productItem.id)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </Card>
  );
};

export default ProductDetail;
