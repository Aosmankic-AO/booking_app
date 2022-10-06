import express from "express";
import { updateUser, deleteUser, getUser, getAllUsers } from "../controllers/user.js";
import { verifyToken, verifyUser, verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

// //AUTHENTICATE USER
// router.get("/checkauthentication", verifyToken, (req, res, next)=>{
//     res.send("Hello user, you are logged in")
// });

// router.get("/checkuser/:id", verifyUser, (req, res, next)=>{
//     res.send("Hello user, you are logged in and can delete your account.")
// });

// //AUTHENTICATE ADMIN USER
// router.get("/checkAdmin/:id", verifyAdmin, (req, res, next)=>{
//     res.send("Hello Administrator, you are logged in and can delete any and all accounts.")
// });


//UPDATE using put and find by id and update
router.put("/:id", verifyUser, updateUser);

//DELETE using delete and find by id and delete
router.delete("/:id", verifyUser, deleteUser);

//GET using get and find by id
router.get("/:id", verifyUser, getUser);
//GET ALL using get all, :id not needed since selecting all
// Only admin should have select all ability, verifyAdmin used in place of verifyUser
router.get("/", verifyAdmin, getAllUsers);

export default router;