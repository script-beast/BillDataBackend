const controller = require("../controllers/bill");
const router = require("express").Router();

router.route("/").get(controller.index).post(controller.create);

router.route("/:id").get(controller.showid);

router.route("/:id/edit").put(controller.update);

router.route("/delete/:id").delete(controller.delete);

module.exports = router;
