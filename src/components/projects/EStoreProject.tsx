import ProjectItem from "../shared/ProjectItem";

const EStoreProject: React.FC = () => {
  return (
    <ProjectItem
      title="E-Store - Plateforme de commerce électronique"
      demoLink="https://fakestore-orpin.vercel.app/products"
      bullets={[
        "Création d'une vitrine Angular avec stylisation TailwindCSS",
        "Mise en œuvre d'un panier d'achat avec RxJS ",
        "Validation des formulaires réactifs avec Angular"
      ]}
    />
  );
};
export default EStoreProject;