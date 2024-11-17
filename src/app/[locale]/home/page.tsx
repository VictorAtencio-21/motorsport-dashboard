async function HomePage() {
  try {
    return (
      <div>
        <h1>Home page (Home)</h1>
      </div>
    );
  } catch (error) {
    console.error("Error fetching data", error);
    return <div>Error in Home page</div>;
  }
}

export default HomePage;
