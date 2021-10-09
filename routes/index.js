const express = require("express");
const router = express.Router();
const db = require("../database");

router.get("/", async (req, res, next) => {
  // const result = await db.query("SELECT 1 + 1");
  const result = await db.query("SELECT NOW()");
  res.json(result);
});

module.exports = router;
