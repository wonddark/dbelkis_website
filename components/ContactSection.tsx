import React from "react";
import SectionContainer from "@/components/SectionContainer";
import SectionTitle from "@/components/SectionTitle";
import Image from "next/image";

function ContactSection() {
  return (
    <SectionContainer>
      <SectionTitle title="Contact Us" />
      <div className="flex flex-col gap-8 md:flex-row">
        <form className="flex-auto">
          <div className="flex flex-col gap-3">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              className="rounded-lg border border-body2/25 bg-paper px-2 py-3 text-sm text-body placeholder:text-body2/70 focus-visible:border-0 focus-visible:ring-accent/25 focus-visible:outline-accent/25"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="rounded-lg border border-body2/25 bg-paper px-2 py-3 text-sm text-body placeholder:text-body2/70 focus-visible:border-0 focus-visible:ring-accent/25 focus-visible:outline-accent/25"
            />
            <textarea
              name="message"
              placeholder="Message"
              className="h-28 rounded-lg border border-body2/25 bg-paper px-2 py-3 text-sm text-body placeholder:text-body2/70 focus-visible:border-0 focus-visible:ring-accent/25 focus-visible:outline-accent/25 md:h-36"
            />
            <button
              type="submit"
              className="rounded-full bg-primary px-6 py-3 text-[13px] font-medium text-primary-contrast md:text-[15px]"
            >
              Send message
            </button>
          </div>
        </form>
        <Image
          src="/images/map.png"
          alt="D'Belkis Cleaning Company"
          width={720}
          height={720}
          className="max-w-88 rounded-xl object-cover"
        />
      </div>
    </SectionContainer>
  );
}

export default ContactSection;
