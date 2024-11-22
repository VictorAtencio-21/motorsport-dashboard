export const metadata = {
  title: "RaceSync - Drivers",
  description:
    "RaceSync is a web application that provides information about the Formula 1 season, constructors and drivers.",
};

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
