"use client";
import Testimonial from "../component/Testimonial";
import Faq from "../component/Faq";
import Cta from "../component/Cta";
import HowWeWork from "../component/HowWeWork";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronRight,
  Factory,
} from "lucide-react";
import { useTheme } from "../component/ThemeProvider";

const categories = [
  {
    id: "plastic-components",
    name: "Plastic Components",
    image: "/machinery-&-Hydraulic-parts.jpg",
    description:
      "Precision plastic components manufactured for OEMs and industrial applications with consistent quality, durability and dimensional accuracy.",
    products: [
      {
        name: "Plastic Plugs & Caps",
        image: "/plastic-dust-cap.jpg",
      },
      {
        name: "Plastic Central Pulls",
        image: "/plastic-central-pull.png",
      },
      {
        name: "Plastic Screws & Washers",
        image: "/plastic-washer.png",
      },
    ],
  },

  {
    id: "rubber-components",
    name: "Rubber Components",
    image: "/rubber-componnet.png",
    description:
      "Reliable rubber components engineered for flexibility, durability and long-term performance across demanding applications.",
    products: [
      {
        name: "Rubber O ring",
        image: "/rubber-o-ring.jpg",
      },
      {
        name: "Rubber Dust Cap",
        image: "/rubber-dust-cap.png",
      },
      {
        name: "Rubber Filter Caps",
        image: "/rubber-filter-cap.jpeg",
      },
    ],
  },

  {
    id: "o-rings-seals",
    name: "O-Rings & Seals",
    image: "/oring-comp.jpg",
    description:
      "Precision sealing components designed to provide reliable sealing performance across automotive, industrial and OEM applications.",
    products: [
      {
        name: "O-Rings",
        image: "/rubber-o-ring.jpg",
      },
      {
        name: "Rubber Seals",
        image: "/rubber-o-ring.jpg",
      },
      {
        name: "Custom Sealing Parts",
        image: "/oring-comp.jpg",
      },
    ],
  },

  {
    id: "gaskets",
    name: "Gaskets",
    image: "/rubber-gasket.jpg",
    description:
      "Industrial gaskets manufactured for effective sealing, protection and reliable performance in various applications.",
    products: [
      {
        name: "Rubber Gaskets",
        image: "/rubber-grommet.jpg",
      },
      {
        name: "Custom Gaskets",
        image: "/side-pull-tabs.png",
      },
      {
        name: "Industrial Gaskets",
        image: "/side-pull-tabs.png",
      },
    ],
  },

  {
    id: "bushes-washers",
    name: "Bushes & Washers",
    image: "/plastic-central-pull.png",
    description:
      "Precision bushes and washers manufactured for mechanical assemblies, insulation, spacing and protection applications.",
    products: [
      {
        name: "Plastic Bushes",
        image: "/rubber-grommet.jpg",
      },
      {
        name: "Rubber Bushes",
        image: "/rubber-o-ring.jpg",
      },
      {
        name: "Plastic Washers",
        image: "/sanitaryware-industry.png",
      },
    ],
  },

  {
    id: "automobile-parts",
    name: "Automobile Parts",
    image: "/automoblie-rubber-parts.jpg",
    description:
      "High-quality plastic and rubber components developed for automotive manufacturers and vehicle assemblies.",
    products: [
      {
        name: "Automotive Clips",
        image: "/groomets-comp.jpg",
      },
      {
        name: "Automotive Bushes",
        image: "/groomets-comp.jpg",
      },
      {
        name: "Automotive Plugs",
        image: "/nylon-bush-wash.png",
      },
    ],
  },

  {
    id: "electrical-parts",
    name: "Electrical Parts",
    image: "/electrical-rubber-parts.jpeg",
    description:
      "Precision components manufactured for electrical equipment, assemblies and insulation applications.",
    products: [
      {
        name: "Electrical Bushes",
        image: "/groomets-comp.jpg",
      },
      {
        name: "Electrical Caps",
        image: "/tractor-rubber-parts.jpg",
      },
      {
        name: "Electrical Insulators",
        image: "/plastic-central-pull.png",
      },
    ],
  },
];

