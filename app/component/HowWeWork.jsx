"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Factory,
  Settings,
  Cog,
  Wrench,
} from "lucide-react";
import { useTheme } from "./ThemeProvider";

const machines = [
  {
    id: "01",
    title: "Injection Molding Machine",
    shortTitle: "Injection Molding",
    description:
      "Used for manufacturing precision plastic components with consistent shape, quality and repeatability.",
    image: "/injection-molding-machine.webp",
    icon: Factory,
  },
  {
    id: "02",
    title: "Rubber Mixing Machine",
    shortTitle: "Rubber Mixing",
    description:
      "Supports rubber material preparation for the production of customized rubber components and products.",
    image: "/rubber-mixing-machine.webp",
    icon: Cog,
  },
  {
    id: "03",
    title: "Hot Foil Printing Machine",
    shortTitle: "Hot Foil Printing",
    description:
      "Used for hot foil printing applications on suitable components and products as required.",
    image: "/hot-foil-printing-machine.webp",
    icon: Settings,
  },
  {
    id: "04",
    title: "Compression Molding Machine",
    shortTitle: "Compression Molding",
    description:
      "Supports the molding of rubber components according to specific product and application requirements.",
    image: "/compression-molding-machine.webp",
    icon: Factory,
  },
  {
    id: "05",
    title: "Hand Molding Machine",
    shortTitle: "Hand Molding",
    description:
      "A molding setup included within our manufacturing facility for component production requirements.",
    image: "/hand-molding-machine.webp",
    icon: Wrench,
  },
  {
    id: "06",
    title: "Hydraulic Molding Machine",
    shortTitle: "Hydraulic Molding",
    description:
      "Hydraulic molding equipment supporting the manufacturing of customized components for different applications.",
    image: "/hydraulic-molding-machine.webp",
    icon: Settings,
  },
];

