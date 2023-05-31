'use strict'

const express = require('express')
const router = express.Router()
const controller = require('../controllers/userController')
const {body, validationResult} = require('express-validator')

router.get('/checkout', controller.checkout)
router.post('/placeorders',
    body('firstName').notEmpty().withMessage('First name is required!'),
    body('lastName').notEmpty().withMessage('Last name is required!').isEmail().withMessage('Invalid email address!'),
    body('email').notEmpty().withMessage('Email is required!'),
    body('mobile').notEmpty().withMessage('Mobile is required!'),
    body('address').notEmpty().withMessage('Address is required!'),
    (req, res, next) => {
        let errors = validationResult(req)
        if(!errors.isEmpty()){
            let errorArray = errors.array()
            for(let i = 0; i < errorArray.length; i++){
                message += errorArray[i].msg + "<br/>"
            }
            return res.render('error', {message})
        }
        else next()
    })