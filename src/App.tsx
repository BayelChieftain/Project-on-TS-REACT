import { useContext } from 'react';
import { CreateProduct } from './components/CreateProduct';
import { Modal } from './components/Modal';
import { Product } from './components/Product';
import { useProducts } from './hooks/cnProducts';
import { IProduct } from './models';
import { ModalContext } from './context/ModalContext';


function App() {

  const {products, addProduct} = useProducts()
  const {modal, openModal, closeModal} = useContext(ModalContext)

  const createHandler = (product:IProduct) => {
    closeModal()
    addProduct(product)
  }

  return (
  <div className='container mx-auto max-w-2xl pt-5'>
    
    { products.map(product => <Product product={product} key={product.id} />) }
    

    {modal && <Modal title='Make new product' onClose={() => closeModal()}>
      <CreateProduct onCreate={createHandler} />
    </Modal>}

    <button 
    onClick={() => openModal()}
    className='fixed bottom-5 right-5 rounded-full bg-red-700 text-white text-2xl px-4 py-2'>+</button>
  </div>
    
  );
}

export default App;
