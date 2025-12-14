const router = require("express").Router();
const auth = require("../middlewares/auth.middleware");
const role = require("../middlewares/role.middleware");
const controller = require("../controllers/jury.controller");

router.post(
  "/vote/:caseId",
  auth,
  role("juror"),
  controller.vote
);

router.get(
  "/results/:caseId",
  auth,
  controller.results
);

module.exports = router;