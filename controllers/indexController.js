"use strict";
const { order } = require("paypal-rest-sdk");
const models = require("../models");

const controller = {
  showHomepage: async (req, res) => {
    // Recent products
    const recentProducts = await models.Product.findAll({
      attributes: ['id', 'name', 'imagePath', 'stars', 'price', 'oldPrice', 'createdAt'],
      order: [["createdAt", "DESC"]],
      limit: 10
    });
    // console.log(recentProducts)
    res.locals.recentProducts = recentProducts

    // Feature products
    const featureProducts = await models.Product.findAll({
      attributes: ['id', 'name', 'imagePath', 'stars', 'price', 'oldPrice'],
      order: [["stars", "DESC"]],
      limit: 10
    });
    
    res.locals.featureProducts = featureProducts

    // Category
    const categories = await models.Category.findAll();
    const secondArray = categories.splice(2, 2);
    const thirdArray = categories.splice(1, 1);
    res.locals.categoryArray = [categories, secondArray, thirdArray];

    // Brand
    const brands = await models.Brand.findAll();
    res.render("index", { brands });
  },
  showPage: (req, res, next) => {
    const pages = [
      "cart",
      "checkout",
      "contact",
      "login",
      "my-account",
      "product-detail",
      "product-list",
      "wishlist",
    ];
    if (pages.includes(req.params.page)) {
      return res.render(req.params.page);
    }
    next();
  },
};

module.exports = controller;
