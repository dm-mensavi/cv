import ExperienceItem from '../shared/ExperienceItem';

const TradingExperience: React.FC = () => {
  return (
    <ExperienceItem
      title="Trader Proprietaire"
      company="Indépendant"
      period="2021 - Présent"
      location="À distance"
      bullets={[
        "3+ ans de trading sur les marchés des futures et du forex",
        "Financé par plusieurs sociétés de trading propriétaire",
        "Développement de stratégies de trading algorithmique en Python"
      ]}
    />
  );
};

export default TradingExperience;