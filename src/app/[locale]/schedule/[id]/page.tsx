export const metadata = {
  title: "RaceSync - Race",
  description:
    "RaceSync is a web application that provides information about the Formula 1 season, constructors and drivers.",
};

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
