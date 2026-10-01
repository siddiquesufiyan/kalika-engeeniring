"use client";

import React, { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Factory,
  Settings2,
  ShieldCheck,
  FlaskConical,
  Boxes,
  Cog,
  PackageCheck,
} from "lucide-react";
import Link from "next/link";
import { useTheme } from "./ThemeProvider";

const tabs = [
  {
    id: "plastic",
    title: "Plastic Components",
    shortTitle: "Plastic",
    icon: Boxes,

    heading: "Precision Plastic Components",
    description:
      "We manufacture a wide range of plastic components for Automotive, Electrical, Tractor, Submersible, Sanitaryware and other OEM and industrial applications.",

    points: [
      "Plastic Plugs & Caps",
      "Plastic Feet & Rivets",
      "Clips, Screws & Nuts",
      "Washers & Grommets",
      "Bushes, Knobs & Handles",
      "Kits & Custom Components",
    ],

    process: [
      "Customer requirement study",
      "Material selection",
      "Tooling & mould development",
      "Precision plastic moulding",
      "Dimensional quality inspection",
      "Packing & dispatch",
    ],
  },

  {
    id: "rubber",
    title: "Rubber Components",
    shortTitle: "Rubber",
    icon: FlaskConical,

    heading: "Reliable Rubber Components",
    description:
      "We provide customized rubber components designed for sealing, flexibility, durability and reliable performance across automotive, electrical, tractor, submersible, sanitaryware and industrial applications.",

    points: [
      "Rubber Bands",
      "O-Rings & Gaskets",
      "PU Cords & Seals",
      "Flat & Cup Washers",
      "Rubber Bushes & Spacers",
      "Custom Rubber Components",
    ],

    process: [
      "Application understanding",
      "Material & compound selection",
      "Mould & tooling development",
      "Controlled rubber moulding",
      "Dimensional inspection",
      "Quality approval & dispatch",
    ],
  },

  {
    id: "sheet-metal",
    title: "Sheet Metal Components",
    shortTitle: "Sheet Metal",
    icon: Settings2,

    heading: "Custom Sheet Metal Components",
    description:
      "We also manufacture Sheet Metal Components according to customer requirements, supporting OEM and industrial applications with customized components developed around specific product needs.",

    points: [
      "Custom Sheet Metal Components",
      "OEM Sheet Metal Parts",
      "Application-Specific Components",
      "Custom Manufactured Parts",
      "Requirement-Based Solutions",
      "Industrial Sheet Metal Components",
    ],

    process: [
      "Customer requirement analysis",
      "Drawing & specification study",
      "Material selection",
      "Component manufacturing",
      "Quality inspection",
      "Packing & dispatch",
    ],
  },

  {
    id: "product-range",
    title: "Complete Product Range",
    shortTitle: "Product Range",
    icon: Factory,

    heading: "Complete Component Manufacturing Solutions",
    description:
      "Kalika Engineering serves as a solution hub for a broad range of plastic, rubber and sheet metal components, offering customized products according to customer requirements and industrial applications.",

    points: [
      "Plugs, Caps & Feet",
      "Rivets, Clips & Screws",
      "Nuts, Washers & Grommets",
      "Bushes, Knobs & Handles",
      "O-Rings, Gaskets & Seals",
      "PU Cords, Spacers & Filters",
    ],

    process: [
      "Requirement & drawing study",
      "Product development",
      "Material selection",
      "Manufacturing",
      "Quality inspection",
      "Final packing & delivery",
    ],
  },
];

