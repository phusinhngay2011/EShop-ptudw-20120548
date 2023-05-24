"use strict";
const models = require('../models')

const controller = {
  showHomepage: async (req, res) => {
    const categories = await models.Category.findAll()
    const secondArray = categories.splice(2, 2)
    const thirdArray = categories.splice(1, 1)
    res.locals.categoryArray = [
        categories,
        secondArray,
        thirdArray
    ]

    const brands = await models.Brand.findAll() 
    res.render("index", {brands});
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
    ]
    if (pages.includes(req.params.page)) {
      return res.render(req.params.page);
    }
    next()
  },
};

module.exports = controller;
