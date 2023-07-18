import { useContext } from 'react'
import { ProductContext } from '../context/ProductContext'
import ProductItem from '../components/ProductItem'

const Home = () => {
  const { product } = useContext(ProductContext)
  return (
    <div className='container mx-auto max-w-[85%]'>
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-10">
        {product.map((item) => (
          <ProductItem key={item.id} item={item}/>
        ))}
      </div>
    </div>
  )
}

export default Home