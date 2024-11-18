async function SchedulePage() {
  try {
    return (
      <div>
        <h1>schedule page (schedule)</h1>
      </div>
    );
  } catch (error) {
    console.error("Error fetching data", error);
    return <div>Error in schedule page</div>;
  }
}

export default SchedulePage;
