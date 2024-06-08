import './ListProduct.css'
import {useEffect, useState} from 'react'
import crossicon from '../../assets/cross_icon.png'
const ListProduct = () => {
  const [allproducts,setAllproducts]=useState([])

  const fetchInfo = async () => {
    try {
      const response = await fetch('http://localhost:4000/api/allproducts');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      setAllproducts(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(()=>{
    fetchInfo();
  },[])

  const removeproduct = async (id) => {
    try {
        const response = await fetch("http://localhost:4000/api/removeProduct", {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id: id })
        });

        if (!response.ok) {
            throw new Error('Failed to delete product');
        }

        await fetchInfo(); // Assuming fetchInfo is defined elsewhere

    } catch (error) {
        console.error('Error removing product:', error);
        // Handle error, e.g., show error message to the user
    }
}

  return (
    <div className="listProduct">
      <h1>All Products List</h1>
      <div className="listproduct-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>
      <div className="listproduct-allproduct">
        <hr />
        {allproducts.map((product,index)=>{
               return <>
               <div key={index}className="listproduct-format-main listproduct-format">
                  <img src={product.image} className='listproduct-product-icon' alt="" />
                  <p>{product.name}</p>
                  <p>${product.old_price}</p>
                  <p>${product.new_price}</p>
                  <p>{product.category}</p>
                 <img onClick={()=>{removeproduct(product.id)}} src={crossicon} className='listproduct-remove-icon' alt="" />
               </div>
               <hr />
               </>
        })}
      </div>
    </div>
  )
}

export default ListProduct
