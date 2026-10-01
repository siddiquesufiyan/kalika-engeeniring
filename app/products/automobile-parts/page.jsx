"use client";

import Image from "next/image";
import Testimonial from "@/app/component/Testimonial";
import Faq from "@/app/component/Faq";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  ChevronRight,
  Factory,
  Settings2,
  ShieldCheck,
  Layers3,
  CircleDot,
  CarFront,
  Zap,
} from "lucide-react";
import { useTheme } from "../../component/ThemeProvider";

function AutomobileParts() {
  const { isDarkMode } = useTheme();

  /* =====================================================
      RELATED PRODUCTS
  ====================================================== */

  const relatedProducts = [
    {
      title: "Plastic Components",
      description:
        "Precision plastic components manufactured for automotive, electrical and industrial applications.",
      href: "/products/plastic-components",
      icon: Layers3,
    },
    {
      title: "Rubber Components",
      description:
        "Precision rubber components designed for sealing, cushioning, protection and vibration control.",
      href: "/products/rubber-components",
      icon: CircleDot,
    },
    {
      title: "Gaskets",
      description:
        "Reliable gasket solutions developed for sealing requirements across automotive and industrial applications.",
      href: "/products/gaskets",
      icon: ShieldCheck,
    },
    {
      title: "Electrical Parts",
      description:
        "Precision components designed for electrical equipment, assemblies and automotive electrical systems.",
      href: "/products/electrical-parts",
      icon: Zap,
    },
  ];

  /* =====================================================
      AUTOMOBILE PRODUCTS WE MANUFACTURE
  ====================================================== */

  const manufacturedProducts = [
    {
      title: "Automotive Plastic Parts",
      description:
        "Precision plastic components developed for automotive assemblies, interiors and functional applications.",
      icon: CarFront,
    },
    {
      title: "Automotive Rubber Parts",
      description:
        "Durable rubber components designed for sealing, cushioning, vibration control and protection.",
      icon: CircleDot,
    },
    {
      title: "Rubber Bushes",
      description:
        "Automotive rubber bushes designed to provide cushioning, isolation and controlled movement in assemblies.",
      icon: Settings2,
    },
    {
      title: "Automotive Seals",
      description:
        "Application-specific sealing components developed to help protect assemblies from leakage, dust and contaminants.",
      icon: ShieldCheck,
    },
    {
      title: "Plastic Covers & Housings",
      description:
        "Functional automotive covers and housings manufactured for protection, assembly and long-term use.",
      icon: Layers3,
    },
    {
      title: "Custom Automobile Components",
      description:
        "Custom rubber and plastic components manufactured according to drawings, dimensions and application requirements.",
      icon: Factory,
    },
  ];

  /* =====================================================
      MATERIALS & CAPABILITIES
  ====================================================== */

  const capabilities = [
    "Automotive Grade Plastics",
    "Natural & Synthetic Rubber",
    "EPDM & Nitrile Rubber",
    "Silicone Rubber Components",
    "Injection & Rubber Moulding",
    "Custom Tooling & Inspection",
  ];

  /* =====================================================
      APPLICATIONS
  ====================================================== */

  const applications = [
    {
      number: "01",
      title: "Automotive Assemblies",
      text: "Precision rubber and plastic components developed for automotive assemblies and systems.",
    },
    {
      number: "02",
      title: "Engine & Mechanical",
      text: "Components for mechanical systems, protection, sealing, cushioning and vibration control.",
    },
    {
      number: "03",
      title: "Electrical Systems",
      text: "Plastic and rubber components for automotive electrical equipment and assemblies.",
    },
    {
      number: "04",
      title: "Interior & Exterior",
      text: "Functional components designed for automotive interior, exterior and supporting applications.",
    },
  ];

  /* =====================================================
      WHY KALIKA
  ====================================================== */

  const reasons = [
    {
      number: "01",
      title: "Automotive Application Understanding",
      text: "Components are developed with consideration for their intended automotive application and operating conditions.",
    },
    {
      number: "02",
      title: "Material Selection",
      text: "Plastic and rubber materials are considered according to required performance, durability and application needs.",
    },
    {
      number: "03",
      title: "Precision Manufacturing",
      text: "Controlled moulding and production processes help maintain consistency and dimensional accuracy.",
    },
    {
      number: "04",
      title: "Quality Inspection",
      text: "Finished components are checked for dimensions, appearance and required specifications before dispatch.",
    },
  ];

  return (
    <main
      className={`w-full transition-colors duration-300 ${
        isDarkMode ? "bg-black" : "bg-white"
      }`}
    >
      {/* =====================================================
          PRODUCT HERO
      ====================================================== */}

      <section className="relative w-full overflow-hidden bg-black">
        <div
          className="
            relative
            h-[330px]
            w-full
            sm:h-[380px]
            md:h-[440px]
            lg:h-[500px]
          "
        >
          <Image
            src="/automobile-parts-hero.png"
            alt="Automobile Parts Manufacturing - Kalika Engineering"
            fill
            priority
            sizes="100vw"
            className="
              object-cover
              object-[65%_center]
              sm:object-[65%_center]
              md:object-center
            "
          />

          {/* Main Overlay */}

          <div className="absolute inset-0 bg-black/45" />

          {/* Left Gradient */}

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-r
              from-black
              via-black/80
              to-black/10
            "
          />

          {/* Bottom Gradient */}

          <div
            className="
              absolute
              inset-x-0
              bottom-0
              h-32
              bg-gradient-to-t
              from-black/70
              to-transparent
            "
          />

          {/* Hero Content */}

          <div
            className="
              relative
              z-10
              mx-auto
              flex
              h-full
              max-w-7xl
              items-center
              px-5
              sm:px-8
              lg:px-10
            "
          >
            <div className="max-w-2xl">
              <div className="mb-4 flex items-center gap-2 sm:mb-5">
                <span className="h-[2px] w-8 bg-[#ff6501] sm:w-10" />

                <span
                  className="
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.22em]
                    text-[#ff6501]
                    sm:text-xs
                  "
                >
                  Our Products
                </span>
              </div>

              <h1
                className="
                  text-4xl
                  font-bold
                  leading-[1.02]
                  tracking-tight
                  text-white
                  sm:text-5xl
                  md:text-6xl
                  lg:text-[68px]
                "
              >
                Automobile
                <span className="text-[#ff6501]"> Parts</span>
              </h1>

              <p
                className="
                  mt-4
                  max-w-xl
                  text-sm
                  leading-6
                  text-white/70
                  sm:mt-5
                  sm:text-base
                  md:text-lg
                  md:leading-7
                "
              >
                Precision-manufactured rubber and plastic automobile
                components designed for reliable performance, dimensional
                consistency and demanding automotive applications.
              </p>

              {/* Breadcrumb */}

              <div
                className="
                  mt-5
                  flex
                  flex-wrap
                  items-center
                  gap-1.5
                  text-[11px]
                  sm:mt-6
                  sm:gap-2
                  sm:text-xs
                  md:text-sm
                "
              >
                <Link
                  href="/"
                  className="
                    text-white/60
                    transition-colors
                    duration-300
                    hover:text-[#ff6501]
                  "
                >
                  Home
                </Link>

                <ChevronRight
                  size={14}
                  className="text-[#ff6501]"
                />

                <Link
                  href="/products"
                  className="
                    text-white/60
                    transition-colors
                    duration-300
                    hover:text-[#ff6501]
                  "
                >
                  Products
                </Link>

                <ChevronRight
                  size={14}
                  className="text-[#ff6501]"
                />

                <span className="font-medium text-white">
                  Automobile Parts
                </span>
              </div>
            </div>
          </div>

          {/* Orange Bottom Line */}

          <div
            className="
              absolute
              bottom-0
              left-0
              h-[3px]
              w-full
              bg-gradient-to-r
              from-[#ff6501]
              via-[#ff6501]
              to-transparent
            "
          />
        </div>
      </section>

      {/* =====================================================
          PRODUCT INTRODUCTION
      ====================================================== */}

      <section
        className={`w-full px-5 py-14 transition-colors duration-300 sm:px-8 sm:py-16 lg:px-10 lg:py-20 ${
          isDarkMode ? "bg-black" : "bg-white"
        }`}
      >
        <div className="mx-auto max-w-7xl">
          <div
            className="
              grid
              grid-cols-1
              gap-10
              lg:grid-cols-[1.2fr_0.8fr]
              lg:items-center
              lg:gap-20
            "
          >
            {/* Content */}

            <div>
              <div className="mb-3 flex items-center gap-2">
                <span className="h-2 w-2 bg-[#ff6501]" />

                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#ff6501]">
                  Product Overview
                </span>
              </div>

              <h2
                className={`max-w-2xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl ${
                  isDarkMode ? "text-white" : "text-black"
                }`}
              >
                Automobile Parts
                <span className="text-[#ff6501]">
                  {" "}
                  Built for Reliability.
                </span>
              </h2>

              <p
                className={`mt-5 max-w-2xl text-sm leading-7 sm:text-base ${
                  isDarkMode ? "text-white/60" : "text-black/60"
                }`}
              >
                Kalika Engineering manufactures precision rubber and
                plastic components for automotive assemblies, mechanical
                systems, electrical applications and supporting vehicle
                applications.
              </p>

              <p
                className={`mt-4 max-w-2xl text-sm leading-7 sm:text-base ${
                  isDarkMode ? "text-white/60" : "text-black/60"
                }`}
              >
                Components are developed according to drawings,
                dimensions, material characteristics and application
                requirements to support consistent quality across
                production requirements.
              </p>

              {/* Highlights */}

              <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {[
                  "Custom Automobile Component Manufacturing",
                  "Rubber & Plastic Components",
                  "Consistent Dimensional Accuracy",
                  "OEM & Automotive Requirements",
                ].map((item) => (
                  <div
                    key={item}
                    className={`flex items-center gap-2 text-xs font-medium sm:text-sm ${
                      isDarkMode
                        ? "text-white/75"
                        : "text-black/70"
                    }`}
                  >
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#ff6501] text-white">
                      <Check size={12} strokeWidth={3} />
                    </span>

                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Product Details */}

            <div
              className={`relative overflow-hidden border p-6 shadow-[0_15px_50px_rgba(0,0,0,0.08)] transition-colors duration-300 sm:p-8 ${
                isDarkMode
                  ? "border-white/10 bg-[#111111]"
                  : "border-black/10 bg-white"
              }`}
            >
              <div className="absolute left-0 top-0 h-full w-[3px] bg-[#ff6501]" />

              <div className="mb-6 flex items-center justify-between">
                <span
                  className={`text-xs font-bold uppercase tracking-[0.16em] ${
                    isDarkMode ? "text-white" : "text-black"
                  }`}
                >
                  Product Details
                </span>

                <CarFront
                  size={20}
                  className="text-[#ff6501]"
                />
              </div>

              <div className="space-y-5">
                {[
                  {
                    label: "Product Type",
                    value: "Custom Automobile Components",
                  },
                  {
                    label: "Materials",
                    value: "Rubber & Plastic",
                  },
                  {
                    label: "Applications",
                    value: "Automotive & Mechanical",
                  },
                  {
                    label: "Customization",
                    value: "Available as per Requirement",
                  },
                ].map((item, index) => (
                  <div
                    key={item.label}
                    className={`${
                      index !== 3
                        ? `border-b pb-4 ${
                            isDarkMode
                              ? "border-white/10"
                              : "border-black/10"
                          }`
                        : ""
                    }`}
                  >
                    <span
                      className={`text-[10px] font-semibold uppercase tracking-[0.16em] ${
                        isDarkMode
                          ? "text-white/40"
                          : "text-black/40"
                      }`}
                    >
                      {item.label}
                    </span>

                    <p
                      className={`mt-1 text-sm font-semibold ${
                        isDarkMode
                          ? "text-white"
                          : "text-black"
                      }`}
                    >
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          WHAT WE MANUFACTURE
      ====================================================== */}

      <section
        className={`w-full px-5 py-14 transition-colors duration-300 sm:px-8 sm:py-16 lg:px-10 lg:py-20 ${
          isDarkMode ? "bg-[#0d0d0d]" : "bg-[#f7f7f7]"
        }`}
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <div className="mb-3 flex items-center gap-2">
              <span className="h-2 w-2 bg-[#ff6501]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#ff6501]">
                Automobile Product Range
              </span>
            </div>

            <h2
              className={`text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl ${
                isDarkMode ? "text-white" : "text-black"
              }`}
            >
              Automobile Parts
              <span className="text-[#ff6501]">
                {" "}
                We Manufacture.
              </span>
            </h2>

            <p
              className={`mt-4 text-sm leading-7 sm:text-base ${
                isDarkMode ? "text-white/55" : "text-black/55"
              }`}
            >
              From rubber bushes and seals to moulded plastic parts
              and custom automobile components, we manufacture
              products according to drawings, dimensions and
              application requirements.
            </p>
          </div>

          {/* Cards */}

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {manufacturedProducts.map((product) => {
              const Icon = product.icon;

              return (
                <div
                  key={product.title}
                  className={`group relative overflow-hidden border p-6 transition-all duration-300 hover:-translate-y-1 sm:p-7 ${
                    isDarkMode
                      ? "border-white/10 bg-[#111111] hover:border-[#ff6501]/50"
                      : "border-black/10 bg-white shadow-[0_10px_35px_rgba(0,0,0,0.05)] hover:border-[#ff6501]/40"
                  }`}
                >
                  {/* Hover Orange Line */}

                  <div className="absolute left-0 top-0 h-[2px] w-0 bg-[#ff6501] transition-all duration-300 group-hover:w-full" />

                  <div className="flex h-11 w-11 items-center justify-center bg-[#ff6501]/10">
                    <Icon
                      size={21}
                      className="text-[#ff6501]"
                    />
                  </div>

                  <h3
                    className={`mt-6 text-lg font-bold ${
                      isDarkMode ? "text-white" : "text-black"
                    }`}
                  >
                    {product.title}
                  </h3>

                  <p
                    className={`mt-3 text-sm leading-6 ${
                      isDarkMode
                        ? "text-white/50"
                        : "text-black/55"
                    }`}
                  >
                    {product.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Plastic Material Redirect */}

          <div
            className={`mt-6 flex flex-col gap-5 border p-5 transition-colors duration-300 sm:flex-row sm:items-center sm:justify-between sm:p-6 ${
              isDarkMode
                ? "border-white/10 bg-[#111111]"
                : "border-black/10 bg-white"
            }`}
          >
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#ff6501]/10">
                <Layers3
                  size={19}
                  className="text-[#ff6501]"
                />
              </div>

              <div>
                <h3
                  className={`text-base font-bold sm:text-lg ${
                    isDarkMode ? "text-white" : "text-black"
                  }`}
                >
                  Looking for Plastic Components?
                </h3>

                <p
                  className={`mt-1 text-xs leading-5 sm:text-sm ${
                    isDarkMode
                      ? "text-white/50"
                      : "text-black/55"
                  }`}
                >
                  Explore our dedicated plastic component
                  manufacturing capabilities for automotive,
                  electrical and industrial applications.
                </p>
              </div>
            </div>

            <Link
              href="/products/plastic-components"
              className="
                inline-flex
                shrink-0
                items-center
                justify-center
                gap-2
                border
                border-[#ff6501]
                px-5
                py-3
                text-xs
                font-bold
                text-[#ff6501]
                transition-all
                duration-300
                hover:bg-[#ff6501]
                hover:text-white
              "
            >
              View Plastic Components
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================
          MATERIALS & CAPABILITIES
      ====================================================== */}

      <section className="w-full bg-black px-5 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center lg:gap-20">
            {/* Left */}

            <div>
              <div className="mb-3 flex items-center gap-2">
                <span className="h-2 w-2 bg-[#ff6501]" />

                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#ff6501]">
                  Manufacturing Capability
                </span>
              </div>

              <h2 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                Automotive Materials &{" "}
                <span className="text-[#ff6501]">
                  Capabilities.
                </span>
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-white/55 sm:text-base">
                Material selection and manufacturing methods are
                considered according to the component application,
                required performance, durability and operating
                conditions.
              </p>

              <Link
                href="/manufacturing-process"
                className="
                  mt-7
                  inline-flex
                  items-center
                  gap-2
                  text-xs
                  font-bold
                  text-[#ff6501]
                  transition-all
                  duration-300
                  hover:gap-3
                "
              >
                Explore Manufacturing Process
                <ArrowRight size={15} />
              </Link>
            </div>

            {/* Capabilities */}

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {capabilities.map((item, index) => (
                <div
                  key={item}
                  className="
                    border
                    border-white/10
                    bg-white/[0.03]
                    p-5
                    transition-colors
                    duration-300
                    hover:border-[#ff6501]/50
                  "
                >
                  <span className="text-xs font-bold text-[#ff6501]">
                    0{index + 1}
                  </span>

                  <p className="mt-3 text-sm font-semibold text-white">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          APPLICATIONS
      ====================================================== */}

      <section
        className={`w-full px-5 py-14 transition-colors duration-300 sm:px-8 sm:py-16 lg:px-10 lg:py-20 ${
          isDarkMode ? "bg-black" : "bg-white"
        }`}
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <div className="mb-3 flex items-center gap-2">
              <span className="h-2 w-2 bg-[#ff6501]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#ff6501]">
                Applications
              </span>
            </div>

            <h2
              className={`text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl ${
                isDarkMode ? "text-white" : "text-black"
              }`}
            >
              Built for Automotive
              <span className="text-[#ff6501]">
                {" "}
                Applications.
              </span>
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {applications.map((item) => (
              <div
                key={item.number}
                className={`border p-6 transition-all duration-300 hover:-translate-y-1 sm:p-7 ${
                  isDarkMode
                    ? "border-white/10 bg-[#111111] hover:border-[#ff6501]/50"
                    : "border-black/10 bg-white shadow-[0_10px_35px_rgba(0,0,0,0.05)] hover:border-[#ff6501]/40"
                }`}
              >
                <span className="text-3xl font-bold text-[#ff6501]">
                  {item.number}
                </span>

                <h3
                  className={`mt-6 text-lg font-bold ${
                    isDarkMode ? "text-white" : "text-black"
                  }`}
                >
                  {item.title}
                </h3>

                <p
                  className={`mt-3 text-sm leading-6 ${
                    isDarkMode
                      ? "text-white/50"
                      : "text-black/55"
                  }`}
                >
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          WHY KALIKA
      ====================================================== */}

      <section
        className={`w-full px-5 py-14 transition-colors duration-300 sm:px-8 sm:py-16 lg:px-10 lg:py-20 ${
          isDarkMode ? "bg-[#0d0d0d]" : "bg-[#f7f7f7]"
        }`}
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <div className="mb-3 flex items-center gap-2">
              <span className="h-2 w-2 bg-[#ff6501]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#ff6501]">
                Why Kalika Engineering
              </span>
            </div>

            <h2
              className={`text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl ${
                isDarkMode ? "text-white" : "text-black"
              }`}
            >
              More Than Just
              <span className="text-[#ff6501]">
                {" "}
                Automobile Parts.
              </span>
            </h2>
          </div>

          <div
            className={`mt-10 grid grid-cols-1 gap-px overflow-hidden border sm:grid-cols-2 lg:grid-cols-4 ${
              isDarkMode
                ? "border-white/10 bg-white/10"
                : "border-black/10 bg-black/10"
            }`}
          >
            {reasons.map((item) => (
              <div
                key={item.number}
                className={`p-6 sm:p-7 lg:p-8 ${
                  isDarkMode
                    ? "bg-[#111111]"
                    : "bg-white"
                }`}
              >
                <span className="text-2xl font-bold text-[#ff6501]">
                  {item.number}
                </span>

                <h3
                  className={`mt-5 text-base font-bold sm:text-lg ${
                    isDarkMode ? "text-white" : "text-black"
                  }`}
                >
                  {item.title}
                </h3>

                <p
                  className={`mt-3 text-sm leading-6 ${
                    isDarkMode
                      ? "text-white/50"
                      : "text-black/55"
                  }`}
                >
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          RELATED PRODUCTS
      ====================================================== */}

      <section
        className={`w-full px-5 py-14 transition-colors duration-300 sm:px-8 sm:py-16 lg:px-10 lg:py-20 ${
          isDarkMode ? "bg-black" : "bg-white"
        }`}
      >
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <div className="mb-3 flex items-center gap-2">
                <span className="h-2 w-2 bg-[#ff6501]" />

                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#ff6501]">
                  Explore More
                </span>
              </div>

              <h2
                className={`text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl ${
                  isDarkMode ? "text-white" : "text-black"
                }`}
              >
                Other
                <span className="text-[#ff6501]">
                  {" "}
                  Products.
                </span>
              </h2>
            </div>

            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-xs font-bold text-[#ff6501] transition-all duration-300 hover:gap-3"
            >
              View All Products
              <ArrowRight size={15} />
            </Link>
          </div>

          {/* Related Product Cards */}

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {relatedProducts.map((product) => {
              const Icon = product.icon;

              return (
                <Link
                  key={product.title}
                  href={product.href}
                  className={`group relative overflow-hidden border p-6 transition-all duration-300 hover:-translate-y-1 sm:p-7 ${
                    isDarkMode
                      ? "border-white/10 bg-[#111111] hover:border-[#ff6501]/50"
                      : "border-black/10 bg-white shadow-[0_10px_35px_rgba(0,0,0,0.05)] hover:border-[#ff6501]/40"
                  }`}
                >
                  <div className="absolute left-0 top-0 h-[2px] w-0 bg-[#ff6501] transition-all duration-300 group-hover:w-full" />

                  <div className="flex h-10 w-10 items-center justify-center bg-[#ff6501]/10">
                    <Icon
                      size={19}
                      className="text-[#ff6501]"
                    />
                  </div>

                  <h3
                    className={`mt-5 text-base font-bold sm:text-lg ${
                      isDarkMode ? "text-white" : "text-black"
                    }`}
                  >
                    {product.title}
                  </h3>

                  <p
                    className={`mt-3 text-xs leading-5 sm:text-sm sm:leading-6 ${
                      isDarkMode
                        ? "text-white/50"
                        : "text-black/55"
                    }`}
                  >
                    {product.description}
                  </p>

                  <div className="mt-5 flex items-center gap-2 text-xs font-bold text-[#ff6501]">
                    Explore

                    <ArrowRight
                      size={14}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          TESTIMONIAL
      ====================================================== */}

      <Testimonial />

      {/* =====================================================
          FAQ
      ====================================================== */}

      <Faq />

      {/* =====================================================
          FINAL CTA
      ====================================================== */}

      <section className="w-full bg-black px-5 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div
            className="
              flex
              flex-col
              gap-8
              border
              border-white/10
              bg-white/[0.03]
              p-6
              sm:p-8
              lg:flex-row
              lg:items-center
              lg:justify-between
              lg:p-10
            "
          >
            <div className="max-w-2xl">
              <div className="mb-3 flex items-center gap-2">
                <span className="h-2 w-2 bg-[#ff6501]" />

                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#ff6501]">
                  Custom Automotive Manufacturing
                </span>
              </div>

              <h2 className="text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl">
                Need a Custom
                <span className="text-[#ff6501]">
                  {" "}
                  Automobile Part?
                </span>
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-6 text-white/60 sm:text-base">
                Share your drawing, dimensions or application
                requirements with our team and discuss the right
                rubber or plastic manufacturing solution for your
                automotive component.
              </p>
            </div>

            <Link
              href="/contact"
              className="
                inline-flex
                w-full
                items-center
                justify-center
                gap-2
                bg-[#ff6501]
                px-6
                py-3.5
                text-xs
                font-bold
                text-white
                transition-all
                duration-300
                hover:bg-white
                hover:text-black
                sm:w-auto
              "
            >
              Request a Quote
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default AutomobileParts;