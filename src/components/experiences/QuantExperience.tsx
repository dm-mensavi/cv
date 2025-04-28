import React from 'react';
import ExperienceItem from '../shared/ExperienceItem';

const QuantExperience: React.FC = () => {
  return (
    <ExperienceItem
      title="Spécialiste des données"
      company="ISIA LAB - UMONS"
      period="04/2025 - Présent"
      location="Région wallonne, Belgique (Remote)"
      bullets={[
        "Développement d'outils Python de web scraping pour données de trading",
        "Normalisation des données financières pour simulation",
        "Conception d'interfaces interactives pour trading"
      ]}
    />
  );
};

export default QuantExperience;