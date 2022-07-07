const express = require("express");
const { set } = require("mongoose");
const router = express.Router();
const {
  getGoals,
  setGoal,
  putGoal,
  deleteGoal,
} = require("../controller/goalController");

const { protect } = require("../middleware/authMiddleware");

router.route("/").get(protect, getGoals).post(protect, setGoal);
router.route("/:id").delete(protect, deleteGoal).put(protect, putGoal);

module.exports = router;
