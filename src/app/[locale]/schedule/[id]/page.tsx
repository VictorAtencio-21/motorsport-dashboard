import { getSingleSchedule } from "@/lib/ergastf1";
import FlagComponent from "@/components/media/FlagComponent";

export const metadata = {
  title: "RaceSync - Race",
  description:
    "RaceSync is a web application that provides information about the Formula 1 season, constructors and drivers.",
};

async function RacePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const {
    MRData: { RaceTable },
  } = await getSingleSchedule(id);

  const { Races } = RaceTable;

  console.log(Races[0]);

  return (
    <div className="container p-5">
      <div className="grid grid-cols-1 md:grid-cols-4">
        <div>
          <FlagComponent country="us" />
        </div>
        <div>Race Main Info</div>
        <div>Race Side Info</div>
        <div>Race Results</div>
      </div>
    </div>
  );
}

export default RacePage;
