const { createUser, signin } = require('../controllers/userCtrl')

const router = require('express').Router()


router.post("/create",createUser);
router.post("/login",signin)


module.exports  = router