import Hotel from '../models/Hotel.js';
import Room from '../models/Room.js';

export async function createHotel(req, res, next) {
  const newHotel = new Hotel(req.body);
  newHotel 
  try {
    const savedHotel = await newHotel.save(); // 
    res.status(200).json(savedHotel);
  }
  catch (error) {
    next(error);
  }
}
export async function updateHotel(req, res, next) {
  try {
    const updateHotel = await Hotel.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
    res.status(200).json(updateHotel);
  }
  catch (error) {
    next(error);
  }
}
export async function deleteHotel(req, res, next) {
  try {
    await Hotel.findByIdAndDelete(req.params.id);
    res.status(200).send("Hotel has just deleted");
  }
  catch (error) {
    next(error);
  }
}

export const getHotel= async (req,res,next) => {
    try{
        const hotel=await Hotel.findById(req.params.id)
        res.status(200).json(hotel)
     }
     catch(error){
        next(error)
     }
}
export async function getHotels(req, res, next) {
  const { min, max, ...others } = req.query;
  try {
    const hotels = await Hotel.find({
      ...others,
      cheapestPrice: { $gt: min | 1, $lt: max || 500000 },
    }).limit(req.query.limit);
    res.status(200).json(hotels);
  } catch (err) {
    next(err);
  }
}

export async function countByCity(req, res, next) {
  const cities = req.query.cities.split(",");
  try {
    const list = await Promise.all(cities.map(newFunction())); // 
    res.status(200).json(list);
  }
  catch (error) {
    next(error);
  }

  function newFunction() {
    return function (city) {
      return Hotel.countDocuments({ city: city });
    };
  }
}
export async function countByType(req, res, next) {
  try {
    const hotelCount = await Hotel.countDocuments({ type: "hotel" }); // count item in database
    const apartmentCount = await Hotel.countDocuments({ type: "apartment" }); //above
    const resortCount = await Hotel.countDocuments({ type: "resort" });
    const villaCount = await Hotel.countDocuments({ type: "villa" });
    const cabinCount = await Hotel.countDocuments({ type: "cabin" });

    res.status(200).json([
      { type: "hotel", count: hotelCount },
      { type: "apartments", count: apartmentCount },
      { type: "resorts", count: resortCount },
      { type: "villas", count: villaCount },
      { type: "cabins", count: cabinCount },
    ]);
  } catch (err) {
    next(err);
  }
}
export async function getHotelRooms(req, res, next) {
  try {
    const hotel = await Hotel.findById(req.params.id);
    const list = await Promise.all(
      hotel.rooms.map((room) => {
        return Room.findById(room);
      })
    );
    res.status(200).json(list);
  } catch (err) {
    next(err);
  }
}
