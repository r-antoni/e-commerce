import {useContext} from "react";
import {ProductContext} from "../context/ProductContext";
import ProductItem from "../components/ProductItem";
import {Carousel} from "flowbite-react";

const Home = () => {
  const {product} = useContext(ProductContext);
  return (
    <div className="container mx-auto py-20">
      <div className="h-[500px] py-10">
        <Carousel slideInterval={5000}>
          <img
            alt="..."
            src="https://images.tokopedia.net/img/cache/1208/NsjrJu/2023/7/18/0ba3c370-23a9-4390-a955-1677b09aa234.jpg.webp?ect=4g"
          />
          <img
            alt="..."
            src="https://images.tokopedia.net/img/cache/1208/NsjrJu/2023/7/17/1935fb42-c172-49ea-bdd6-1fbd8afcbfd0.jpg.webp?ect=4g"
          />
          <img
            alt="..."
            src="https://images.tokopedia.net/img/cache/1208/NsjrJu/2023/7/19/99f6cf92-4c5d-4742-be53-bc2786c15ab7.jpg.webp?ect=4g"
          />
          <img
            alt="..."
            src="https://images.tokopedia.net/img/cache/1208/NsjrJu/2023/7/14/f7c826c5-6e7a-4eed-93c3-4a4aa6190273.jpg.webp?ect=4g"
          />
          <img
            alt="..."
            src="https://images.tokopedia.net/img/cache/1208/NsjrJu/2023/7/17/1935fb42-c172-49ea-bdd6-1fbd8afcbfd0.jpg.webp?ect=4g"
          />
        </Carousel>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10">
        {product.map((item) => (
          <ProductItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Home;
