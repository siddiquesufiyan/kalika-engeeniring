"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Target,
  Eye,
  ShieldCheck,
  Users,
  TrendingUp,
  CheckCircle2,
  Sparkles,
  Handshake,
} from "lucide-react";
import { useTheme } from "./ThemeProvider";

const tabs = {
  mission: {
    label: "Our Mission",
    eyebrow: "What Drives Us",
    title: "Delivering Value That Meets",
    highlight: "Customer Requirements",
    description:
      "Our mission is to delight our valued customers by consistently providing top-notch products tailored to their requirements and budgets.",
    icon: Target,
    points: [
      {
        icon: Target,
        title: "Requirement Focused",
        description:
          "Products are developed with customer requirements and budgets in mind.",
      },
      {
        icon: ShieldCheck,
        title: "Quality & Performance",
        description:
          "We continually enhance our quality and performance standards.",
      },
      {
        icon: Handshake,
        title: "Transparent Work Ethic",
        description:
          "We uphold a transparent approach while building a reputable presence in the industry.",
      },
    ],
  },

  vision: {
    label: "Our Vision",
    eyebrow: "Where We Are Going",
    title: "Building Trust Through",
    highlight: "Customer Satisfaction",
    description:
      "Our goal is to exceed customer expectations by providing unparalleled value tailored to their needs and to become a trusted company known for unwavering customer satisfaction.",
    icon: Eye,
    points: [
      {
        icon: Users,
        title: "Customer Satisfaction",
        description:
          "We aspire to build lasting relationships through consistent customer satisfaction.",
      },
      {
        icon: TrendingUp,
        title: "Continuous Growth",
        description:
          "Our vision is to create a growing community of delighted clients through our product range.",
      },
      {
        icon: Sparkles,
        title: "Lasting Impact",
        description:
          "We aim to make a lasting impact by delivering value that is tailored to customer needs.",
      },
    ],
  },
};

