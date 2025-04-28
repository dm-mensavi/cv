import ProjectItem from "../shared/ProjectItem"

const SkyVaultProject: React.FC = () => {
  return (
    <ProjectItem
      title="SkyVault - Gestion de Fichiers"
      demoLink="https://github.com/dm-mensavi/skyvault.git"
      bullets={[
        "Plateforme web de stockage cloud avec Django et Tailwind CSS",
        "Tableau de bord analytique pour le suivi des fichiers",
        "Opérations avancées sur les fichiers (copier, déplacer, renommer)"
      ]}
    />
  );
};

export default SkyVaultProject;