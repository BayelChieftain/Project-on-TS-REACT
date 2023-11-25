import { Product } from './components/Product';
import { useProducts } from './hooks/cnProducts';


function App() {

  const {products} = useProducts()

  return (
  <div className='container mx-auto max-w-2xl pt-5'>
    
    { products.map(product => <Product product={product} key={product.id} />) }
    
  </div>
    
  );
}

export default App;
