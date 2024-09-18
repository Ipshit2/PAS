import {Router} from "express"
import {allpets, create, deletepet, ownerpet} from "../controllers/product.controller.js"


const router = Router()
router.route("/create").post(create)
router.route("/getmypet").get(ownerpet)
router.route("/allpet").get(allpets)


router.route("/:id").delete(deletepet)

export default router