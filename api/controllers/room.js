import Room from "../models/Room.js";
import { createError } from "../utils/error.js";


// CREATE ROOM
export const createRoom = async (req, res, next)=>{

    const RoomId = req.params.Roomid;
    const newRoom = new Room(req.body);
    
    try {
        const savedRoom = await newRoom.save();
        try {
            await Room.findByIdAndUpdate(RoomId, {$push : {rooms: savedRoom._id}})
        } catch (err) {
            next(err);
        }
        res.status(200).json(savedRoom);
    } catch (err) {
        next(err);
    }


}

// UPDATE ROOM
export const updateRoom = async (req,res,next)=>{   
    try {
        const updatedRoom = await Room.findByIdAndUpdate(
            req.params.id, 
            {$set: req.body}, 
            {new:true}
            );
        res.status(200).json(updatedRoom)
    } catch (err) {
        next(err)
    }
}


// DELETE ROOMS
export const deleteRoom = async (req,res,next)=>{   
    try {
        await Room.findByIdAndDelete(
        req.params.id
        );
      res.status(200).json("Room has been deleted.")
    } catch (error) {
      res.status(500).json(err);
    }
}

// GET ROOMS
export const getRooms = async (req,res,next)=>{
    try {
        const room = await Room.findById(
            req.params.id
            );
        res.status(200).json(room)
    } catch (error) {
        res.status(500).json(err);
    }
}

// GET ALL ROOMS
export const getAllRooms = async (req,res,next)=>{
    const failed = true;

    if (failed) return next(createError(401, "You are not authenticated."));

    try {
        const rooms = await Room.find();
        res.status(200).json(rooms)
    } catch (err) {
        next(err)
    }
}