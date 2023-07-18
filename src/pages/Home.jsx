import { useContext } from 'react'
import { ProductContext } from '../context/ProductContext'
import ProductItem from '../components/ProductItem'

const Home = () => {
  const { product } = useContext(ProductContext)
  return (
    <div className='container mx-auto'>
      <div className="grid grid-cols-4 gap-20">
        {product.map((item) => (
          <ProductItem key={item.id} item={item}/>
        ))}
      </div>
    </div>
  )
}

export default Home