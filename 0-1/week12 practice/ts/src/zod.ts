import {z} from 'zod';
import express from 'express';

const app = express();

app.use(express.json());

const userSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(2).max(100),
  email: z.string().email(),
  age: z.number().min(0).optional()
});

app.post('/users', (req:any, res:any) => {
  try {
    const user = userSchema.parse(req.body);
    // If validation passes, you can proceed with your logic
    res.status(201).json(user);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ errors: error.errors });
    }
    res.status(500).json({ message: 'Internal Server Error' });
  }
});