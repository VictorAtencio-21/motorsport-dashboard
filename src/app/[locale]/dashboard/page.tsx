async function DashboardPage() {
  try {
    return (
      <div>
        <h1>Dashboard page (Dashboard)</h1>
      </div>
    );
  } catch (error) {
    console.error("Error fetching data", error);
    return <div>Error in Dashboard page</div>;
  }
}

export default DashboardPage;
