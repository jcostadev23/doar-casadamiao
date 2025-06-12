export const dynamic = "force-dynamic";

import HeartThanks from "@/components/HeartContainer";
import LinkDoar from "@/components/LinkDoar";
import { getHeartNames } from "@/utils/apiCall";
import { use } from "react";

export default function Home() {
  const heartNames = use(getHeartNames());

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="flex flex-col md:flex-row items-center justify-center">
        <HeartThanks heartNames={heartNames} />
        <h1 className="text-2xl font-bold md:text-4xl">
          Faça bater um coração
        </h1>
      </div>
      <LinkDoar />
    </div>
  );
}
