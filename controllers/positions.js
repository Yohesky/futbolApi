const { response } = require("express");
const Position = require("../models/positions");

const getPositions = async (req, res = response) => {
  const positions = await Position.find({ user: req.uid });

  res.json({
    ok: true,
    positions,
  });
};

const savePositions = async (req, res = response) => {
  console.log(req.body)
  const userId = req.uid;
  const position = new Position({
    code: req.body.code,
    user: userId,
  });
  
  console.log(req.body)
  console.log(position)

  try {
    const positionSaved = await position.save();

    res.json({
      ok: true,
      positionSaved,
    });
  } catch (err) {
    res.status(500).json({
      ok: false,
      msg: "contact your administrator",
    });
  }
};

const deletePositions= async (req, res = response) => {

  let idPosition = req.params.id
  let idUser = req.uid

  let positions = await Position.findOneAndDelete({user: idUser,idPosition})
  console.log(positions)
  
  res.json({
    ok: true,
    msg: "Position deleted",
  });
};

module.exports = {
  getPositions,
  savePositions,
  deletePositions,
};
