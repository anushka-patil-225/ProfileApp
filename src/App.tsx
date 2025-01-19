import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProfileDetails from "./pages/ProfileDetails";
import AdminPage from "./pages/AdminPage";

const App: React.FC = () => {
  const profiles = [
    {
      id: 1,
      name: "Aarav Sharma",
      photo: "https://via.placeholder.com/150",
      description: "Software Developer from Bengaluru",
      location: "Bengaluru",
      latitude: 12.9716,
      longitude: 77.5946,
      contact: "aarav.sharma@example.com",
      interests: ["Programming", "Traveling", "Photography"],
    },
    {
      id: 2,
      name: "Riya Gupta",
      photo: "https://via.placeholder.com/150",
      description: "UI/UX Designer based in Mumbai",
      location: "Mumbai",
      latitude: 19.076,
      longitude: 72.8777,
      contact: "riya.gupta@example.com",
      interests: ["Designing", "Dancing", "Painting"],
    },
    {
      id: 3,
      name: "Kabir Singh",
      photo: "https://via.placeholder.com/150",
      description: "Full Stack Developer from Delhi",
      location: "Delhi",
      latitude: 28.7041,
      longitude: 77.1025,
      contact: "kabir.singh@example.com",
      interests: ["Coding", "Gaming", "Fitness"],
    },
    {
      id: 4,
      name: "Ananya Verma",
      photo: "https://via.placeholder.com/150",
      description: "Data Scientist from Hyderabad",
      location: "Hyderabad",
      latitude: 17.385,
      longitude: 78.4867,
      contact: "ananya.verma@example.com",
      interests: ["Machine Learning", "Cooking", "Music"],
    },
    {
      id: 5,
      name: "Ishaan Patel",
      photo: "https://via.placeholder.com/150",
      description: "Product Manager from Ahmedabad",
      location: "Ahmedabad",
      latitude: 23.0225,
      longitude: 72.5714,
      contact: "ishaan.patel@example.com",
      interests: ["Product Development", "Reading", "Cycling"],
    },
    {
      id: 6,
      name: "Meera Iyer",
      photo: "https://via.placeholder.com/150",
      description: "Software Engineer from Chennai",
      location: "Chennai",
      latitude: 13.0827,
      longitude: 80.2707,
      contact: "meera.iyer@example.com",
      interests: ["Coding", "Classical Music", "Yoga"],
    },
    {
      id: 7,
      name: "Arjun Das",
      photo: "https://via.placeholder.com/150",
      description: "DevOps Engineer from Kolkata",
      location: "Kolkata",
      latitude: 22.5726,
      longitude: 88.3639,
      contact: "arjun.das@example.com",
      interests: ["DevOps", "Gardening", "Photography"],
    },
    {
      id: 8,
      name: "Priya Nair",
      photo: "https://via.placeholder.com/150",
      description: "Cybersecurity Analyst from Kochi",
      location: "Kochi",
      latitude: 9.9312,
      longitude: 76.2673,
      contact: "priya.nair@example.com",
      interests: ["Cybersecurity", "Swimming", "Volunteering"],
    },
    {
      id: 9,
      name: "Rohan Joshi",
      photo: "https://via.placeholder.com/150",
      description: "AI Researcher from Pune",
      location: "Pune",
      latitude: 18.5204,
      longitude: 73.8567,
      contact: "rohan.joshi@example.com",
      interests: ["Artificial Intelligence", "Chess", "Writing"],
    },
    {
      id: 10,
      name: "Sanya Kapoor",
      photo: "https://via.placeholder.com/150",
      description: "Cloud Architect from Jaipur",
      location: "Jaipur",
      latitude: 26.9124,
      longitude: 75.7873,
      contact: "sanya.kapoor@example.com",
      interests: ["Cloud Computing", "Hiking", "Baking"],
    },
  ];

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route
          path="/profile/:id"
          element={<ProfileDetails profiles={profiles} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
