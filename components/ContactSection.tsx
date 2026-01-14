import React from "react";
import SectionContainer from "@/components/SectionContainer";
import SectionTitle from "@/components/SectionTitle";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareWhatsapp } from "@fortawesome/free-brands-svg-icons/faSquareWhatsapp";
import { faSquareInstagram } from "@fortawesome/free-brands-svg-icons/faSquareInstagram";
import Link from "next/dist/client/link";
import { faSquareFacebook } from "@fortawesome/free-brands-svg-icons/faSquareFacebook";

function ContactSection() {
  return (
    <SectionContainer>
      <SectionTitle title="Contact Us" />
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <form className="w-full">
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-center gap-6 md:pb-3 lg:pb-6">
              <Link href="https://www.whatsapp.com">
                <FontAwesomeIcon
                  icon={faSquareWhatsapp}
                  className="size-6 text-accent md:size-8 lg:size-10"
                />
              </Link>
              <Link href="https://www.instagram.com">
                <FontAwesomeIcon
                  icon={faSquareInstagram}
                  className="size-6 text-accent md:size-8 lg:size-10"
                />
              </Link>
              <Link href="https://www.facebook.com">
                <FontAwesomeIcon
                  icon={faSquareFacebook}
                  className="size-6 text-accent md:size-8 lg:size-10"
                />
              </Link>
            </div>
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              className="rounded-lg border border-body2/25 bg-paper px-2 py-3 text-sm text-body placeholder:text-body2/70 focus:border-0 focus:ring-2 focus-visible:border-0 lg:px-3 lg:py-4 lg:text-[15px]"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="rounded-lg border border-body2/25 bg-paper px-2 py-3 text-sm text-body placeholder:text-body2/70 focus-visible:border-0 focus-visible:ring-accent/50 lg:px-3 lg:py-4 lg:text-[15px]"
            />
            <textarea
              name="message"
              placeholder="Message"
              className="h-28 rounded-lg border border-body2/25 bg-paper px-2 py-3 text-sm text-body placeholder:text-body2/70 focus-visible:border-0 focus-visible:ring-accent/50 md:h-36 lg:h-48 lg:px-3 lg:py-4 lg:text-[15px]"
            />
            <button
              type="submit"
              className="rounded-full bg-primary px-6 py-3 text-[13px] font-medium text-primary-contrast lg:self-start lg:text-[15px]"
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
          className="h-full max-h-120 w-full rounded-xl object-cover"
        />
      </div>
    </SectionContainer>
  );
}

export default ContactSection;
