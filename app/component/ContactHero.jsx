"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

function ContactHero() {
  return (
    <section className="relative w-full overflow-hidden bg-black">
      
      {/* Hero Image */}
      <div className="relative h-[250px] w-full sm:h-[290px] md:h-[330px] lg:h-[350px]">
        <Image
          src="/contact-hero.png"
          alt="Contact Kalika Engineering"
          fill
          priority
          sizes="100vw"
          className="
            object-cover
            object-[65%_center]
            sm:object-[65%_center]
            md:object-[65%_center]
            lg:object-center
          "
        />

        {/* Main Dark Overlay */}
        <div className="absolute inset-0 bg-black/45" />

        {/* Left Dark Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/20" />

        {/* Bottom Gradient */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/50 to-transparent" />

        {/* Content */}
        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-5 sm:px-8 lg:px-10">
          
          <div className="max-w-xl">

            {/* Small Orange Label */}
            <div className="mb-3 flex items-center gap-2 sm:mb-4">
              <span className="h-[2px] w-7 bg-[#ff6501] sm:w-9" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#ff6501] sm:text-xs">
                Get In Touch
              </span>
            </div>

            {/* Heading */}
            <h1 className="
              text-3xl
              font-bold
              leading-[1.05]
              tracking-tight
              text-white
              sm:text-4xl
              md:text-5xl
              lg:text-[52px]
            ">
              Contact <span className="text-[#ff6501]">Us</span>
            </h1>

            {/* Description */}
            <p className="
              mt-3
              max-w-md
              text-xs
              leading-relaxed
              text-white/75
              sm:mt-4
              sm:text-sm
              md:text-base
            ">
              Let&apos;s discuss your requirements and build the right
              precision component solution for your business.
            </p>

            {/* Breadcrumb */}
            <div className="
              mt-4
              flex
              items-center
              gap-1.5
              text-[11px]
              sm:mt-5
              sm:gap-2
              sm:text-xs
              md:text-sm
            ">
              <Link
                href="/"
                className="
                  text-white/70
                  transition-colors
                  duration-300
                  hover:text-[#ff6501]
                "
              >
                Home
              </Link>

              <ChevronRight
                size={13}
                className="text-[#ff6501]"
              />

              <span className="font-medium text-white">
                Contact Us
              </span>
            </div>

          </div>
        </div>

        {/* Orange Bottom Line */}
        <div className="
          absolute
          bottom-0
          left-0
          h-[3px]
          w-full
          bg-gradient-to-r
          from-[#ff6501]
          via-[#ff6501]
          to-transparent
        " />

      </div>
    </section>
  );
}

export default ContactHero;