import User from '../models/User.js';

export async function updateUser(req, res, next) {
   try {
      const updateUser = await User.findByIdAndUpdate(req.params.id, { $set: req.body });
      res.status(200).json(updateUser);
   }
   catch (error) {
      next(error);
   }
}
export async function deleteUser(req, res, next) {
   try {
      await User.findByIdAndDelete(req.params.id);
      res.status(200).send("User has just deleted");
   }
   catch (error) {
      next(error);
   }
}
export async function getUser(req, res, next) {
   try {
      const user = await User.findById(req.params.id);
      res.status(200).json(user);
   }
   catch (error) {
      next(error);
   }
}
export async function getUsers(req, res, next) {
   try {
      const users = await User.find();
      res.status(200).json(users);
   }
   catch (error) {
      next(error);
   }
}