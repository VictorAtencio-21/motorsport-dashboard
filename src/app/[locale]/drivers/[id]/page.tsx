export const metadata = {
  title: "RaceSync - Driver",
  description:
    "RaceSync is a web application that provides information about the Formula 1 season, constructors and drivers.",
};

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
