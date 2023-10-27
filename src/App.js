import { useState } from 'react';

import ProductList from './component/ProsuctList/ProductList'
import './App.css';
import AddProduct from './component/AddProduct/AddProduct'

const App = () =>{
  const [products, setProducts] = useState([
      { id:1, title:"book 1" },
      { id:2, title:"book 2" },
      { id:3, title:"book 3" },
  ])

  const addProduct = (title) => {
   const id = Math.floor(Math.random() * 10000)
   const newProduct = {id, ...title }

   setProducts([...products, newProduct])
  }

  const deleteProduct = (id) =>{
   setProducts (products.filter((item)=> item.id !== id))
  }
 
  return (
   
    <div id="app" className='container'>
        <AddProduct onAdd={addProduct} />
        <ProductList products={products} onDelete={deleteProduct} />
    </div>
   
  );
}

export default App;
