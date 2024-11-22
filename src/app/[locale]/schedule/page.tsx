import { getCurrentSchedule } from "@/lib/ergastf1";
import RaceCard from "@/components/ui/racecard";
import { Schedule } from "@/lib/interfaces";

export const metadata = {
  title: "RaceSync - Schedule",
  description:
    "RaceSync is a web application that provides information about the Formula 1 season, constructors and drivers.",
};

async function SchedulePage() {
  try {
    const { MRData } = await getCurrentSchedule();
    const {
      RaceTable: { Races },
    } = MRData;

    console.log(JSON.stringify(Races, null, 2));

    return (
      <div className="container p-5">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Races.map((schedule: Schedule, index: number) => (
            <RaceCard key={index} {...schedule} />
          ))}
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error fetching data", error);
    return <div>Error in schedule page</div>;
  }
}

export default SchedulePage;
