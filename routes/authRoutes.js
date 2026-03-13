const express =require("express")

const router = express.Router();
const {login,logOut,register} = require("../controllers/authController");


router.post("/register",register);

router.post("/login",login);

router.get("/logOut",logOut);

module.exports = router;