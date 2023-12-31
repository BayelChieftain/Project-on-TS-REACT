import { useEffect, useState } from "react"
import axios from 'axios';
import { IProduct } from "../models";

export const useProducts = () => {
  const [products, setProducts] = useState<IProduct[]>([])

  function addProduct(product: IProduct) {
    setProducts(prev => [...prev, product])
  }

  async function fetchProducts() {
    const response = await axios.get<IProduct[]>('https://fakestoreapi.com/products?limit=6')
    setProducts(response.data)
  }

  useEffect( () => {
    fetchProducts()
  }, [])

  return { products, addProduct }
}