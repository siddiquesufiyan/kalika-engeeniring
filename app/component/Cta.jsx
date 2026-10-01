"use client";

import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Factory,
  FileText,
  MessageSquare,
  PackageCheck,
  ShieldCheck,
} from "lucide-react";
import { useTheme } from "./ThemeProvider";

const requirements = [
  {
    icon: Factory,
    title: "Plastic Components",
  },
  {
    icon: ShieldCheck,
    title: "Rubber Components",
  },
  {
    icon: PackageCheck,
    title: "Sheet Metal Components",
  },
  {
    icon: FileText,
    title: "Custom Requirements",
  },
];

function Cta() {
  const { isDarkMode } = useTheme();

  return (
    <section
      className={`
        relative
        overflow-hidden
        py-16
        transition-colors
        duration-500
        sm:py-20
        lg:py-24
        ${
          isDarkMode
            ? "bg-brand-black"
            : "bg-white"
        }
      `}
    >

      {/* =====================================================
          BACKGROUND DECORATION
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -right-32
          -top-32
          h-80
          w-80
          rounded-full
          bg-brand-orange/10
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -bottom-40
          -left-40
          h-96
          w-96
          rounded-full
          bg-brand-orange/5
          blur-3xl
        "
      />

      {/* SUBTLE GRID */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.025]
          [background-image:linear-gradient(#888_1px,transparent_1px),linear-gradient(90deg,#888_1px,transparent_1px)]
          [background-size:48px_48px]
        "
      />

      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10">

        {/* =================================================
            MAIN CTA CARD
        ================================================= */}

        <div
          className="
            relative
            overflow-hidden
            rounded-3xl
            bg-brand-black
            shadow-2xl
          "
        >

          {/* ORANGE TOP ACCENT */}

          <div className="absolute left-0 right-0 top-0 h-1 bg-brand-orange" />

          {/* LARGE BACKGROUND TEXT */}

          <div
            className="
              pointer-events-none
              absolute
              -right-8
              top-5
              hidden
              select-none
              text-[140px]
              font-black
              leading-none
              text-white/[0.025]
              lg:block
            "
          >
            OEM
          </div>

          <div
            className="
              pointer-events-none
              absolute
              -bottom-12
              left-1/3
              hidden
              h-56
              w-56
              rounded-full
              border
              border-brand-orange/10
              lg:block
            "
          />

          {/* =================================================
              CONTENT GRID
          ================================================= */}

          <div className="grid lg:grid-cols-[1.1fr_0.9fr]">

            {/* =================================================
                LEFT CONTENT
            ================================================= */}

            <div
              className="
                relative
                z-10
                p-7
                sm:p-10
                lg:p-14
                xl:p-16
              "
            >

              {/* LABEL */}

              <div className="flex items-center gap-3">

                <span
                  className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-xl
                    bg-brand-orange
                    text-white
                  "
                >
                  <MessageSquare
                    size={17}
                    strokeWidth={1.8}
                  />
                </span>

                <span
                  className="
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.2em]
                    text-brand-orange
                  "
                >
                  Get In Touch
                </span>

              </div>

              {/* HEADING */}

              <h2
                className="
                  mt-6
                  max-w-2xl
                  font-heading
                  text-3xl
                  font-bold
                  leading-tight
                  text-white
                  sm:text-4xl
                  lg:text-5xl
                  xl:text-[52px]
                "
              >
                Have a Component
                <br className="hidden sm:block" />
                <span className="text-brand-orange">
                  {" "}Requirement?
                </span>
              </h2>

              {/* DESCRIPTION */}

              <p
                className="
                  mt-5
                  max-w-2xl
                  text-sm
                  leading-7
                  text-gray-300
                  sm:text-[15px]
                "
              >
                Share your component requirement with us. From
                plastic and rubber components to sheet metal and
                customized requirements, we work with businesses
                looking for dependable manufacturing solutions.
              </p>

              {/* CHECKPOINTS */}

              <div className="mt-7 grid gap-3 sm:grid-cols-2">

                {[
                  "Requirement-focused solutions",
                  "Plastic & rubber components",
                  "Sheet metal components",
                  "Quality & customization",
                ].map((item) => (
                  <div
                    key={item}
                    className="
                      flex
                      items-center
                      gap-2.5
                      text-xs
                      text-gray-300
                      sm:text-[13px]
                    "
                  >
                    <CheckCircle2
                      size={16}
                      className="shrink-0 text-brand-orange"
                    />

                    <span>{item}</span>
                  </div>
                ))}

              </div>

              {/* CTA */}

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">

                <Link
                  href="/contact"
                  className="
                    group
                    inline-flex
                    items-center
                    justify-center
                    gap-2
                    rounded-full
                    bg-brand-orange
                    px-7
                    py-3.5
                    text-xs
                    font-bold
                    text-white
                    shadow-lg
                    shadow-brand-orange/20
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:bg-white
                    hover:text-brand-black
                  "
                >
                  Discuss Your Requirement

                  <ArrowRight
                    size={16}
                    className="
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  />
                </Link>

              </div>

            </div>

            {/* =================================================
                RIGHT REQUIREMENT PANEL
            ================================================= */}

            <div
              className="
                relative
                z-10
                border-t
                border-white/10
                bg-white/[0.035]
                p-7
                sm:p-10
                lg:border-l
                lg:border-t-0
                lg:p-12
                xl:p-14
              "
            >

              <span
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-brand-orange
                "
              >
                Manufacturing Solutions
              </span>

              <h3
                className="
                  mt-3
                  font-heading
                  text-xl
                  font-bold
                  leading-tight
                  text-white
                  sm:text-2xl
                "
              >
                Tell us what you
                <span className="text-brand-orange">
                  {" "}need.
                </span>
              </h3>

              <p
                className="
                  mt-3
                  max-w-md
                  text-xs
                  leading-6
                  text-gray-400
                  sm:text-[13px]
                "
              >
                Our product range covers a wide variety of
                industrial component requirements.
              </p>

              {/* REQUIREMENT CARDS */}

              <div className="mt-7 grid grid-cols-2 gap-3">

                {requirements.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="
                        group
                        rounded-2xl
                        border
                        border-white/10
                        bg-white/[0.03]
                        p-4
                        transition-all
                        duration-300
                        hover:border-brand-orange/50
                        hover:bg-brand-orange/5
                      "
                    >

                      <div
                        className="
                          flex
                          h-10
                          w-10
                          items-center
                          justify-center
                          rounded-xl
                          bg-brand-orange/10
                          text-brand-orange
                          transition-all
                          duration-300
                          group-hover:bg-brand-orange
                          group-hover:text-white
                        "
                      >
                        <Icon
                          size={18}
                          strokeWidth={1.8}
                        />
                      </div>

                      <h4
                        className="
                          mt-3
                          text-xs
                          font-bold
                          leading-5
                          text-white
                          sm:text-[13px]
                        "
                      >
                        {item.title}
                      </h4>

                    </div>
                  );
                })}

              </div>

              {/* CONTACT STRIP */}

              <div
                className="
                  mt-6
                  rounded-2xl
                  border
                  border-white/10
                  bg-black/20
                  p-4
                "
              >

                <p
                  className="
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[0.16em]
                    text-gray-500
                  "
                >
                  Direct Enquiry
                </p>

                <p
                  className="
                    mt-1.5
                    text-sm
                    font-semibold
                    text-white
                  "
                >
                  +91 9873272496
                </p>

                <p className="mt-1 text-xs text-gray-400">
                  info@kalikaengineering.in
                </p>

              </div>

            </div>

          </div>

          {/* =================================================
              BOTTOM STRIP
          ================================================= */}

          <div
            className="
              flex
              flex-col
              gap-3
              border-t
              border-white/10
              px-7
              py-4
              sm:flex-row
              sm:items-center
              sm:justify-between
              sm:px-10
              lg:px-14
            "
          >

            <p
              className="
                text-[10px]
                font-medium
                uppercase
                tracking-[0.12em]
                text-gray-500
              "
            >
              Plastic · Rubber · Sheet Metal · Custom Components
            </p>

            <p
              className="
                text-[10px]
                font-medium
                text-gray-500
              "
            >
              Manufacturing solutions for industrial requirements
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Cta;