const router = require("express").Router();
const {
  addThought,
  removeThought,
  addReaction,
  removeReaction,
  getAllThoughts,
} = require("../../controllers/thought-controller");


router.route("/").get(getAllThoughts);

// /api/thoughts/<userId>
router.route("/:userId").post(addThought);

// /api/thoughts/<userId>/<thoughtId>
router.route("/:userId/:thoughtId").put(addReaction).delete(removeThought);

// /api/thoughts/<userId>/<thoughtId>/<reactionId>
router.route("/:userId/:thoughtId/:reactionId").delete(removeReaction);

module.exports = router;
