import { AtText } from "@/components/atoms/AtText";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center w-full h-full gap-4 flex-col">
      <AtText variant="h2">Error 404: Not Found</AtText>
      <AtText variant="paragraph">Could not find requested resource</AtText>
      <Link href="/">
        <AtText variant="link" As="span">
          Return Home
        </AtText>
      </Link>
    </div>
  );
}
