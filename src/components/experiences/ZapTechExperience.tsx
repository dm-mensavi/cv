import React from 'react';
import ExperienceItem from '../shared/ExperienceItem';


const ZapTechExperience: React.FC = () => {
  return (
    <ExperienceItem
      title="Développeur Frontend"
      company="Zap Technologies"
      period="09/2023 - 12/2023"
      location="Kumasi, Ghana (Télétravail)"
      bullets={[
        "Développement de sites web multipages avec Next.js et Framer Motion",
        "Optimisation des performances et implémentation de designs responsifs",
        "Revue de code et encadrement de développeurs juniors"
      ]}
    />
  );
};

export default ZapTechExperience;