"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  Award,
  ShieldCheck,
  MapPinned,
  Settings,
} from "lucide-react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useTheme } from "./ThemeProvider";

const slides = [
  {
    id: 1,
    image: "/plastic-components-hero.png",
    label: "Plastic Components",
    title: "Precision Plastic",
    highlight: "Components",
    description:
      "We manufacture a wide range of plastic components including plugs, caps, feet, rivets, clips, screws, nuts, washers, grommets, bushes, knobs and handles for diverse industrial requirements.",
  },
  {
    id: 2,
    image: "/rubber-components-hero.png",
    label: "Rubber Components",
    title: "Reliable Rubber",
    highlight: "Components",
    description:
      "Our rubber product range includes O-Rings, gaskets, seals, PU cords, rubber washers, bushes and other components developed to meet specific customer requirements.",
  },
  {
    id: 3,
    image: "/metal-sheet-manufactur.png",
    label: "Sheet Metal Components",
    title: "Custom Sheet Metal",
    highlight: "Components",
    description:
      "We manufacture sheet metal components according to customer requirements, supporting industrial and OEM applications with components developed for specific needs.",
  },
];

const stats = [
  {
    icon: Award,
    title: "Plastic Components",
    subtitle: "Wide range of industrial products",
  },
  {
    icon: ShieldCheck,
    title: "Rubber Components",
    subtitle: "Seals, O-Rings & gaskets",
  },
  {
    icon: MapPinned,
    title: "Pan-India Supply",
    subtitle: "Serving customers across India",
  },
  {
    icon: Settings,
    title: "Custom Manufacturing",
    subtitle: "Made as per requirements",
  },
];

