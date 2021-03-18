const { response } = require("express");
const Team = require("../models/teams");

const getTeams = async (req, res = response) => {
  const teams = await Team.find({ user: req.uid });

  res.json({
    ok: true,
    teams,
  });
};

const saveTeam = async (req, res = response) => {
  const userId = req.uid;
  const team = new Team({
    name: req.body.name,
    idTeam: req.body.id,
    area: req.body.area,
    user: userId,
    clubColors: req.body.clubColors,
    crestUrl: req.body.crestUrl,
    email: req.body.email,
    shortName: req.body.shortName,
    tla: req.body.tla,
    venue: req.body.venue,
    website: req.body.website,
    phone: req.body.phone,
    founded: req.body.founded
  });
  
  console.log(req.body)
  console.log(team)

  try {
    const teamSaved = await team.save();

    res.json({
      ok: true,
      teamSaved,
    });
  } catch (err) {
    res.status(500).json({
      ok: false,
      msg: "contact your administrator",
    });
  }
};

const deleteTeam= async (req, res = response) => {

  let idTeam = req.params.id
  let idUser = req.uid

  let teams = await Team.findOneAndDelete({user: idUser,idTeam})
  console.log(teams)
  
  res.json({
    ok: true,
    msg: "League deleted",
  });
};

module.exports = {
  getTeams,
  saveTeam,
  deleteTeam,
};
