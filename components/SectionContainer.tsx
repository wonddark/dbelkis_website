import React, { ReactNode } from "react";

function SectionContainer(
  props: Readonly<{ children: ReactNode; className?: string }>,
) {
  return (
    <section
      className={
        "flex flex-col gap-8 p-4 md:gap-6 md:py-6 lg:gap-12 lg:px-6 lg:py-12" +
        (props.className ? ` ${props.className}` : "")
      }
    >
      {props.children}
    </section>
  );
}

export default SectionContainer;
