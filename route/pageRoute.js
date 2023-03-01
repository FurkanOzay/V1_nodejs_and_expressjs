import express from "express";
import * as pageController from "../controllers/pageController.js";

const router = express()

router.route("/").get(pageController.anaSayfayiGetir)
router.route('/hakkimizda').get(pageController.hakkimizdaGetir)

export default router