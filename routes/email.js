const { Router } = require("express");
const router = Router();
const { sendEmail } = require("../controllers/email");

router.post("/send-mail", sendEmail)


module.exports = router