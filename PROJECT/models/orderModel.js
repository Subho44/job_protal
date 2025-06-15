const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    items: [
        {
            productId : mongoose.Schema.Types.ObjectId,
            name:String,
            price:Number,
            description:String,
            quantity:Number,
            image:String
        },
    ],
    totalAmount:Number,
    createdAt:{type:Date, default:Date.now},
});

module.exports = mongoose.model('Order', orderSchema);
