import React from "react";
import { faHouseChimney } from "@fortawesome/free-solid-svg-icons/faHouseChimney";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding } from "@fortawesome/free-solid-svg-icons/faBuilding";
import { faPumpMedical } from "@fortawesome/free-solid-svg-icons/faPumpMedical";
import { faDoorOpen } from "@fortawesome/free-solid-svg-icons/faDoorOpen";
import { faBugSlash } from "@fortawesome/free-solid-svg-icons/faBugSlash";
import { faShuttleVan } from "@fortawesome/free-solid-svg-icons/faShuttleVan";
import SectionTitle from "@/components/SectionTitle";
import SectionContainer from "@/components/SectionContainer";

function ServicesSection() {
  return (
    <SectionContainer>
      <SectionTitle title="Our Services" />
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col items-center gap-6 rounded-2xl bg-paper px-3 py-4 shadow-[0_2px_4px_0_rgb(107_114_128/.1)]">
          <FontAwesomeIcon
            icon={faHouseChimney}
            className="size-12 text-accent"
          />
          <p className="text-center text-[14px]">Residential Cleaning</p>
        </div>
        <div className="flex flex-col items-center gap-6 rounded-2xl bg-paper px-3 py-4 shadow-[0_2px_4px_0_rgb(107_114_128/.1)]">
          <FontAwesomeIcon icon={faBuilding} className="size-12 text-accent" />
          <p className="text-center text-[14px]">Office Cleaning</p>
        </div>
        <div className="flex flex-col items-center gap-6 rounded-2xl bg-paper px-3 py-4 shadow-[0_2px_4px_0_rgb(107_114_128/.1)]">
          <FontAwesomeIcon
            icon={faPumpMedical}
            className="size-12 text-accent"
          />
          <p className="text-center text-[14px]">Deep Cleaning</p>
        </div>
        <div className="flex flex-col items-center gap-6 rounded-2xl bg-paper px-3 py-4 shadow-[0_2px_4px_0_rgb(107_114_128/.1)]">
          <FontAwesomeIcon icon={faDoorOpen} className="size-12 text-accent" />
          <p className="text-center text-[14px]">Window & Facades Cleaning</p>
        </div>
        <div className="flex flex-col items-center gap-6 rounded-2xl bg-paper px-3 py-4 shadow-[0_2px_4px_0_rgb(107_114_128/.1)]">
          <FontAwesomeIcon icon={faBugSlash} className="size-12 text-accent" />
          <p className="text-center text-[14px]">Disinfection & Sanitation</p>
        </div>
        <div className="flex flex-col items-center gap-6 rounded-2xl bg-paper px-3 py-4 shadow-[0_2px_4px_0_rgb(107_114_128/.1)]">
          <FontAwesomeIcon
            icon={faShuttleVan}
            className="size-12 text-accent"
          />
          <p className="text-center text-[14px]">Move-In / Move-Out Cleaning</p>
        </div>
      </div>
    </SectionContainer>
  );
}

export default ServicesSection;
