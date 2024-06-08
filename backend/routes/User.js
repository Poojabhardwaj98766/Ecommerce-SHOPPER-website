const express=require("express")
const {createUser,usersignin} =require("../Controllers/User")
const userRouter=express.Router()

userRouter.post('/signup',createUser)
userRouter.post('/signin',usersignin)

module.exports=userRouter;