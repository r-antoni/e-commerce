import { useContext } from 'react'
import { ProductContext } from '../context/ProductContext'
import ProductItem from '../components/ProductItem'
import { Carousel } from 'flowbite-react';

const Home = () => {
  const { product } = useContext(ProductContext)
  return (
    <div className='container mx-auto py-20'>
      <div className='h-[600px] py-10'>
       <Carousel slideInterval={5000}>
      <img
        alt="..."
        src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
      />
      <img
        alt="..."
        src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
      />
      <img
        alt="..."
        src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
      />
      <img
        alt="..."
        src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
      />
      <img
        alt="..."
        src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
      />
    </Carousel>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10">
        {product.map((item) => (
          <ProductItem key={item.id} item={item}/>
        ))}
      </div>
    </div>
  )
}

export default Home