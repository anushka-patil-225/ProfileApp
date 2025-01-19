import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProfileCard from "../components/ProfileCard";
import MapComponent from "../components/MapComponent";

const HomePage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [locationFilter, setLocationFilter] = useState<string>("");
  const [selectedProfile, setSelectedProfile] = useState<{
    id: number;
    name: string;
    latitude: number;
    longitude: number;
  } | null>(null);

  const navigate = useNavigate();

  const profiles = [
    {
      id: 1,
      name: "Aarav Sharma",
      photo: "man.png",
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
      photo: "female.png",
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
      photo: "man.png",
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
      photo: "female.png",
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
      photo: "man.png",
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
      photo: "female.png",
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
      photo: "man.png",
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
      photo: "female.png",
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
      photo: "man.png",
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
      photo: "female.png",
      description: "Cloud Architect from Jaipur",
      location: "Jaipur",
      latitude: 26.9124,
      longitude: 75.7873,
      contact: "sanya.kapoor@example.com",
      interests: ["Cloud Computing", "Hiking", "Baking"],
    },
  ];

  const filteredProfiles = profiles.filter(
    (profile) =>
      profile.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (locationFilter === "" || profile.location === locationFilter)
  );

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Profiles</h1>

      <div className="mb-6">
        <button
          onClick={() => navigate("/admin")}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Go to Admin Panel
        </button>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-4 mb-6">
        <input
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border border-gray-300 rounded px-4 py-2 w-full md:w-1/3"
        />

        <select
          value={locationFilter}
          onChange={(e) => setLocationFilter(e.target.value)}
          className="border border-gray-300 rounded px-4 py-2 w-full md:w-1/3"
        >
          <option value="">All Locations</option>
          {Array.from(new Set(profiles.map((profile) => profile.location))).map(
            (location, index) => (
              <option key={index} value={location}>
                {location}
              </option>
            )
          )}
        </select>
      </div>

      <div className="flex flex-row flex-wrap gap-6">
        {filteredProfiles.map((profile) => (
          <ProfileCard
            key={profile.id}
            name={profile.name}
            photo={profile.photo}
            description={profile.description}
            onDetailsClick={() => navigate(`/profile/${profile.id}`)}
            onSummaryClick={() =>
              setSelectedProfile({
                id: profile.id,
                name: profile.name,
                latitude: profile.latitude,
                longitude: profile.longitude,
              })
            }
          />
        ))}
      </div>

      {selectedProfile && (
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">
            Map for {selectedProfile.name}
          </h2>
          <MapComponent
            key={selectedProfile.id}
            latitude={selectedProfile.latitude}
            longitude={selectedProfile.longitude}
            name={selectedProfile.name}
          />
        </div>
      )}
    </div>
  );
};

export default HomePage;
