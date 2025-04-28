import ProjectItem from "../shared/ProjectItem";

const CamprideProject: React.FC = () => {
	return (
		<ProjectItem
			title="Campride - Suivi de Navette"
			demoLink="https://github.com/dm-mensavi/campride"
			bullets={[
				"Application web Next.js avec l'API Google Maps",
				"Visualisation en temps réel des navettes sur le campus",
				"Optimisation des performances pour mobile et bureau",
			]}
		/>
	);
};
export default CamprideProject;
