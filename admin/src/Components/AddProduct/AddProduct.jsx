import './AddProduct.css'
import upload_area from '../../assets/upload_area.svg'
import { useState } from 'react'

const AddProduct = () => {
  const [image, setImage] = useState(false)
  const [productDetails, setProductDetails] = useState({
    name: "",
    image: "",
    category: "women",
    new_price: "",
    old_price: ""
  })

  const imageHandler = (e) => {
    setImage(e.target.files[0])
  }

  const changeHandler = (e) => {
    setProductDetails({ ...productDetails, [e.target.name]: e.target.value })
  }

  const addProduct = async () => {

    console.log(productDetails)

    let product = productDetails

    let formData = new FormData()
    formData.append('product', image)

    try {
      const response = await fetch('http://localhost:4000/upload', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: formData,
      })

      const responseData = await response.json()

      if (responseData.success) {
        product.image = responseData.image_url
        console.log(product)
        const  productResponse=await fetch("http://localhost:4000/api/addProduct",{
          method:"POST",
          headers:{
            Accept:"application/json",
            'Content-Type':"application/json",
          },
          body:JSON.stringify(product)
        })
        const productData = await productResponse.json()
        if (productData.success) {
          alert("Product added")
        } else {
          alert("Failed to add product")
        }
      }
    } catch (error) {
      console.error("Error uploading image:", error)
      alert("An error occurred while uploading the product")
    }
  }

  return (
    <div className='addProduct'>
      <div className="addProduct-itemfield">
        <p>Product Title</p>
        <input value={productDetails.name} onChange={changeHandler} type="text" name='name' placeholder='Type here...' />
      </div>
      <div className="addProduct-price">
        <div className="addProduct-itemfield">
          <p>Price</p>
          <input value={productDetails.old_price} onChange={changeHandler} type="text" name='old_price' placeholder='Type here..' />
        </div>
      </div>
      <div className="addProduct-price">
        <div className="addProduct-itemfield">
          <p>Offer Price</p>
          <input value={productDetails.new_price} onChange={changeHandler} type="text" name='new_price' placeholder='Type here..' />
        </div>
      </div>
      <div className="addProduct-itemfield">
        <p>Product Category</p>
        <select value={productDetails.category} onChange={changeHandler} name="category" className="add-product-selector">
          <option value="women">Women</option>
          <option value="men">Men</option>
          <option value="kid">Kid</option>
        </select>
      </div>
      <div className="addProduct-itemfield">
        <label htmlFor="file-input">
          <img src={image ? URL.createObjectURL(image) : upload_area} className='addProduct-thumbnail-img' alt="" />
        </label>
        <input onChange={imageHandler} type="file" name='image' id='file-input' hidden />
      </div>
      <button onClick={addProduct} className='addProduct-btn'> Add</button>
    </div>
  )
}

export default AddProduct
