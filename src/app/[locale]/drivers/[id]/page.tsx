async function DriverPage() {
  try {
    return (
      <div>
        <h1>Driver ID page (Driver)</h1>
      </div>
    );
  } catch (error) {
    console.error("Error fetching data", error);
    return <div>Error in Driver page</div>;
  }
}

export default DriverPage;
