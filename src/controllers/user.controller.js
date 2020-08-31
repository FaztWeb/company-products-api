import User from "../models/User";

export const createUser = async (req, res) => {
  const { email, password, role } = req.body;
  const user = new User({ email, password, role });
  user.password = await User.encryptPassword(user.password);
  const savedUser = await user.save();

  return res.status(200).json({
    _id: savedUser._id,
    email: savedUser.email,
    role: savedUser.role,
  });
};

export const getUsers = async (req, res) => {};

export const getUser = async (req, res) => {};
