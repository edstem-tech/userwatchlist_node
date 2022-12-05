const express=require('express');
const router=express.Router();
const newController = require('../controllers/newController');


router.post('/register',newController.register)
router.post('/login',newController.login)

module.exports=router;