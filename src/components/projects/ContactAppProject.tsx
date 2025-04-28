import ProjectItem from "../shared/ProjectItem";

const ContactAppProject: React.FC = () => {
	return (
		<ProjectItem
			title="ContactApp - Gestionnaire JavaFX"
			demoLink="https://github.com/dm-mensavi/contacts_app"
			bullets={[
				"Application JavaFX avec authentification Firebase",
				"CRUD en temps réel avec Firebase",
				"Interface utilisateur propre pour gestion des contacts",
			]}
		/>
	);
};
export default ContactAppProject;
