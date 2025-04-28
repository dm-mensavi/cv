import ProjectItem from "../shared/ProjectItem";

const MentalHealthProject: React.FC = () => {
	return (
		<ProjectItem
			title="Plateforme de Santé Mentale"
			demoLink="#"
			bullets={[
				"Migration du backend de .NET vers Node.js/Express",
				"Sécurisation avec authentification Firebase",
				"Documentation des API REST avec Swagger UI",
			]}
		/>
	);
};
export default MentalHealthProject;
