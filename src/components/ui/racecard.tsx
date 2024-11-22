import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
  CardFooter,
  CardHeader,
} from "./card";
import { Schedule } from "@/lib/interfaces";
import Link from "next/link";
import FlagComponent from "../media/FlagComponent";

const RaceCard = (schedule: Schedule) => {
  const {
    raceName,
    Circuit: { Location },
    date: date_start,
    round,
    time,
  } = schedule;

  return (
    <Link href={`schedule/${round}`}>
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>{raceName}</CardTitle>
            <FlagComponent country={Location.country} />
          </div>
        </CardHeader>
        <CardContent>
          <CardDescription>
            {Location.locality}, {Location.country}
          </CardDescription>
          <CardDescription>
            {date_start} - {time}
          </CardDescription>
        </CardContent>
      </Card>
    </Link>
  );
};

export default RaceCard;
