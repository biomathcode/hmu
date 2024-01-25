import { ReactNode } from "react";

function Template({ children }: { children: ReactNode }) {
  return (
    <main className=" w-full relative flex justify-center max-h-screen overflow-hidden p-0 m-0 ">
      {children}
    </main>
  );
}

export default Template;
