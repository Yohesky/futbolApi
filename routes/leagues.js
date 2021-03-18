const { Router } = require("express");
const router = Router();

const { check } = require("express-validator");
const {
  getLeagues,
  saveLeague,
  deleteLeague,
} = require("../controllers/leagues");
const { validateJWT } = require("../middlewares/validate-jwt");

router.get("/getLeagues", [validateJWT], getLeagues);

router.post("/saveLeague", [validateJWT], saveLeague);

router.delete("/deleteLeague/:id", [validateJWT], deleteLeague);

module.exports = router;
