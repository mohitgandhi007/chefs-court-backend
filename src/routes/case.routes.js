const router = require("express").Router();
const auth = require("../middlewares/auth.middleware");
const role = require("../middlewares/role.middleware");
const controller = require("../controllers/case.controller");

router.post(
  "/submit",
  auth,
  role("plaintiff", "defendant"),
  controller.submitCase
);

router.get("/all", auth, controller.getAllCases);

router.patch(
  "/approve/:id",
  auth,
  role("judge"),
  controller.approveCase
);

router.patch(
  "/reject/:id",
  auth,
  role("judge"),
  controller.rejectCase
);

router.delete(
  "/delete/:id",
  auth,
  role("judge"),
  controller.deleteCase
);

module.exports = router;