function EngineeringExcellence() {
  const [activeTab, setActiveTab] = useState("plastic");

  const { isDarkMode } = useTheme();

  const activeContent =
    tabs.find((tab) => tab.id === activeTab) || tabs[0];

  const ActiveIcon = activeContent.icon;

  // Theme classes
  const sectionBg = isDarkMode
    ? "bg-brand-black"
    : "bg-brand-white";

  const primaryText = isDarkMode
    ? "text-brand-white"
    : "text-brand-black";

  const secondaryText = isDarkMode
    ? "text-brand-white/65"
    : "text-brand-black/65";

  const cardBorder = isDarkMode
    ? "border-brand-white/30"
    : "border-brand-black/10";

  const cardBg = isDarkMode
    ? "bg-brand-black"
    : "bg-brand-white";

  const mutedBorder = isDarkMode
    ? "border-brand-white/30"
    : "border-brand-black/10";

  return (
    <section
      className={`w-full overflow-hidden py-16 transition-colors duration-300 sm:py-20 lg:py-24 ${sectionBg}`}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* ================= HEADER ================= */}
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12 lg:mb-14">

          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-[2px] w-8 bg-brand-orange" />

            <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-orange sm:text-xs">
              Engineering Excellence
            </span>

            <span className="h-[2px] w-8 bg-brand-orange" />
          </div>

          <h2
            className={`text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl ${primaryText}`}
          >
            Plastic, Rubber &{" "}
            <span className="text-brand-orange">Metal Solutions</span>
          </h2>

          <p
            className={`mt-4 text-sm leading-7 sm:text-base ${secondaryText}`}
          >
            Precision-manufactured plastic, rubber and sheet metal
            components developed around the requirements of OEMs,
            manufacturers and industrial applications.
          </p>
        </div>

        {/* ================= TABS ================= */}
        <div className="mb-10 overflow-x-auto pb-2 sm:mb-12">
          <div className="mx-auto flex min-w-max justify-center gap-2 sm:gap-3">

            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;

              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`
                    group flex cursor-pointer items-center gap-2.5
                    border px-5 py-3.5
                    text-sm font-bold
                    transition-all duration-300
                    sm:px-7
                    ${
                      isActive
                        ? "border-brand-black bg-brand-black text-brand-white dark:border-brand-white/30 dark:bg-brand-white/10"
                        : isDarkMode
                          ? "border-brand-white/30 bg-brand-black text-brand-white hover:border-brand-orange hover:text-brand-orange"
                          : "border-brand-black/15 bg-brand-white text-brand-black hover:border-brand-orange hover:text-brand-orange"
                    }
                  `}
                >
                  <Icon
                    size={18}
                    className={
                      isActive
                        ? "text-brand-orange"
                        : isDarkMode
                          ? "text-brand-white/70 group-hover:text-brand-orange"
                          : "text-brand-black/60 group-hover:text-brand-orange"
                    }
                  />

                  <span className="sm:hidden">
                    {tab.shortTitle}
                  </span>

                  <span className="hidden sm:inline">
                    {tab.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ================= MAIN CONTENT ================= */}
        <div
          key={activeContent.id}
          className={`
            grid overflow-hidden
            border shadow-md
            transition-colors duration-300
            lg:grid-cols-[0.9fr_1.1fr]
            ${cardBorder}
            ${cardBg}
          `}
        >

          {/* ================= LEFT BLACK PANEL ================= */}
          <div className="relative overflow-hidden bg-brand-black p-7 sm:p-9 lg:p-12">

            {/* Decorative */}
            <div className="absolute right-0 top-0 h-full w-[1px] bg-brand-orange/30" />

            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full border border-brand-orange/20" />

            <div className="absolute -bottom-20 -left-20 h-48 w-48 rounded-full border border-brand-white/10" />

            <div className="relative z-10">

              {/* Icon */}
              <div className="mb-7 flex h-14 w-14 items-center justify-center bg-brand-orange sm:h-16 sm:w-16">
                <ActiveIcon
                  size={28}
                  strokeWidth={1.8}
                  className="text-brand-white"
                />
              </div>

              <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.2em] text-brand-orange">
                Kalika Engineering
              </p>

              <h3 className="max-w-md text-2xl font-bold leading-tight text-brand-white sm:text-3xl lg:text-4xl">
                {activeContent.heading}
              </h3>

              <p className="mt-5 max-w-lg text-sm leading-7 text-brand-white/65 sm:text-base">
                {activeContent.description}
              </p>

              {/* CTA */}
              <Link
                href="/contact"
                className="group mt-8 inline-flex items-center gap-3 border border-brand-white/30 px-5 py-3 text-sm font-semibold text-brand-white transition-all duration-300 hover:border-brand-orange hover:bg-brand-orange"
              >
                Discuss Your Requirement

                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>

          {/* ================= RIGHT CONTENT ================= */}
          <div
            className={`
              p-7 transition-colors duration-300
              sm:p-9 lg:p-12
              ${cardBg}
            `}
          >

            {/* EXPERTISE */}
            <div className="mb-10">

              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center bg-brand-orange">
                  <Settings2
                    size={18}
                    className="text-brand-white"
                  />
                </div>

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-orange">
                    Product Range
                  </p>

                  <h4 className={`text-lg font-bold ${primaryText}`}>
                    What We Manufacture
                  </h4>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {activeContent.points.map((point, index) => (
                  <div
                    key={index}
                    className={`
                      group flex items-center gap-3
                      border p-3.5
                      transition-all duration-300
                      hover:border-brand-orange
                      ${mutedBorder}
                    `}
                  >
                    <CheckCircle2
                      size={17}
                      className="shrink-0 text-brand-orange"
                    />

                    <span
                      className={`text-sm font-medium ${
                        isDarkMode
                          ? "text-brand-white/85"
                          : "text-brand-black/80"
                      }`}
                    >
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* PROCESS */}
            <div>

              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center bg-brand-black">
                  <Cog
                    size={18}
                    className="text-brand-orange"
                  />
                </div>

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-orange">
                    Our Approach
                  </p>

                  <h4 className={`text-lg font-bold ${primaryText}`}>
                    How We Work
                  </h4>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {activeContent.process.map((step, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center border border-brand-orange text-[10px] font-bold text-brand-orange">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <p
                      className={`pt-1 text-sm leading-5 ${
                        isDarkMode
                          ? "text-brand-white/70"
                          : "text-brand-black/70"
                      }`}
                    >
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ================= TRUST STRIP ================= */}
        <div
          className={`
            mt-6 grid border
            transition-colors duration-300
            sm:grid-cols-3
            ${mutedBorder}
            ${cardBg}
          `}
        >

          {/* QUALITY */}
          <div
            className={`
              flex items-center gap-4 border-b p-5
              sm:border-b-0 sm:border-r
              ${mutedBorder}
            `}
          >
            <ShieldCheck
              size={25}
              className="shrink-0 text-brand-orange"
            />

            <div>
              <p className={`text-sm font-bold ${primaryText}`}>
                Quality Focused
              </p>

              <p
                className={`mt-1 text-xs ${
                  isDarkMode
                    ? "text-brand-white/55"
                    : "text-brand-black/55"
                }`}
              >
                Consistent quality and manufacturing standards
              </p>
            </div>
          </div>

          {/* CUSTOM */}
          <div
            className={`
              flex items-center gap-4 border-b p-5
              sm:border-b-0 sm:border-r
              ${mutedBorder}
            `}
          >
            <Settings2
              size={25}
              className="shrink-0 text-brand-orange"
            />

            <div>
              <p className={`text-sm font-bold ${primaryText}`}>
                Custom Components
              </p>

              <p
                className={`mt-1 text-xs ${
                  isDarkMode
                    ? "text-brand-white/55"
                    : "text-brand-black/55"
                }`}
              >
                Components developed around your requirements
              </p>
            </div>
          </div>

          {/* GLOBAL */}
          <div className="flex items-center gap-4 p-5">
            <PackageCheck
              size={25}
              className="shrink-0 text-brand-orange"
            />

            <div>
              <p className={`text-sm font-bold ${primaryText}`}>
                Pan-India & Export Supply
              </p>

              <p
                className={`mt-1 text-xs ${
                  isDarkMode
                    ? "text-brand-white/55"
                    : "text-brand-black/55"
                }`}
              >
                Products supplied across India and export markets
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default EngineeringExcellence;