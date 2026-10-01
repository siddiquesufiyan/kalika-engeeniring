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

function Gaskets() {
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
        "Durable rubber components developed for sealing, cushioning and demanding industrial applications.",
      href: "/products/rubber-components",
      icon: CircleDot,
    },
    {
      title: "Automobile Parts",
      description:
        "Custom rubber and plastic components developed for automotive assemblies and systems.",
      href: "/products/automobile-parts",
      icon: CarFront,
    },
    {
      title: "Electrical Parts",
      description:
        "Precision components designed for electrical equipment, assemblies and insulation requirements.",
      href: "/products/electrical-parts",
      icon: Zap,
    },
  ];

  /* =====================================================
      GASKET PRODUCTS WE MANUFACTURE
  ====================================================== */

  const manufacturedProducts = [
    {
      title: "Rubber Gaskets",
      description:
        "Flexible rubber gaskets manufactured for reliable sealing across automotive, industrial and equipment applications.",
      icon: CircleDot,
    },
    {
      title: "Sheet Gaskets",
      description:
        "Application-specific sheet gasket solutions designed for sealing surfaces and industrial assemblies.",
      icon: Layers3,
    },
    {
      title: "Flange Gaskets",
      description:
        "Precision flange gaskets designed to provide dependable sealing between mating flange surfaces.",
      icon: ShieldCheck,
    },
    {
      title: "Custom Gaskets",
      description:
        "Custom-shaped gasket components manufactured according to drawings, dimensions and application requirements.",
      icon: Settings2,
    },
    {
      title: "Die Cut Gaskets",
      description:
        "Accurately cut gasket components developed for consistent shape, fitment and sealing performance.",
      icon: Factory,
    },
    {
      title: "Sealing Components",
      description:
        "Custom sealing components designed to help prevent leakage, dust and contamination in assemblies.",
      icon: ShieldCheck,
    },
  ];

  /* =====================================================
      MATERIALS & CAPABILITIES
  ====================================================== */

  const capabilities = [
    "Rubber Gasket Materials",
    "EPDM Gaskets",
    "Nitrile Gaskets",
    "Silicone Gaskets",
    "Custom Gasket Manufacturing",
    "Die Cutting & Inspection",
  ];

  /* =====================================================
      APPLICATIONS
  ====================================================== */

  const applications = [
    {
      number: "01",
      title: "Automotive",
      text: "Gasket and sealing components for automotive assemblies, systems and equipment.",
    },
    {
      number: "02",
      title: "Industrial",
      text: "Reliable sealing solutions for machinery, equipment and industrial assemblies.",
    },
    {
      number: "03",
      title: "Electrical",
      text: "Gasket components for electrical equipment, enclosures and protective assemblies.",
    },
    {
      number: "04",
      title: "Sanitaryware",
      text: "Sealing components for sanitary, plumbing and related applications.",
    },
  ];

  /* =====================================================
      WHY KALIKA
  ====================================================== */

  const reasons = [
    {
      number: "01",
      title: "Application Understanding",
      text: "We understand the sealing requirement and intended application before developing the component.",
    },
    {
      number: "02",
      title: "Material Selection",
      text: "Gasket materials are considered according to application, sealing conditions and performance requirements.",
    },
    {
      number: "03",
      title: "Precision Manufacturing",
      text: "Controlled manufacturing processes help maintain consistent shape, dimensions and fitment.",
    },
    {
      number: "04",
      title: "Quality Inspection",
      text: "Finished gasket components are checked for dimensions, appearance and required specifications.",
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
            src="/gaskets-hero.png"
            alt="Gasket Manufacturing - Kalika Engineering"
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
                Gasket
                <span className="text-[#ff6501]"> Solutions</span>
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
                Precision-manufactured gasket and sealing
                components designed for reliable performance,
                accurate fitment and demanding industrial
                applications.
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
                  Gaskets
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
                Gaskets
                <span className="text-[#ff6501]">
                  {" "}Engineered for Sealing.
                </span>
              </h2>

              <p
                className={`mt-5 max-w-2xl text-sm leading-7 sm:text-base ${
                  isDarkMode ? "text-white/60" : "text-black/60"
                }`}
              >
                Kalika Engineering manufactures gasket and
                sealing components for automotive, electrical,
                industrial, sanitaryware and other applications
                where dependable sealing is required.
              </p>

              <p
                className={`mt-4 max-w-2xl text-sm leading-7 sm:text-base ${
                  isDarkMode ? "text-white/60" : "text-black/60"
                }`}
              >
                Gaskets are developed according to application
                requirements, dimensions, material characteristics
                and assembly conditions to achieve accurate
                fitment and consistent sealing performance.
              </p>

              {/* Highlights */}

              <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {[
                  "Custom Gasket Manufacturing",
                  "Application-Specific Materials",
                  "Accurate Shape & Dimensions",
                  "OEM & Industrial Requirements",
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

                <ShieldCheck
                  size={20}
                  className="text-[#ff6501]"
                />
              </div>

              <div className="space-y-5">
                {[
                  {
                    label: "Product Type",
                    value: "Custom Gaskets & Sealing Components",
                  },
                  {
                    label: "Manufacturing",
                    value: "Moulding & Die Cutting",
                  },
                  {
                    label: "Applications",
                    value: "Automotive & Industrial",
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
                Gasket Product Range
              </span>
            </div>

            <h2
              className={`text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl ${
                isDarkMode ? "text-white" : "text-black"
              }`}
            >
              Gaskets & Seals
              <span className="text-[#ff6501]">
                {" "}We Manufacture.
              </span>
            </h2>

            <p
              className={`mt-4 text-sm leading-7 sm:text-base ${
                isDarkMode ? "text-white/55" : "text-black/55"
              }`}
            >
              From standard sealing components to custom-shaped
              gasket solutions, we manufacture products according
              to drawings, dimensions and application requirements.
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

          {/* Rubber Material Redirect */}

          <div
            className={`mt-6 flex flex-col gap-5 border p-5 transition-colors duration-300 sm:flex-row sm:items-center sm:justify-between sm:p-6 ${
              isDarkMode
                ? "border-white/10 bg-[#111111]"
                : "border-black/10 bg-white"
            }`}
          >
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#ff6501]/10">
                <CircleDot
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
                  Looking for Rubber Components?
                </h3>

                <p
                  className={`mt-1 text-xs leading-5 sm:text-sm ${
                    isDarkMode
                      ? "text-white/50"
                      : "text-black/55"
                  }`}
                >
                  Explore our rubber component manufacturing
                  capabilities for sealing, cushioning and
                  industrial applications.
                </p>
              </div>
            </div>

            <Link
              href="/products/rubber-components"
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
              View Rubber Components
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
                Gasket Materials &{" "}
                <span className="text-[#ff6501]">
                  Capabilities.
                </span>
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-white/55 sm:text-base">
                Material selection and gasket manufacturing
                methods are considered according to sealing
                requirements, operating conditions, dimensions
                and application needs.
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
              Sealing Solutions for
              <span className="text-[#ff6501]">
                {" "}Different Industries.
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
                {" "}Gaskets.
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
                  {" "}Products.
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
                  Custom Sealing Solutions
                </span>
              </div>

              <h2 className="text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl">
                Need a Custom
                <span className="text-[#ff6501]">
                  {" "}Gasket Solution?
                </span>
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-6 text-white/60 sm:text-base">
                Share your drawing, dimensions or application
                requirements with our team and discuss the right
                gasket manufacturing solution.
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

export default Gaskets;