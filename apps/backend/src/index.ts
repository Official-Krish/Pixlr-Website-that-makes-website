import express from 'express';
import cors from 'cors';
import userRouter from './routes/user';
import aiRouter from './routes/ai';

const app = express();
app.use(express.json());
app.use(cors({
    credentials: true,
    origin: "http://localhost:5173"
}));

app.use('/api/v1/user', userRouter);
app.use("/api/v1/AI", aiRouter);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});