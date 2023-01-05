import Order from "../models/orderModel.js";
import User from "../models/userModel.js";
import createError from "http-errors";

export const orderPost = async (req, res, next) => {
  try {
    const user = await User.findById(req.body.userId);
    if (user) {
      const order = new Order({
        meals: req.body.meals,
        totalPrice: req.body.total,
        deliveryAddress: req.body.deliveryAddress,
      });

      try {
        await order.save();
      } catch (err) {
        return next(
          createError(500, "Order could not be saved in the database!")
        );
      }

      return res.status(201).json({ success: true, data: order });
    } else {
      return res.json({ success: false, message: "You need to log in first!" });
    }
  } catch (err) {
    console.log(err);
    return next(
      createError(500, "Database could not post the order! Please try again!")
    );
  }
};
