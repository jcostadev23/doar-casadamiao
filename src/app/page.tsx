"use client";

import HeartThanks from "@/components/HeartContainer";
import LinkDoar from "@/components/LinkDoar";

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-6">
      <div className="flex flex-col md:flex-row items-center justify-center">
        <HeartThanks />
        <h1 className="text-2xl font-bold md:text-4xl">
          Faça bater um coração
        </h1>
      </div>
      <LinkDoar />
    </div>
  );
}
