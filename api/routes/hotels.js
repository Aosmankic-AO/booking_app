import express from "express";
import { createHotel, deleteHotel, getAllHotels, getHotels, updateHotel } from "../controllers/hotel.js";
import Hotel from "../models/Hotel.js";
import { createError } from "../utils/error.js";

const router = express.Router();

//CREATE using post
router.post("/", createHotel);

//UPDATE using put and find by id and update
router.put("/:id", updateHotel);

//DELETE using delete and find by id and delete
router.delete("/:id", deleteHotel);

//GET using get and find by id
router.get("/:id", getHotels);
//GET ALL using get all, :id not needed since selecting all
router.get("/", getAllHotels);

export default router;
