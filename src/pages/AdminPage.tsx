import React, { useState } from "react";

interface Profile {
  id: number;
  name: string;
  photo: string;
  description: string;
  location: string;
  latitude: number;
  longitude: number;
}

const AdminPage: React.FC = () => {
  const [profiles, setProfiles] = useState<Profile[]>([
    {
      id: 1,
      name: "John Doe",
      photo: "https://via.placeholder.com/150",
      description: "Software Developer from New York",
      location: "New York",
      latitude: 40.7128,
      longitude: -74.006,
    },
    {
      id: 2,
      name: "Jane Smith",
      photo: "https://via.placeholder.com/150",
      description: "UI/UX Designer based in San Francisco",
      location: "San Francisco",
      latitude: 37.7749,
      longitude: -122.4194,
    },
  ]);

  const [newProfile, setNewProfile] = useState<Profile>({
    id: 0,
    name: "",
    photo: "",
    description: "",
    location: "",
    latitude: 0,
    longitude: 0,
  });

  const [editingProfile, setEditingProfile] = useState<Profile | null>(null);

  const handleSaveProfile = () => {
    if (editingProfile) {
      setProfiles((prevProfiles) =>
        prevProfiles.map((profile) =>
          profile.id === editingProfile.id
            ? { ...newProfile, id: profile.id }
            : profile
        )
      );
    } else {
      setProfiles((prevProfiles) => [
        ...prevProfiles,
        { ...newProfile, id: Date.now() },
      ]);
    }
    setNewProfile({
      id: 0,
      name: "",
      photo: "",
      description: "",
      location: "",
      latitude: 0,
      longitude: 0,
    });
    setEditingProfile(null);
  };

  const handleEditProfile = (profile: Profile) => {
    setNewProfile(profile);
    setEditingProfile(profile);
  };

  const handleDeleteProfile = (id: number) => {
    setProfiles((prevProfiles) =>
      prevProfiles.filter((profile) => profile.id !== id)
    );
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Admin Panel</h1>

      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">
          {editingProfile ? "Edit Profile" : "Add New Profile"}
        </h2>
        <input
          type="text"
          placeholder="Name"
          value={newProfile.name}
          onChange={(e) =>
            setNewProfile({ ...newProfile, name: e.target.value })
          }
          className="border border-gray-300 rounded px-4 py-2 mb-2 w-full"
        />
        <input
          type="text"
          placeholder="Photo URL"
          value={newProfile.photo}
          onChange={(e) =>
            setNewProfile({ ...newProfile, photo: e.target.value })
          }
          className="border border-gray-300 rounded px-4 py-2 mb-2 w-full"
        />
        <textarea
          placeholder="Description"
          value={newProfile.description}
          onChange={(e) =>
            setNewProfile({ ...newProfile, description: e.target.value })
          }
          className="border border-gray-300 rounded px-4 py-2 mb-2 w-full"
        ></textarea>
        <input
          type="text"
          placeholder="Location"
          value={newProfile.location}
          onChange={(e) =>
            setNewProfile({ ...newProfile, location: e.target.value })
          }
          className="border border-gray-300 rounded px-4 py-2 mb-2 w-full"
        />
        <input
          type="number"
          placeholder="Latitude"
          value={newProfile.latitude}
          onChange={(e) =>
            setNewProfile({ ...newProfile, latitude: Number(e.target.value) })
          }
          className="border border-gray-300 rounded px-4 py-2 mb-2 w-full"
        />
        <input
          type="number"
          placeholder="Longitude"
          value={newProfile.longitude}
          onChange={(e) =>
            setNewProfile({ ...newProfile, longitude: Number(e.target.value) })
          }
          className="border border-gray-300 rounded px-4 py-2 mb-2 w-full"
        />
        <button
          onClick={handleSaveProfile}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          {editingProfile ? "Update Profile" : "Add Profile"}
        </button>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-4">Profiles</h2>
        <ul>
          {profiles.map((profile) => (
            <li
              key={profile.id}
              className="border border-gray-300 rounded p-4 mb-4 flex justify-between items-center"
            >
              <div>
                <h3 className="font-bold">{profile.name}</h3>
                <p>{profile.location}</p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => handleEditProfile(profile)}
                  className="bg-yellow-500 text-white px-4 py-2 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteProfile(profile.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminPage;
