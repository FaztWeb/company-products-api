import { Router } from "express";
const router = Router();

import * as usersCtrl from "../controllers/user.controller";

router.post("/", usersCtrl.createUser);

export default router;
