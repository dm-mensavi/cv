import React from 'react';
import ExperienceItem from '../shared/ExperienceItem';

const ZomujoExperience: React.FC = () => {
  return (
    <ExperienceItem
      title="Développeur Backend"
      company="Zomujo Foundation"
      period="09/2023 - 12/2023"
      location="Télétravail"
      bullets={[
        "Migration du backend de .NET vers Node.js, améliorant les performances",
        "Développement d'API RESTful avec Express.js et tests unitaires (Jest)",
        "Intégration de Firebase Authentication pour une sécurité renforcée"
      ]}
    />
  );
};

export default ZomujoExperience;