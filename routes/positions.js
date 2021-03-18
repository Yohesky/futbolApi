const { Router } = require("express");
const router = Router();

const { check } = require("express-validator");
const {
  getPositions,
  savePositions,
  deletePositions,
} = require("../controllers/positions");
const { validateJWT } = require("../middlewares/validate-jwt");

router.get("/getPositions", [validateJWT], getPositions);

router.post("/savePositions", [validateJWT], savePositions);

router.delete("/deletePosition/:id", [validateJWT], deletePositions);

module.exports = router;
