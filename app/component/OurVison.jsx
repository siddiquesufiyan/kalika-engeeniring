
"use client";

import Link from "next/link";
import {
  ArrowRight,
  Target,
  Lightbulb,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import { useTheme } from "./ThemeProvider";

const visionPoints = [
  {
    icon: Target,
    title: "Customer-Focused",
    description:
      "Understanding specific requirements and developing products that support the needs of manufacturers and OEM businesses.",
  },
  {
    icon: Lightbulb,
    title: "Continuous Development",
    description:
      "Continuously expanding our product range and improving our capabilities to serve a wider range of industrial applications.",
  },
  {
    icon: ShieldCheck,
    title: "Quality & Reliability",
    description:
      "Maintaining consistent quality and dependable performance across our plastic, rubber and sheet metal components.",
  },
  {
    icon: TrendingUp,
    title: "Competitive Advantage",
    description:
      "Focusing on efficient solutions and competitive pricing to help our customers maintain their position in a competitive market.",
  },
];

function OurVison() {
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
        ${isDarkMode ? "bg-brand-black" : "bg-white"}
      `}
    >
      {/* BACKGROUND DECORATION */}

      <div
        className="
          pointer-events-none
          absolute
          -right-32
          -top-32
          h-72
          w-72
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
          h-80
          w-80
          rounded-full
          bg-brand-orange/5
          blur-3xl
        "
      />

      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10">

        {/* SECTION HEADING */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="mb-3 block text-[11px] font-bold uppercase tracking-[0.18em] text-brand-orange">
            Our Vision
          </span>

          <h2
            className={`
              font-heading
              text-3xl
              font-bold
              leading-tight
              transition-colors
              duration-500
              sm:text-4xl
              lg:text-[46px]
              ${
                isDarkMode
                  ? "text-white"
                  : "text-brand-black"
              }
            `}
          >
            Building Better Components,
            <br className="hidden sm:block" />{" "}
            <span className="text-brand-orange">
              Building Stronger Partnerships
            </span>
          </h2>

          <p
            className={`
              mx-auto
              mt-5
              max-w-2xl
              text-sm
              leading-7
              transition-colors
              duration-500
              sm:text-[15px]
              ${
                isDarkMode
                  ? "text-gray-400"
                  : "text-gray-600"
              }
            `}
          >
            Our vision is to continuously develop a wider range of
            quality products while building long-term relationships
            with manufacturers, OEMs and businesses that rely on
            dependable component solutions.
          </p>

        </div>

        {/* MAIN VISION CARD */}

        <div
          className={`
            relative
            mt-12
            overflow-hidden
            rounded-3xl
            border
            transition-colors
            duration-500
            lg:mt-16
            ${
              isDarkMode
                ? "border-white/20 bg-[#111111]"
                : "border-gray-200 bg-gray-50"
            }
          `}
        >

          {/* TOP ORANGE ACCENT */}

          <div className="absolute left-0 right-0 top-0 h-1 bg-brand-orange" />

          <div className="grid lg:grid-cols-[0.85fr_1.15fr]">

            {/* VISION CONTENT */}

            <div
              className={`
                flex
                flex-col
                justify-center
                p-7
                sm:p-10
                lg:p-14
                ${
                  isDarkMode
                    ? "bg-[#111111]"
                    : "bg-brand-black"
                }
              `}
            >

              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-orange">
                Our Direction
              </span>

              <h3 className="mt-3 max-w-md font-heading text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl">
                A Vision Focused on{" "}
                <span className="text-brand-orange">
                  Growth & Quality
                </span>
              </h3>

              <p className="mt-5 max-w-lg text-sm leading-7 text-gray-300 sm:text-[15px]">
                We aim to further develop our product range and
                capabilities while maintaining our commitment to
                quality, customer satisfaction and competitive
                solutions for industrial and OEM requirements.
              </p>

              <div className="mt-7">

                <Link
                  href="/contact"
                  className="
                    group
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    bg-brand-orange
                    px-5
                    py-3
                    text-xs
                    font-bold
                    text-white
                    transition-all
                    duration-300
                    hover:bg-white
                    hover:text-brand-black
                  "
                >
                  Partner With Us

                  <ArrowRight
                    size={15}
                    className="
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  />
                </Link>

              </div>

            </div>

            {/* WHY CHOOSE US */}

            <div className="p-7 sm:p-10 lg:p-14">

              <div className="grid grid-cols-1 gap-7 sm:grid-cols-2">

                {visionPoints.map((point) => {
                  const Icon = point.icon;

                  return (
                    <div
                      key={point.title}
                      className="group"
                    >

                      {/* ICON */}

                      <div
                        className={`
                          flex
                          h-11
                          w-11
                          items-center
                          justify-center
                          rounded-xl
                          border
                          transition-all
                          duration-300
                          group-hover:border-brand-orange
                          group-hover:bg-brand-orange
                          ${
                            isDarkMode
                              ? "border-white/20 bg-white/[0.03]"
                              : "border-gray-200 bg-white"
                          }
                        `}
                      >
                        <Icon
                          size={19}
                          strokeWidth={1.8}
                          className="
                            text-brand-orange
                            transition-colors
                            duration-300
                            group-hover:text-white
                          "
                        />
                      </div>

                      {/* TEXT */}

                      <h4
                        className={`
                          mt-4
                          font-heading
                          text-base
                          font-bold
                          transition-colors
                          duration-300
                          group-hover:text-brand-orange
                          sm:text-lg
                          ${
                            isDarkMode
                              ? "text-white"
                              : "text-brand-black"
                          }
                        `}
                      >
                        {point.title}
                      </h4>

                      <p
                        className={`
                          mt-2
                          text-xs
                          leading-6
                          sm:text-[13px]
                          ${
                            isDarkMode
                              ? "text-gray-400"
                              : "text-gray-500"
                          }
                        `}
                      >
                        {point.description}
                      </p>

                    </div>
                  );
                })}

              </div>

            </div>

          </div>

        </div>

        {/* BOTTOM STATEMENT */}

        <div className="mx-auto mt-10 max-w-3xl text-center sm:mt-12">

          <p
            className={`
              text-sm
              font-medium
              leading-7
              sm:text-base
              ${
                isDarkMode
                  ? "text-gray-300"
                  : "text-gray-700"
              }
            `}
          >
            From customized components to dependable manufacturing
            support, our goal is to become a trusted long-term
            manufacturing partner for businesses across industries.
          </p>

        </div>

      </div>
    </section>
  );
}

export default OurVison;

