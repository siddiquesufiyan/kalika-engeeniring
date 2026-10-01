"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Factory,
  Cog,
  Settings,
  Wrench,
  Printer,
  CircleDot,
  MapPin,
  Globe2,
  ArrowRight,
  CheckCircle2,
  Boxes,
  Truck,
} from "lucide-react";
import { useTheme } from "./ThemeProvider";

const machines = [
  {
    id: "01",
    name: "Injection Molding Machine",
    category: "Plastic Manufacturing",
    description:
      "Supports the manufacturing of plastic components with consistent shapes and repeatable production requirements.",
    icon: Factory,
  },
  {
    id: "02",
    name: "Rubber Mixing Machine",
    category: "Rubber Processing",
    description:
      "Used as part of rubber processing for preparing material used in customized rubber component manufacturing.",
    icon: Cog,
  },
  {
    id: "03",
    name: "Hot Foil Printing Machine",
    category: "Component Finishing",
    description:
      "Supports hot foil printing requirements for suitable products and components.",
    icon: Printer,
  },
  {
    id: "04",
    name: "Compression Molding Machine",
    category: "Rubber Manufacturing",
    description:
      "Used for compression molding requirements in the production of customized rubber components.",
    icon: Settings,
  },
  {
    id: "05",
    name: "Hand Molding Machine",
    category: "Molding Process",
    description:
      "Part of the manufacturing facility used for specific molding and component production requirements.",
    icon: Wrench,
  },
  {
    id: "06",
    name: "Hydraulic Molding Machine",
    category: "Industrial Manufacturing",
    description:
      "Supports hydraulic molding requirements for customized components and industrial applications.",
    icon: CircleDot,
  },
];

const reachItems = [
  {
    id: "01",
    title: "Across India",
    shortTitle: "Domestic Reach",
    description:
      "Our products are available throughout India, supporting manufacturers and businesses across different industrial applications.",
    icon: MapPin,
    points: [
      "Products available throughout India",
      "Support for business requirements",
      "Plastic, rubber and sheet metal components",
    ],
  },
  {
    id: "02",
    title: "Export Reach",
    shortTitle: "International",
    description:
      "Our quality products are exported to multiple countries through top export companies.",
    icon: Globe2,
    points: [
      "Products exported through export companies",
      "International supply reach",
      "Quality-focused component manufacturing",
    ],
  },
];

