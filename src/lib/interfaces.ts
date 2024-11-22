interface Constructor {
  constructorId: string;
  name: string;
}

interface Driver {
  driverId: string;
  permanentNumber: string;
  code: string;
  url: string;
  givenName: string;
  familyName: string;
  dateOfBirth: string;
  nationality: string;
}

interface Location {
  lat: string;
  long: string;
  locality: string;
  country: string;
}

interface Circuit {
  circuitId: string;
  url: string;
  circuitName: string;
  Location: Location;
}

interface Session {
  date: string;
  time: string;
}

interface Schedule {
  season: string;
  round: string;
  url: string;
  raceName: string;
  Circuit: Circuit;
  date: string;
  time: string;
  FirstPractice: Session;
  Qualifying: Session;
  SecondPractice: Session;
  Sprint: Session;
}

// export Meeting interface by module
export type { Constructor, Driver, Circuit, Location, Session, Schedule };
