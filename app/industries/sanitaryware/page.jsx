"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronRight,
  Droplets,
  Factory,
  Settings,
  ShieldCheck,
  Ruler,
  Boxes,
  CheckCircle2,
} from "lucide-react";

import { useTheme } from "../../component/ThemeProvider";

const customerNeeds = [
  {
    id: 1,
    title: "Sealing & Water Protection",
    description:
      "Rubber and plastic components designed to support sealing, water protection and reliable assembly in sanitaryware applications.",
    icon: Droplets,
  },
  {
    id: 2,
    title: "Protection Components",
    description:
      "Components that help protect surfaces, connections and assemblies during installation, handling and regular use.",
    icon: ShieldCheck,
  },
  {
    id: 3,
    title: "Spacing & Mounting",
    description:
      "Precision components used for spacing, positioning and mounting within sanitaryware assemblies.",
    icon: Ruler,
  },
  {
    id: 4,
    title: "Assembly Components",
    description:
      "Plastic and rubber parts manufactured around the dimensional and functional requirements of your assembly.",
    icon: Settings,
  },
];

const customerTypes = [
  {
    id: 1,
    title: "Sanitaryware Manufacturers",
    description:
      "Manufacturers of sanitaryware products that require reliable plastic and rubber components for their assemblies.",
    icon: Factory,
  },
  {
    id: 2,
    title: "Bathroom Product Manufacturers",
    description:
      "Businesses manufacturing bathroom and water-related products that require supporting components for assembly and protection.",
    icon: Droplets,
  },
  {
    id: 3,
    title: "Plumbing & Fitting Businesses",
    description:
      "Companies working with plumbing, fittings and related applications that require custom plastic or rubber components.",
    icon: Boxes,
  },
  {
    id: 4,
    title: "OEM & Industrial Suppliers",
    description:
      "OEMs and industrial suppliers looking for a manufacturing partner for application-specific components.",
    icon: Factory,
  },
];

const requirementPoints = [
  "Engineering drawing",
  "Physical sample",
  "Required dimensions",
  "Material requirement",
  "Application details",
  "Quantity requirement",
];

const process = [
  {
    id: 1,
    number: "01",
    title: "You Share the Requirement",
    description:
      "Share your drawing, sample, dimensions or simply explain what the component needs to do.",
  },
  {
    id: 2,
    number: "02",
    title: "We Understand the Component",
    description:
      "We study the application, dimensions, material requirements and manufacturing requirements.",
  },
  {
    id: 3,
    number: "03",
    title: "We Manufacture",
    description:
      "The required plastic or rubber component is manufactured according to the agreed specifications.",
  },
  {
    id: 4,
    number: "04",
    title: "Components Are Supplied",
    description:
      "Manufactured components are prepared and supplied according to your business requirements.",
  },
];

const reasons = [
  "Plastic & rubber component manufacturing",
  "Application-focused manufacturing",
  "Custom dimensions and requirements",
  "Drawing and sample-based development",
  "Consistent manufacturing approach",
  "B2B manufacturing support",
];

