"use client";

import * as React from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

type themes = "light" | "dark" | "system";

export function ModeToggle() {
  const { setTheme, theme, themes } = useTheme();

  return (
    <>
      {" "}
      <button onClick={() => setTheme("dark")} className="bg-red-300">
        <SunIcon className="h-[1.2rem] bg-red-900 w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      </button>
      <button onClick={() => setTheme("light")}>
        <MoonIcon className="absolute bg-red-900  h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      </button>
    </>
  );
}
