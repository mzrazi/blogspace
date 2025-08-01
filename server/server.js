import express from 'express';
import dotenv from 'dotenv';

dotenv.config()
import cors from 'cors';
import connectDB from './config/db.js';
import userRoutes from './routes/userRoutes.js';
import blogRoutes from './routes/blogRoutes.js';
import authRoutes from './routes/authRoutes.js';




const app = express();
app.use(cors());

connectDB();


app.use(express.json());
app.use("/api/users", userRoutes);
app.use("/api/blogs",blogRoutes);
app.use("/api/auth", authRoutes);



const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});