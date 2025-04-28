import React from 'react';

interface ExperienceItemProps {
  title: string;
  company: string;
  period: string;
  location: string;
  bullets: string[];
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ 
  title, 
  company, 
  period, 
  location, 
  bullets 
}) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-start">
        <h3 className="text-base font-semibold">
          {title} - {company}
        </h3>
        <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">
          {period}
        </span>
      </div>
      <p className="text-sm text-gray-600 mb-1">{location}</p>
      <ul className="list-disc list-inside text-sm space-y-1">
        {bullets.map((bullet, index) => (
          <li key={index}>{bullet}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceItem;