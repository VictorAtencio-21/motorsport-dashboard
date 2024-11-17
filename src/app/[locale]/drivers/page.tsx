async function DriversPage() {
  try {
    return (
      <div>
        <h1>Drivers page (Drivers)</h1>
      </div>
    );
  } catch (error) {
    console.error("Error fetching data", error);
    return <div>Error in Drivers page</div>;
  }
}

export default DriversPage;
