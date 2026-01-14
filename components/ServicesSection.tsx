import React from "react";
import { faHouseChimney } from "@fortawesome/free-solid-svg-icons/faHouseChimney";
import { faBuilding } from "@fortawesome/free-solid-svg-icons/faBuilding";
import { faPumpMedical } from "@fortawesome/free-solid-svg-icons/faPumpMedical";
import { faDoorOpen } from "@fortawesome/free-solid-svg-icons/faDoorOpen";
import { faBugSlash } from "@fortawesome/free-solid-svg-icons/faBugSlash";
import { faShuttleVan } from "@fortawesome/free-solid-svg-icons/faShuttleVan";
import SectionTitle from "@/components/SectionTitle";
import SectionContainer from "@/components/SectionContainer";
import ServiceCard from "@/components/ServiceCard";

function ServicesSection() {
  return (
    <SectionContainer className="bg-accent/3">
      <SectionTitle title="Our Services" />
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:gap-8 lg:self-center">
        <ServiceCard title="Residential Cleaning" icon={faHouseChimney} />
        <ServiceCard title="Office Cleaning" icon={faBuilding} />
        <ServiceCard title="Deep Cleaning" icon={faPumpMedical} />
        <ServiceCard title="Window & Facades Cleaning" icon={faDoorOpen} />
        <ServiceCard title="Disinfection & Sanitation" icon={faBugSlash} />
        <ServiceCard title="Move-In / Move-Out Cleaning" icon={faShuttleVan} />
      </div>
    </SectionContainer>
  );
}

export default ServicesSection;
