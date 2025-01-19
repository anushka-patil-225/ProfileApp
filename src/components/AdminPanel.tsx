import React, { useState } from "react";

interface Profile {
  id: number;
  name: string;
  photo: string;
  description: string;
}

const AdminPanel: React.FC = () => {
  const [profiles, setProfiles] = useState<Profile[]>([
    { id: 1, name: "John Doe", photo: "/john.jpg", description: "Developer" },
    { id: 2, name: "Jane Smith", photo: "/jane.jpg", description: "Designer" },
  ]);

  const [newProfile, setNewProfile] = useState<Profile>({
    id: 0,
    name: "",
    photo: "",
    description: "",
  });

  const handleAddProfile = () => {
    setProfiles([...profiles, { ...newProfile, id: Date.now() }]);
    setNewProfile({ id: 0, name: "", photo: "", description: "" });
  };

  const handleDeleteProfile = (id: number) => {
    setProfiles(profiles.filter((profile) => profile.id !== id));
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>
      <div>
        <input
          type="text"
          placeholder="Name"
          value={newProfile.name}
          onChange={(e) =>
            setNewProfile({ ...newProfile, name: e.target.value })
          }
          className="border p-2 mb-2 w-full"
        />
        <input
          type="text"
          placeholder="Photo URL"
          value={newProfile.photo}
          onChange={(e) =>
            setNewProfile({ ...newProfile, photo: e.target.value })
          }
          className="border p-2 mb-2 w-full"
        />
        <textarea
          placeholder="Description"
          value={newProfile.description}
          onChange={(e) =>
            setNewProfile({ ...newProfile, description: e.target.value })
          }
          className="border p-2 mb-2 w-full"
        />
        <button
          onClick={handleAddProfile}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Add Profile
        </button>
      </div>
      <ul className="mt-4">
        {profiles.map((profile) => (
          <li
            key={profile.id}
            className="flex justify-between items-center mb-2"
          >
            <span>{profile.name}</span>
            <button
              onClick={() => handleDeleteProfile(profile.id)}
              className="bg-red-500 text-white px-2 py-1 rounded"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPanel;
