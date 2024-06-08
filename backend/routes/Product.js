const express=require("express")
const{addProduct,removeProduct,getProducts}=require('../Controllers/Product')

const router=express.Router();

router.post('/addProduct',addProduct);
router.post('/:id',removeProduct)
router.get('/allproducts',getProducts)

module.exports=router;