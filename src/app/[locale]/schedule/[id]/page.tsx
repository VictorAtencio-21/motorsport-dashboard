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
  const Race = Races[0];

  const {
    Circuit,
    raceName,
    date,
    time,
    FirstPractice,
    Qualifying,
    SecondPractice,
  } = Race;

  return (
    <div className="container p-5">
      <div className="grid grid-cols-1 md:grid-cols-5 items-center justify-center">
        <div>
          <FlagComponent country={Circuit?.Location?.country} size={280} />
        </div>
        <div className="col-span-2">
          <h1 className="text-5xl font-bold">{raceName}</h1>
          <p className="text-xl">
            {Circuit?.Location?.locality}, {Circuit?.Location?.country}
          </p>
        </div>
        <div>Race Side Info</div>
        <div>Race Results</div>
      </div>
    </div>
  );
}

export default RacePage;