export default function OurVisoon() {
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
      {/* BACKGROUND ELEMENTS */}

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

        {/* SECTION HEADER */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="mb-3 block text-[11px] font-bold uppercase tracking-[0.2em] text-brand-orange">
            Manufacturing Facility
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
            Machinery Behind Our{" "}
            <span className="text-brand-orange">
              Manufacturing
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
            Our manufacturing facility is equipped with dedicated
            molding, rubber processing and printing machinery to
            support the production of customized plastic and rubber
            components according to customer requirements.
          </p>

        </div>

        {/* TOP FEATURE BAR */}

        <div
          className={`
            mx-auto
            mt-10
            flex
            max-w-5xl
            flex-col
            items-center
            justify-between
            gap-5
            rounded-2xl
            border
            px-6
            py-5
            transition-colors
            duration-500
            sm:flex-row
            sm:px-8
            ${
              isDarkMode
                ? "border-white/20 bg-[#111111]"
                : "border-gray-200 bg-gray-50"
            }
          `}
        >

          <div className="flex items-center gap-4">

            <div
              className="
                flex
                h-11
                w-11
                shrink-0
                items-center
                justify-center
                rounded-xl
                bg-brand-orange
                text-white
              "
            >
              <Factory size={20} strokeWidth={1.8} />
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
                Manufacturing Capability
              </p>

              <p
                className={`
                  mt-1
                  text-xs
                  ${
                    isDarkMode
                      ? "text-gray-400"
                      : "text-gray-500"
                  }
                `}
              >
                Plastic & Rubber Component Manufacturing
              </p>

            </div>

          </div>

          <div
            className={`
              hidden
              h-10
              w-px
              sm:block
              ${
                isDarkMode
                  ? "bg-white/20"
                  : "bg-gray-200"
              }
            `}
          />

          <div className="text-center sm:text-left">

            <span className="text-2xl font-bold text-brand-orange">
              06
            </span>

            <span
              className={`
                ml-2
                text-xs
                font-semibold
                uppercase
                tracking-wider
                ${
                  isDarkMode
                    ? "text-gray-300"
                    : "text-gray-600"
                }
              `}
            >
              Facility Machines
            </span>

          </div>

        </div>

        {/* MACHINE GRID */}

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">

          {machines.map((machine) => {
            const Icon = machine.icon;

            return (
              <div
                key={machine.id}
                className={`
                  group
                  overflow-hidden
                  rounded-2xl
                  border
                  transition-all
                  duration-500
                  hover:-translate-y-1
                  ${
                    isDarkMode
                      ? "border-white/20 bg-[#111111] hover:border-brand-orange/60"
                      : "border-gray-200 bg-white hover:border-brand-orange/40"
                  }
                `}
              >

                {/* MACHINE IMAGE */}

                <div
                  className={`
                    relative
                    aspect-[1.45/1]
                    overflow-hidden
                    ${
                      isDarkMode
                        ? "bg-[#181818]"
                        : "bg-gray-100"
                    }
                  `}
                >

                  {/* IMAGE */}

                  <Image
                    src={machine.image}
                    alt={`${machine.title} - Kalika Engineering`}
                    fill
                    sizes="
                      (max-width: 640px) 92vw,
                      (max-width: 1024px) 45vw,
                      31vw
                    "
                    className="
                      object-contain
                      p-5
                      transition-transform
                      duration-700
                      ease-out
                      group-hover:scale-105
                    "
                  />

                  {/* IMAGE OVERLAY */}

                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-black/20
                      via-transparent
                      to-transparent
                    "
                  />

                  {/* MACHINE NUMBER */}

                  <div
                    className="
                      absolute
                      left-4
                      top-4
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-full
                      bg-brand-orange
                      text-[10px]
                      font-bold
                      text-white
                      shadow-lg
                    "
                  >
                    {machine.id}
                  </div>

                </div>

                {/* CARD CONTENT */}

                <div className="p-5 sm:p-6">

                  {/* SMALL ICON */}

                  <div
                    className={`
                      flex
                      h-10
                      w-10
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
                          : "border-gray-200 bg-gray-50"
                      }
                    `}
                  >
                    <Icon
                      size={18}
                      strokeWidth={1.8}
                      className="
                        text-brand-orange
                        transition-colors
                        duration-300
                        group-hover:text-white
                      "
                    />
                  </div>

                  {/* TITLE */}

                  <h3
                    className={`
                      mt-4
                      font-heading
                      text-lg
                      font-bold
                      leading-snug
                      transition-colors
                      duration-300
                      group-hover:text-brand-orange
                      ${
                        isDarkMode
                          ? "text-white"
                          : "text-brand-black"
                      }
                    `}
                  >
                    {machine.title}
                  </h3>

                  {/* DESCRIPTION */}

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
                    {machine.description}
                  </p>

                  {/* MACHINE LABEL */}

                  <div
                    className={`
                      mt-5
                      border-t
                      pt-4
                      ${
                        isDarkMode
                          ? "border-white/10"
                          : "border-gray-100"
                      }
                    `}
                  >

                    <span
                      className="
                        text-[10px]
                        font-bold
                        uppercase
                        tracking-[0.14em]
                        text-brand-orange
                      "
                    >
                      {machine.shortTitle}
                    </span>

                  </div>

                </div>

              </div>
            );
          })}

        </div>

        {/* BOTTOM B2B CTA */}

        <div
          className="
            relative
            mt-12
            overflow-hidden
            rounded-2xl
            bg-brand-black
            px-6
            py-8
            sm:mt-14
            sm:px-10
            sm:py-10
            lg:px-12
          "
        >

          {/* DECORATION */}

          <div
            className="
              pointer-events-none
              absolute
              -right-20
              -top-20
              h-52
              w-52
              rounded-full
              border
              border-brand-orange/20
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              -right-10
              -top-10
              h-32
              w-32
              rounded-full
              border
              border-brand-orange/20
            "
          />

          <div
            className="
              relative
              flex
              flex-col
              gap-6
              lg:flex-row
              lg:items-center
              lg:justify-between
            "
          >

            <div className="max-w-2xl">

              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-orange">
                Built for B2B Requirements
              </span>

              <h3 className="mt-3 font-heading text-2xl font-bold leading-tight text-white sm:text-3xl">
                Need Customized{" "}
                <span className="text-brand-orange">
                  Components?
                </span>
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-300">
                Share your component requirement with us. We work with
                manufacturers and businesses to provide customized
                plastic, rubber and related component solutions.
              </p>

            </div>

            <Link
              href="/contact"
              className="
                group
                inline-flex
                shrink-0
                items-center
                justify-center
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
                hover:bg-white
                hover:text-brand-black
              "
            >
              Discuss Your Requirement

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