import Hotel from "../models/Hotel.js"

// CREATE HOTEL
export const createHotel = async (req,res,next)=>{
    const newHotel = new Hotel(req.body)
   
    try {
        const savedHotel = await newHotel.save()
        res.status(200).json(savedHotel)
    } catch (error) {
        next(err);
    }
}

// UPDATE HOTEL
export const updateHotel = async (req,res,next)=>{   
    try {
        const updatedHotel = await Hotel.findByIdAndUpdate(
            req.params.id, 
            {$set: req.body}, 
            {new:true}
            );
        res.status(200).json(updatedHotel)
    } catch (err) {
        next(err)
    }
}


// DELETE HOTEL
export const deleteHotel = async (req,res,next)=>{   
    try {
        await Hotel.findByIdAndDelete(
        req.params.id
        );
      res.status(200).json("Hotel has been deleted.")
    } catch (error) {
      res.status(500).json(err);
    }
}

// GET HOTEL
export const getHotels = async (req,res,next)=>{
    try {
        const hotel = await Hotel.findById(
            req.params.id
            );
        res.status(200).json(hotel)
    } catch (error) {
        res.status(500).json(err);
    }
}

// GET ALL HOTELS
export const getAllHotels = async (req,res,next)=>{
    const failed = true;

    if (failed) return next(createError(401, "You are not authenticated."));

    try {
        const hotels = await Hotel.find();
        res.status(200).json(hotels)
    } catch (err) {
        next(err)
    }
}