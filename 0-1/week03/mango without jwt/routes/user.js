const express = require("express");
const router = express.Router();
const z = require("zod");
const { User, Course } = require("../db/index");
const userMiddleware = require("../middlewares/user");


router.use(express.json());
const signupSchema = z.object({
  username: z.string().min(3),
  password: z.string().min(3)
});

router.post("/signup", async (req, res) => {

  const parseResult = signupSchema.safeParse(req.body);

  if (!parseResult.success) {
    return res.status(400).json({ error: "wrong Input format" });
  }

  const { username, password } = parseResult.data;
  const response = await User.create({ username, password });
  console.log(response);
  res.json({ message: "User created successfully" });
});

router.get("/courses", async (req, res) => {
  const response = await Course.find({});
  console.log(response);
  res.json({ message: response });
});
const courseIdSchema = z.object({
  courseId: z.string().length(24)
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {

  const parseResult = courseIdSchema.safeParse(req.body);

  if (!parseResult.success) {
    return res.status(400).json({ error: "wrong Input format" });
  }
  const username = req.headers.username;
  const courseId = req.params.courseId;

  const response = await User.updateOne(
    { username },
    { $push: { purchasedCourses: courseId } }
  );

  console.log(response);
  res.json({ message: "Course purchased successfully" });
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  const user = await User.findOne({ 
    username: req.headers.username
   });

   console.log(user.purchasedCourses);
  const courses = await Course.find({ _id: {
     $in: user.purchasedCourses } 
    });

  res.json({ courses });
});

module.exports = router;
