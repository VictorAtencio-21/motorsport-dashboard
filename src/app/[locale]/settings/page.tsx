export const metadata = {
  title: "RaceSync - Settings",
  description:
    "RaceSync is a web application that provides information about the Formula 1 season, constructors and drivers.",
};

async function SettingsPage() {
  try {
    return (
      <div>
        <h1>Settings page (Settings)</h1>
      </div>
    );
  } catch (error) {
    console.error("Error fetching data", error);
    return <div>Error in Settings page</div>;
  }
}

export default SettingsPage;
