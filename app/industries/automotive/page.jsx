"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Cta from "@/app/component/Cta";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronRight,
  Factory,
  FileText,
  Gauge,
  Layers3,
  PackageCheck,
  Settings2,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import { useTheme } from "../../component/ThemeProvider";

const products = [
  {
    title: "Automobile Parts",
    description:
      "Plastic and rubber components manufactured for automotive assemblies and vehicle applications.",
    icon: Wrench,
  },
  {
    title: "Dust Caps",
    description:
      "Protective components designed to help prevent dust, dirt and contaminants from entering assemblies.",
    icon: ShieldCheck,
  },
  {
    title: "Dust Covers",
    description:
      "Rubber and plastic protective covers for components requiring reliable environmental protection.",
    icon: PackageCheck,
  },
  {
    title: "Centre Pull Plugs",
    description:
      "Precision plugs suitable for automotive and industrial component applications.",
    icon: Gauge,
  },
  {
    title: "Plastic Bushes",
    description:
      "Custom plastic bush components manufactured according to required dimensions and application.",
    icon: Settings2,
  },
  {
    title: "Nylon Bush & Washer",
    description:
      "Nylon components suitable for assemblies where dimensional consistency and durability are required.",
    icon: Layers3,
  },
  {
    title: "Plastic Washers",
    description:
      "Application-specific plastic washers manufactured in required sizes and specifications.",
    icon: PackageCheck,
  },
  {
    title: "Protective Caps",
    description:
      "Protective plastic components developed for covering and protecting parts during use or handling.",
    icon: ShieldCheck,
  },
];

const applications = [
  {
    number: "01",
    title: "Engine & Mechanical Assemblies",
    description:
      "Plastic and rubber components can be developed for different mechanical and engine-related assemblies.",
  },
  {
    number: "02",
    title: "Electrical & Wiring",
    description:
      "Insulators, protective parts, bushes and other components for electrical and wiring-related assemblies.",
  },
  {
    number: "03",
    title: "Braking & Suspension",
    description:
      "Custom polymer components for automotive systems where controlled dimensions and reliable performance matter.",
  },
  {
    number: "04",
    title: "Protection & Sealing",
    description:
      "Caps, covers, plugs and rubber components designed to protect assemblies from external contaminants.",
  },
  {
    number: "05",
    title: "Vehicle Assemblies",
    description:
      "Application-specific components manufactured around the dimensions and requirements of your assembly.",
  },
  {
    number: "06",
    title: "Custom Automotive Components",
    description:
      "If the required component is not available as a standard product, we can manufacture it around your requirement.",
  },
];

const process = [
  {
    step: "01",
    title: "Share Your Requirement",
    description:
      "Send your drawing, sample, dimensions, material requirement or component details.",
    icon: FileText,
  },
  {
    step: "02",
    title: "Component Review",
    description:
      "We understand the application, dimensions, material and production requirements.",
    icon: Settings2,
  },
  {
    step: "03",
    title: "Manufacturing",
    description:
      "The required plastic or rubber component is manufactured according to the approved specifications.",
    icon: Factory,
  },
  {
    step: "04",
    title: "Quality Check",
    description:
      "Components are checked for dimensional and production requirements before dispatch.",
    icon: ShieldCheck,
  },
];

const benefits = [
  "Plastic & rubber component manufacturing",
  "Drawing and sample based development",
  "Custom dimensions and specifications",
  "Suitable for bulk B2B requirements",
  "Application-focused component development",
  "Quality inspection before dispatch",
];

export default function AutomotivePage() {
  const { isDarkMode } = useTheme();

  const pageBg = isDarkMode
    ? "bg-brand-black text-brand-white"
    : "bg-brand-white text-brand-black";

  const muted = isDarkMode ? "text-white/60" : "text-black/60";

  const softBg = isDarkMode ? "bg-white/[0.035]" : "bg-black/[0.025]";

  const border = isDarkMode ? "border-white/10" : "border-black/10";

  return (
    <main className={`min-h-screen overflow-hidden ${pageBg}`}>
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className={`absolute -top-40 right-[-10%] h-[500px] w-[500px] rounded-full blur-3xl ${
              isDarkMode ? "bg-brand-orange/10" : "bg-brand-orange/[0.08]"
            }`}
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 pb-8 pt-8 sm:px-6 lg:px-8 lg:pb-12 lg:pt-10">
          {/* Breadcrumb */}
          <div
            className={`mb-10 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] ${muted}`}
          >
            <Link
              href="/"
              className="transition-colors hover:text-brand-orange"
            >
              Home
            </Link>

            <ChevronRight size={14} />

            <Link
              href="/industries"
              className="transition-colors hover:text-brand-orange"
            >
              Industries
            </Link>

            <ChevronRight size={14} />

            <span className="text-brand-orange">Automotive</span>
          </div>

          <div className="grid items-center gap-12 lg:grid-cols-[1.02fr_.98fr] lg:gap-16">
            {/* Left */}
            <div>
              <div className="mb-6 inline-flex items-center gap-3">
                <span className="h-px w-10 bg-brand-orange" />
                <span className="text-xs font-bold uppercase tracking-[0.22em] text-brand-orange">
                  Automotive Component Manufacturing
                </span>
              </div>

              <h1 className="max-w-4xl font-heading text-4xl font-extrabold leading-[1.03] tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
                Plastic & Rubber
                <span className="block text-brand-orange">
                  Components for Automotive
                </span>
                Applications
              </h1>

              <p
                className={`mt-7 max-w-2xl text-base leading-7 sm:text-lg ${muted}`}
              >
                Kalika Engineering manufactures plastic and rubber components
                for automotive companies, component manufacturers and
                assembly businesses. Share your drawing, sample or requirement
                and we manufacture the component around your application.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-3 rounded-full bg-brand-orange px-6 py-3.5 text-sm font-bold text-brand-white transition-all duration-300 hover:gap-4 hover:shadow-[0_12px_35px_rgba(255,101,1,0.22)]"
                >
                  Discuss Your Component
                  <ArrowRight size={18} />
                </Link>

                <Link
                  href="/products/automobile-parts"
                  className={`group inline-flex items-center justify-center gap-3 rounded-full border ${border} px-6 py-3.5 text-sm font-bold transition-all duration-300 hover:border-brand-orange hover:text-brand-orange`}
                >
                  View Automotive Parts
                  <ArrowUpRight size={17} />
                </Link>
              </div>

              {/* Mini trust row */}
              <div className="mt-10 grid max-w-xl grid-cols-2 gap-x-8 gap-y-5 border-t border-current/10 pt-7 sm:grid-cols-3">
                <div>
                  <p className="font-heading text-2xl font-extrabold">
                    Plastic
                  </p>
                  <p className={`mt-1 text-xs ${muted}`}>Components</p>
                </div>

                <div>
                  <p className="font-heading text-2xl font-extrabold">
                    Rubber
                  </p>
                  <p className={`mt-1 text-xs ${muted}`}>Components</p>
                </div>

                <div>
                  <p className="font-heading text-2xl font-extrabold">
                    B2B
                  </p>
                  <p className={`mt-1 text-xs ${muted}`}>
                    Manufacturing
                  </p>
                </div>
              </div>
            </div>

            {/* Right visual */}
            <div className="relative">
              <div
                className={`relative aspect-[4/4.2] overflow-hidden rounded-[2rem] border ${border}`}
              >
                <Image
                  src="/automotive-industry.png"
                  alt="Plastic and rubber automotive component manufacturing"
                  fill
                  priority
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                  <div className="max-w-sm">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-orange">
                      Your Requirement
                    </p>

                    <h2 className="mt-2 font-heading text-2xl font-extrabold leading-tight text-white sm:text-3xl">
                      Your Component.
                      <br />
                      Our Manufacturing.
                    </h2>

                    <p className="mt-3 text-sm leading-6 text-white/70">
                      From drawing or sample to finished plastic and rubber
                      component.
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating card */}
              <div
                className={`absolute -bottom-5 -left-3 hidden w-64 rounded-2xl border ${border} ${softBg} p-4 shadow-2xl backdrop-blur-xl sm:block lg:-left-8`}
              >
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-orange text-white">
                    <Factory size={19} />
                  </div>

                  <div>
                    <p className="text-sm font-bold">
                      Automotive Component
                    </p>
                    <p className={`mt-1 text-xs leading-5 ${muted}`}>
                      Custom plastic & rubber manufacturing
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          MAIN MESSAGE
      ========================================================= */}
      <section className={`border-y ${border}`}>
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[.85fr_1.15fr] lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-orange">
                What We Actually Do
              </p>

              <h2 className="mt-4 max-w-xl font-heading text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
                Automotive companies need components.
                <span className="text-brand-orange">
                  {" "}
                  We manufacture them.
                </span>
              </h2>
            </div>

            <div>
              <p className={`text-base leading-8 sm:text-lg ${muted}`}>
                Automotive manufacturers and component suppliers require
                hundreds of small plastic and rubber parts inside their
                products and assemblies. Kalika Engineering works as a
                component manufacturing partner, producing application-specific
                parts according to the required drawing, sample, dimensions,
                material and quantity.
              </p>

              <p className={`mt-5 text-base leading-8 sm:text-lg ${muted}`}>
                Whether you need a protective cap, bush, washer, plug, cover,
                insulator or another custom polymer component, the requirement
                starts with your component specification and ends with a
                manufactured part ready for your assembly.
              </p>
            </div>
          </div>

          {/* Supply chain visual */}
          <div className="mt-14 grid overflow-hidden rounded-3xl border sm:grid-cols-5">
            {[
              ["01", "Automotive Requirement"],
              ["02", "Drawing / Sample"],
              ["03", "Kalika Manufacturing"],
              ["04", "Quality Check"],
              ["05", "Ready for Assembly"],
            ].map(([number, title], index) => (
              <div
                key={number}
                className={`relative p-5 sm:p-6 ${
                  index !== 4 ? `border-b sm:border-b-0 sm:border-r ${border}` : ""
                }`}
              >
                <span className="text-xs font-bold text-brand-orange">
                  {number}
                </span>

                <p className="mt-5 font-heading text-sm font-bold leading-5">
                  {title}
                </p>

                {index !== 4 && (
                  <ArrowRight
                    size={15}
                    className="absolute right-4 top-1/2 hidden -translate-y-1/2 text-brand-orange sm:block"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          PRODUCTS
      ========================================================= */}
      <section>
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-orange">
                Components We Manufacture
              </p>

              <h2 className="mt-4 font-heading text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
                What automotive companies can source from us
              </h2>

              <p className={`mt-5 max-w-xl leading-7 ${muted}`}>
                Our product range includes plastic and rubber components used
                across different automotive and mechanical assemblies.
              </p>
            </div>

            <Link
              href="/products"
              className="group inline-flex shrink-0 items-center gap-2 text-sm font-bold text-brand-orange"
            >
              Explore All Products
              <ArrowRight
                size={17}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product, index) => {
              const Icon = product.icon;

              return (
                <div
                  key={product.title}
                  className={`group relative overflow-hidden rounded-2xl border ${border} ${softBg} p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-orange/50`}
                >
                  <div className="absolute right-0 top-0 h-20 w-20 rounded-full bg-brand-orange/5 blur-2xl transition-all duration-300 group-hover:bg-brand-orange/15" />

                  <div className="relative">
                    <div className="flex items-center justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-orange text-white">
                        <Icon size={20} />
                      </div>

                      <span
                        className={`font-heading text-xs font-bold ${muted}`}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <h3 className="mt-7 font-heading text-lg font-extrabold">
                      {product.title}
                    </h3>

                    <p className={`mt-3 text-sm leading-6 ${muted}`}>
                      {product.description}
                    </p>

                    <div className="mt-6 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-orange">
                      Component Manufacturing
                      <ArrowRight size={14} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          APPLICATIONS
      ========================================================= */}
      <section className={`border-y ${border} ${softBg}`}>
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-orange">
                Automotive Applications
              </p>

              <h2 className="mt-4 font-heading text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
                Components that become part of your product.
              </h2>

              <p className={`mt-6 max-w-lg leading-7 ${muted}`}>
                Automotive components are often small, but their dimensions,
                material and fit can be critical to the final assembly. We
                manufacture around the requirement of the application.
              </p>

              <Link
                href="/contact"
                className="group mt-8 inline-flex items-center gap-3 text-sm font-bold text-brand-orange"
              >
                Discuss Your Application
                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>

            <div className={`divide-y border-y ${border}`}>
              {applications.map((item) => (
                <div
                  key={item.number}
                  className="group grid gap-5 py-7 sm:grid-cols-[70px_1fr] sm:items-start"
                >
                  <span className="font-heading text-sm font-extrabold text-brand-orange">
                    {item.number}
                  </span>

                  <div>
                    <h3 className="font-heading text-xl font-extrabold">
                      {item.title}
                    </h3>

                    <p className={`mt-2 max-w-2xl text-sm leading-6 ${muted}`}>
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CUSTOM REQUIREMENT
      ========================================================= */}
      <section>
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div
            className={`overflow-hidden rounded-[2rem] border ${border}`}
          >
            <div className="grid lg:grid-cols-[1fr_.8fr]">
              <div className="p-7 sm:p-10 lg:p-14">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-orange">
                  Custom Component Development
                </p>

                <h2 className="mt-4 max-w-2xl font-heading text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
                  Have a drawing, sample or just a component requirement?
                </h2>

                <p className={`mt-6 max-w-2xl leading-7 ${muted}`}>
                  You don't need to select only from a standard catalogue.
                  Share what your automotive application requires and our
                  manufacturing process can be planned around the component
                  specification.
                </p>

                <div className="mt-9 grid gap-3 sm:grid-cols-2">
                  {[
                    "Engineering Drawing",
                    "Existing Sample",
                    "Required Dimensions",
                    "Material Specification",
                    "Required Quantity",
                    "Application Details",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 text-sm font-semibold"
                    >
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-orange text-white">
                        <Check size={14} strokeWidth={3} />
                      </span>

                      {item}
                    </div>
                  ))}
                </div>

                <Link
                  href="/contact"
                  className="mt-9 inline-flex items-center gap-3 rounded-full bg-brand-orange px-6 py-3.5 text-sm font-bold text-white transition-all hover:gap-4 hover:shadow-[0_12px_35px_rgba(255,101,1,0.22)]"
                >
                  Send Your Requirement
                  <ArrowRight size={18} />
                </Link>
              </div>

              <div className="relative min-h-[340px] lg:min-h-full">
                <Image
                  src="/automative-manufacture-web.jpg"
                  alt="Automotive component manufacturing process"
                  fill
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <div className="absolute bottom-7 left-7 right-7 sm:bottom-10 sm:left-10">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-orange">
                    Built Around Your Requirement
                  </p>

                  <p className="mt-2 max-w-sm font-heading text-2xl font-extrabold leading-tight text-white">
                    From specification to finished component.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          PROCESS
      ========================================================= */}
      <section className={`border-y ${border} ${softBg}`}>
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-orange">
              How We Work
            </p>

            <h2 className="mt-4 font-heading text-3xl font-extrabold sm:text-4xl lg:text-5xl">
              A simple path from requirement to component
            </h2>

            <p className={`mt-5 leading-7 ${muted}`}>
              Our process is structured around understanding the component
              first, then manufacturing it according to the agreed
              specifications.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {process.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.step}
                  className={`relative rounded-2xl border ${border} bg-transparent p-6`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-orange text-white">
                      <Icon size={19} />
                    </div>

                    <span className="font-heading text-sm font-extrabold text-brand-orange">
                      {item.step}
                    </span>
                  </div>

                  <h3 className="mt-7 font-heading text-lg font-extrabold">
                    {item.title}
                  </h3>

                  <p className={`mt-3 text-sm leading-6 ${muted}`}>
                    {item.description}
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
      <section>
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-orange">
                Why Kalika Engineering
              </p>

              <h2 className="mt-4 font-heading text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
                One manufacturing partner for your polymer components.
              </h2>

              <p className={`mt-6 max-w-xl leading-7 ${muted}`}>
                Instead of managing different suppliers for different small
                components, automotive businesses can discuss their plastic
                and rubber component requirements with one manufacturing
                partner.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {benefits.map((benefit, index) => (
                <div
                  key={benefit}
                  className={`flex items-start gap-4 rounded-2xl border ${border} ${softBg} p-5`}
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-orange text-white">
                    <Check size={16} strokeWidth={3} />
                  </span>

                  <div>
                    <span
                      className={`mb-1 block text-[10px] font-bold uppercase tracking-widest ${muted}`}
                    >
                      0{index + 1}
                    </span>

                    <p className="text-sm font-bold leading-6">
                      {benefit}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}
    <Cta/>
    </main>
  );
}