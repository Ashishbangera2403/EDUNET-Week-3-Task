import express from 'express';
import { loginUser,registerUser ,myProfile,logoutUser,saveToPlaylist} from "../controllers/userControllers.js";
import {isAuth} from "../middlewares/isAuth.js";
const router=express.Router();

router.post("/register",registerUser);
router.post("/login",loginUser);
router.get("/me",isAuth,myProfile)
router.get("/logout",isAuth,logoutUser)
router.post("/song/:id", isAuth, saveToPlaylist);

export default router;