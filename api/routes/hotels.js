import express from "express";
import { countByCity, createHotel, deleteHotel, getAllHotels, getHotels, updateHotel } from "../controllers/hotel.js";
import Hotel from "../models/Hotel.js";
import { createError } from "../utils/error.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

/** verifyAdmin for CREATE, UPDATE, DELETE */
//CREATE using post
router.post("/", verifyAdmin, createHotel);
//UPDATE using put and find by id and update
router.put("/:id", verifyAdmin, updateHotel);
//DELETE using delete and find by id and delete
router.delete("/:id", verifyAdmin, deleteHotel);

/** No verification needed for getting */
//GET using get and find by id
router.get("/find/:id", getHotels);
router.get("/countByCity", countByCity);
router.get("/countByType", getHotels);

//GET ALL using get all, :id not needed since selecting all
router.get("/", getAllHotels);

export default router;
