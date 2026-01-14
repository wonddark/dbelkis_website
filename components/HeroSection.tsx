import React from "react";
import Image from "next/image";
import Link from "next/dist/client/link";

function HeroSection() {
  return (
    <section className="grid grid-cols-1 bg-cover bg-center max-lg:bg-[url(/images/hero.jpg)] lg:grid-cols-2">
      <div className="flex flex-col gap-14 p-4 max-lg:bg-white/40 md:gap-8 md:p-6 lg:gap-16 lg:px-8 lg:py-4">
        <div className="flex flex-col gap-16 md:gap-8 lg:gap-16">
          <header className="flex justify-center md:justify-start">
            <Image
              src="/images/dbelkis-logo.jpeg"
              alt="D'Belkis Cleaning Company"
              width={400}
              height={300}
              className="aspect-square size-9 md:size-12 lg:size-16"
            />
          </header>
          <div className="flex flex-col items-center gap-2 md:gap-1.5 md:px-24 lg:items-start lg:gap-2 lg:px-0">
            <div className="rounded-full border border-accent bg-paper px-2 py-1 text-[10px] text-body2 md:text-[13px] lg:px-4 lg:py-2 lg:text-base">
              5<span className="text-accent">★</span> Rated Cleaning Service
            </div>
            <h1 className="text-center font-display text-4xl leading-none md:mb-2.5 md:text-5xl lg:mb-2 lg:text-left lg:text-[64px]">
              Professional Cleaning Services{" "}
              <span className="text-accent">You Can Trust</span>
            </h1>
            <p className="text-center text-sm md:text-base lg:text-left lg:text-2xl lg:text-body2">
              Reliable, high-quality cleaning for homes and businesses. Trained
              staff, eco-friendly products, and spotless results every time.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-3 md:mt-4 md:px-24 lg:p-0">
          <div className="flex flex-col gap-1.5 md:flex-row md:gap-4">
            <Link
              target="_blank"
              rel="noreferrer"
              href="https://wa.me/971527280736?text=Hi. I need a quote for your cleaning services"
              className="rounded-full bg-primary px-6 py-3 text-center text-sm font-medium text-primary-contrast md:flex-auto md:text-[15px] lg:flex-none lg:text-lg"
            >
              Get a Free Quote
            </Link>
            <Link
              href="https://wa.me/971527280736?text=Hi. I want to book a cleaning service"
              className="rounded-full border border-primary px-6 py-3 text-center text-sm font-medium text-primary md:flex-auto md:text-[15px] lg:flex-none lg:text-lg"
            >
              Book a Cleaning
            </Link>
          </div>
          <div className="flex flex-wrap justify-center gap-x-3 gap-y-1 md:gap-3 lg:justify-start">
            <span className="text-[11px] md:text-[13px] lg:text-[15px] lg:text-body2">
              Fully Insured & Trained Staff
            </span>
            <span className="text-[11px] md:text-[13px] lg:text-[15px] lg:text-body2">
              Flexible Scheduling
            </span>
            <span className="text-[11px] md:text-[13px] lg:text-[15px] lg:text-body2">
              Satisfaction Guaranteed
            </span>
          </div>
        </div>
      </div>
      <Image
        src="/images/hero.jpg"
        alt="D'Belkis Cleaning Company"
        width={640}
        height={427}
        className="hidden h-full w-full object-cover lg:block"
      />
    </section>
  );
}

export default HeroSection;
