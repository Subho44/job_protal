const Order  = require("../models/orderModel")

exports.placeOrder = async(req,res) => {
    const{items,totalAmount} = req.body;
    const order = new Order({items,totalAmount});
    await order.save();
    res.status(201).json({message:"order placed sucessfull",order});
};