const User=require("../model/User")
const jwt =require("jsonwebtoken")

//creating endpoit for usersignup
const createUser=async(req,res)=>{
    let check=await User.findOne({email:req.body.email});
   if(check){
    return res.status(400).json({success:false,error:"existing user found with same email address"})
   }
   let cart={}
   for(let i=0;i<300;i++){
    cart[i]=0;
   }

   const user=new User({
    name:req.body.username,
    email:req.body.email,
    password:req.body.password,
    cartData:cart,
   })

   await user.save();

   const data={
    user:{
        id:user.id
    }
   }
   const token=jwt.sign(data,'secret_ecom')
   res.json({
    success:true,
    token
   })
}

//creating endpoint for usersignin
const usersignin=async(req,res)=>{
    let user=await User.findOne({email:req.body.email})
    if(user){
        const passCompare=req.body.password===user.password;
        if(passCompare){
            const data={
                user:{
                    id:user.id
                }
            }
            const token=jwt.sign(data,'secret_ecom')
            res.json({
                succes:true,token
            })
        }
        else{
            res.json({
                success:false,error:"Wrong Password"
            })
        }

    }
    else{
        res.json({
            success:false,error:"Wrong Email Id"
        })
    }

}
module.exports={createUser,usersignin}