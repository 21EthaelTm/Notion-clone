import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { json } from "stream/consumers";
/**
 * Displays the main heading on the marketing page.
 *
 * This component is used in the public landing section.
 */
const Heading = () => {
  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-tele-primary ">
        One workspace. Zero busywork. 
        <span className="underline"> Tele-Notion</span>
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl font-medium text-tele-primary ">
        Tele-Notion is where your teams and AI agents capture knowledge. <br /> Now a team of 8 feels like 80.
      </h3>
      <Button className="bg-tele-primary hover:bg-tele-primary/80">
        Enter Tele-Notion <ArrowRight className="h-4 w-4 ml-2" />
      </Button>
    </div>
  );
};

export default Heading;