function HomeBanner() {
  const { isDarkMode } = useTheme();

  const [activeSlide, setActiveSlide] = useState(0);

  const currentSlide = slides[activeSlide];

  /* =====================================================
     AUTO CAROUSEL
  ===================================================== */

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  /* =====================================================
     NEXT SLIDE
  ===================================================== */

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  };

  /* =====================================================
     PREVIOUS SLIDE
  ===================================================== */

  const previousSlide = () => {
    setActiveSlide((prev) => {
      return (prev - 1 + slides.length) % slides.length;
    });
  };

  /* =====================================================
     GO TO SLIDE
  ===================================================== */

  const goToSlide = (index) => {
    setActiveSlide(index);
  };

  return (
    <section
      className={`w-full transition-colors duration-300 ${
        isDarkMode ? "bg-brand-black" : "bg-brand-white"
      }`}
    >
      {/* =====================================================
          HERO CAROUSEL
      ===================================================== */}

      <div className="relative isolate min-h-[570px] overflow-hidden sm:min-h-[600px] lg:min-h-[650px]">

        {/* =====================================================
            BACKGROUND SLIDES
        ===================================================== */}

        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-700 ${
              activeSlide === index
                ? "z-10 opacity-100"
                : "z-0 opacity-0"
            }`}
          >
            {/* Background Image */}

            <Image
              src={slide.image}
              alt={`${slide.label} manufactured by Kalika Engineering`}
              fill
              priority={index === 0}
              quality={90}
              sizes="100vw"
              className="object-cover object-center"
            />

            {/* Dark Overlay */}

            <div className="absolute inset-0 bg-brand-black/45" />

            {/* Left Gradient */}

            <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/85 to-brand-black/15" />

            {/* Bottom Gradient */}

            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-brand-black/80 to-transparent" />
          </div>
        ))}

        {/* =====================================================
            HERO CONTENT
        ===================================================== */}

        <div className="relative z-20 mx-auto flex min-h-[570px] max-w-7xl items-center px-5 py-16 sm:min-h-[600px] sm:px-8 sm:py-20 lg:min-h-[650px] lg:px-8">

          <div className="max-w-2xl">

            {/* =================================================
                COMPANY LABEL
            ================================================= */}

            <div className="mb-5 flex items-center gap-3">

              <span className="h-[2px] w-9 bg-brand-orange sm:w-12" />

              <p className="font-body text-[10px] font-bold uppercase tracking-[0.22em] text-brand-white sm:text-xs sm:tracking-[0.28em]">
                Kalika Engineering
              </p>

            </div>

            {/* =================================================
                PRODUCT CATEGORY
            ================================================= */}

            <div className="mb-4">

              <p className="font-body text-xs font-bold uppercase tracking-[0.18em] text-brand-orange sm:text-sm">
                {currentSlide.label}
              </p>

            </div>

            {/* =================================================
                MAIN HEADING
            ================================================= */}

            <h1 className="font-heading text-4xl font-extrabold leading-[1.04] tracking-tight text-brand-white sm:text-5xl md:text-6xl lg:text-[62px] xl:text-[68px]">

              {currentSlide.title}

              <span className="block text-brand-orange">
                {currentSlide.highlight}
              </span>

            </h1>

            {/* =================================================
                CATEGORY DESCRIPTION
            ================================================= */}

            <p className="mt-6 max-w-xl font-body text-sm leading-7 text-brand-white/80 sm:text-base sm:leading-8">
              {currentSlide.description}
            </p>

            {/* =================================================
                COMPANY INTRO
            ================================================= */}

            <p className="mt-4 max-w-xl border-l-2 border-brand-orange pl-4 font-body text-xs leading-6 text-brand-white/65 sm:text-sm">
              Manufacturer and supplier of plastic, rubber and sheet
              metal components, serving automotive, electrical, tractor,
              sanitaryware and other industrial requirements.
            </p>

            {/* =================================================
                CTA BUTTONS
            ================================================= */}

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">

              {/* Request Quote */}

              <Link
                href="/contact"
                className="group inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-brand-orange px-7 py-3 font-body text-xs font-bold text-brand-white shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-orange/90 sm:text-sm"
              >
                Request a Quote

                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              {/* Explore Products */}

              <Link
                href="/products"
                className="group inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-brand-white/50 bg-brand-black/20 px-7 py-3 font-body text-xs font-semibold text-brand-white backdrop-blur-sm transition-all duration-300 hover:border-brand-orange hover:bg-brand-orange sm:text-sm"
              >
                Explore Products

                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

            </div>

          </div>

        </div>

        {/* =====================================================
            PREVIOUS BUTTON
        ===================================================== */}

        <button
          type="button"
          onClick={previousSlide}
          aria-label="Previous slide"
          className="absolute left-3 top-1/2 z-30 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-brand-white/30 bg-brand-black/30 text-brand-white backdrop-blur-sm transition-all duration-300 hover:border-brand-orange hover:bg-brand-orange sm:left-6 sm:h-11 sm:w-11"
        >
          <FiChevronLeft size={23} />
        </button>

        {/* =====================================================
            NEXT BUTTON
        ===================================================== */}

        <button
          type="button"
          onClick={nextSlide}
          aria-label="Next slide"
          className="absolute right-3 top-1/2 z-30 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-brand-white/30 bg-brand-black/30 text-brand-white backdrop-blur-sm transition-all duration-300 hover:border-brand-orange hover:bg-brand-orange sm:right-6 sm:h-11 sm:w-11"
        >
          <FiChevronRight size={23} />
        </button>

        {/* =====================================================
            SLIDE INDICATORS
        ===================================================== */}

        <div className="absolute bottom-7 left-1/2 z-30 flex -translate-x-1/2 items-center gap-2">

          {slides.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={
                activeSlide === index ? "true" : "false"
              }
              className={`h-1.5 cursor-pointer rounded-full transition-all duration-300 ${
                activeSlide === index
                  ? "w-9 bg-brand-orange"
                  : "w-5 bg-brand-white/45 hover:bg-brand-white"
              }`}
            />
          ))}

        </div>

        {/* =====================================================
            SLIDE NUMBER
        ===================================================== */}

        <div className="absolute bottom-7 right-5 z-30 hidden items-center gap-2 font-body text-xs font-bold text-brand-white/70 sm:right-8 sm:flex">

          <span className="text-brand-orange">
            {String(activeSlide + 1).padStart(2, "0")}
          </span>

          <span className="text-brand-white/30">
            /
          </span>

          <span>
            {String(slides.length).padStart(2, "0")}
          </span>

        </div>

        {/* =====================================================
            ORANGE ACCENT
        ===================================================== */}

        <div className="absolute bottom-0 left-0 z-30 h-1 w-24 bg-brand-orange sm:w-32" />

      </div>

      {/* =====================================================
          STATS STRIP
      ===================================================== */}

      <div
        className={`relative z-20 border-b transition-colors duration-300 ${
          isDarkMode
            ? "border-brand-white/10 bg-brand-black"
            : "border-black/10 bg-brand-white"
        }`}
      >

        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-8">

          <div
            className={`grid grid-cols-2 divide-x sm:grid-cols-4 ${
              isDarkMode
                ? "divide-brand-white/10"
                : "divide-black/10"
            }`}
          >

            {stats.map(
              ({ icon: Icon, title, subtitle }) => (
                <div
                  key={title}
                  className="flex min-h-[110px] items-center gap-3 px-3 py-5 sm:min-h-[120px] sm:gap-4 sm:px-5 lg:px-7"
                >

                  {/* Icon */}

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-brand-orange/20 bg-brand-orange/10 sm:h-12 sm:w-12">

                    <Icon
                      className="h-5 w-5 text-brand-orange sm:h-6 sm:w-6"
                      strokeWidth={1.7}
                    />

                  </div>

                  {/* Text */}

                  <div className="min-w-0">

                    <h2
                      className={`font-heading text-xs font-extrabold sm:text-sm lg:text-base ${
                        isDarkMode
                          ? "text-brand-white"
                          : "text-brand-black"
                      }`}
                    >
                      {title}
                    </h2>

                    <p
                      className={`mt-1 font-body text-[10px] leading-4 sm:text-xs sm:leading-5 ${
                        isDarkMode
                          ? "text-brand-white/55"
                          : "text-black/55"
                      }`}
                    >
                      {subtitle}
                    </p>

                  </div>

                </div>
              )
            )}

          </div>

        </div>

      </div>

    </section>
  );
}

export default HomeBanner;