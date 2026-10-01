"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Factory,
  ShieldCheck,
  Settings2,
  CheckCircle2,
} from "lucide-react";
import { useTheme } from "./ThemeProvider";

function OurStory() {
  const { isDarkMode } = useTheme();

  const sectionBg = isDarkMode
    ? "bg-brand-black"
    : "bg-brand-white";

  const primaryText = isDarkMode
    ? "text-brand-white"
    : "text-brand-black";

  const secondaryText = isDarkMode
    ? "text-brand-white/70"
    : "text-brand-black/70";

  const mutedText = isDarkMode
    ? "text-brand-white/60"
    : "text-brand-black/60";

  const cardBg = isDarkMode
    ? "bg-brand-black"
    : "bg-brand-white";

  const borderColor = isDarkMode
    ? "border-brand-white/30"
    : "border-brand-black/10";

  return (
    <section
      className={`w-full py-16 transition-colors duration-300 sm:py-20 lg:py-24 ${sectionBg}`}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* ================= SECTION HEADING ================= */}
        <div className="mb-12 max-w-3xl sm:mb-14 lg:mb-16">

          <div className="mb-4 flex items-center gap-3">
            <span className="h-[2px] w-9 bg-brand-orange" />

            <span className="text-xs font-bold uppercase tracking-[0.22em] text-brand-orange">
<<<<<<< HEAD
              Our Profile
=======
              Our Story
>>>>>>> dcce9ac188c6d3b2e9e5cd4f533c44d2862fa263
            </span>
          </div>

          <h2
            className={`text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl ${primaryText}`}
          >
<<<<<<< HEAD
            The Solution Hub for
            <br />
            <span className="text-brand-orange">
              Plastic & Rubber Components.
=======
            Built on Experience.
            <br />
            <span className="text-brand-orange">
              Driven by Precision.
>>>>>>> dcce9ac188c6d3b2e9e5cd4f533c44d2862fa263
            </span>
          </h2>
        </div>

        {/* ================= MAIN CONTENT ================= */}
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">

          {/* ================= LEFT CONTENT ================= */}
          <div>

            <p
              className={`mb-6 text-base font-semibold leading-relaxed sm:text-lg ${primaryText}`}
            >
<<<<<<< HEAD
              Established in 2022, Kalika Engineering is a manufacturer and
              supplier of plastic, rubber and sheet metal components for
              diverse industrial requirements.
=======
              Kalika Engineering is a B2B manufacturing company focused on
              delivering reliable plastic and rubber components for demanding
              industrial applications.
>>>>>>> dcce9ac188c6d3b2e9e5cd4f533c44d2862fa263
            </p>

            <p
              className={`mb-5 text-sm leading-7 sm:text-base ${secondaryText}`}
            >
<<<<<<< HEAD
              We manufacture a wide range of products including plastic plugs,
              caps, feet, rivets, clips, screws, nuts, washers, grommets,
              bushes, knobs, handles, kits, O-rings, gaskets, seals and other
              industrial components.
=======
              Our journey has been built around understanding customer
              requirements, maintaining consistent manufacturing standards,
              and delivering components that perform reliably in real-world
              applications.
>>>>>>> dcce9ac188c6d3b2e9e5cd4f533c44d2862fa263
            </p>

            <p
              className={`mb-8 text-sm leading-7 sm:text-base ${secondaryText}`}
            >
<<<<<<< HEAD
              Our products are designed around the specific requirements of
              our customers, with a focus on performance, durability,
              economical pricing and customization. We serve customers across
              India and our products are also exported through export
              companies.
=======
              From precision plastic components to engineered rubber products
              and compounds, we work closely with OEMs, manufacturers and
              industrial businesses to develop solutions that meet their
              functional and production requirements.
>>>>>>> dcce9ac188c6d3b2e9e5cd4f533c44d2862fa263
            </p>

            {/* ================= HIGHLIGHTS ================= */}
            <div className="mb-9 grid gap-4 sm:grid-cols-2">

<<<<<<< HEAD
              {/* INDUSTRIES */}
=======
              {/* OEM */}
>>>>>>> dcce9ac188c6d3b2e9e5cd4f533c44d2862fa263
              <div className="flex items-start gap-3">

                <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center bg-brand-orange">
                  <CheckCircle2
                    size={17}
                    strokeWidth={2.5}
                    className="text-brand-white"
                  />
                </div>

                <div>
                  <h3
                    className={`text-sm font-bold ${primaryText}`}
                  >
<<<<<<< HEAD
                    Multiple Industries
=======
                    OEM Focused
>>>>>>> dcce9ac188c6d3b2e9e5cd4f533c44d2862fa263
                  </h3>

                  <p
                    className={`mt-1 text-xs leading-5 ${mutedText}`}
                  >
<<<<<<< HEAD
                    Automotive, electrical, tractor, sanitaryware and more.
=======
                    Components developed around your requirements.
>>>>>>> dcce9ac188c6d3b2e9e5cd4f533c44d2862fa263
                  </p>
                </div>

              </div>

<<<<<<< HEAD
              {/* CUSTOMIZATION */}
=======
              {/* QUALITY */}
>>>>>>> dcce9ac188c6d3b2e9e5cd4f533c44d2862fa263
              <div className="flex items-start gap-3">

                <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center bg-brand-orange">
                  <CheckCircle2
                    size={17}
                    strokeWidth={2.5}
                    className="text-brand-white"
                  />
                </div>

                <div>
                  <h3
                    className={`text-sm font-bold ${primaryText}`}
                  >
<<<<<<< HEAD
                    Customized Solutions
=======
                    Quality Driven
>>>>>>> dcce9ac188c6d3b2e9e5cd4f533c44d2862fa263
                  </h3>

                  <p
                    className={`mt-1 text-xs leading-5 ${mutedText}`}
                  >
<<<<<<< HEAD
                    Components developed around customer requirements.
=======
                    Consistency and reliability at every stage.
>>>>>>> dcce9ac188c6d3b2e9e5cd4f533c44d2862fa263
                  </p>
                </div>

              </div>

            </div>

<<<<<<< HEAD
            {/* CTA */}
=======
            {/* ================= CTA ================= */}
>>>>>>> dcce9ac188c6d3b2e9e5cd4f533c44d2862fa263
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 bg-brand-orange px-6 py-3.5 text-sm font-semibold text-brand-white transition-all duration-300 hover:bg-brand-black"
            >
              Discuss Your Requirement

              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>

          </div>

          {/* ================= RIGHT VISUAL ================= */}
          <div className="relative">

            {/* IMAGE */}
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-brand-black">

              <Image
                src="/about-section.png"
                alt="Kalika Engineering manufacturing facility"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />

              {/* IMAGE OVERLAY */}
              <div className="absolute inset-0 bg-brand-black/25" />

              {/* ORANGE LINE */}
              <div className="absolute bottom-0 left-0 h-1 w-full bg-brand-orange" />

              {/* EXPERIENCE BADGE */}
              <div
                className={`
                  absolute bottom-5 left-5 p-4 shadow-xl
                  transition-colors duration-300
                  sm:bottom-7 sm:left-7 sm:p-5
                  ${cardBg}
                  ${borderColor}
                  border
                `}
              >
                <p
                  className={`text-3xl font-black leading-none sm:text-4xl ${primaryText}`}
                >
<<<<<<< HEAD
                  2022
                </p>

                <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.16em] text-brand-orange sm:text-xs">
                  Established
