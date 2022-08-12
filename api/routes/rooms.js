import express from 'express';
import { createRoom, deleteRoom, getRoom, getRooms, updateRoom,updateRoomAvailability} from '../controllers/room.js';
import { verifyAdmin } from '../utils/verifyToken.js';

const router = express.Router();
//create 
console.log("Room")
router.post("/:hotelId",verifyAdmin,createRoom)
//Update
router.put("/availability/:id", updateRoomAvailability);
router.put("/:id", verifyAdmin,updateRoom)

//delete
router.delete("/:id/:hotelId",verifyAdmin, deleteRoom)
//get
router.get("/:id", getRoom)
//getall
router.get("/", getRooms)	
export default router
