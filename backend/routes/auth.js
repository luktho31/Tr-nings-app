import express from "express";
const router = express.Router();

// register/login placeholder
router.post("/register", (req, res) => res.send("Register endpoint"));
router.post("/login", (req, res) => res.send("Login endpoint"));

export default router;
