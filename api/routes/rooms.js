import express from "express";
import { createRoom, updateRoom, deleteRoom, getRooms, getAllRooms } from "../controllers/room.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

/** verifyAdmin for CREATE, UPDATE, DELETE */
//CREATE using post
router.post("/:hotelid", verifyAdmin, createRoom);
//UPDATE using put and find by id and update
router.put("/:id", verifyAdmin, updateRoom);
//DELETE using delete and find by id and delete
router.delete("/:id", verifyAdmin, deleteRoom);

/** No verification needed for getting */
//GET using get and find by id
router.get("/:id", getRooms);
//GET ALL using get all, :id not needed since selecting all
router.get("/", getAllRooms);


export default router;