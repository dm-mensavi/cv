import React from 'react';
import ExperienceItem from '../shared/ExperienceItem';

const IsiaLabExperience: React.FC = () => {
  return (
    <ExperienceItem
      title="Spécialiste des données"
      company="ISIA LAB - UMONS"
      period="04/2025 - Présent"
      location="Région wallonne, Belgique (Remote)"
      bullets={[
        "Développement d'outils Python pour le web scraping",
        "Création de pipelines de données pour la normalisation et l'annotation IA",
        "Conception d'interfaces interactives de visualisation de données"
      ]}
    />
  );
};

export default IsiaLabExperience;