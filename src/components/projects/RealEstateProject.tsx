import ProjectItem from "../shared/ProjectItem";

const RealEstateProject: React.FC = () => {
	return (
		<ProjectItem
			title="Portail Immobilier"
			demoLink="https://real-estate-ecommerce-two.vercel.app/"
			bullets={[
				"Dirigé le développement Next.js avec une fonctionnalité de filtres",
				"Implémenté des galeries d'images avec la bibliothèque Swiper UI",
				"Ajouté des animations fluides avec Framer Motion",
			]}
		/>
	);
};
export default RealEstateProject;
