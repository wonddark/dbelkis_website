import React from "react";
import Image from "next/image";
import SectionContainer from "@/components/SectionContainer";
import Link from "next/dist/client/link";

function FooterSection() {
  return (
    <footer>
      <SectionContainer>
        <Image
          src="/images/dbelkis-logo.jpeg"
          alt="D'Belkis Cleaning Company"
          width={100}
          height={100}
          className="size-9 self-center"
        />
        <div className="flex flex-wrap justify-center gap-3 py-3">
          <Link href="tel:+971527280736" className="text-sm text-body">
            +971527280736
          </Link>
          <Link
            href="mailto:dbelkissardinas@gmail.com"
            className="text-sm text-body"
          >
            dbelkissardinas@gmail.com
          </Link>
          <address className="text-sm text-body">
            SPC Sharjah Publishing City
          </address>
        </div>
      </SectionContainer>
    </footer>
  );
}

export default FooterSection;