=======
                  10+
                </p>

                <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.16em] text-brand-orange sm:text-xs">
                  Years Experience
>>>>>>> dcce9ac188c6d3b2e9e5cd4f533c44d2862fa263
                </p>
              </div>

            </div>

            {/* ================= FLOATING CARDS ================= */}
            <div
              className={`
                absolute -bottom-6 right-4 grid w-[88%]
                grid-cols-3 overflow-hidden border
                shadow-2xl transition-colors duration-300
                sm:-bottom-7 sm:right-7 sm:w-[82%]
                ${cardBg}
                ${borderColor}
              `}
            >

              {/* CARD 1 */}
              <div
                className={`
                  p-3 sm:p-4
<<<<<<< HEAD
                  ${
                    isDarkMode
                      ? "border-brand-white/30"
                      : "border-brand-black/10"
=======
                  ${isDarkMode
                    ? "border-brand-white/30"
                    : "border-brand-black/10"
>>>>>>> dcce9ac188c6d3b2e9e5cd4f533c44d2862fa263
                  }
                  border-r
                `}
              >
                <Factory
                  size={20}
                  className="mb-2 text-brand-orange"
                />

                <p
                  className={`text-[10px] font-bold uppercase leading-tight sm:text-xs ${primaryText}`}
                >
                  Manufacturing
                </p>
              </div>

              {/* CARD 2 */}
              <div
                className={`
                  p-3 sm:p-4
<<<<<<< HEAD
                  ${
                    isDarkMode
                      ? "border-brand-white/30"
                      : "border-brand-black/10"
=======
                  ${isDarkMode
                    ? "border-brand-white/30"
                    : "border-brand-black/10"
>>>>>>> dcce9ac188c6d3b2e9e5cd4f533c44d2862fa263
                  }
                  border-r
                `}
              >
                <ShieldCheck
                  size={20}
                  className="mb-2 text-brand-orange"
                />

                <p
                  className={`text-[10px] font-bold uppercase leading-tight sm:text-xs ${primaryText}`}
                >
<<<<<<< HEAD
                  Quality
=======
                  OEM Quality
>>>>>>> dcce9ac188c6d3b2e9e5cd4f533c44d2862fa263
                </p>
              </div>

              {/* CARD 3 */}
              <div className="p-3 sm:p-4">

                <Settings2
                  size={20}
                  className="mb-2 text-brand-orange"
                />

                <p
                  className={`text-[10px] font-bold uppercase leading-tight sm:text-xs ${primaryText}`}
                >
                  Custom Solutions
                </p>

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default OurStory;