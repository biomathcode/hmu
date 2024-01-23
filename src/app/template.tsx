import { ReactNode } from "react";

function Template({ children }: { children: ReactNode }) {
  return <main className=" w-full flex justify-center ">{children}</main>;
}

export default Template;
