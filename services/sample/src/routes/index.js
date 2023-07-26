import express from "express";

import v1Router from "./v1";
import internalRouter from "./internal";

const router = express.Router();

router.use("/v1", v1Router);
router.use("/internal", internalRouter); // TODO: Add internal filter, probably in nginx

export default router;
