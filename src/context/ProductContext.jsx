import axios from 'axios';
import { createContext, useEffect, useState } from 'react'

export const ProductContext = createContext();

const ProductProvider = ({children}) => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const {data} = await axios.get("https://fakestoreapi.com/products/")
            setProduct(data);
        }
        fetchData()
    },[])
    return (
    <ProductContext.Provider value={{product}}>
        {children}
    </ProductContext.Provider>
    )
}

export default ProductProvider;