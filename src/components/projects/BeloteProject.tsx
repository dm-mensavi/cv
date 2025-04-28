import ProjectItem from "../shared/ProjectItem";

const BeloteProject: React.FC = () => {
  return (
    <ProjectItem
      title="Belote Tournament System"
      demoLink="https://github.com/dm-mensavi/belote-game"
      bullets={[
        "Java app combining pub management with card tournaments",
        "Implemented Belote game logic with scoring and team play",
        "Designed tournament system with leaderboard and prize distribution"
      ]}
    />
  );
};
export default BeloteProject;