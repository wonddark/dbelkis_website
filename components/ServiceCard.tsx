import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

function ServiceCard(props: Readonly<{ title: string; icon: IconDefinition }>) {
  const { title, icon } = props;
  return (
    <div className="flex flex-col items-center gap-6 rounded-2xl bg-paper px-3 py-4 shadow-[0_2px_4px_0_rgb(107_114_128/.1)] md:py-6 lg:w-61">
      <FontAwesomeIcon
        icon={icon}
        className="size-12 text-accent md:size-12 lg:size-16"
      />
      <p className="text-center text-sm md:text-base lg:text-xl">{title}</p>
    </div>
  );
}

export default ServiceCard;
