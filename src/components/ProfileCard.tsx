import React from "react";

interface ProfileCardProps {
  name: string;
  photo: string;
  description: string;
  onSummaryClick: () => void;
  onDetailsClick: () => void;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  photo,
  description,
  onSummaryClick,
  onDetailsClick,
}) => (
  <div className="flex items-center bg-white shadow-md rounded-lg border border-gray-300 p-4 hover:shadow-lg transition-shadow">
    <img
      src={photo}
      alt={`${name}'s photo`}
      className="w-24 h-24 object-cover rounded-lg mr-6"
    />
    <div className="flex-grow">
      <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
      <p className="text-sm text-gray-600 mt-2">{description}</p>
      <div className="mt-4 flex gap-2">
        <button
          onClick={onDetailsClick}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          View Details
        </button>
        <button
          onClick={onSummaryClick}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Summary
        </button>
      </div>
    </div>
  </div>
);

export default ProfileCard;
