import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function MatchFlagsWithCountry(country: string) {
  switch (country) {
    case "Bahrain":
      return "/Flags/Bahrain.svg";
    case "Saudi Arabia":
      return "/Flags/Saudi_Arabia.svg";
    case "Australia":
      return "/Flags/Australia.svg";
    case "Italy":
      return "/Flags/Italy.svg";
    case "Monaco":
      return "/Flags/Monaco.svg";
    case "Azerbaijan":
      return "/Flags/Azerbaijan.svg";
    case "Canada":
      return "/Flags/Canada.svg";
    case "Japan":
      return "/Flags/Japan.svg";
    case "Mexico":
      return "/Flags/Mexico.svg";
    case "United States":
      return "/Flags/USA.svg";
    case "USA":
      return "/Flags/USA.svg";
    case "Brazil":
      return "/Flags/Brazil.svg";
    case "UAE":
      return "/Flags/UAE.svg";
    case "China":
      return "/Flags/China.svg";
    case "Spain":
      return "/Flags/Spain.svg";
    case "Austria":
      return "/Flags/Austria.svg";
    case "UK":
      return "/Flags/UK.svg";
    case "Hungary":
      return "/Flags/Hungary.svg";
    case "Belgium":
      return "/Flags/Belgium.svg";
    case "Netherlands":
      return "/Flags/Netherlands.svg";
    case "Singapore":
      return "/Flags/Singapore.svg";
    case "Qatar":
      return "/Flags/Qatar.svg";
  }
}
