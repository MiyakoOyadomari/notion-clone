"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Heading = () => {
  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
        Your Ideas. Documents, and Plans. Unified. Welcome to
        <span className="underline">Notion Clone</span>
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl font-medium">
        Notion Clone is the connected workspace where <br /> better, faster work
        happens.
      </h3>
      <Button>
        Enter Notion Clone
        <ArrowRight className="h-4 w-4 ml-2" />
      </Button>
    </div>
  );
};
