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
      <button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="bg-neutral-800 p-4 text-white dark:text-white rounded-full flex justify-center "
      >
        <SunIcon className="h-[1.2rem]  w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <MoonIcon className="   h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      </button>
    </>
  );
}
