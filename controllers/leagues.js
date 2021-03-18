const { response } = require("express");
const League = require("../models/leagues");

const getLeagues = async (req, res = response) => {
  const leagues = await League.find({ user: req.uid });

  res.json({
    ok: true,
    leagues,
  });
};

const saveLeague = async (req, res = response) => {
  const userId = req.uid;
  const league = new League({
    name: req.body.name,
    code: req.body.code,
    idLeague: req.body.id,
    area: req.body.area,
    user: userId,
  });

  try {
    const leagueSaved = await league.save();

    res.json({
      ok: true,
      leagueSaved,
    });
  } catch (err) {
    res.status(500).json({
      ok: false,
      msg: "contact your administrator",
    });
  }
};

const deleteLeague = async (req, res = response) => {

  let idLeague = req.params.id
  let idUser = req.uid

  let leagues = await League.findOneAndDelete({user: idUser,idLeague})
  console.log(leagues)
  
  res.json({
    ok: true,
    msg: "League deleted",
  });
};

module.exports = {
  getLeagues,
  saveLeague,
  deleteLeague,
};
