import Link from "next/link";
import React from "react";

interface ProjectItemProps {
  title: string;
  demoLink: string;
  bullets: string[];
}

const ProjectItem: React.FC<ProjectItemProps> = ({ title, demoLink, bullets }) => {
  return (
    <div className="mb-4 mt-3">
      <h3 className="text-base font-semibold">
        {title} |{" "}
        <Link
          href={demoLink}
          target="_blank"
          className="text-blue-700 hover:underline"
        >
          Démo
        </Link>
      </h3>
      <ul className="list-disc list-inside text-sm space-y-1 mt-1">
        {bullets.map((bullet, index) => (
          <li key={index}>{bullet}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectItem;