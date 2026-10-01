"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronRight,
  Factory,
  Settings2,
  ShieldCheck,
  Wrench,
  Zap,
  Tractor,
  Droplets,
  Layers3,
  CircleDot,
} from "lucide-react";

import { useTheme } from "../component/ThemeProvider";
import WeServe from "../component/WeServe";
import Cta from "../component/Cta";
import Testimonial from "../component/Testimonial";
import Faq from "../component/Faq";

const industries = [
  {
    number: "01",
    title: "Automotive",
    eyebrow: "Automotive Components",
    description:
      "Plastic and rubber components manufactured for automotive manufacturers, component suppliers and vehicle assemblies.",
    image: "/automotive-industry.png",
    href: "/industries/automotive",
    icon: Wrench,
    components: [
      "Automobile Parts",
      "Dust Caps & Covers",
      "Bushes & Washers",
      "Protective Components",
    ],
    applications: [
      "Vehicle Assemblies",
      "Mechanical Components",
      "Electrical Applications",
      "Protection & Sealing",
    ],
  },
  {
    number: "02",
    title: "Electrical",
    eyebrow: "Electrical Components",
    description:
      "Application-focused plastic and rubber components for electrical equipment, assemblies and wiring applications.",
    image: "/electrical-industry.png",
    href: "/industries/electrical",
    icon: Zap,
    components: [
      "Electrical Parts",
      "DMC Insulators",
      "Plastic Bushes",
      "Protective Components",
    ],
    applications: [
      "Electrical Assemblies",
      "Insulation",
      "Wiring Applications",
      "Equipment Components",
    ],
  },
  {
    number: "03",
    title: "Agriculture",
    eyebrow: "Agricultural Components",
    description:
      "Durable plastic and rubber components manufactured for agricultural machinery, equipment and related assemblies.",
    image: "/agriculture-industry.png",
    href: "/industries/agriculture",
    icon: Tractor,
    components: [
      "Bushes & Washers",
      "Protective Caps",
      "Plastic Components",
      "Custom Parts",
    ],
    applications: [
      "Agricultural Machinery",
      "Equipment Assemblies",
      "Mechanical Applications",
      "Protection Components",
    ],
  },
  {
    number: "04",
    title: "Sanitaryware",
    eyebrow: "Sanitaryware Components",
    description:
      "Plastic and rubber components for sanitaryware, plumbing products, fittings and related manufacturing applications.",
    image: "/sanitaryware-industry.png",
    href: "/industries/sanitaryware",
    icon: Droplets,
    components: [
      "Tap Washers",
      "PVC Pipe Caps",
      "Plastic Washers",
      "Custom Components",
    ],
    applications: [
      "Sanitary Fittings",
      "Plumbing Products",
      "Water Applications",
      "Product Assemblies",
    ],
  },
];

const capabilities = [
  {
    icon: Settings2,
    title: "Custom Manufacturing",
    description:
      "Components developed around your drawing, sample, dimensions and application requirements.",
  },
  {
    icon: Layers3,
    title: "Plastic & Rubber",
    description:
      "A single manufacturing partner for different plastic and rubber component requirements.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Focused",
    description:
      "Components are checked against the required specifications before dispatch.",
  },
  {
    icon: Factory,
    title: "B2B Manufacturing",
    description:
      "Manufacturing support for businesses that require components for their own products and assemblies.",
  },
];

const workflow = [
  {
    number: "01",
    title: "Your Industry",
    text: "Automotive, Electrical, Agriculture or Sanitaryware",
  },
  {
    number: "02",
    title: "Your Requirement",
    text: "Drawing, sample, dimensions, material or application details",
  },
  {
    number: "03",
    title: "Our Manufacturing",
    text: "Plastic or rubber component manufactured around your requirement",
  },
  {
    number: "04",
    title: "Ready Component",
    text: "Checked component prepared for your product or assembly",
  },
];

const applications = [
  {
    title: "Automotive",
    text: "Automobile parts, dust caps, covers, bushes, washers and protective components.",
    icon: Wrench,
  },
  {
    title: "Electrical",
    text: "Electrical parts, insulators, bushes and application-specific protective components.",
    icon: Zap,
  },
  {
    title: "Agriculture",
    text: "Bushes, washers, protective caps and custom plastic components for machinery.",
    icon: Tractor,
  },
  {
    title: "Sanitaryware",
    text: "Tap washers, PVC pipe caps, plastic washers and custom components.",
    icon: Droplets,
  },
];

export default function Industries() {
  const { isDarkMode } = useTheme();

  const [activeIndustry, setActiveIndustry] = useState(0);

  const pageBg = isDarkMode
    ? "bg-brand-black text-brand-white"
    : "bg-brand-white text-brand-black";

  const muted = isDarkMode ? "text-white/60" : "text-black/60";

  const border = isDarkMode ? "border-white/10" : "border-black/10";

  const softBg = isDarkMode
    ? "bg-white/[0.035]"
    : "bg-black/[0.025]";

  return (
    <main className={`min-h-screen w-full overflow-x-hidden ${pageBg}`}>
      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="relative w-full">
        {/* Background Decoration */}

        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div
            className={`absolute -right-32 -top-40 h-[420px] w-[420px] rounded-full blur-3xl sm:h-[500px] sm:w-[500px] ${
              isDarkMode
                ? "bg-brand-orange/10"
                : "bg-brand-orange/[0.07]"
            }`}
          />

          <div
            className={`absolute -bottom-40 -left-40 h-[380px] w-[380px] rounded-full blur-3xl sm:h-[450px] sm:w-[450px] ${
              isDarkMode
                ? "bg-white/[0.025]"
                : "bg-black/[0.025]"
            }`}
          />
        </div>

        <div
          className="
            relative
            mx-auto
            w-full
            max-w-[1440px]
            px-5
            pb-14
            pt-8
            sm:px-6
            sm:pb-16
            sm:pt-12
            md:px-8
            md:pb-20
            lg:px-10
            lg:pb-24
            lg:pt-16
            xl:px-12
            2xl:px-16
          "
        >
          {/* Breadcrumb */}

          <div
            className={`mb-8 flex flex-wrap items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] sm:mb-10 sm:text-[11px] ${muted}`}
          >
            <Link
              href="/"
              className="transition-colors hover:text-brand-orange"
            >
              Home
            </Link>

            <ChevronRight size={13} />

            <span className="text-brand-orange">
              Industries
            </span>
          </div>

          {/* HERO GRID */}

          <div
            className="
              grid
              items-center
              gap-10
              md:gap-12
              lg:grid-cols-[1fr_0.9fr]
              lg:gap-12
              xl:grid-cols-[1.05fr_0.95fr]
              xl:gap-16
              2xl:gap-20
            "
          >
            {/* LEFT CONTENT */}

            <div className="min-w-0">
              <div className="mb-5 flex items-center gap-3 sm:mb-6">
                <span className="h-px w-8 bg-brand-orange sm:w-10" />

                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-orange sm:text-[11px] sm:tracking-[0.22em]">
                  Industries We Serve
                </span>
              </div>

              <h1
                className="
                  max-w-4xl
                  font-heading
                  font-extrabold
                  leading-[0.98]
                  tracking-[-0.045em]
                  text-[clamp(2.65rem,6vw,5.8rem)]
                "
              >
                Components that power
                <span className="block text-brand-orange">
                  the products you build.
                </span>
              </h1>

              <p
                className={`
                  mt-6
                  max-w-2xl
                  text-[clamp(0.95rem,1.3vw,1.15rem)]
                  leading-[1.8]
                  ${muted}
                `}
              >
                Kalika Engineering manufactures plastic and
                rubber components for businesses across
                Automotive, Electrical, Agriculture and
                Sanitaryware industries.
              </p>

              <p
                className={`
                  mt-3
                  max-w-2xl
                  text-[clamp(0.85rem,1.05vw,1rem)]
                  leading-[1.8]
                  ${muted}
                `}
              >
                We manufacture around your requirement —
                from drawing and sample to dimensions,
                material and application.
              </p>

              {/* CTA */}

              <div className="mt-7 flex w-full flex-col gap-3 sm:mt-9 sm:flex-row sm:w-auto">
                <Link
                  href="/products"
                  className="
                    group
                    inline-flex
                    min-h-[50px]
                    w-full
                    items-center
                    justify-center
                    gap-3
                    rounded-full
                    bg-brand-orange
                    px-6
                    py-3.5
                    text-sm
                    font-bold
                    text-white
                    transition-all
                    duration-300
                    hover:gap-4
                    hover:shadow-[0_12px_35px_rgba(255,101,1,0.25)]
                    sm:w-auto
                  "
                >
                  Explore Products
                  <ArrowRight size={18} />
                </Link>

                <Link
                  href="/contact"
                  className={`
                    group
                    inline-flex
                    min-h-[50px]
                    w-full
                    items-center
                    justify-center
                    gap-3
                    rounded-full
                    border
                    ${border}
                    px-6
                    py-3.5
                    text-sm
                    font-bold
                    transition-all
                    duration-300
                    hover:border-brand-orange
                    hover:text-brand-orange
                    sm:w-auto
                  `}
                >
                  Discuss Requirement

                  <ArrowUpRight
                    size={17}
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                </Link>
              </div>

              {/* Mini Stats */}

              <div
                className={`
                  mt-8
                  grid
                  max-w-2xl
                  grid-cols-2
                  border-t
                  ${border}
                  pt-6
                  sm:mt-10
                  sm:grid-cols-4
                  sm:pt-7
                `}
              >
                <div className="border-r border-current/10 pr-3 sm:pr-4">
                  <p className="font-heading text-2xl font-extrabold sm:text-3xl">
                    04
                  </p>

                  <p className={`mt-1 text-[10px] sm:text-[11px] ${muted}`}>
                    Key Industries
                  </p>
                </div>

                <div className="border-r border-current/10 px-3 sm:px-4">
                  <p className="font-heading text-2xl font-extrabold sm:text-3xl">
                    02
                  </p>

                  <p className={`mt-1 text-[10px] sm:text-[11px] ${muted}`}>
                    Core Materials
                  </p>
                </div>

                <div className="border-r border-current/10 px-3 sm:px-4">
                  <p className="font-heading text-2xl font-extrabold sm:text-3xl">
                    B2B
                  </p>

                  <p className={`mt-1 text-[10px] sm:text-[11px] ${muted}`}>
                    Manufacturing
                  </p>
                </div>

                <div className="pl-3 sm:pl-4">
                  <p className="font-heading text-2xl font-extrabold sm:text-3xl">
                    OEM
                  </p>

                  <p className={`mt-1 text-[10px] sm:text-[11px] ${muted}`}>
                    Focused
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT IMAGE */}

            <div className="relative min-w-0 lg:mt-2">
              <div
                className={`
                  relative
                  w-full
                  overflow-hidden
                  rounded-[1.5rem]
                  border
                  ${border}
                  sm:rounded-[1.75rem]
                `}
              >
                <Image
                  src="/manufacturing-process.png"
                  alt="Plastic and rubber component manufacturing industries"
                  width={1200}
                  height={1200}
                  className="
                    block
                    h-[380px]
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    hover:scale-105
                    sm:h-[480px]
                    lg:h-[560px]
                    xl:h-[620px]
                  "
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7 lg:p-8">
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-orange sm:text-[11px] sm:tracking-[0.2em]">
                    Plastic & Rubber Components
                  </p>

                  <h2
                    className="
                      mt-2
                      max-w-md
                      font-heading
                      text-[clamp(1.4rem,2.5vw,2.15rem)]
                      font-extrabold
                      leading-tight
                      text-white
                    "
                  >
                    One manufacturing partner.
                    <br />
                    Multiple industries.
                  </h2>
                </div>
              </div>

              {/* Floating Card */}

              <div
                className={`
                  absolute
                  -bottom-5
                  left-3
                  hidden
                  rounded-2xl
                  border
                  ${border}
                  ${softBg}
                  p-4
                  shadow-2xl
                  backdrop-blur-xl
                  sm:block
                  lg:-left-6
                  xl:-left-8
                `}
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-orange text-white">
                    <Factory size={18} />
                  </div>

                  <div>
                    <p className="text-sm font-bold">
                      Industry-focused
                    </p>

                    <p className={`mt-1 text-xs ${muted}`}>
                      Component Manufacturing
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          WE SERVE
      ========================================================= */}

      <WeServe />

      {/* =========================================================
          INDUSTRY APPROACH
      ========================================================= */}

      <section className={`border-y ${border}`}>
        <div
          className="
            mx-auto
            w-full
            max-w-[1440px]
            px-5
            py-14
            sm:px-6
            sm:py-16
            md:px-8
            lg:px-10
            lg:py-20
            xl:px-12
            2xl:px-16
          "
        >
          <div
            className="
              grid
              gap-8
              lg:grid-cols-[0.85fr_1.15fr]
              lg:items-center
              lg:gap-12
              xl:gap-20
            "
          >
            <div className="min-w-0">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-orange sm:text-[11px]">
                Our Industry Approach
              </p>

              <h2
                className="
                  mt-4
                  font-heading
                  text-[clamp(1.9rem,3.5vw,3.6rem)]
                  font-extrabold
                  leading-[1.05]
                  tracking-tight
                "
              >
                You know the application.
                <span className="block text-brand-orange">
                  We manufacture the component.
                </span>
              </h2>
            </div>

            <div className="min-w-0">
              <p
                className={`
                  text-[clamp(0.95rem,1.25vw,1.15rem)]
                  leading-[1.85]
                  ${muted}
                `}
              >
                Every industry has different component
                requirements. Instead of treating every
                requirement as a standard product, Kalika
                Engineering focuses on understanding how the
                component needs to fit into your product or
                assembly.
              </p>

              <p
                className={`
                  mt-4
                  text-[clamp(0.85rem,1.05vw,1rem)]
                  leading-[1.8]
                  ${muted}
                `}
              >
                Share a drawing, sample, dimensions, material
                requirement or application details — and our
                manufacturing process can be planned around
                the component you need.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          INDUSTRIES
      ========================================================= */}

      <section id="industries" className="scroll-mt-20">
        <div
          className="
            mx-auto
            w-full
            max-w-[1440px]
            px-5
            py-14
            sm:px-6
            sm:py-16
            md:px-8
            lg:px-10
            lg:py-20
            xl:px-12
            2xl:px-16
          "
        >
          {/* Heading */}

          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-orange sm:text-[11px]">
                Industries We Serve
              </p>

              <h2
                className="
                  mt-4
                  font-heading
                  text-[clamp(1.9rem,3.5vw,3.5rem)]
                  font-extrabold
                  leading-[1.05]
                  tracking-tight
                "
              >
                Find the industry your
                <span className="text-brand-orange">
                  {" "}
                  business belongs to.
                </span>
              </h2>

              <p
                className={`mt-4 max-w-2xl text-[clamp(0.85rem,1vw,1rem)] leading-7 ${muted}`}
              >
                Explore the type of plastic and rubber component
                requirements we manufacture for each industry.
              </p>
            </div>

            <div
              className={`
                hidden
                rounded-full
                border
                ${border}
                px-4
                py-2
                text-xs
                font-semibold
                md:block
              `}
            >
              <span className="text-brand-orange">04</span>{" "}
              Industries
            </div>
          </div>

          {/* DESKTOP */}

          <div className="mt-10 hidden lg:grid lg:grid-cols-[minmax(250px,0.38fr)_minmax(0,1fr)] lg:gap-5 xl:mt-12">
            {/* Left Navigation */}

            <div
              className={`
                h-fit
                rounded-3xl
                border
                ${border}
                ${softBg}
                p-3
              `}
            >
              {industries.map((industry, index) => {
                const Icon = industry.icon;
                const active = activeIndustry === index;

                return (
                  <button
                    key={industry.title}
                    type="button"
                    onMouseEnter={() => setActiveIndustry(index)}
                    onClick={() => setActiveIndustry(index)}
                    className={`
                      group
                      relative
                      flex
                      w-full
                      items-center
                      gap-3
                      rounded-2xl
                      p-3.5
                      text-left
                      transition-all
                      duration-300
                      xl:gap-4
                      xl:p-4
                      ${
                        active
                          ? "bg-brand-orange text-white"
                          : "hover:bg-brand-orange/10"
                      }
                    `}
                  >
                    <div
                      className={`
                        flex
                        h-10
                        w-10
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        xl:h-11
                        xl:w-11
                        ${
                          active
                            ? "bg-white/15 text-white"
                            : "bg-brand-orange text-white"
                        }
                      `}
                    >
                      <Icon size={18} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <span
                        className={`
                          block
                          text-[9px]
                          font-bold
                          tracking-widest
                          ${
                            active
                              ? "text-white/70"
                              : "text-brand-orange"
                          }
                        `}
                      >
                        {industry.number}
                      </span>

                      <span className="mt-1 block truncate font-heading text-sm font-extrabold xl:text-base">
                        {industry.title}
                      </span>
                    </div>

                    <ChevronRight
                      size={16}
                      className={`
                        shrink-0
                        transition-transform
                        ${
                          active
                            ? "translate-x-1 text-white"
                            : "text-current/30"
                        }
                      `}
                    />
                  </button>
                );
              })}
            </div>

            {/* Active Industry */}

            {(() => {
              const industry = industries[activeIndustry];

              return (
                <div
                  className={`
                    group
                    relative
                    min-h-[460px]
                    overflow-hidden
                    rounded-3xl
                    border
                    ${border}
                    xl:min-h-[500px]
                  `}
                >
                  <Image
                    src={industry.image}
                    alt={`${industry.title} component manufacturing`}
                    width={1400}
                    height={900}
                    className="
                      absolute
                      inset-0
                      h-full
                      w-full
                      object-cover
                      transition-transform
                      duration-700
                      group-hover:scale-105
                    "
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-black/5" />

                  <div className="absolute left-5 right-5 top-5 flex items-center justify-between sm:left-7 sm:right-7 sm:top-7">
                    <span className="rounded-full bg-brand-orange px-3 py-1.5 text-[9px] font-bold uppercase tracking-widest text-white sm:px-4 sm:py-2 sm:text-[10px]">
                      {industry.eyebrow}
                    </span>

                    <span className="font-heading text-2xl font-extrabold text-white/40 sm:text-3xl">
                      {industry.number}
                    </span>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 xl:p-9">
                    <h3 className="font-heading text-3xl font-extrabold text-white sm:text-4xl xl:text-5xl">
                      {industry.title}
                    </h3>

                    <p className="mt-3 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
                      {industry.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {industry.components.map((component) => (
                        <span
                          key={component}
                          className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[10px] font-semibold text-white backdrop-blur-md sm:text-[11px]"
                        >
                          {component}
                        </span>
                      ))}
                    </div>

                    <div className="mt-6 flex flex-wrap gap-3">
                      <Link
                        href={industry.href}
                        className="group/link inline-flex items-center gap-3 rounded-full bg-brand-orange px-5 py-3 text-sm font-bold text-white transition-all hover:gap-4"
                      >
                        Explore {industry.title}
                        <ArrowRight size={17} />
                      </Link>

                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/20 px-5 py-3 text-sm font-bold text-white backdrop-blur-md transition-colors hover:border-brand-orange"
                      >
                        Discuss Requirement
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>

          {/* MOBILE + TABLET */}

          <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-5 lg:hidden">
            {industries.map((industry) => {
              const Icon = industry.icon;

              return (
                <Link
                  href={industry.href}
                  key={industry.title}
                  className={`
                    group
                    overflow-hidden
                    rounded-3xl
                    border
                    ${border}
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-brand-orange/50
                  `}
                >
                  <div className="relative h-[230px] overflow-hidden sm:h-[260px] md:h-[280px]">
                    <Image
                      src={industry.image}
                      alt={`${industry.title} components`}
                      width={900}
                      height={600}
                      className="
                        block
                        h-full
                        w-full
                        object-cover
                        transition-transform
                        duration-700
                        group-hover:scale-105
                      "
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent" />

                    <div className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-xl bg-brand-orange text-white sm:left-5 sm:top-5">
                      <Icon size={18} />
                    </div>

                    <span className="absolute right-4 top-4 font-heading text-sm font-extrabold text-white/60 sm:right-5 sm:top-5">
                      {industry.number}
                    </span>

                    <div className="absolute bottom-5 left-5 right-5">
                      <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-brand-orange sm:text-[10px]">
                        {industry.eyebrow}
                      </p>

                      <h3 className="mt-1 font-heading text-2xl font-extrabold text-white sm:text-3xl">
                        {industry.title}
                      </h3>
                    </div>
                  </div>

                  <div className={`${softBg} p-5`}>
                    <p
                      className={`text-sm leading-7 ${muted}`}
                    >
                      {industry.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {industry.components.map((component) => (
                        <span
                          key={component}
                          className={`
                            rounded-full
                            border
                            ${border}
                            px-2.5
                            py-1.5
                            text-[9px]
                            font-semibold
                            sm:text-[10px]
                          `}
                        >
                          {component}
                        </span>
                      ))}
                    </div>

                    <div className="mt-5 flex items-center justify-between">
                      <span className="text-xs font-bold sm:text-sm">
                        Explore {industry.title}
                      </span>

                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-orange text-white">
                        <ArrowRight size={16} />
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          COMPONENT APPLICATIONS
      ========================================================= */}

      <section className={`border-y ${border} ${softBg}`}>
        <div
          className="
            mx-auto
            w-full
            max-w-[1440px]
            px-5
            py-14
            sm:px-6
            sm:py-16
            md:px-8
            lg:px-10
            lg:py-20
            xl:px-12
            2xl:px-16
          "
        >
          <div
            className="
              grid
              gap-10
              lg:grid-cols-[0.75fr_1.25fr]
              lg:items-center
              lg:gap-14
              xl:gap-20
            "
          >
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-orange sm:text-[11px]">
                Component Applications
              </p>

              <h2
                className="
                  mt-4
                  font-heading
                  text-[clamp(1.9rem,3.5vw,3.5rem)]
                  font-extrabold
                  leading-[1.05]
                "
              >
                Different industries.
                <span className="block text-brand-orange">
                  Different requirements.
                </span>
              </h2>

              <p
                className={`mt-5 max-w-xl text-[clamp(0.85rem,1vw,1rem)] leading-7 ${muted}`}
              >
                We don't want you to browse through hundreds
                of unrelated products. Select your industry and
                understand which type of component
                manufacturing is relevant to your business.
              </p>

              <Link
                href="/contact"
                className="group mt-7 inline-flex items-center gap-3 text-sm font-bold text-brand-orange"
              >
                Talk About Your Requirement

                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {applications.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className={`
                      group
                      rounded-2xl
                      border
                      ${border}
                      bg-transparent
                      p-5
                      transition-all
                      duration-300
                      hover:border-brand-orange/60
                      hover:bg-brand-orange/[0.025]
                      sm:p-6
                    `}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-orange text-white">
                        <Icon size={18} />
                      </div>

                      <span className="font-heading text-xs font-extrabold text-brand-orange">
                        0{index + 1}
                      </span>
                    </div>

                    <h3 className="mt-5 font-heading text-lg font-extrabold">
                      {item.title}
                    </h3>

                    <p
                      className={`mt-2 text-sm leading-6 ${muted}`}
                    >
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          WORKFLOW
      ========================================================= */}

      <section>
        <div
          className="
            mx-auto
            w-full
            max-w-[1440px]
            px-5
            py-14
            sm:px-6
            sm:py-16
            md:px-8
            lg:px-10
            lg:py-20
            xl:px-12
            2xl:px-16
          "
        >
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-orange sm:text-[11px]">
              How Industry Requirements Work
            </p>

            <h2
              className="
                mt-4
                font-heading
                text-[clamp(1.9rem,3.5vw,3.5rem)]
                font-extrabold
                leading-[1.05]
              "
            >
              From industry requirement
              <span className="text-brand-orange">
                {" "}
                to component.
              </span>
            </h2>

            <p
              className={`mt-4 text-[clamp(0.85rem,1vw,1rem)] leading-7 ${muted}`}
            >
              A simple B2B manufacturing workflow focused
              on your actual component requirement.
            </p>
          </div>

          <div className="relative mt-10 sm:mt-12 lg:mt-14">
            {/* Desktop Line */}

            <div
              className={`
                absolute
                left-[12.5%]
                right-[12.5%]
                top-7
                hidden
                h-px
                lg:block
                ${
                  isDarkMode
                    ? "bg-white/10"
                    : "bg-black/10"
                }
              `}
            />

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
              {workflow.map((item, index) => (
                <div
                  key={item.number}
                  className={`
                    relative
                    rounded-2xl
                    border
                    ${border}
                    ${softBg}
                    p-5
                    sm:p-6
                  `}
                >
                  <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-orange font-heading text-sm font-extrabold text-white">
                    {item.number}
                  </div>

                  <h3 className="mt-6 font-heading text-lg font-extrabold">
                    {item.title}
                  </h3>

                  <p
                    className={`mt-3 text-sm leading-6 ${muted}`}
                  >
                    {item.text}
                  </p>

                  {index !== workflow.length - 1 && (
                    <ChevronRight
                      size={18}
                      className="
                        absolute
                        -bottom-7
                        left-1/2
                        z-10
                        -translate-x-1/2
                        rotate-90
                        text-brand-orange
                        sm:hidden
                      "
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CAPABILITIES
      ========================================================= */}

      <section className={`border-y ${border} ${softBg}`}>
        <div
          className="
            mx-auto
            w-full
            max-w-[1440px]
            px-5
            py-14
            sm:px-6
            sm:py-16
            md:px-8
            lg:px-10
            lg:py-20
            xl:px-12
            2xl:px-16
          "
        >
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-orange sm:text-[11px]">
                Manufacturing Capability
              </p>

              <h2
                className="
                  mt-4
                  font-heading
                  text-[clamp(1.9rem,3.5vw,3.5rem)]
                  font-extrabold
                  leading-[1.05]
                "
              >
                Built around the needs of
                <span className="text-brand-orange">
                  {" "}
                  your industry.
                </span>
              </h2>
            </div>

            <p
              className={`max-w-md text-[clamp(0.85rem,1vw,1rem)] leading-7 ${muted}`}
            >
              Whether the component is standard or
              application-specific, the focus remains on
              producing the part your product actually needs.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4">
            {capabilities.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className={`
                    group
                    rounded-2xl
                    border
                    ${border}
                    bg-transparent
                    p-5
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-brand-orange/50
                    sm:p-6
                  `}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-orange text-white">
                      <Icon size={19} />
                    </div>

                    <span
                      className={`font-heading text-xs font-bold ${muted}`}
                    >
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="mt-6 font-heading text-lg font-extrabold">
                    {item.title}
                  </h3>

                  <p
                    className={`mt-3 text-sm leading-6 ${muted}`}
                  >
                    {item.description}
                  </p>

                  <div className="mt-5 flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-brand-orange">
                    <CircleDot size={12} />
                    Manufacturing Focus
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          REQUIREMENT STRIP
      ========================================================= */}

      <section className={`border-b ${border}`}>
        <div
          className="
            mx-auto
            w-full
            max-w-[1440px]
            px-5
            py-12
            sm:px-6
            sm:py-14
            md:px-8
            lg:px-10
            lg:py-20
            xl:px-12
            2xl:px-16
          "
        >
          <div
            className={`
              relative
              overflow-hidden
              rounded-3xl
              border
              ${border}
              ${softBg}
              p-6
              sm:p-8
              lg:p-12
            `}
          >
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-brand-orange/10 blur-3xl" />

            <div className="relative flex flex-col justify-between gap-7 lg:flex-row lg:items-center lg:gap-10">
              <div className="max-w-3xl">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-orange sm:text-[11px]">
                  Have a Component Requirement?
                </p>

                <h2
                  className="
                    mt-3
                    font-heading
                    text-[clamp(1.5rem,2.8vw,2.5rem)]
                    font-extrabold
                    leading-tight
                  "
                >
                  Tell us what your industry needs.
                </h2>

                <p
                  className={`mt-3 max-w-2xl text-sm leading-7 ${muted}`}
                >
                  Share your drawing, sample, dimensions,
                  material or application details and discuss
                  the component with our team.
                </p>

                <div className="mt-5 flex flex-wrap gap-x-5 gap-y-3">
                  {[
                    "Drawing",
                    "Sample",
                    "Dimensions",
                    "Material",
                    "Application",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 text-xs font-semibold"
                    >
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-orange text-white">
                        <Check
                          size={12}
                          strokeWidth={3}
                        />
                      </span>

                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <Link
                href="/contact"
                className="
                  group
                  inline-flex
                  min-h-[52px]
                  w-full
                  shrink-0
                  items-center
                  justify-center
                  gap-3
                  rounded-full
                  bg-brand-orange
                  px-7
                  py-4
                  text-sm
                  font-bold
                  text-white
                  transition-all
                  duration-300
                  hover:gap-4
                  hover:shadow-[0_12px_35px_rgba(255,101,1,0.25)]
                  sm:w-auto
                "
              >
                Request a Quote
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          TESTIMONIAL
      ========================================================= */}

      <Testimonial />

      {/* =========================================================
          FAQ
      ========================================================= */}

      <Faq />

      {/* =========================================================
          CTA
      ========================================================= */}

      <Cta />
    </main>
  );
}