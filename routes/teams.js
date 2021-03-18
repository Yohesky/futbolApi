const { Router } = require("express");
const router = Router();

const { check } = require("express-validator");
const {
  getTeams,
  saveTeam,
  deleteTeam,
} = require("../controllers/teams");
const { validateJWT } = require("../middlewares/validate-jwt");

router.get("/getTeams", [validateJWT],getTeams);

router.post("/saveTeam", [validateJWT], saveTeam);

router.delete("/deleteTeam/:id", [validateJWT], deleteTeam);

module.exports = router;