function OurVison() {
  const { isDarkMode } = useTheme();

  const [activeTab, setActiveTab] = useState("mission");

  const activeContent = tabs[activeTab];
  const MainIcon = activeContent.icon;

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
        className={`
          pointer-events-none
          absolute
          inset-0
          opacity-[0.025]
          [background-image:linear-gradient(#888_1px,transparent_1px),linear-gradient(90deg,#888_1px,transparent_1px)]
          [background-size:48px_48px]
        `}
      />

      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10">

        {/* =====================================================
            SECTION HEADING
        ===================================================== */}

        <div className="mx-auto max-w-3xl text-center">

          <span
            className="
              mb-3
              block
              text-[11px]
              font-bold
              uppercase
              tracking-[0.2em]
              text-brand-orange
            "
          >
            Mission & Vision
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
            What We Stand For &
            <br className="hidden sm:block" />{" "}
            <span className="text-brand-orange">
              Where We Are Going
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
            Our mission and vision are centred around customer
            requirements, quality, value and building a trusted
            presence through customer satisfaction.
          </p>

        </div>

        {/* =====================================================
            MAIN CARD
        ===================================================== */}

        <div
          className={`
            relative
            mt-12
            overflow-hidden
            rounded-3xl
            border
            shadow-sm
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

          {/* ORANGE TOP LINE */}

          <div className="absolute left-0 right-0 top-0 h-1 bg-brand-orange" />

          {/* =================================================
              TAB NAVIGATION
          ================================================= */}

          <div
            className={`
              flex
              flex-col
              gap-2
              border-b
              p-3
              sm:flex-row
              sm:p-4
              ${
                isDarkMode
                  ? "border-white/10 bg-[#0d0d0d]"
                  : "border-gray-200 bg-white"
              }
            `}
          >

            {/* MISSION TAB */}

            <button
              type="button"
              onClick={() => setActiveTab("mission")}
              className={`
                group
                flex
                flex-1
                items-center
                gap-3
                rounded-xl
                px-5
                py-4
                text-left
                transition-all
                duration-300
                ${
                  activeTab === "mission"
                    ? "bg-brand-orange text-white shadow-lg shadow-brand-orange/20"
                    : isDarkMode
                      ? "text-gray-400 hover:bg-white/5 hover:text-white"
                      : "text-gray-500 hover:bg-gray-50 hover:text-brand-black"
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
                  ${
                    activeTab === "mission"
                      ? "bg-white/15"
                      : isDarkMode
                        ? "bg-white/5"
                        : "bg-gray-100"
                  }
                `}
              >
                <Target size={20} strokeWidth={1.8} />
              </div>

              <div>

                <p
                  className={`
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[0.16em]
                    ${
                      activeTab === "mission"
                        ? "text-white/70"
                        : "text-brand-orange"
                    }
                  `}
                >
                  01
                </p>

                <p className="mt-0.5 text-sm font-bold sm:text-base">
                  Our Mission
                </p>

              </div>

              <ArrowRight
                size={16}
                className={`
                  ml-auto
                  transition-transform
                  duration-300
                  ${
                    activeTab === "mission"
                      ? "translate-x-0.5"
                      : ""
                  }
                `}
              />

            </button>

            {/* VISION TAB */}

            <button
              type="button"
              onClick={() => setActiveTab("vision")}
              className={`
                group
                flex
                flex-1
                items-center
                gap-3
                rounded-xl
                px-5
                py-4
                text-left
                transition-all
                duration-300
                ${
                  activeTab === "vision"
                    ? "bg-brand-orange text-white shadow-lg shadow-brand-orange/20"
                    : isDarkMode
                      ? "text-gray-400 hover:bg-white/5 hover:text-white"
                      : "text-gray-500 hover:bg-gray-50 hover:text-brand-black"
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
                  ${
                    activeTab === "vision"
                      ? "bg-white/15"
                      : isDarkMode
                        ? "bg-white/5"
                        : "bg-gray-100"
                  }
                `}
              >
                <Eye size={20} strokeWidth={1.8} />
              </div>

              <div>

                <p
                  className={`
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[0.16em]
                    ${
                      activeTab === "vision"
                        ? "text-white/70"
                        : "text-brand-orange"
                    }
                  `}
                >
                  02
                </p>

                <p className="mt-0.5 text-sm font-bold sm:text-base">
                  Our Vision
                </p>

              </div>

              <ArrowRight
                size={16}
                className={`
                  ml-auto
                  transition-transform
                  duration-300
                  ${
                    activeTab === "vision"
                      ? "translate-x-0.5"
                      : ""
                  }
                `}
              />

            </button>

          </div>

          {/* =================================================
              ACTIVE CONTENT
          ================================================= */}

          <div
            key={activeTab}
            className="grid lg:grid-cols-[0.9fr_1.1fr]"
          >

            {/* LEFT DARK PANEL */}

            <div
              className="
                relative
                flex
                min-h-[420px]
                flex-col
                justify-between
                overflow-hidden
                bg-brand-black
                p-7
                sm:p-10
                lg:p-14
              "
            >

              {/* LARGE BACKGROUND NUMBER */}

              <span
                className="
                  pointer-events-none
                  absolute
                  -right-5
                  -top-10
                  select-none
                  text-[180px]
                  font-black
                  leading-none
                  text-white/[0.025]
                "
              >
                {activeTab === "mission" ? "01" : "02"}
              </span>

              {/* ORANGE CIRCLE */}

              <div
                className="
                  pointer-events-none
                  absolute
                  -bottom-24
                  -right-24
                  h-64
                  w-64
                  rounded-full
                  border
                  border-brand-orange/20
                "
              />

              <div className="relative z-10">

                {/* ICON */}

                <div
                  className="
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-2xl
                    bg-brand-orange
                    text-white
                    shadow-xl
                    shadow-brand-orange/20
                  "
                >
                  <MainIcon
                    size={29}
                    strokeWidth={1.6}
                  />
                </div>

                {/* EYEBROW */}

                <span
                  className="
                    mt-8
                    block
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.2em]
                    text-brand-orange
                  "
                >
                  {activeContent.eyebrow}
                </span>

                {/* TITLE */}

                <h3 className="mt-3 max-w-lg font-heading text-3xl font-bold leading-tight text-white sm:text-4xl">
                  {activeContent.title}{" "}
                  <span className="text-brand-orange">
                    {activeContent.highlight}
                  </span>
                </h3>

                {/* DESCRIPTION */}

                <p className="mt-5 max-w-lg text-sm leading-7 text-gray-300 sm:text-[15px]">
                  {activeContent.description}
                </p>

              </div>

              {/* BOTTOM LABEL */}

              <div className="relative z-10 mt-10 flex items-center gap-3">

                <div className="h-px w-10 bg-brand-orange" />

                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-gray-400">
                  Kalika Engineering
                </span>

              </div>

            </div>

            {/* RIGHT POINTS */}

            <div
              className={`
                p-7
                sm:p-10
                lg:p-14
                ${
                  isDarkMode
                    ? "bg-[#111111]"
                    : "bg-white"
                }
              `}
            >

              <div className="mb-8">

                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-orange">
                  {activeTab === "mission"
                    ? "Our Commitment"
                    : "Our Direction"}
                </span>

                <h4
                  className={`
                    mt-2
                    font-heading
                    text-xl
                    font-bold
                    ${
                      isDarkMode
                        ? "text-white"
                        : "text-brand-black"
                    }
                  `}
                >
                  {activeTab === "mission"
                    ? "What guides our everyday work"
                    : "What we aspire to build"}
                </h4>

              </div>

              {/* POINTS */}

              <div className="space-y-7">

                {activeContent.points.map((point, index) => {
                  const PointIcon = point.icon;

                  return (
                    <div
                      key={point.title}
                      className="
                        group
                        flex
                        gap-4
                      "
                    >

                      {/* NUMBER / ICON */}

                      <div className="relative shrink-0">

                        <div
                          className={`
                            flex
                            h-12
                            w-12
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
                                ? "border-white/15 bg-white/[0.03]"
                                : "border-gray-200 bg-gray-50"
                            }
                          `}
                        >
                          <PointIcon
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

                        {index !==
                          activeContent.points.length - 1 && (
                          <div
                            className={`
                              absolute
                              left-1/2
                              top-14
                              h-8
                              w-px
                              -translate-x-1/2
                              ${
                                isDarkMode
                                  ? "bg-white/10"
                                  : "bg-gray-200"
                              }
                            `}
                          />
                        )}

                      </div>

                      {/* TEXT */}

                      <div className="pt-0.5">

                        <div className="flex items-center gap-2">

                          <span className="text-[9px] font-bold tracking-[0.12em] text-brand-orange">
                            0{index + 1}
                          </span>

                          <h5
                            className={`
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
                          </h5>

                        </div>

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

                    </div>
                  );
                })}

              </div>

              {/* BOTTOM CHECK */}

              <div
                className={`
                  mt-9
                  flex
                  items-center
                  gap-3
                  rounded-xl
                  border
                  px-4
                  py-3
                  ${
                    isDarkMode
                      ? "border-white/10 bg-white/[0.03]"
                      : "border-gray-100 bg-gray-50"
                  }
                `}
              >

                <CheckCircle2
                  size={17}
                  className="shrink-0 text-brand-orange"
                />

                <span
                  className={`
                    text-[11px]
                    font-medium
                    ${
                      isDarkMode
                        ? "text-gray-300"
                        : "text-gray-600"
                    }
                  `}
                >
                  {activeTab === "mission"
                    ? "Focused on delivering value tailored to customer needs."
                    : "Focused on building lasting customer satisfaction and trust."}
                </span>

              </div>

            </div>

          </div>

        </div>

        {/* =====================================================
            BOTTOM CTA / STATEMENT
        ===================================================== */}

        <div
          className="
            mx-auto
            mt-10
            max-w-4xl
            text-center
            sm:mt-12
          "
        >

          <p
            className={`
              text-sm
              leading-7
              sm:text-base
              ${
                isDarkMode
                  ? "text-gray-300"
                  : "text-gray-700"
              }
            `}
          >
            We aim to create a trusted presence by consistently
            improving our quality, performance and value while
            keeping customer satisfaction at the centre of our work.
          </p>

          <div className="mt-6">

            <Link
              href="/contact"
              className="
                group
                inline-flex
                items-center
                gap-2
                rounded-full
                bg-brand-orange
                px-6
                py-3.5
                text-xs
                font-bold
                text-white
                transition-all
                duration-300
                hover:bg-brand-black
              "
            >
              Work With Us

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

      </div>
    </section>
  );
}

export default OurVison;

