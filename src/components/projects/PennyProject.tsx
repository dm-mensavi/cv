import ProjectItem from "../shared/ProjectItem";

const PennyProject: React.FC = () => {
  return (
    <ProjectItem
      title="Penny - Gestion de Finances"
      demoLink="https://github.com/dm-mensavi/penny.git"
      bullets={[
        "Application Android de gestion financière avec Java",
        "Authentification et synchronisation en temps réel via Firebase",
        "Interface utilisateur intuitive pour le suivi des dépenses"
      ]}
    />
  );
};

export default PennyProject;