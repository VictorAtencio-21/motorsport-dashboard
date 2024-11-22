import { cn, MatchFlagsWithCountry } from "@/lib/utils";
import Image from "next/image";
interface FlagComponentProps {
  country: string;
  className?: string;
}

const FlagComponent = ({ country, className }: FlagComponentProps) => {
  return (
    <Image
      src={MatchFlagsWithCountry(country) || "/Logos/RaceSyncLogo.png"}
      alt={country}
      width={50}
      height={50}
      className={cn(className)}
    />
  );
};

export default FlagComponent;
