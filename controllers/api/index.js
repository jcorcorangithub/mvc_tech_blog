const router = require("express").Router()
const login = require("./loginRoute")
const signup = require("./signUpRoute")


router.use(login)
router.use(signup)

module.exports = router
