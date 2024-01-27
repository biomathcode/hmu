"use client";

import { useState } from "react";

// TODO: Create a Subcribe box that will send the request to hashnode and lemon squeezy

// https://[STORE].lemonsqueezy.com/email-subscribe/external

// req post , payload => name, email

function SubscribeBox() {
  return (
    <>
      <p>5000+ People have already subscribed to</p>
      <form
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
        <input placeholder="john@gmail.com" />
        <button type="submit">submit</button>
      </form>
    </>
  );
}

export default SubscribeBox;
