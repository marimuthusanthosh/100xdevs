const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const app = express();
app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: "http://localhost:5173", // React frontend
    credentials: true,
  })
);

const JWT_SECRET = "supersecret"; // use env var in real app
const USERS = [
  { id: 1, username: "john", password: bcrypt.hashSync("123456", 10), name: "John Doe" },
];

// ✅ Helper middleware
import { Request, Response, NextFunction } from "express";

// Extend Express Request type to include 'user'
declare global {
  namespace Express {
    interface Request {
      user?: any;
    }
  }
}

function authMiddleware(req: Request, res: Response, next: NextFunction) {
  const token = req.cookies.authToken;
  if (!token) return res.status(401).json({ message: "Not authenticated" });

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
}

// ✅ Auth Routes
app.post("/signup", async (req: Request, res: Response) => {
  const { username, password, name } = req.body;
  if (USERS.find((u) => u.username === username)) {
    return res.status(400).json({ message: "User already exists" });
  }
  const hashed = await bcrypt.hash(password, 10);
  const newUser = { id: USERS.length + 1, username, password: hashed, name };
  USERS.push(newUser);
  res.json({ message: "Signup successful" });
});

app.post("/login", async (req: Request, res: Response) => {
  const { username, password } = req.body;
  const user = USERS.find((u) => u.username === username);
  if (!user) return res.status(401).json({ message: "Invalid username" });

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) return res.status(401).json({ message: "Invalid password" });

  const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, {
    expiresIn: "7d",
  });

  res.cookie("authToken", token, {
    httpOnly: true,
    secure: false, // true in production with HTTPS
    sameSite: "lax",
    maxAge: 1000 * 60 * 60 * 24 * 7,
  });

  res.json({ message: "Login successful" });
});

app.post("/logout", (req: Request, res: Response) => {
  res.clearCookie("authToken");
  res.json({ message: "Logged out" });
});

// ✅ Protected Routes
app.get("/profile", authMiddleware, (req: Request, res: Response) => {
  const user = USERS.find((u) => u.id === req.user.id);
  res.json({ message: "Profile data", user });
});

app.get("/feed", authMiddleware, (req: Request, res: Response) => {
  res.json({
    message: "Feed data",
    posts: [
      { id: 1, author: "Alice", content: "Hello world!" },
      { id: 2, author: "Bob", content: "This is my first post!" },
    ],
  });
});

app.post("/share", authMiddleware, (req: Request, res: Response) => {
  const { content } = req.body;
  res.json({ message: "Post shared successfully", content });
});

app.get("/messages", authMiddleware, (req: Request, res: Response) => {
  res.json({ messages: [{ from: "Alice", text: "Hey John!" }] });
});

app.get("/notifications", authMiddleware, (req: Request, res: Response) => {
  res.json({ notifications: ["You have 2 new connection requests"] });
});

app.listen(4000, () => console.log("Server running on http://localhost:4000"));
