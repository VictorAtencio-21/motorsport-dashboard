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
