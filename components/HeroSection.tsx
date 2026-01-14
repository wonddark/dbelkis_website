import React from "react";
import Image from "next/image";
import Link from "next/dist/client/link";

function HeroSection() {
  return (
    <section className="bg-[url(/images/hero.jpg)] bg-cover bg-center">
      <div className="flex flex-col gap-14 bg-white/40 p-4 md:gap-8 md:p-6">
        <div className="flex flex-col gap-16 md:gap-8">
          <header className="flex justify-center md:justify-start">
            <Image
              src="/images/dbelkis-logo.jpeg"
              alt="D'Belkis Cleaning Company"
              width={400}
              height={300}
              className="aspect-square size-9 md:size-12"
            />
          </header>
          <div className="flex flex-col items-center gap-2 md:gap-1.5 md:px-24">
            <div className="rounded-full border border-accent bg-paper px-2 py-1 text-[10px] text-body2 md:text-[13px]">
              5<span className="text-accent">★</span> Rated Cleaning Service
            </div>
            <h1 className="text-center font-display text-4xl md:mb-4 md:text-5xl">
              Professional Cleaning Services{" "}
              <span className="text-accent">You Can Trust</span>
            </h1>
            <p className="text-center text-sm md:text-base">
              Reliable, high-quality cleaning for homes and businesses. Trained
              staff, eco-friendly products, and spotless results every time.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-3 md:mt-4 md:px-24">
          <div className="flex flex-col gap-1.5 md:flex-row md:gap-4">
            <Link
              href="/"
              className="rounded-full bg-primary px-6 py-3 text-center text-sm font-medium text-primary-contrast md:flex-auto md:text-[15px]"
            >
              Get a Free Quote
            </Link>
            <Link
              href="/"
              className="rounded-full border border-primary px-6 py-3 text-center text-sm font-medium text-primary md:flex-auto md:text-[15px]"
            >
              Book a Cleaning
            </Link>
          </div>
          <div className="flex flex-wrap justify-center gap-x-3 gap-y-1 md:gap-3">
            <span className="text-[11px] md:text-[13px]">
              Fully Insured & Trained Staff
            </span>
            <span className="text-[11px] md:text-[13px]">
              Flexible Scheduling
            </span>
            <span className="text-[11px] md:text-[13px]">
              Satisfaction Guaranteed
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
