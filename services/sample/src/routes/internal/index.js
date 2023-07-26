import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("[GET] Internal ");
});

router.get("/about", (req, res) => {
  res.send("[GET] ABOUT Internal");
});

export default router;
