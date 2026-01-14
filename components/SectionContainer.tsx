import React, { ReactNode } from "react";

function SectionContainer(props: Readonly<{ children: ReactNode }>) {
  return (
    <section className="flex flex-col gap-8 p-4 md:gap-6 md:py-6">
      {props.children}
    </section>
  );
}

export default SectionContainer;
