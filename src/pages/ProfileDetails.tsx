import React from "react";
import { useParams, useNavigate } from "react-router-dom";

interface ProfileDetailsProps {
  profiles: {
    id: number;
    name: string;
    photo: string;
    description: string;
    location: string;
    contact: string;
    interests: string[];
  }[];
}

const ProfileDetails: React.FC<ProfileDetailsProps> = ({ profiles }) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const profile = profiles.find((p) => p.id === Number(id));

  if (!profile) {
    return <h1>Profile Not Found</h1>;
  }

  return (
    <div className="p-8">
      <button
        onClick={() => navigate(-1)}
        className="bg-gray-500 text-white px-4 py-2 rounded mb-4"
      >
        Back
      </button>
      <div className="flex flex-col md:flex-row gap-8">
        <img
          src={profile.photo}
          alt={profile.name}
          className="w-48 h-48 object-cover rounded-lg"
        />
        <div>
          <h1 className="text-3xl font-bold">{profile.name}</h1>
          <p className="text-gray-600 mt-2">{profile.description}</p>
          <p className="text-gray-600 mt-2">Location: {profile.location}</p>
          <p className="text-gray-600 mt-2">Contact: {profile.contact}</p>
          <h2 className="text-xl font-bold mt-4">Interests</h2>
          <ul className="list-disc list-inside mt-2">
            {profile.interests.map((interest, index) => (
              <li key={index} className="text-gray-600">
                {interest}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;
