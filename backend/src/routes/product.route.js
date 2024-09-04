import {Router} from "express"
import {create, deletepet, readall} from "../controllers/product.controller.js"


const router = Router()
router.route("/create").post(create)
router.route("/allpets").get(readall)
router.route("/:id").delete(deletepet)

export default router