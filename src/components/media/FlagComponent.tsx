import { cn, MatchFlagsWithCountry } from "@/lib/utils";
import Image from "next/image";
interface FlagComponentProps {
  country: string;
  className?: string;
  size?: number;
}

const FlagComponent = ({
  country,
  className,
  size = 50,
}: FlagComponentProps) => {
  return (
    <Image
      src={MatchFlagsWithCountry(country) || "/Logos/RaceSyncLogo.png"}
      alt={country}
      width={size}
      height={size}
      className={cn(className)}
    />
  );
};

export default FlagComponent;
