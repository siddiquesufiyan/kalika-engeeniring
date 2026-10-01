"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronRight,
  Factory,
  FileCheck2,
  PackageCheck,
  Settings2,
  ShieldCheck,
  Tractor,
  Users,
} from "lucide-react";
import { useTheme } from "../../component/ThemeProvider";

const customerNeeds = [
  {
    number: "01",
    title: "Protection",
    description:
      "Plastic and rubber components used to protect agricultural equipment parts from dust, moisture, impact and general operating conditions.",
    icon: ShieldCheck,
  },
  {
    number: "02",
    title: "Sealing & Covering",
    description:
      "Polymer components used for covering, sealing and protecting openings, joints and supporting areas of agricultural equipment.",
    icon: PackageCheck,
  },
  {
    number: "03",
    title: "Spacing & Mounting",
    description:
      "Custom plastic and rubber components used for spacing, mounting, positioning and supporting different machinery assemblies.",
    icon: Settings2,
  },
  {
    number: "04",
    title: "Machine Assembly",
    description:
      "Small and application-specific components required to complete agricultural machinery, implements and equipment assemblies.",
    icon: Factory,
  },
];

const customerTypes = [
  {
    title: "Agricultural Machinery Manufacturers",
    description:
      "Manufacturers of agricultural machinery can source application-specific plastic and rubber components required within their equipment and assemblies.",
    icon: Tractor,
  },
  {
    title: "Tractor & Equipment Businesses",
    description:
      "Businesses involved in tractors, agricultural equipment and related machinery can procure polymer components according to their specifications.",
    icon: Factory,
  },
  {
    title: "Agricultural Implement Manufacturers",
    description:
      "Manufacturers of farming implements and equipment can outsource required plastic and rubber components to a dedicated manufacturing partner.",
    icon: Settings2,
  },
  {
    title: "OEM & Industrial Suppliers",
    description:
      "OEM-oriented businesses can share drawings, samples or component requirements for repeat and bulk manufacturing requirements.",
    icon: Users,
  },
];

const requirementPoints = [
  "Engineering drawing",
  "Existing component sample",
  "Required dimensions",
  "Material requirement",
  "Application details",
  "Required quantity",
];

const process = [
  {
    number: "01",
    title: "You Share the Requirement",
    description:
      "The agricultural equipment business shares its drawing, sample, dimensions or component requirement with us.",
    icon: FileCheck2,
  },
  {
    number: "02",
    title: "We Understand the Component",
    description:
      "We review the application, specifications, material requirements and manufacturing feasibility.",
    icon: Settings2,
  },
  {
    number: "03",
    title: "We Manufacture",
    description:
      "The required plastic or rubber component is manufactured around the approved requirement.",
    icon: Factory,
  },
  {
    number: "04",
    title: "Components Are Supplied",
    description:
      "The manufactured components are inspected and supplied according to the agreed requirement.",
    icon: PackageCheck,
  },
];

const reasons = [
  "Plastic and rubber component manufacturing",
  "Drawing and sample based requirements",
  "Custom dimensions and specifications",
  "Support for repeat and bulk requirements",
  "Application-focused component development",
  "Quality inspection before supply",
];

