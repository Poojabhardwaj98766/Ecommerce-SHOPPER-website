const Product = require('../model/Product')
//Adding Product
const addProduct = async (req, res) => {
    let products=await Product.find({});
    let id;
    if(products.length>0){
        let last_product_array=products.slice(-1);
        let last_product=last_product_array[0];
        id=last_product.id+1;
    }
    else{
        id=1;
    }
    const product = new Product({
        id:id,
        name: req.body.name,
        image: req.body.image,
        category: req.body.category,
        new_price: req.body.new_price,
        old_price: req.body.old_price,
    });
    console.log(product)
    await product.save();
    console.log("saved")
    res.json({
        success: true,
        name: req.body.name,
    })
}

//deleting products
const removeProduct=async(req,res)=>{
    await Product.findOneAndDelete({id:req.body.id});
    console.log("removed")
    res.json({
        success:true,
        name:req.body.name
    })
}

//getting all products
const getProducts=async(req,res)=>{
    const products=await Product.find({})
    console.log("all products fetched")
    res.send(products);
}
module.exports={addProduct,removeProduct,getProducts}