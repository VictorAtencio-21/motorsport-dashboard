interface Meeting {
  id: number;
  name: string;
  date: string;
  // Add other relevant fields
}

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

// export Meeting interface by module
export type { Meeting, Constructor, Driver };
