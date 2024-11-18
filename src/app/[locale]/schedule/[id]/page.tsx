async function RacePage() {
  try {
    return (
      <div>
        <h1>Race ID page (Race)</h1>
      </div>
    );
  } catch (error) {
    console.error("Error fetching data", error);
    return <div>Error in Race page</div>;
  }
}

export default RacePage;
