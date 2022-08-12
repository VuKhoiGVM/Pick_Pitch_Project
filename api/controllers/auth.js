import User from "../models/User.js";
import bcrypt from "bcryptjs";
import { createError } from "../utils/error.js";
import jwt from "jsonwebtoken";

export async function register(req, res, next) {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
  
    const newUser = new User({
      ...req.body, // take all infor of user
      password: hash,
    });

    await newUser.save(); // luu user trong database
    res.status(200).send("User has been created.");
  } catch (err) {
    next(err); // chuyen sang middle ware tiep theo 
  }
}
export async function login(req, res, next) {
  try {
    
    const user = await User.findOne({ username: req.body.username });
    if (!user)
      return next(createError(404, "User not found!"));

    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isPasswordCorrect)
      return next(createError(400, "Wrong password or username!"));


    const token = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.JWT // authentication using services JWT

    );
    const { password, isAdmin, ...otherDetails } = user._doc; // oject destructing
    res
    .cookie("access_token", token, {
      httpOnly: true,
    })
    .status(200)
    .json({ details: { ...otherDetails }, isAdmin });

      console.log(token)
      console.log("thanh cong token")
      console.log(req.cookie);  
  
  } catch (err) { 
    next(err);
  }
}