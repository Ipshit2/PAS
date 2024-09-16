import {Router} from "express"

import { register, login, logout, dashboard} from "../controllers/user.controller.js";
const router = Router()

router.route("/register").post(register)
router.route("/login").post(login)
router.route("/logout").post(logout)
router.route("/dashboard").get(dashboard)
router.route("/dashboard").put(dashboard)


export default router

