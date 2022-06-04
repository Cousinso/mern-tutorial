const express = require("express");
const { set } = require("mongoose");
const router = express.Router();
const {
  getGoals,
  setGoal,
  putGoal,
  deleteGoal,
} = require("../controller/goalController");

router.route("/").get(getGoals).post(setGoal);
router.route("/:id").delete(deleteGoal).put(putGoal);

module.exports = router;
