const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("./catchAsyncErrors");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const isAuthenticatedUser = catchAsyncErrors(async(req, res, next)=>{
    const { token } = req.cookies;
    if(!token)
    {
        return next(new ErrorHander("please login to access this Resource",401));
    }
    const decodedDate = jwt.verify(token, process.env.JWT_SECRET);

   req.user = await User.findById(decodedDate.id);
   next();
});




module.exports = {
    isAuthenticatedUser
  
  };
