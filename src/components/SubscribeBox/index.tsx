"use client";

import { useState } from "react";

// TODO: Create a Subcribe box that will send the request to hashnode and lemon squeezy

// https://[STORE].lemonsqueezy.com/email-subscribe/external

// req post , payload => name, email

function SubscribeBox() {
  return (
    <>
      <form
        className="flex flex-col gap-3 justify-start items-start"
        onSubmit={(e: any) => {
          e.preventDefault();
          fetch("https://shop.coolhead.in/email-subscribe/external", {
            method: "post",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: e?.target[0].value,
            }),
          });
          console.log(e);
        }}
      >
        <div className="flex flex-col gap-2 w-full">
          <label
            htmlFor="UserEmail"
            className="block text-xs font-medium text-neutral-600"
          >
            {" "}
            Subscribe for Newletter{" "}
          </label>

          <input
            type="email"
            id="UserEmail"
            placeholder="john@gmail.com"
            className="mt-1 w-full rounded-md border-gray-200 border dark:bg-neutral-800  sm:text-md py-2 px-2"
          />
        </div>
        <button
          className="
          inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background  hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2"
          type="submit"
        >
          submit
        </button>
      </form>
    </>
  );
}

export default SubscribeBox;
