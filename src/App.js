import { useState, useEffect } from 'react';

import ProductList from './component/ProsuctList/ProductList'
import './App.css';
import AddProduct from './component/AddProduct/AddProduct'

const App = () =>{
  const [products, setProducts] = useState([])
  useEffect(() =>{
    const sendRequest = async () => {
     const response = await fetch("http://localhost:7000/products")

      const responseData = await response.json()

      setProducts(responseData)

    }
    sendRequest()
  },[])


  const addProduct = async (title) => {
   const response = await fetch("http://localhost:7000/products",{
    method: 'POST',
    Headers:{
      'Content-type': 'application/json',
    },
    body: JSON.stringify(title)
   })
    const responseData = await response.json

   setProducts([...products, responseData])
  }
  

  const deleteProduct = async (id) =>{
   await fetch(`http://localhost:7000/products/${id}`,{
      method: 'DELETE',
    })
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