export default function ManufacturingAndReach() {
  const { isDarkMode } = useTheme();

  const [activeMachine, setActiveMachine] = useState(0);
  const [activeReach, setActiveReach] = useState(0);

  const selectedMachine = machines[activeMachine];
  const MachineIcon = selectedMachine.icon;

  const selectedReach = reachItems[activeReach];
  const ReachIcon = selectedReach.icon;

  return (
    <>
      {/* =========================================================
          OUR MANUFACTURING CAPABILITIES
      ========================================================= */}

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
        {/* BACKGROUND */}

        <div
          className="
            pointer-events-none
            absolute
            -right-40
            top-20
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
            h-80
            w-80
            rounded-full
            bg-brand-orange/5
            blur-3xl
          "
        />

        <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10">

          {/* HEADER */}

          <div className="mx-auto max-w-3xl text-center">

            <span className="mb-3 block text-[11px] font-bold uppercase tracking-[0.2em] text-brand-orange">
              Our Manufacturing Capabilities
            </span>

            <h2
              className={`
                font-heading
                text-3xl
                font-bold
                leading-tight
                sm:text-4xl
                lg:text-[46px]
                ${
                  isDarkMode
                    ? "text-white"
                    : "text-brand-black"
                }
              `}
            >
              Manufacturing Built Around{" "}
              <span className="text-brand-orange">
                Your Requirements
              </span>
            </h2>

            <p
              className={`
                mx-auto
                mt-5
                max-w-2xl
                text-sm
                leading-7
                sm:text-[15px]
                ${
                  isDarkMode
                    ? "text-gray-400"
                    : "text-gray-600"
                }
              `}
            >
              Our facility includes dedicated molding, rubber processing
              and printing machinery supporting the manufacturing of
              customized components for business and industrial requirements.
            </p>

          </div>

          {/* CAPABILITY PANEL */}

          <div
            className={`
              mt-12
              overflow-hidden
              rounded-3xl
              border
              lg:mt-16
              ${
                isDarkMode
                  ? "border-white/20 bg-[#111111]"
                  : "border-gray-200 bg-gray-50"
              }
            `}
          >

            <div className="grid lg:grid-cols-[0.8fr_1.2fr]">

              {/* MACHINE LIST */}

              <div
                className={`
                  border-b
                  p-5
                  sm:p-7
                  lg:border-b-0
                  lg:border-r
                  lg:p-8
                  ${
                    isDarkMode
                      ? "border-white/10"
                      : "border-gray-200"
                  }
                `}
              >

                <div className="mb-6 flex items-center justify-between">

                  <div>

                    <p
                      className={`
                        text-[10px]
                        font-bold
                        uppercase
                        tracking-[0.16em]
                        ${
                          isDarkMode
                            ? "text-gray-500"
                            : "text-gray-400"
                        }
                      `}
                    >
                      Facility Equipment
                    </p>

                    <h3
                      className={`
                        mt-1
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
                      Our Machinery
                    </h3>

                  </div>

                  <div
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-xl
                      bg-brand-orange
                      text-white
                    "
                  >
                    <Factory size={19} />
                  </div>

                </div>

                {/* MACHINE BUTTONS */}

                <div className="space-y-2">

                  {machines.map((machine, index) => {
                    const Icon = machine.icon;
                    const isActive = index === activeMachine;

                    return (
                      <button
                        key={machine.id}
                        type="button"
                        onClick={() => setActiveMachine(index)}
                        className={`
                          group
                          flex
                          w-full
                          items-center
                          gap-3
                          rounded-xl
                          border
                          p-3
                          text-left
                          transition-all
                          duration-300
                          ${
                            isActive
                              ? "border-brand-orange bg-brand-orange text-white"
                              : isDarkMode
                                ? "border-white/10 bg-white/[0.02] text-gray-300 hover:border-brand-orange/50"
                                : "border-gray-200 bg-white text-gray-700 hover:border-brand-orange/40"
                          }
                        `}
                      >

                        <div
                          className={`
                            flex
                            h-9
                            w-9
                            shrink-0
                            items-center
                            justify-center
                            rounded-lg
                            ${
                              isActive
                                ? "bg-white/15"
                                : isDarkMode
                                  ? "bg-white/5"
                                  : "bg-gray-100"
                            }
                          `}
                        >
                          <Icon
                            size={17}
                            className={
                              isActive
                                ? "text-white"
                                : "text-brand-orange"
                            }
                          />
                        </div>

                        <div className="min-w-0 flex-1">

                          <div className="flex items-center gap-2">

                            <span
                              className={`
                                text-[9px]
                                font-bold
                                ${
                                  isActive
                                    ? "text-white/70"
                                    : "text-brand-orange"
                                }
                              `}
                            >
                              {machine.id}
                            </span>

                            <span
                              className="
                                h-1
                                w-1
                                rounded-full
                                bg-current
                                opacity-30
                              "
                            />

                            <span
                              className={`
                                truncate
                                text-[10px]
                                font-medium
                                uppercase
                                tracking-wider
                                ${
                                  isActive
                                    ? "text-white/70"
                                    : isDarkMode
                                      ? "text-gray-500"
                                      : "text-gray-400"
                                }
                              `}
                            >
                              {machine.category}
                            </span>

                          </div>

                          <p
                            className={`
                              mt-1
                              truncate
                              text-sm
                              font-bold
                              ${
                                isActive
                                  ? "text-white"
                                  : isDarkMode
                                    ? "text-gray-200"
                                    : "text-brand-black"
                              }
                            `}
                          >
                            {machine.name}
                          </p>

                        </div>

                        <ArrowRight
                          size={15}
                          className={`
                            shrink-0
                            transition-transform
                            duration-300
                            ${
                              isActive
                                ? "translate-x-0.5 text-white"
                                : "text-gray-400"
                            }
                          `}
                        />

                      </button>
                    );
                  })}

                </div>

              </div>

              {/* ACTIVE MACHINE */}

              <div
                className={`
                  relative
                  flex
                  min-h-[440px]
                  flex-col
                  justify-between
                  overflow-hidden
                  p-7
                  sm:p-10
                  lg:min-h-[540px]
                  lg:p-12
                  ${
                    isDarkMode
                      ? "bg-[#0d0d0d]"
                      : "bg-white"
                  }
                `}
              >

                {/* GRID DECORATION */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    opacity-[0.035]
                    [background-image:linear-gradient(#888_1px,transparent_1px),linear-gradient(90deg,#888_1px,transparent_1px)]
                    [background-size:40px_40px]
                  "
                />

                {/* ORANGE GLOW */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    right-[-100px]
                    top-[-100px]
                    h-64
                    w-64
                    rounded-full
                    bg-brand-orange/10
                    blur-3xl
                  "
                />

                <div className="relative z-10">

                  <div className="flex items-start justify-between">

                    <div>

                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-orange">
                        Selected Capability
                      </span>

                      <p
                        className={`
                          mt-2
                          text-xs
                          font-medium
                          ${
                            isDarkMode
                              ? "text-gray-500"
                              : "text-gray-400"
                          }
                        `}
                      >
                        {selectedMachine.category}
                      </p>

                    </div>

                    <span
                      className={`
                        text-5xl
                        font-black
                        leading-none
                        ${
                          isDarkMode
                            ? "text-white/[0.06]"
                            : "text-black/[0.05]"
                        }
                      `}
                    >
                      {selectedMachine.id}
                    </span>

                  </div>

                  {/* LARGE ICON */}

                  <div
                    className="
                      mt-10
                      flex
                      h-20
                      w-20
                      items-center
                      justify-center
                      rounded-2xl
                      bg-brand-orange
                      text-white
                      shadow-xl
                      shadow-brand-orange/20
                    "
                  >
                    <MachineIcon
                      size={36}
                      strokeWidth={1.5}
                    />
                  </div>

                  <h3
                    className={`
                      mt-7
                      max-w-xl
                      font-heading
                      text-2xl
                      font-bold
                      leading-tight
                      sm:text-3xl
                      lg:text-4xl
                      ${
                        isDarkMode
                          ? "text-white"
                          : "text-brand-black"
                      }
                    `}
                  >
                    {selectedMachine.name}
                  </h3>

                  <p
                    className={`
                      mt-4
                      max-w-xl
                      text-sm
                      leading-7
                      sm:text-[15px]
                      ${
                        isDarkMode
                          ? "text-gray-400"
                          : "text-gray-600"
                      }
                    `}
                  >
                    {selectedMachine.description}
                  </p>

                </div>

                {/* BOTTOM */}

                <div
                  className={`
                    relative
                    z-10
                    mt-10
                    flex
                    flex-wrap
                    gap-2
                    border-t
                    pt-6
                    ${
                      isDarkMode
                        ? "border-white/10"
                        : "border-gray-100"
                    }
                  `}
                >

                  <span
                    className={`
                      inline-flex
                      items-center
                      gap-2
                      rounded-full
                      px-3
                      py-2
                      text-[10px]
                      font-semibold
                      ${
                        isDarkMode
                          ? "bg-white/5 text-gray-300"
                          : "bg-gray-100 text-gray-600"
                      }
                    `}
                  >
                    <CheckCircle2
                      size={13}
                      className="text-brand-orange"
                    />
                    Customer Requirements
                  </span>

                  <span
                    className={`
                      inline-flex
                      items-center
                      gap-2
                      rounded-full
                      px-3
                      py-2
                      text-[10px]
                      font-semibold
                      ${
                        isDarkMode
                          ? "bg-white/5 text-gray-300"
                          : "bg-gray-100 text-gray-600"
                      }
                    `}
                  >
                    <CheckCircle2
                      size={13}
                      className="text-brand-orange"
                    />
                    Customized Components
                  </span>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =========================================================
          SUPPLY REACH
      ========================================================= */}

      <section
        className={`
          relative
          overflow-hidden
          py-16
          transition-colors
          duration-500
          sm:py-20
          lg:py-24
          ${isDarkMode ? "bg-[#0a0a0a]" : "bg-gray-50"}
        `}
      >

        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10">

          {/* HEADER */}

          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">

            <div>

              <span className="mb-3 block text-[11px] font-bold uppercase tracking-[0.2em] text-brand-orange">
                Supply Reach
              </span>

              <h2
                className={`
                  font-heading
                  text-3xl
                  font-bold
                  leading-tight
                  sm:text-4xl
                  lg:text-[44px]
                  ${
                    isDarkMode
                      ? "text-white"
                      : "text-brand-black"
                  }
                `}
              >
                From Our Facility to{" "}
                <span className="text-brand-orange">
                  Businesses
                </span>
              </h2>

            </div>

            <p
              className={`
                max-w-2xl
                text-sm
                leading-7
                lg:ml-auto
                ${
                  isDarkMode
                    ? "text-gray-400"
                    : "text-gray-600"
                }
              `}
            >
              Kalika Engineering supplies its products throughout India
              and also exports quality products to multiple countries
              through top export companies.
            </p>

          </div>

          {/* REACH DISPLAY */}

          <div className="mt-12 grid gap-5 lg:grid-cols-[1fr_1.4fr]">

            {/* REACH OPTIONS */}

            <div className="grid grid-cols-2 gap-3">

              {reachItems.map((item, index) => {
                const Icon = item.icon;
                const isActive = activeReach === index;

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActiveReach(index)}
                    className={`
                      relative
                      overflow-hidden
                      rounded-2xl
                      border
                      p-5
                      text-left
                      transition-all
                      duration-500
                      sm:p-7
                      ${
                        isActive
                          ? "border-brand-orange bg-brand-orange"
                          : isDarkMode
                            ? "border-white/15 bg-[#111111] hover:border-brand-orange/50"
                            : "border-gray-200 bg-white hover:border-brand-orange/40"
                      }
                    `}
                  >

                    <div
                      className={`
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center
                        rounded-xl
                        ${
                          isActive
                            ? "bg-white/15 text-white"
                            : "bg-brand-orange/10 text-brand-orange"
                        }
                      `}
                    >
                      <Icon size={22} strokeWidth={1.6} />
                    </div>

                    <p
                      className={`
                        mt-6
                        text-[10px]
                        font-bold
                        uppercase
                        tracking-[0.16em]
                        ${
                          isActive
                            ? "text-white/70"
                            : "text-brand-orange"
                        }
                      `}
                    >
                      {item.shortTitle}
                    </p>

                    <h3
                      className={`
                        mt-2
                        font-heading
                        text-xl
                        font-bold
                        sm:text-2xl
                        ${
                          isActive
                            ? "text-white"
                            : isDarkMode
                              ? "text-white"
                              : "text-brand-black"
                        }
                      `}
                    >
                      {item.title}
                    </h3>

                    <ArrowRight
                      size={17}
                      className={`
                        absolute
                        bottom-5
                        right-5
                        transition-transform
                        duration-300
                        ${
                          isActive
                            ? "text-white"
                            : "text-gray-400"
                        }
                      `}
                    />

                  </button>
                );
              })}

            </div>

            {/* ACTIVE REACH */}

            <div
              className={`
                relative
                min-h-[330px]
                overflow-hidden
                rounded-2xl
                p-7
                sm:p-9
                lg:p-10
                ${
                  isDarkMode
                    ? "bg-brand-black"
                    : "bg-white"
                }
              `}
            >

              {/* MAP-LIKE DECORATION */}

              <div
                className="
                  pointer-events-none
                  absolute
                  right-[-40px]
                  top-[-40px]
                  h-64
                  w-64
                  rounded-full
                  border
                  border-brand-orange/10
                "
              />

              <div
                className="
                  pointer-events-none
                  absolute
                  right-4
                  top-4
                  h-48
                  w-48
                  rounded-full
                  border
                  border-brand-orange/10
                "
              />

              <div
                className="
                  pointer-events-none
                  absolute
                  right-20
                  top-20
                  h-4
                  w-4
                  rounded-full
                  bg-brand-orange
                  shadow-[0_0_0_10px_rgba(255,255,255,0.03)]
                "
              />

              <div className="relative z-10">

                <div className="flex items-center justify-between">

                  <div
                    className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-xl
                      bg-brand-orange
                      text-white
                    "
                  >
                    <ReachIcon size={22} strokeWidth={1.6} />
                  </div>

                  <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-orange">
                    {selectedReach.shortTitle}
                  </span>

                </div>

                <h3
                  className={`
                    mt-7
                    font-heading
                    text-2xl
                    font-bold
                    sm:text-3xl
                    ${
                      isDarkMode
                        ? "text-white"
                        : "text-brand-black"
                    }
                  `}
                >
                  {selectedReach.title}
                </h3>

                <p
                  className={`
                    mt-3
                    max-w-xl
                    text-sm
                    leading-7
                    ${
                      isDarkMode
                        ? "text-gray-400"
                        : "text-gray-600"
                    }
                  `}
                >
                  {selectedReach.description}
                </p>

                {/* POINTS */}

                <div className="mt-7 space-y-3">

                  {selectedReach.points.map((point) => (

                    <div
                      key={point}
                      className="flex items-center gap-3"
                    >

                      <CheckCircle2
                        size={17}
                        className="shrink-0 text-brand-orange"
                      />

                      <span
                        className={`
                          text-xs
                          font-medium
                          sm:text-sm
                          ${
                            isDarkMode
                              ? "text-gray-300"
                              : "text-gray-700"
                          }
                        `}
                      >
                        {point}
                      </span>

                    </div>

                  ))}

                </div>

              </div>

            </div>

          </div>

          {/* REACH FOOTER */}

          <div
            className={`
              mt-6
              flex
              flex-col
              gap-4
              rounded-2xl
              border
              p-5
              sm:flex-row
              sm:items-center
              sm:justify-between
              sm:px-7
              ${
                isDarkMode
                  ? "border-white/10 bg-[#111111]"
                  : "border-gray-200 bg-white"
              }
            `}
          >

            <div className="flex items-center gap-3">

              <div
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  bg-brand-orange/10
                  text-brand-orange
                "
              >
                <Truck size={18} />
              </div>

              <div>

                <p
                  className={`
                    text-sm
                    font-bold
                    ${
                      isDarkMode
                        ? "text-white"
                        : "text-brand-black"
                    }
                  `}
                >
                  Ready to discuss your requirement?
                </p>

                <p
                  className={`
                    mt-0.5
                    text-xs
                    ${
                      isDarkMode
                        ? "text-gray-500"
                        : "text-gray-500"
                    }
                  `}
                >
                  Connect with Kalika Engineering for your component requirements.
                </p>

              </div>

            </div>

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
                px-5
                py-3
                text-xs
                font-bold
                text-white
                transition-all
                duration-300
                hover:bg-brand-black
              "
            >
              Contact Us

              <ArrowRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

          </div>

        </div>
      </section>
    </>
  );
}