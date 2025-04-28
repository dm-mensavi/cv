import ProjectItem from "../shared/ProjectItem";

const EcomCloneProject: React.FC = () => {
	return (
		<ProjectItem
			title="Application mobile de commerce électronique"
			demoLink="https://github.com/dm-mensavi/jumiaclone"
			bullets={[
				"Développé avec React Native et Redux Toolkit",
				"Implémentation des listes de produits et du panier",
				"Intégration de Firebase pour l'authentification et les données",
			]}
		/>
	);
};

export default EcomCloneProject;
