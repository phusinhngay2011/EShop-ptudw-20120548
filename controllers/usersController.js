'use strict'

const controller = {}
const models = require('../models')

controller.checkout = async (req, res) => {
    // let userId = Math.floor(Math.random() * 100)
    let userId = 1
    let addresses = await models.Address.findAll({
        where: {userId}
    })
    res.locals.addresses = addresses
    res.locals.cart = req.session.cart.getCart()
    res.render('checkout')
}

controller.placeorders = async (req, res) =>{
    let userId = 1;
    // let {addressesId, paymenet} = req.body
    let addressId = isNaN(req.body.addressId)? 0: parseInt(req.body.addressId)
    let address = await models.Address.findByPk(addressId)

    if(!address){
        address = await models.Address.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            mobile: req.body.mobile,
            address: req.body.address,
            country: req.body.country,
            city: req.body.city,
            state: req.body.state,
            zipCode: req.body.zipCode,
            isDefault: req.body.isDefault,
            userId
        })
    }
    console.log(address)
    let cart = req.session.cart
    cart.paymentMethod = req.body.payment
    cart.shippingAddress = `${address.firstName} ${address.firstName}, Email: ${address.email}, Mobile: ${address.mobile}, Address: ${address.address}, ${address.city}, ${address.state}, ${address.country}, ${address.zipCode}`
    switch(req.body.payment){
        case 'PAYPAL':
            return saveOrder(req, res, 'PAID')     
        case 'COD':
            return saveOrder(req, res, 'UNPAID')
    }
    return res.redirect('/users/checkout')
}

async function saveOrder(req, res, status){
    let userId = 1
    let {items, ...others} = req.session.cart.getCart()
    let order = await models.Order.create({
        userId,
        ...others,
        status
    })
    let orderDetails = []
    items.forEach(item => {
        orderDetails.push({
            orderId: order.id,
            productId: item.product.id,
            price: item.product.price,
            quantity: item.quantity,
            total:item.total
        })
    });
    await models.OrderDetail.bulkCreate(orderDetails)
    req.session.cart.clear()
    return res.render('error', {message: 'Thank you for your order!'})
}

module.exports = controller;