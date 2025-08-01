import User from "../models/User.js";



import Blog from '../models/Blog.js';

export const getCurrentUser = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    if (!user) return res.status(404).json({ message: 'User not found' });

    const blogs = await Blog.find({ author: req.user.id });

    res.json({ user, blogs });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};
