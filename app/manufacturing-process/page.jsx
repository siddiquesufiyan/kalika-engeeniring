"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { useTheme } from "../component/ThemeProvider";
import HowWeWork from "../component/HowWeWork";
import EngineeringExcellence from "../component/EngineeringExcellence";
import Testimonial from "../component/Testimonial";
import Faq from "../component/Faq";
import Cta from "../component/Cta";
function Manufacture() {
  const { isDarkMode } = useTheme();

  return (
    <main
      className={`w-full transition-colors duration-300 ${
        isDarkMode ? "bg-black" : "bg-white"
      }`}
    >
      {/* =====================================================
          MANUFACTURING PROCESS HERO
      ====================================================== */}

      <section className="relative w-full overflow-hidden bg-black">
        {/* Hero Image */}
        <div
          className="
            relative
            h-[250px]
            w-full

            sm:h-[290px]
            md:h-[330px]
            lg:h-[350px]
          "
        >
          <Image
            src="/manufacturing-hero.png"
            alt="Manufacturing Process - Kalika Engineering"
            fill
            priority
            sizes="100vw"
            className="
              object-cover
              object-[65%_center]

              sm:object-[65%_center]
              md:object-[60%_center]
              lg:object-center
            "
          />

          {/* =================================================
              MAIN DARK OVERLAY
          ================================================== */}

          <div className="absolute inset-0 bg-black/45" />

          {/* =================================================
              LEFT DARK GRADIENT
          ================================================== */}

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-r
              from-black
              via-black/80
              to-black/20
            "
          />

          {/* =================================================
              BOTTOM GRADIENT
          ================================================== */}

          <div
            className="
              absolute
              inset-x-0
              bottom-0
              h-24
              bg-gradient-to-t
              from-black/60
              to-transparent
            "
          />

          {/* =================================================
              HERO CONTENT
          ================================================== */}

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
            <div className="max-w-xl">
              {/* Small Orange Label */}

              <div
                className="
                  mb-3
                  flex
                  items-center
                  gap-2

                  sm:mb-4
                "
              >
                <span
                  className="
                    h-[2px]
                    w-7
                    bg-[#ff6501]

                    sm:w-9
                  "
                />

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
                  Manufacturing Process
                </span>
              </div>

              {/* Main Heading */}

              <h1
                className="
                  text-3xl
                  font-bold
                  leading-[1.05]
                  tracking-tight
                  text-white

                  sm:text-4xl
                  md:text-5xl
                  lg:text-[52px]
                "
              >
                How We
                <span className="text-[#ff6501]">
                  {" "}Manufacture
                </span>
              </h1>

              {/* Description */}

              <p
                className="
                  mt-3
                  max-w-md
                  text-xs
                  leading-relaxed
                  text-white/75

                  sm:mt-4
                  sm:text-sm
                  md:text-base
                "
              >
                From material selection and tooling to controlled
                production and inspection, we follow a structured
                process to manufacture reliable rubber and plastic
                components.
              </p>

              {/* Breadcrumb */}

              <div
                className="
                  mt-4
                  flex
                  items-center
                  gap-1.5
                  text-[11px]

                  sm:mt-5
                  sm:gap-2
                  sm:text-xs

                  md:text-sm
                "
              >
                <Link
                  href="/"
                  className="
                    text-white/70
                    transition-colors
                    duration-300
                    hover:text-[#ff6501]
                  "
                >
                  Home
                </Link>

                <ChevronRight
                  size={13}
                  className="text-[#ff6501]"
                />

                <span className="font-medium text-white">
                  Manufacturing Process
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
          INTRODUCTION SECTION
      ====================================================== */}

      <section
        className={`
          w-full
          px-5
          py-14
          transition-colors
          duration-300

          sm:px-8
          sm:py-16

          lg:px-10
          lg:py-20

          ${
            isDarkMode
              ? "bg-black"
              : "bg-white"
          }
        `}
      >
        <div className="mx-auto max-w-7xl">
          {/* Small Label */}

          <div className="mb-3 flex items-center gap-2">
            <span className="h-2 w-2 bg-[#ff6501]" />

            <span
              className={`
                text-[10px]
                font-bold
                uppercase
                tracking-[0.2em]
                text-[#ff6501]
              `}
            >
              Our Approach
            </span>
          </div>

          {/* Heading */}

          <h2
            className={`
              max-w-3xl
              text-3xl
              font-bold
              leading-tight
              tracking-tight
              transition-colors
              duration-300

              sm:text-4xl
              lg:text-5xl

              ${
                isDarkMode
                  ? "text-white"
                  : "text-black"
              }
            `}
          >
            Precision at Every
            <span className="text-[#ff6501]">
              {" "}Stage.
            </span>
          </h2>

          {/* Description */}

          <p
            className={`
              mt-5
              max-w-3xl
              text-sm
              leading-7
              transition-colors
              duration-300

              sm:text-base

              ${
                isDarkMode
                  ? "text-white/60"
                  : "text-black/60"
              }
            `}
          >
            At Kalika Engineering, manufacturing starts with
            understanding the component requirement. We carefully
            evaluate the application, material, tooling and
            production requirements before moving into manufacturing
            and quality inspection.
          </p>
        </div>
      </section>

      {/* =====================================================
          PROCESS SECTION
      ====================================================== */}

      <section
        className={`
          w-full
          px-5
          py-14
          transition-colors
          duration-300

          sm:px-8
          sm:py-16

          lg:px-10
          lg:py-20

          ${
            isDarkMode
              ? "bg-[#0d0d0d]"
              : "bg-[#f7f7f7]"
          }
        `}
      >
        <div className="mx-auto max-w-7xl">
          {/* Section Header */}

          <div className="max-w-2xl">
            <div className="mb-3 flex items-center gap-2">
              <span className="h-2 w-2 bg-[#ff6501]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#ff6501]">
                Manufacturing Workflow
              </span>
            </div>

            <h2
              className={`
                text-3xl
                font-bold
                leading-tight
                tracking-tight
                transition-colors
                duration-300

                sm:text-4xl
                lg:text-5xl

                ${
                  isDarkMode
                    ? "text-white"
                    : "text-black"
                }
              `}
            >
              From Requirement to
              <span className="text-[#ff6501]">
                {" "}Finished Component.
              </span>
            </h2>
          </div>

          {/* Process Grid */}

          <div
            className={`
              mt-10
              grid
              grid-cols-1
              gap-px
              overflow-hidden
              border
              transition-colors
              duration-300

              sm:grid-cols-2

              lg:grid-cols-4

              ${
                isDarkMode
                  ? "border-white/10 bg-white/10"
                  : "border-black/10 bg-black/10"
              }
            `}
          >
            {/* =================================================
                STEP 01
            ================================================== */}

            <div
              className={`
                p-6
                transition-colors
                duration-300

                sm:p-7
                lg:p-8

                ${
                  isDarkMode
                    ? "bg-[#111111]"
                    : "bg-white"
                }
              `}
            >
              <span className="text-3xl font-bold text-[#ff6501]">
                01
              </span>

              <h3
                className={`
                  mt-5
                  text-lg
                  font-bold
                  transition-colors
                  duration-300

                  ${
                    isDarkMode
                      ? "text-white"
                      : "text-black"
                  }
                `}
              >
                Requirement Analysis
              </h3>

              <p
                className={`
                  mt-3
                  text-sm
                  leading-6
                  transition-colors
                  duration-300

                  ${
                    isDarkMode
                      ? "text-white/55"
                      : "text-black/55"
                  }
                `}
              >
                We understand your component requirements,
                application, dimensions, drawings and performance
                expectations.
              </p>
            </div>

            {/* =================================================
                STEP 02
            ================================================== */}

            <div
              className={`
                p-6
                transition-colors
                duration-300

                sm:p-7
                lg:p-8

                ${
                  isDarkMode
                    ? "bg-[#111111]"
                    : "bg-white"
                }
              `}
            >
              <span className="text-3xl font-bold text-[#ff6501]">
                02
              </span>

              <h3
                className={`
                  mt-5
                  text-lg
                  font-bold
                  transition-colors
                  duration-300

                  ${
                    isDarkMode
                      ? "text-white"
                      : "text-black"
                  }
                `}
              >
                Material & Tooling
              </h3>

              <p
                className={`
                  mt-3
                  text-sm
                  leading-6
                  transition-colors
                  duration-300

                  ${
                    isDarkMode
                      ? "text-white/55"
                      : "text-black/55"
                  }
                `}
              >
                Suitable materials, tooling and manufacturing methods
                are planned according to the component requirement.
              </p>
            </div>

            {/* =================================================
                STEP 03
            ================================================== */}

            <div
              className={`
                p-6
                transition-colors
                duration-300

                sm:p-7
                lg:p-8

                ${
                  isDarkMode
                    ? "bg-[#111111]"
                    : "bg-white"
                }
              `}
            >
              <span className="text-3xl font-bold text-[#ff6501]">
                03
              </span>

              <h3
                className={`
                  mt-5
                  text-lg
                  font-bold
                  transition-colors
                  duration-300

                  ${
                    isDarkMode
                      ? "text-white"
                      : "text-black"
                  }
                `}
              >
                Controlled Manufacturing
              </h3>

              <p
                className={`
                  mt-3
                  text-sm
                  leading-6
                  transition-colors
                  duration-300

                  ${
                    isDarkMode
                      ? "text-white/55"
                      : "text-black/55"
                  }
                `}
              >
                Components are manufactured through controlled
                production processes focused on consistency and
                accuracy.
              </p>
            </div>

            {/* =================================================
                STEP 04
            ================================================== */}

            <div
              className={`
                p-6
                transition-colors
                duration-300

                sm:p-7
                lg:p-8

                ${
                  isDarkMode
                    ? "bg-[#111111]"
                    : "bg-white"
                }
              `}
            >
              <span className="text-3xl font-bold text-[#ff6501]">
                04
              </span>

              <h3
                className={`
                  mt-5
                  text-lg
                  font-bold
                  transition-colors
                  duration-300

                  ${
                    isDarkMode
                      ? "text-white"
                      : "text-black"
                  }
                `}
              >
                Inspection & Delivery
              </h3>

              <p
                className={`
                  mt-3
                  text-sm
                  leading-6
                  transition-colors
                  duration-300

                  ${
                    isDarkMode
                      ? "text-white/55"
                      : "text-black/55"
                  }
                `}
              >
                Finished components are checked before dispatch to
                ensure they are ready for their intended application.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ====================================================== */}
<HowWeWork/>
<EngineeringExcellence/>
<Testimonial/>
<Faq/>
<Cta/>
    </main>
  );
}

export default Manufacture;