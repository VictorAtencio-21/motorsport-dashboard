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
import { Button } from "./button";

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
          <CardTitle>{raceName}</CardTitle>
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
