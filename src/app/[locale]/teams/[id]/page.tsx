export const metadata = {
  title: "RaceSync - Team",
  description:
    "RaceSync is a web application that provides information about the Formula 1 season, constructors and drivers.",
};

async function TeamPage() {
  try {
    return (
      <div>
        <h1>Team ID page (Team)</h1>
      </div>
    );
  } catch (error) {
    console.error("Error fetching data", error);
    return <div>Error in Team page</div>;
  }
}

export default TeamPage;
