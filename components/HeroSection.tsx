import React from "react";
import Image from "next/image";
import Link from "next/dist/client/link";

function HeroSection() {
  return (
    <section className="bg-[url(/images/hero.jpg)] bg-cover bg-center">
      <div className="flex flex-col gap-14 px-4 py-4">
        <header className="mb-16 flex items-center justify-center">
          <Image
            src="/images/dbelkis-logo.jpeg"
            alt="D'Belkis Cleaning Company"
            width={400}
            height={300}
            className="aspect-square size-8"
          />
        </header>
        <div className="flex flex-col items-center gap-2">
          <div className="rounded-full border border-accent bg-paper px-2 py-1 text-[10px] text-body2">
            5<span className="text-accent">★</span> Rated Cleaning Service
          </div>
          <h1 className="text-center font-display text-[36px]">
            Professional Cleaning Services{" "}
            <span className="text-accent">You Can Trust</span>
          </h1>
          <p className="text-center text-sm">
            Reliable, high-quality cleaning for homes and businesses. Trained
            staff, eco-friendly products, and spotless results every time.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <div className="5 flex flex-col gap-1">
            <Link
              href="/"
              className="rounded-full bg-primary px-6 py-3 text-center text-[13px] font-medium text-primary-contrast"
            >
              Get a Free Quote
            </Link>
            <Link
              href="/"
              className="font-medium] rounded-full border border-primary px-6 py-3 text-center text-[13px] text-primary"
            >
              Book a Cleaning
            </Link>
          </div>
          <div className="flex flex-wrap justify-center gap-x-3 gap-y-1">
            <span className="text-[11px]">Fully Insured & Trained Staff</span>
            <span className="text-[11px]">Flexible Scheduling</span>
            <span className="text-[11px]">Satisfaction Guaranteed</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
