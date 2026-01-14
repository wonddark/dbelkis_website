import React from "react";

function SectionTitle(props: Readonly<{ title: string }>) {
  return (
    <h3 className="text-center text-xl font-light md:text-2xl lg:text-4xl">
      {props.title}
    </h3>
  );
}

export default SectionTitle;
