const mongoose = require("mongoose");
require("dotenv").config();
const User = require("./models/Users");

const usersData = [
  {
    name: "John Doe",
    email: "john.doe@example.com",
    status: "Active",
    createdAt: new Date("2026-01-10"),
  },
  {
    name: "Jane Smith",
    email: "jane.smith@example.com",
    status: "Inactive",
    createdAt: new Date("2026-01-15"),
  },
  {
    name: "Rahul Verma",
    email: "rahul.verma@gmail.com",
    status: "Active",
    createdAt: new Date("2026-02-04"),
  },
  {
    name: "Neha Sharma",
    email: "neha.sharma@gmail.com",
    status: "Active",
    createdAt: new Date("2026-02-10"),
  },
  {
    name: "Amit Kumar",
    email: "amit.kumar@gmail.com",
    status: "Inactive",
    createdAt: new Date("2026-02-20"),
  },
  {
    name: "Pooja Singh",
    email: "pooja.singh@gmail.com",
    status: "Active",
    createdAt: new Date("2026-03-02"),
  },
  {
    name: "Arjun Mehta",
    email: "arjun.mehta@gmail.com",
    status: "Active",
    createdAt: new Date("2026-03-15"),
  },
  {
    name: "Sneha Kapoor",
    email: "sneha.kapoor@gmail.com",
    status: "Inactive",
    createdAt: new Date("2026-03-25"),
  },
  {
    name: "Rohit Sharma",
    email: "rohit.sharma@gmail.com",
    status: "Active",
    createdAt: new Date("2026-04-05"),
  },
  {
    name: "Anjali Gupta",
    email: "anjali.gupta@gmail.com",
    status: "Active",
    createdAt: new Date("2026-04-12"),
  },
];

const seedUsers = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to database");

    await User.deleteMany({}); 
    // Insert new users
    await User.insertMany(usersData);
    console.log("Users seeded successfully");

    process.exit(0);
  } catch (error) {
    console.error("Error seeding users:", error);
    process.exit(1);
  }
};

seedUsers();