export default function AgricultureIndustryPage() {
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
            className={`flex flex-wrap items-center gap-1.5 sm:gap-2 text-xs sm:text-sm ${muted} mb-8 sm:mb-10`}
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

            <span className={text}>Agriculture</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center">
            {/* Hero Content */}
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-5 sm:mb-6">
                <span className="w-7 sm:w-8 h-[2px] bg-[#ff6501]" />

                <span className="text-[#ff6501] text-[11px] sm:text-xs md:text-sm font-semibold tracking-[0.16em] sm:tracking-[0.18em] uppercase">
                  Agriculture Industry
                </span>
              </div>

              <h1 className="font-heading font-semibold tracking-[-0.045em] leading-[0.98] text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] xl:text-[4.7rem]">
                Agricultural equipment needs components.
                <span className="block text-[#ff6501] mt-2">
                  We manufacture them.
                </span>
              </h1>

              <p
                className={`mt-6 sm:mt-7 text-base sm:text-lg leading-7 sm:leading-8 ${muted}`}
              >
                Agricultural machinery and equipment businesses require
                plastic and rubber components for protection, sealing,
                covering, spacing, mounting and assembly. Kalika Engineering
                manufactures these components according to the actual
                requirements of agricultural businesses.
              </p>

              <p
                className={`mt-4 text-sm sm:text-base leading-7 ${muted}`}
              >
                You provide the drawing, sample, dimensions or requirement.
                We manufacture the required component for your machinery or
                equipment application.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mt-8 sm:mt-9">
                <Link
                  href="/contact"
                  className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#ff6501] text-white px-6 py-3.5 sm:py-4 rounded-full font-semibold text-sm sm:text-base hover:bg-[#e85b00] transition-all duration-300"
                >
                  Discuss Your Requirement

                  <ArrowUpRight
                    size={18}
                    className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                  />
                </Link>

                <Link
                  href="/products"
                  className={`group w-full sm:w-auto inline-flex items-center justify-center gap-3 border ${border} px-6 py-3.5 sm:py-4 rounded-full font-semibold text-sm sm:text-base hover:border-[#ff6501] hover:text-[#ff6501] transition-all duration-300`}
                >
                  Explore Components

                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              </div>

              {/* Trust Points */}
              <div className="flex flex-wrap gap-x-6 gap-y-3 mt-8 sm:mt-9">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#ff6501]" />
                  <span className={`text-sm ${muted}`}>
                    Plastic Components
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#ff6501]" />
                  <span className={`text-sm ${muted}`}>
                    Rubber Components
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#ff6501]" />
                  <span className={`text-sm ${muted}`}>
                    B2B Manufacturing
                  </span>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative lg:mt-0">
              <div
                className={`relative aspect-[4/3.8] sm:aspect-[4/3.5] lg:aspect-[4/4.2] rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden border ${border}`}
              >
                <Image
                  src="/agriculture-industry.png"
                  alt="Plastic and rubber components used in agricultural machinery"
                  fill
                  preload
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />

                <div className="absolute left-5 sm:left-7 bottom-5 sm:bottom-7 right-5">
                  <p className="text-white/60 text-[10px] sm:text-xs uppercase tracking-[0.18em] mb-2">
                    For Agricultural Businesses
                  </p>

                  <h3 className="text-white font-heading text-xl sm:text-2xl md:text-3xl font-semibold leading-tight">
                    Your Agricultural Equipment.
                    <br />
                    Our Component.
                  </h3>
                </div>
              </div>

              {/* Floating Card */}
              <div
                className={`absolute -bottom-5 right-3 sm:right-5 lg:-right-5 ${cardBg} border ${border} rounded-2xl px-4 sm:px-5 py-4 shadow-2xl w-[220px] sm:w-[240px]`}
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#ff6501]/10 flex items-center justify-center shrink-0">
                    <Tractor size={20} className="text-[#ff6501]" />
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-wider text-[#ff6501] font-semibold">
                      Agriculture Industry
                    </p>

                    <p className={`text-xs sm:text-sm mt-1 leading-5 ${muted}`}>
                      Plastic & rubber components for machinery
                    </p>
                  </div>
                </div>
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
          <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-20 items-start">
            {/* Heading */}
            <div>
              <div className="flex items-center gap-2 mb-5">
                <span className="w-8 h-[2px] bg-[#ff6501]" />

                <span className="text-[#ff6501] text-xs sm:text-sm font-semibold tracking-[0.18em] uppercase">
                  The Requirement
                </span>
              </div>

              <h2 className="font-heading font-semibold tracking-[-0.04em] leading-[1.05] text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem]">
                Agricultural machinery needs more than just metal and
                mechanical parts.
              </h2>
            </div>

            {/* Text */}
            <div className="lg:pt-1">
              <p
                className={`text-base sm:text-lg leading-7 sm:leading-8 ${muted}`}
              >
                Agricultural equipment is made up of many individual
                components. Along with major mechanical parts, machinery
                requires plastic and rubber components for protection,
                sealing, covering, spacing, mounting and assembly.
              </p>

              <p
                className={`mt-5 text-base sm:text-lg leading-7 sm:leading-8 ${muted}`}
              >
                These components may be small, but they still need to match
                the required dimensions, material, application and production
                requirements of the equipment.
              </p>

              <div className="mt-8 sm:mt-10 border-l-2 border-[#ff6501] pl-5 sm:pl-6">
                <p className="font-heading font-semibold text-lg sm:text-xl leading-7">
                  Kalika Engineering becomes the component manufacturing
                  partner behind your agricultural equipment.
                </p>
              </div>
            </div>
          </div>

          {/* Simple Flow */}
          <div className="mt-14 sm:mt-16 lg:mt-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4">
              {[
                ["Agricultural Business", "Your machinery / application"],
                ["Component Requirement", "Plastic or rubber part"],
                ["Drawing / Sample", "Your specifications"],
                ["Kalika Engineering", "Manufacturing"],
                ["Your Production", "Ready for assembly"],
              ].map(([title, description], index) => (
                <div
                  key={title}
                  className={`relative ${cardBg} border ${border} rounded-xl sm:rounded-2xl p-5`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[#ff6501] text-xs font-bold tracking-widest">
                      0{index + 1}
                    </span>

                    {index < 4 && (
                      <ArrowRight
                        size={16}
                        className="hidden lg:block text-[#ff6501]/40"
                      />
                    )}
                  </div>

                  <h3 className="font-heading font-semibold text-base sm:text-lg mt-6">
                    {title}
                  </h3>

                  <p className={`text-xs sm:text-sm mt-2 leading-6 ${muted}`}>
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          WHAT AGRICULTURAL BUSINESSES NEED
      ========================================================= */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-5">
              <span className="w-8 h-[2px] bg-[#ff6501]" />

              <span className="text-[#ff6501] text-xs sm:text-sm font-semibold tracking-[0.18em] uppercase">
                What We Supply
              </span>
            </div>

            <h2 className="font-heading font-semibold tracking-[-0.04em] leading-[1.05] text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              Components agricultural businesses{" "}
              <span className="text-[#ff6501]">
                need from a manufacturing partner.
              </span>
            </h2>

            <p
              className={`mt-6 text-base sm:text-lg leading-7 sm:leading-8 ${muted}`}
            >
              We manufacture around the actual requirement instead of treating
              every agricultural application as a standard product. The
              component is developed around the machinery, application and
              specifications provided by the customer.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 lg:gap-x-14 mt-12 sm:mt-14">
            {customerNeeds.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.number}
                  className={`group flex gap-4 sm:gap-6 py-6 sm:py-8 border-t ${border}`}
                >
                  <div className="shrink-0">
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#ff6501]/10 flex items-center justify-center">
                      <Icon
                        size={21}
                        className="text-[#ff6501]"
                      />
                    </div>
                  </div>

                  <div className="min-w-0">
                    <div className="flex items-center gap-3">
                      <span className="text-[#ff6501] text-xs font-bold tracking-widest">
                        {item.number}
                      </span>

                      <h3 className="font-heading font-semibold text-lg sm:text-xl">
                        {item.title}
                      </h3>
                    </div>

                    <p
                      className={`mt-2.5 text-sm sm:text-base leading-7 ${muted}`}
                    >
                      {item.description}
                    </p>
                  </div>
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
          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-20 items-start">
            <div>
              <div className="flex items-center gap-2 mb-5">
                <span className="w-8 h-[2px] bg-[#ff6501]" />

                <span className="text-[#ff6501] text-xs sm:text-sm font-semibold tracking-[0.18em] uppercase">
                  Who We Work With
                </span>
              </div>

              <h2 className="font-heading font-semibold tracking-[-0.04em] leading-[1.05] text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                Built for businesses that{" "}
                <span className="text-[#ff6501]">
                  build agricultural equipment.
                </span>
              </h2>

              <p
                className={`mt-6 text-base sm:text-lg leading-7 sm:leading-8 ${muted}`}
              >
                Our role is simple: manufacture the plastic and rubber
                components that agricultural businesses need for their
                machinery, equipment and assemblies.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              {customerTypes.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className={`${cardBg} border ${border} rounded-2xl p-5 sm:p-6`}
                  >
                    <div className="w-11 h-11 rounded-xl bg-[#ff6501]/10 flex items-center justify-center">
                      <Icon
                        size={21}
                        className="text-[#ff6501]"
                      />
                    </div>

                    <h3 className="font-heading font-semibold text-lg sm:text-xl mt-6">
                      {item.title}
                    </h3>

                    <p className={`mt-3 text-sm leading-7 ${muted}`}>
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CUSTOMER REQUIREMENT
      ========================================================= */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            {/* Content */}
            <div>
              <div className="flex items-center gap-2 mb-5">
                <span className="w-8 h-[2px] bg-[#ff6501]" />

                <span className="text-[#ff6501] text-xs sm:text-sm font-semibold tracking-[0.18em] uppercase">
                  Your Requirement
                </span>
              </div>

              <h2 className="font-heading font-semibold tracking-[-0.04em] leading-[1.05] text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                Already have a component requirement for your machinery?
              </h2>

              <p
                className={`mt-6 text-base sm:text-lg leading-7 sm:leading-8 ${muted}`}
              >
                You do not need to explain everything from scratch. If your
                agricultural business already has a drawing, sample or defined
                specification, share it with our team.
              </p>

              <p className={`mt-4 text-sm sm:text-base leading-7 ${muted}`}>
                We can understand the requirement and discuss the manufacturing
                possibilities based on your application, specifications and
                quantity.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 mt-8">
                {requirementPoints.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3"
                  >
                    <div className="w-5 h-5 rounded-full bg-[#ff6501]/10 flex items-center justify-center shrink-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ff6501]" />
                    </div>

                    <span className="text-sm sm:text-base">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <Link
                href="/contact"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#ff6501] text-white px-6 py-3.5 sm:py-4 rounded-full font-semibold text-sm sm:text-base mt-9 hover:bg-[#e85b00] transition-all duration-300"
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
              className={`relative aspect-[4/3] rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden border ${border}`}
            >
              <Image
                src="/agriculture-manufacturing.png"
                alt="Agricultural machinery component manufacturing"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

              <div className="absolute bottom-5 sm:bottom-7 left-5 sm:left-7 right-5 sm:right-7">
                <p className="text-[#ff6501] text-[10px] sm:text-xs uppercase tracking-[0.18em] font-semibold">
                  Component Manufacturing
                </p>

                <p className="text-white font-heading text-xl sm:text-2xl md:text-3xl font-semibold mt-2 leading-tight">
                  Your machinery.
                  <br />
                  Our component.
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
            <div className="flex items-center gap-2 mb-5">
              <span className="w-8 h-[2px] bg-[#ff6501]" />

              <span className="text-[#ff6501] text-xs sm:text-sm font-semibold tracking-[0.18em] uppercase">
                How It Works
              </span>
            </div>

            <h2 className="font-heading font-semibold tracking-[-0.04em] leading-[1.05] text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              From your agricultural requirement to{" "}
              <span className="text-[#ff6501]">
                manufactured component.
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mt-12 sm:mt-14">
            {process.map((step) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  className={`${cardBg} border ${border} rounded-2xl p-5 sm:p-6`}
                >
                  <div className="flex items-start justify-between">
                    <span className="text-[#ff6501] font-heading text-3xl sm:text-4xl font-semibold">
                      {step.number}
                    </span>

                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#ff6501]/10 flex items-center justify-center">
                      <Icon
                        size={19}
                        className="text-[#ff6501]"
                      />
                    </div>
                  </div>

                  <h3 className="font-heading font-semibold text-lg sm:text-xl mt-7">
                    {step.title}
                  </h3>

                  <p className={`text-sm leading-7 mt-3 ${muted}`}>
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          WHY KALIKA
      ========================================================= */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-20 items-start">
            <div>
              <div className="flex items-center gap-2 mb-5">
                <span className="w-8 h-[2px] bg-[#ff6501]" />

                <span className="text-[#ff6501] text-xs sm:text-sm font-semibold tracking-[0.18em] uppercase">
                  Why Kalika
                </span>
              </div>

              <h2 className="font-heading font-semibold tracking-[-0.04em] leading-[1.05] text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                One partner for your plastic and rubber component requirements.
              </h2>

              <p
                className={`mt-6 text-base sm:text-lg leading-7 sm:leading-8 ${muted}`}
              >
                Instead of treating your requirement as an off-the-shelf
                purchase, we work around the component specifications,
                application and quantity required by your agricultural
                equipment business.
              </p>
            </div>

            <div className={`border-t ${border}`}>
              {reasons.map((reason, index) => (
                <div
                  key={reason}
                  className={`flex items-center gap-4 sm:gap-5 py-5 sm:py-6 border-b ${border}`}
                >
                  <span className="text-[#ff6501] text-xs font-bold tracking-widest w-7 shrink-0">
                    0{index + 1}
                  </span>

                  <div className="w-8 h-8 rounded-lg bg-[#ff6501]/10 flex items-center justify-center shrink-0">
                    <ShieldCheck
                      size={17}
                      className="text-[#ff6501]"
                    />
                  </div>

                  <span className="font-heading font-semibold text-sm sm:text-base lg:text-lg leading-6">
                    {reason}
                  </span>
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
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#ff6501]/10 flex items-center justify-center mx-auto">
            <Tractor
              size={24}
              className="text-[#ff6501]"
            />
          </div>

          <h2 className="font-heading font-semibold tracking-[-0.04em] leading-[1.05] text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-6">
            Need plastic or rubber components for your{" "}
            <span className="text-[#ff6501]">
              agricultural equipment?
            </span>
          </h2>

          <p
            className={`max-w-2xl mx-auto mt-5 text-base sm:text-lg leading-7 sm:leading-8 ${muted}`}
          >
            Share your drawing, sample or component requirement with Kalika
            Engineering and discuss your manufacturing requirement with our
            team.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8">
            <Link
              href="/contact"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#ff6501] text-white px-7 py-3.5 sm:py-4 rounded-full font-semibold text-sm sm:text-base hover:bg-[#e85b00] transition-all duration-300"
            >
              Talk About Your Requirement

              <ArrowUpRight
                size={18}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              />
            </Link>

            <Link
              href="/products"
              className={`group w-full sm:w-auto inline-flex items-center justify-center gap-3 border ${border} px-7 py-3.5 sm:py-4 rounded-full font-semibold text-sm sm:text-base hover:border-[#ff6501] hover:text-[#ff6501] transition-all duration-300`}
            >
              View Product Range

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