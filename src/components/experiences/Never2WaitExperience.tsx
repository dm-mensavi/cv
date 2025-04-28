import React from 'react';
import ExperienceItem from '../shared/ExperienceItem';

const Never2WaitExperience: React.FC = () => {
  return (
    <ExperienceItem
      title="Ingénieur Fullstack"
      company="Never2Wait"
      period="04/2025 - Présent"
      location="Tournai, Belgique (Hybride)"
      bullets={[
        "Refonte d'applications web progressives avec Next.js et Azure Functions",
        "Intégration d'outils d'analyse pour des insights business",
        "Collaboration avec les équipes UX/UI pour des fonctionnalités optimisées"
      ]}
    />
  );
};

export default Never2WaitExperience;