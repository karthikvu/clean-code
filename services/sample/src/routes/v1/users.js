import express from "express";
const router = express.Router();

router.get("/", async (req, res) => {
  const { useCases, gateways, logger } = req;
  try {
    await useCases.getUsers("Hello");
    res.json({ useCases, msg: "[GET] Users " });
  } catch (err) {
    res.status(500).send();
  }
});

router.get("/about", (req, res) => {
  res.send("[GET] ABOUT Users");
});

export default router;
