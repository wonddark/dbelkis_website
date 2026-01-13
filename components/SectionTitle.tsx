import React from "react";

function SectionTitle(props: Readonly<{ title: string }>) {
  return <h3 className="text-center text-[20px] font-light">{props.title}</h3>;
}

export default SectionTitle;
