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
