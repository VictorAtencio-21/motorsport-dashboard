async function TeamsPage() {
  try {
    return (
      <div>
        <h1>Teams page (Teams)</h1>
      </div>
    );
  } catch (error) {
    console.error("Error fetching data", error);
    return <div>Error in Teams page</div>;
  }
}

export default TeamsPage;
