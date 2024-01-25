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
        className="dark:bg-neutral-800 bg-neutral-100 text-neutral-900 p-4 dark:text-white rounded-full flex justify-center max-w-[25x]"
      >
        <SunIcon className=" dark:-rotate-90 dark:scale-0 dark:hidden" />
        <MoonIcon className="  transition-all dark:rotate-0 dark:scale-100 hidden dark:block" />
      </button>
    </>
  );
}
