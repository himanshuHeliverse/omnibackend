var express = require('express');
let user =require("./users")
var router = express.Router();
let bodyParser =require("body-parser");

let urlencodedParser =bodyParser.urlencoded({extended:false})
router.use(bodyParser.json())
// /* GET home page. */
const auth = require("../config/middleware");
const { Router } = require('express');



router.use(urlencodedParser)


router.post('/registration', user.Registration)
router.post("/login", user.Login)
router.post("/gettransection", user.user)
router.post("/transection",auth,user.transaction)




// //eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImVtYWlsIjoiaGltYW5zaHU1MzMzM0BnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYiQxMCRReW03VDZJbkx1amlobzdYRFByYTYuOXBHL2c1bWh1SXE0T3lDV0x6a3hDNlRKdGFvYno0LiJ9LCJpYXQiOjE2NDk4NzkzNTksImV4cCI6MTY0OTg4MTE1OX0._VZ4jxeUe_sp2VojGYz_bx4bwY-mj9eGxeWxIzwvZlM


module.exports = router;


