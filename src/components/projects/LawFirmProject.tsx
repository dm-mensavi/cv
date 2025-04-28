import ProjectItem from "../shared/ProjectItem";

const LawFirmProject: React.FC = () => {
  return (
    <ProjectItem
      title="Site Web du Cabinet d'Avocats"
      demoLink="https://aawans-zaptek.vercel.app/"
      bullets={[
        "Création d'un site réactif pour un cabinet d'avocats avec Next.js",
        "Création de profils d'équipe avec des éléments interactifs",
        "Ajout de transitions fluides entre les sections"
      ]}
    />
  );
};
export default LawFirmProject;