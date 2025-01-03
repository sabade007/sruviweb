"use client";
import DarkmodeToggle from "@/components/darkmodeToggle/darkmodeToggle";
import DesktopNavigation from "@/components/navigation/DesktopNavigation";

import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <div className=" bg-white dark:bg-[#111111]">
      <DesktopNavigation />
      <DarkmodeToggle />
    </div>
  );
}