export default function SanitarywarePage() {
  const { isDarkMode } = useTheme();

  const bg = isDarkMode ? "bg-black" : "bg-white";
  const softBg = isDarkMode ? "bg-[#0b0b0b]" : "bg-[#f7f7f7]";
  const cardBg = isDarkMode ? "bg-[#111111]" : "bg-white";
  const text = isDarkMode ? "text-white" : "text-black";
  const muted = isDarkMode ? "text-white/60" : "text-black/60";
  const border = isDarkMode ? "border-white/10" : "border-black/10";

  return (
    <main className={`${bg} ${text} font-body overflow-hidden`}>
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="pt-6 sm:pt-6 lg:pt-10 pb-6 sm:pb-4 lg:pb-12">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div
            className={`flex items-center gap-2 text-xs sm:text-sm ${muted} mb-8 sm:mb-10`}
          >
            <Link
              href="/"
              className="hover:text-[#ff6501] transition-colors"
            >
              Home
            </Link>

            <ChevronRight size={14} />

            <Link
              href="/industries"
              className="hover:text-[#ff6501] transition-colors"
            >
              Industries
            </Link>

            <ChevronRight size={14} />

            <span className={text}>Sanitaryware</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 xl:gap-20 items-center">
            {/* Left */}
            <div>
              <div className="inline-flex items-center gap-2 mb-5">
                <span className="w-7 sm:w-9 h-[2px] bg-[#ff6501]" />

                <span className="text-[#ff6501] text-xs sm:text-sm font-semibold uppercase tracking-[0.16em]">
                  Sanitaryware Industry
                </span>
              </div>

              <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-[68px] leading-[1.05] tracking-tight">
                Sanitaryware businesses need components.{" "}
                <span className="text-[#ff6501]">
                  We manufacture them.
                </span>
              </h1>

              <p
                className={`mt-6 text-base sm:text-lg leading-7 sm:leading-8 max-w-2xl ${muted}`}
              >
                Sanitaryware and bathroom product manufacturers require
                plastic and rubber components for sealing, protection,
                spacing, mounting and assembly. Kalika Engineering manufactures
                components according to the actual requirements of your
                application.
              </p>

              <p
                className={`mt-4 text-sm sm:text-base leading-7 max-w-xl ${muted}`}
              >
                You provide the drawing, sample, dimensions or requirement.
                We manufacture the required component for your sanitaryware or
                plumbing application.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-8">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 bg-[#ff6501] text-white px-6 py-3.5 rounded-lg font-semibold text-sm sm:text-base hover:bg-[#e95c00] transition-all"
                >
                  Discuss Your Requirement

                  <ArrowUpRight
                    size={18}
                    className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                  />
                </Link>

                <Link
                  href="/manufacturing-process"
                  className={`group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg border ${border} font-semibold text-sm sm:text-base hover:border-[#ff6501] hover:text-[#ff6501] transition-all`}
                >
                  Our Manufacturing Process

                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              </div>

              {/* Trust Points */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-9 pt-7 border-t border-black/10 dark:border-white/10">
                {[
                  "Plastic Components",
                  "Rubber Components",
                  "B2B Manufacturing",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-xs sm:text-sm font-medium"
                  >
                    <CheckCircle2
                      size={16}
                      className="text-[#ff6501] shrink-0"
                    />

                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div
                className={`relative aspect-[4/4.2] sm:aspect-[4/3.8] lg:aspect-[4/4.5] overflow-hidden rounded-2xl border ${border}`}
              >
                <Image
                  src="/sanitaryware-industry.png"
                  alt="Sanitaryware industry manufacturing"
                  fill
                  preload
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                <div className="absolute left-5 sm:left-7 bottom-5 sm:bottom-7 right-5 sm:right-7">
                  <p className="text-[#ff6501] text-xs sm:text-sm font-semibold uppercase tracking-wider">
                    For Sanitaryware Businesses
                  </p>

                  <h3 className="font-heading text-xl sm:text-2xl lg:text-3xl font-bold text-white mt-2 leading-tight">
                    Your Sanitaryware Product.
                    <br />
                    Our Component.
                  </h3>
                </div>
              </div>

              {/* Floating Card */}
              <div
                className={`absolute right-3 sm:-right-4 lg:-right-5 bottom-5 sm:bottom-8 ${cardBg} border ${border} rounded-xl p-4 sm:p-5 shadow-xl max-w-[220px] sm:max-w-[250px]`}
              >
                <div className="w-10 h-10 rounded-lg bg-[#ff6501]/10 flex items-center justify-center mb-3">
                  <Droplets
                    size={21}
                    className="text-[#ff6501]"
                  />
                </div>

                <p className="font-heading font-bold text-sm sm:text-base">
                  Sanitaryware Industry
                </p>

                <p className={`text-xs sm:text-sm ${muted} mt-1.5 leading-5`}>
                  Plastic & rubber components for your applications
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          INDUSTRY MESSAGE
      ========================================================= */}
      <section className={`${softBg} py-16 sm:py-20 lg:py-24`}>
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-start">
            <div>
              <span className="text-[#ff6501] text-xs sm:text-sm font-semibold uppercase tracking-[0.16em]">
                The Industry Need
              </span>

              <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight mt-4">
                Your sanitaryware product needs more than just visible
                components.
              </h2>
            </div>

            <div>
              <p className={`text-base sm:text-lg leading-8 ${muted}`}>
                Behind a sanitaryware or bathroom product are many supporting
                components that help with sealing, protection, positioning,
                mounting and assembly. These parts need to match the
                application, dimensions and manufacturing requirements of the
                final product.
              </p>

              <div className="mt-7 border-l-2 border-[#ff6501] pl-5 sm:pl-6">
                <p className="font-heading font-semibold text-lg sm:text-xl leading-7">
                  That is where Kalika Engineering becomes your component
                  manufacturing partner.
                </p>
              </div>
            </div>
          </div>

          {/* Flow */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4 mt-12 lg:mt-16">
            {[
              "Sanitaryware Business",
              "Component Requirement",
              "Drawing / Sample",
              "Kalika Engineering",
              "Your Production",
            ].map((item, index) => (
              <div
                key={item}
                className={`relative ${cardBg} border ${border} rounded-xl p-5 sm:p-6 min-h-[120px] flex flex-col justify-between`}
              >
                <span className="text-[#ff6501] text-xs font-bold">
                  0{index + 1}
                </span>

                <p className="font-heading font-semibold text-sm sm:text-base mt-5 leading-6">
                  {item}
                </p>

                {index < 4 && (
                  <ArrowRight
                    size={16}
                    className="hidden lg:block absolute -right-2.5 top-1/2 -translate-y-1/2 text-[#ff6501] z-10"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          WHAT WE SUPPLY
      ========================================================= */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-[#ff6501] text-xs sm:text-sm font-semibold uppercase tracking-[0.16em]">
              What We Supply
            </span>

            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight mt-4">
              Components sanitaryware businesses need from a manufacturing
              partner.
            </h2>

            <p className={`mt-5 text-base sm:text-lg leading-8 ${muted}`}>
              We do not approach every requirement as a standard product.
              Components are manufactured around the application, dimensions,
              material and functional requirements of your business.
            </p>
          </div>

          <div className="mt-10 sm:mt-12 border-t border-black/10 dark:border-white/10">
            {customerNeeds.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.id}
                  className={`group grid md:grid-cols-[80px_1fr_1.5fr] gap-5 md:gap-8 items-start py-7 sm:py-8 border-b ${border}`}
                >
                  <div className="w-12 h-12 rounded-xl bg-[#ff6501]/10 flex items-center justify-center">
                    <Icon
                      size={22}
                      className="text-[#ff6501]"
                    />
                  </div>

                  <h3 className="font-heading font-bold text-xl sm:text-2xl">
                    {item.title}
                  </h3>

                  <p
                    className={`text-sm sm:text-base leading-7 ${muted} max-w-xl`}
                  >
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          WHO WE WORK WITH
      ========================================================= */}
      <section className={`${softBg} py-16 sm:py-20 lg:py-24`}>
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-[#ff6501] text-xs sm:text-sm font-semibold uppercase tracking-[0.16em]">
              Who We Work With
            </span>

            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight mt-4">
              Built for businesses that need sanitaryware components.
            </h2>

            <p className={`mt-5 text-base sm:text-lg leading-8 ${muted}`}>
              Our focus is on supporting businesses and manufacturers that
              require dependable plastic and rubber components for their
              sanitaryware, bathroom and plumbing-related applications.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mt-10 sm:mt-12">
            {customerTypes.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.id}
                  className={`${cardBg} border ${border} rounded-2xl p-6 sm:p-7 hover:border-[#ff6501]/50 transition-colors`}
                >
                  <div className="w-11 h-11 rounded-xl bg-[#ff6501]/10 flex items-center justify-center mb-6">
                    <Icon
                      size={21}
                      className="text-[#ff6501]"
                    />
                  </div>

                  <h3 className="font-heading font-bold text-lg sm:text-xl leading-7">
                    {item.title}
                  </h3>

                  <p
                    className={`text-sm leading-6 ${muted} mt-3`}
                  >
                    {item.description}
                  </p>

                  <div className="mt-6 flex items-center gap-2 text-[#ff6501] text-sm font-semibold">
                    Component Manufacturing
                    <ArrowRight size={15} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          YOUR REQUIREMENT
      ========================================================= */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Content */}
            <div>
              <span className="text-[#ff6501] text-xs sm:text-sm font-semibold uppercase tracking-[0.16em]">
                Your Requirement
              </span>

              <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight mt-4">
                Already have a component requirement for your sanitaryware
                business?
              </h2>

              <p className={`mt-5 text-base sm:text-lg leading-8 ${muted}`}>
                Share whatever information you already have. A drawing, sample,
                dimensions or application details can help us understand the
                component you need.
              </p>

              <div className="grid sm:grid-cols-2 gap-3 mt-8">
                {requirementPoints.map((point) => (
                  <div
                    key={point}
                    className={`flex items-center gap-3 border ${border} rounded-lg px-4 py-3.5`}
                  >
                    <CheckCircle2
                      size={17}
                      className="text-[#ff6501] shrink-0"
                    />

                    <span className="text-sm font-medium">
                      {point}
                    </span>
                  </div>
                ))}
              </div>

              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 bg-[#ff6501] text-white px-6 py-3.5 rounded-lg font-semibold mt-8 hover:bg-[#e95c00] transition-all"
              >
                Send Your Requirement

                <ArrowUpRight
                  size={18}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />
              </Link>
            </div>

            {/* Image */}
            <div
              className={`relative aspect-[4/3] rounded-2xl overflow-hidden border ${border}`}
            >
              <Image
                src="/manufacturing-process.png"
                alt="Kalika Engineering manufacturing process"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

              <div className="absolute left-5 sm:left-7 bottom-5 sm:bottom-7">
                <p className="text-white/70 text-xs sm:text-sm uppercase tracking-wider">
                  From Requirement
                </p>

                <p className="text-white font-heading font-bold text-xl sm:text-2xl mt-1">
                  To Manufactured Component
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          PROCESS
      ========================================================= */}
      <section className={`${softBg} py-16 sm:py-20 lg:py-24`}>
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-[#ff6501] text-xs sm:text-sm font-semibold uppercase tracking-[0.16em]">
              How We Work
            </span>

            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight mt-4">
              From your requirement to the component you need.
            </h2>

            <p className={`mt-5 text-base sm:text-lg leading-8 ${muted}`}>
              A straightforward manufacturing process focused on understanding
              your requirement and producing the component around your
              application.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mt-10 sm:mt-12">
            {process.map((item) => (
              <div
                key={item.id}
                className={`${cardBg} border ${border} rounded-2xl p-6 sm:p-7`}
              >
                <span className="text-[#ff6501] font-heading font-bold text-3xl">
                  {item.number}
                </span>

                <h3 className="font-heading font-bold text-lg sm:text-xl mt-6 leading-7">
                  {item.title}
                </h3>

                <p className={`text-sm leading-6 ${muted} mt-3`}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          WHY KALIKA
      ========================================================= */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-20">
            <div>
              <span className="text-[#ff6501] text-xs sm:text-sm font-semibold uppercase tracking-[0.16em]">
                Why Kalika Engineering
              </span>

              <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight mt-4">
                One partner for your plastic and rubber component requirements.
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-x-8">
              {reasons.map((reason, index) => (
                <div
                  key={reason}
                  className={`flex items-start gap-4 py-5 border-b ${border}`}
                >
                  <span className="text-[#ff6501] font-heading font-bold text-sm mt-1">
                    0{index + 1}
                  </span>

                  <p className="font-semibold text-sm sm:text-base leading-6">
                    {reason}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}
      <section className={`${softBg} py-16 sm:py-20 lg:py-24`}>
        <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-8 text-center">
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#ff6501]/10 flex items-center justify-center mx-auto">
            <Droplets
              size={28}
              className="text-[#ff6501]"
            />
          </div>

          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl mt-6 leading-tight">
            Need plastic or rubber components for your sanitaryware business?
          </h2>

          <p
            className={`max-w-2xl mx-auto text-base sm:text-lg leading-8 ${muted} mt-5`}
          >
            Tell us about your application, dimensions, sample or drawing.
            Let&apos;s discuss the component your business needs.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mt-8">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 bg-[#ff6501] text-white px-7 py-3.5 rounded-lg font-semibold hover:bg-[#e95c00] transition-all"
            >
              Talk About Your Requirement

              <ArrowUpRight
                size={18}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              />
            </Link>

            <Link
              href="/manufacturing-process"
              className={`group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg border ${border} font-semibold hover:border-[#ff6501] hover:text-[#ff6501] transition-all`}
            >
              See Our Process

              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}