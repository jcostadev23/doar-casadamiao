"use client";

import HeartThanks from "@/components/HeartContainer";
import LinkDoar from "@/components/LinkDoar";

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-6">
      <div className="flex items-center">
        <HeartThanks />
        <h1 className="text-4xl font-bold">Faça bater um coração</h1>
      </div>
      <LinkDoar />
    </div>
  );
}