function Products() {
  const { isDarkMode } = useTheme();

  const bg = isDarkMode
    ? "bg-brand-black"
    : "bg-brand-white";

  const text = isDarkMode
    ? "text-brand-white"
    : "text-brand-black";

  const muted = isDarkMode
    ? "text-brand-white/60"
    : "text-brand-black/60";

  const border = isDarkMode
    ? "border-brand-white/30"
    : "border-brand-black/10";

  const cardBg = isDarkMode
    ? "bg-brand-black"
    : "bg-brand-white";

  const scrollToCategory = (id) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <main
      className={`w-full min-w-0 overflow-x-hidden ${bg} transition-colors duration-300`}
    >
      {/* =====================================================
          PRODUCT HERO
      ====================================================== */}

      <section className="relative w-full overflow-hidden bg-brand-black">
        <div className="relative h-[260px] w-full sm:h-[290px] md:h-[330px] lg:h-[350px]">
          <Image
            src="/products-hero.png"
            alt="Kalika Engineering Plastic and Rubber Products"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />

          <div className="absolute inset-0 bg-brand-black/55" />

          <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/80 to-brand-black/20" />

          <div className="relative z-10 mx-auto flex h-full w-full max-w-7xl items-center px-5 sm:px-8 lg:px-10">
            <div className="w-full max-w-2xl">
              <div className="mb-3 flex items-center gap-2.5 sm:gap-3">
                <span className="h-[2px] w-7 bg-brand-orange sm:w-9" />

                <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-brand-orange sm:text-xs sm:tracking-[0.22em]">
                  Our Products
                </span>
              </div>

              <h1 className="max-w-2xl text-[30px] font-bold leading-[1.08] tracking-tight text-brand-white sm:text-4xl md:text-5xl lg:text-[52px]">
                Precision Plastic &{" "}
                <span className="text-brand-orange">
                  Rubber Components
                </span>
              </h1>

              <p className="mt-3 max-w-xl text-[11px] leading-5 text-brand-white/75 sm:mt-4 sm:text-sm sm:leading-6 md:text-base">
                Explore our range of precision-manufactured components
                developed for OEMs, automotive, electrical and industrial
                applications.
              </p>

              <div className="mt-4 flex items-center gap-1.5 text-[10px] text-brand-white/70 sm:mt-5 sm:gap-2 sm:text-sm">
                <Link
                  href="/"
                  className="transition-colors duration-300 hover:text-brand-orange"
                >
                  Home
                </Link>

                <ChevronRight
                  size={12}
                  className="text-brand-orange sm:h-[14px] sm:w-[14px]"
                />

                <span className="text-brand-white">
                  Products
                </span>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 h-[3px] w-full bg-brand-orange" />
        </div>
      </section>

      {/* =====================================================
          PRODUCTS SECTION
      ====================================================== */}

      <section className="w-full py-12 sm:py-16 lg:py-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-8 lg:px-10">
          {/* SECTION HEADING */}

          <div className="mb-9 w-full max-w-3xl sm:mb-12 lg:mb-14">
            <div className="mb-3 flex items-center gap-2.5 sm:mb-4 sm:gap-3">
              <span className="h-[2px] w-7 bg-brand-orange sm:w-9" />

              <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-brand-orange sm:text-xs sm:tracking-[0.22em]">
                Product Portfolio
              </span>
            </div>

            <h2
              className={`text-[30px] font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl ${text}`}
            >
              Our{" "}
              <span className="text-brand-orange">
                Products
              </span>
            </h2>

            <p
              className={`mt-3 max-w-2xl text-sm leading-6 sm:mt-4 sm:text-base sm:leading-7 ${muted}`}
            >
              From precision plastic components to engineered rubber
              solutions, we manufacture a wide range of products for
              OEM and industrial applications.
            </p>
          </div>

          {/* =================================================
              MOBILE CATEGORY NAVIGATION
          ================================================== */}

          <div className="mb-8 block lg:hidden">
            <div
              className={`overflow-hidden border ${border} ${cardBg}`}
            >
              {/* Header */}

              <div className="bg-brand-orange px-4 py-3.5 sm:px-5">
                <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-brand-white sm:text-[10px]">
                  Categories
                </p>

                <h3 className="mt-0.5 text-sm font-bold text-brand-white sm:text-base">
                  Our Products
                </h3>
              </div>

              {/* Horizontal Scroll */}

              <div className="overflow-x-auto overscroll-x-contain">
                <div className="flex w-max min-w-full">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() =>
                        scrollToCategory(category.id)
                      }
                      className={`
                        group flex min-w-[145px] shrink-0
                        items-center justify-center
                        border-r px-4 py-3.5
                        text-center transition-all duration-300
                        sm:min-w-[170px]
                        ${border}
                        ${text}
                        hover:bg-brand-orange/10
                        hover:text-brand-orange
                        active:bg-brand-orange/10
                      `}
                    >
                      <span className="text-[11px] font-semibold leading-4 sm:text-xs">
                        {category.name}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* =================================================
              MAIN CONTENT
          ================================================== */}

          <div className="grid min-w-0 gap-8 lg:grid-cols-[220px_minmax(0,1fr)] xl:grid-cols-[250px_minmax(0,1fr)] lg:gap-8 xl:gap-10">
            {/* =================================================
                DESKTOP LEFT SIDEBAR
            ================================================== */}

            <aside className="hidden h-fit lg:sticky lg:top-24 lg:block">
              <div
                className={`overflow-hidden border ${border} ${cardBg}`}
              >
                <div className="bg-brand-orange px-5 py-4">
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-white">
                    Categories
                  </p>

                  <h3 className="mt-1 text-base font-bold text-brand-white">
                    Our Products
                  </h3>
                </div>

                <div className="max-h-[500px] overflow-y-auto">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() =>
                        scrollToCategory(category.id)
                      }
                      className={`
                        group flex w-full cursor-pointer items-center
                        justify-between gap-3 border-b
                        px-4 py-3.5 text-left
                        transition-all duration-300
                        ${border}
                        ${text}
                        hover:bg-brand-orange/10
                        hover:text-brand-orange
                      `}
                    >
                      <span className="text-xs cursor-pointer font-semibold leading-5">
                        {category.name}
                      </span>

                      <ArrowRight
                        size={14}
                        className="shrink-0 text-brand-orange opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </aside>

            {/* =================================================
                RIGHT — ALL PRODUCT CATEGORIES
            ================================================== */}

            <div className="min-w-0 space-y-12 sm:space-y-16">
              {categories.map((category) => (
                <div
                  key={category.id}
                  id={category.id}
                  className="min-w-0 scroll-mt-20 sm:scroll-mt-24"
                >
                  {/* CATEGORY TITLE */}

                  <div className="mb-4 flex min-w-0 items-end justify-between gap-3 sm:mb-5 sm:gap-4">
                    <div className="min-w-0">
                      <p className="mb-1.5 text-[9px] font-bold uppercase tracking-[0.18em] text-brand-orange sm:mb-2 sm:text-[10px]">
                        Product Category
                      </p>

                      <h3
                        className={`break-words cursor-pointer text-xl font-bold leading-tight tracking-tight sm:text-2xl md:text-3xl ${text}`}
                      >
                        {category.name}
                      </h3>
                    </div>

                    <Link
                      href="/contact"
                      className="hidden shrink-0 items-center gap-1.5 text-[11px] font-bold text-brand-orange transition-all duration-300 hover:gap-2.5 sm:flex sm:text-xs"
                    >
                      Enquire Now
                      <ArrowUpRight size={14} />
                    </Link>
                  </div>

                  {/* =================================================
                      CATEGORY INTRO
                  ================================================== */}

                  <div
                    className={`
                      mb-5 grid min-w-0 overflow-hidden
                      border ${border} ${cardBg}
                      md:grid-cols-[180px_minmax(0,1fr)]
                    `}
                  >
                    {/* IMAGE */}

                    <div className="relative h-[180px] w-full min-w-0 overflow-hidden sm:h-[220px] md:h-full md:min-h-[165px]">
                      <Image
                        src={category.image}
                        alt={`${category.name} - Kalika Engineering`}
                        fill
                        sizes="(max-width: 768px) 100vw, 180px"
                        className="object-cover transition-transform duration-700 hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-brand-black/15" />

                      <div className="absolute bottom-0 left-0 h-1 w-full bg-brand-orange" />
                    </div>

                    {/* DESCRIPTION */}

                    <div className="flex min-w-0 flex-col justify-center p-4 sm:p-6">
                      <p
                        className={`break-words text-[13px] leading-6 sm:text-sm sm:leading-7 ${muted}`}
                      >
                        {category.description}
                      </p>

                      <div className="mt-4 flex min-w-0 flex-wrap items-center gap-x-4 gap-y-2 sm:gap-x-5">
                        <div className="flex shrink-0 items-center gap-2">
                          <Factory
                            size={15}
                            className="shrink-0 text-brand-orange"
                          />

                          <span
                            className={`text-[9px] font-bold uppercase tracking-wide sm:text-[10px] ${text}`}
                          >
                            OEM Manufacturing
                          </span>
                        </div>

                        <span
                          className={`text-[9px] sm:text-[10px] ${muted}`}
                        >
                          Custom requirements accepted
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* =================================================
                      PRODUCT CARDS
                  ================================================== */}

                  <div className="grid min-w-0 grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                    {category.products.map((product) => (
                      <Link
                        key={product.name}
                        href="/contact"
                        className={`
                          group flex min-w-0 flex-col
                          overflow-hidden border
                          transition-all duration-500
                          hover:-translate-y-1
                          hover:border-brand-orange
                          hover:shadow-xl
                          ${border}
                          ${cardBg}
                        `}
                      >
                        {/* PRODUCT IMAGE */}

                        <div className="relative aspect-square w-full overflow-hidden bg-brand-black">
                          <Image
                            src={product.image}
                            alt={`${product.name} - Kalika Engineering`}
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                          />

                          <div className="absolute inset-0 bg-brand-black/5 transition-all duration-300 group-hover:bg-brand-black/20" />

                          <div className="absolute bottom-3 right-3 flex h-8 w-8 items-center justify-center bg-brand-orange text-brand-white opacity-0 transition-all duration-300 group-hover:opacity-100">
                            <ArrowUpRight size={15} />
                          </div>
                        </div>

                        {/* PRODUCT NAME */}

                        <div className="flex min-h-[62px] min-w-0 items-center justify-between gap-2 p-3.5 sm:p-4">
                          <h4
                            className={`min-w-0 break-words text-xs font-bold leading-5 sm:text-sm ${text}`}
                          >
                            {product.name}
                          </h4>

                          <ArrowRight
                            size={14}
                            className="shrink-0 text-brand-orange transition-transform duration-300 group-hover:translate-x-1"
                          />
                        </div>
                      </Link>
                    ))}
                  </div>

                  {/* =================================================
                      MOBILE ENQUIRY
                  ================================================== */}

                  <Link
                    href="/contact"
                    className="mt-4 flex w-full items-center justify-center gap-2 bg-brand-orange px-4 py-3.5 text-[11px] font-bold text-brand-white transition-all duration-300 hover:bg-brand-black sm:hidden"
                  >
                    Enquire About {category.name}

                    <ArrowUpRight size={15} />
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* =================================================
              BOTTOM CTA
          ================================================== */}
{/* =========================================================
    MANUFACTURING STORY / COMPANY SECTION
========================================================= */}

<HowWeWork/>
<Testimonial/>
<Faq/>
<Cta/>
      
        </div>
      </section>
    </main>
  );
}

export default Products;