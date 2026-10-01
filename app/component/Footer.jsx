
"use client";

import Image from "next/image";
import Link from "next/link";
import { assets } from "@/assets/assets";
import { useTheme } from "./ThemeProvider";

import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
 FaGoogle,
} from "react-icons/fa6";

import {
  MdEmail,
  MdPhone,
  MdLocationOn,
} from "react-icons/md";

import { FiArrowRight } from "react-icons/fi";

function Footer() {
  const { isDarkMode } = useTheme();

  // =====================================================
  // PRODUCTS
  // =====================================================

  const products = [
    {
      name: "Plastic Components",
      href: "/products/plastic-components",
    },
    {
      name: "Rubber Components",
      href: "/products/rubber-components",
    },
    {
      name: "Gaskets",
      href: "/products/gaskets",
    },
    {
      name: "Automobile Parts",
      href: "/products/automobile-parts",
    },
    {
      name: "Electrical Parts",
      href: "/products/electrical-parts",
    },
  ];

  // =====================================================
  // INDUSTRIES
  // =====================================================

  const industries = [
    {
      name: "Automotive",
      href: "/industries/automotive",
    },
    {
      name: "Electrical",
      href: "/industries/electrical",
    },
    {
      name: "Agriculture",
      href: "/industries/agriculture",
    },
    {
      name: "Sanitaryware",
      href: "/industries/sanitaryware",
    },
  ];

  // =====================================================
  // COMPANY / QUICK LINKS
  // =====================================================

  const companyLinks = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "About Us",
      href: "/about",
    },
    {
      name: "Products",
      href: "/products",
    },
    {
      name: "Industries",
      href: "/industries",
    },
    {
      name: "Manufacturing Process",
      href: "/manufacturing-process",
    },
    {
      name: "Contact Us",
      href: "/contact",
    },
  ];

  // =====================================================
  // SOCIAL LINKS
  // =====================================================

  const socialLinks = [
    {
      name: "Instagram",
      href: "#",
      icon: <FaInstagram />,
    },
    {
      name: "Facebook",
      href: "#",
      icon: <FaFacebookF />,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/kalika-engineering---india/",
      icon: <FaLinkedinIn />,
    },
{
  name: "Google",
  href: "https://maps.app.goo.gl/fF7mGbbUauKLPRdw7",
  icon: <FaGoogle />,
},
  ];

  // =====================================================
  // THEME
  // =====================================================

  const footerBackground = isDarkMode
    ? "bg-black text-white"
    : "bg-white text-black";

  const headingColor = isDarkMode
    ? "text-white"
    : "text-black";

  const bodyColor = isDarkMode
    ? "text-white/60"
    : "text-black/60";

  const linkColor = isDarkMode
    ? "text-white/60 hover:text-[#FF6501]"
    : "text-black/60 hover:text-[#FF6501]";

  const borderColor = isDarkMode
    ? "border-white/10"
    : "border-black/10";

  const iconBackground = isDarkMode
    ? "border-white/10 bg-white/[0.04] text-white/70"
    : "border-black/10 bg-black/[0.03] text-black/70";

  const bottomBackground = isDarkMode
    ? "bg-[#050505]"
    : "bg-[#f7f7f7]";

  // =====================================================
  // FOOTER
  // =====================================================

  return (
    <footer
      className={`
        relative
        mt-6
        w-full
        overflow-hidden
        border-t
        transition-colors
        duration-500
        md:mt-10
        ${footerBackground}
      `}
    >
      {/* =====================================================
          ORANGE TOP LINE
      ====================================================== */}

      <div className="h-[3px] w-full bg-[#FF6501]" />

      {/* =====================================================
          MAIN FOOTER
      ====================================================== */}

      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10 xl:px-12">
        <div
          className="
            grid
            grid-cols-1
            gap-12
            py-14

            sm:grid-cols-2
            sm:gap-x-8
            sm:gap-y-14

            lg:grid-cols-[repeat(4,minmax(0,1fr))]
            lg:gap-x-8
            lg:gap-y-12
            lg:py-16

            xl:gap-x-10
          "
        >
          {/* =================================================
              COLUMN 1 — BRAND
          ================================================== */}

          <div className="min-w-0">
            {/* LOGO */}

            <Link
              href="/"
              className="
                group
                mb-6
                inline-flex
                max-w-full
                items-center
              "
            >
              <div
                className="
                  relative
                  flex
                  h-[64px]
                  w-[175px]
                  max-w-full
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-xl
                  border-2
                  border-black
                  bg-white
                  px-3
                  py-2
                  shadow-sm
                  transition-all
                  duration-300
                  group-hover:-translate-y-1
                  group-hover:shadow-md
                "
              >
                <Image
                  src={assets.kalika}
                  alt="Kalika Engineering"
                  width={200}
                  height={70}
                 
                  sizes="
                    (max-width: 640px) 150px,
                    (max-width: 1024px) 160px,
                    175px
                  "
                  className="
                    block
                    h-auto
                    w-auto
                    max-h-[50px]
                    max-w-[155px]
                    object-contain
                    transition-transform
                    duration-300
                    group-hover:scale-[1.02]
                  "
                />
              </div>
            </Link>

            {/* DESCRIPTION */}

            <p
              className={`
                max-w-[300px]
                text-[13px]
                leading-6
                transition-colors
                duration-500
                ${bodyColor}
              `}
            >
              Kalika Engineering manufactures high-quality
              plastic and rubber components designed for
              precision, reliability and long-term industrial
              performance.
            </p>

            {/* ORANGE LINE */}

            <div
              className="
                mt-6
                h-[2px]
                w-10
                bg-[#FF6501]
                transition-all
                duration-500
                hover:w-20
              "
            />

            {/* SOCIAL */}

            <div className="mt-6 flex flex-wrap items-center gap-2.5">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className={`
                    flex
                    h-9
                    w-9
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    transition-all
                    duration-300

                    hover:-translate-y-1
                    hover:border-[#FF6501]
                    hover:bg-[#FF6501]
                    hover:text-white

                    hover:shadow-[0_8px_25px_rgba(255,101,1,0.20)]

                    ${iconBackground}
                  `}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* =================================================
              COLUMN 2 — PRODUCTS
          ================================================== */}

          <div className="min-w-0">
            <h3
              className={`
                relative
                mb-7
                inline-block
                text-[15px]
                font-bold
                uppercase
                tracking-[0.08em]
                ${headingColor}
              `}
            >
              Products

              <span
                className="
                  absolute
                  -bottom-2.5
                  left-0
                  h-[2px]
                  w-8
                  bg-[#FF6501]
                "
              />
            </h3>

            <ul className="space-y-3">
              {products.map((product) => (
                <li key={product.name}>
                  <Link
                    href={product.href}
                    className={`
                      group
                      inline-flex
                      max-w-full
                      items-start
                      gap-2.5
                      text-[13px]
                      leading-5
                      transition-all
                      duration-300
                      hover:translate-x-1
                      ${linkColor}
                    `}
                  >
                    <span
                      className="
                        mt-[7px]
                        h-[5px]
                        w-[5px]
                        shrink-0
                        rounded-full
                        bg-[#FF6501]
                        opacity-70
                        transition-all
                        duration-300
                        group-hover:scale-150
                        group-hover:opacity-100
                      "
                    />

                    <span className="min-w-0 break-words">
                      {product.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* =================================================
              COLUMN 3 — QUICK LINKS + INDUSTRIES
          ================================================== */}

          <div className="min-w-0">
            <h3
              className={`
                relative
                mb-7
                inline-block
                text-[15px]
                font-bold
                uppercase
                tracking-[0.08em]
                ${headingColor}
              `}
            >
              Quick Links

              <span
                className="
                  absolute
                  -bottom-2.5
                  left-0
                  h-[2px]
                  w-8
                  bg-[#FF6501]
                "
              />
            </h3>

            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={`
                      group
                      inline-flex
                      max-w-full
                      items-start
                      gap-2.5
                      text-[13px]
                      leading-5
                      transition-all
                      duration-300
                      hover:translate-x-1
                      ${linkColor}
                    `}
                  >
                    <span
                      className="
                        mt-[7px]
                        h-[5px]
                        w-[5px]
                        shrink-0
                        rounded-full
                        bg-[#FF6501]
                        opacity-70
                        transition-all
                        duration-300
                        group-hover:scale-150
                        group-hover:opacity-100
                      "
                    />

                    <span className="min-w-0 break-words">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            {/* INDUSTRIES */}

            <div className="mt-9">
              <h4
                className={`
                  mb-4
                  text-[11px]
                  font-bold
                  uppercase
                  tracking-[0.18em]
                  ${
                    isDarkMode
                      ? "text-white/75"
                      : "text-black/70"
                  }
                `}
              >
                Industries
              </h4>

              <div
                className="
                  grid
                  grid-cols-2
                  gap-x-4
                  gap-y-3
                "
              >
                {industries.map((industry) => (
                  <Link
                    key={industry.name}
                    href={industry.href}
                    className={`
                      min-w-0
                      text-[12px]
                      leading-5
                      transition-colors
                      duration-300
                      ${linkColor}
                    `}
                  >
                    {industry.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* =================================================
              COLUMN 4 — CONTACT
          ================================================== */}

          <div className="min-w-0">
            <h3
              className={`
                relative
                mb-7
                inline-block
                text-[15px]
                font-bold
                uppercase
                tracking-[0.08em]
                ${headingColor}
              `}
            >
              Contact Information

              <span
                className="
                  absolute
                  -bottom-2.5
                  left-0
                  h-[2px]
                  w-8
                  bg-[#FF6501]
                "
              />
            </h3>

            <p
              className={`
                mb-6
                max-w-[300px]
                text-[13px]
                leading-6
                ${bodyColor}
              `}
            >
              Have a requirement for custom plastic or rubber
              components? Talk to our engineering team today.
            </p>

            {/* PHONE */}

            <a
              href="tel:+919873272496"
              className={`
                group
                mb-4
                flex
                min-w-0
                items-center
                gap-3
                transition-colors
                duration-300
                ${linkColor}
              `}
            >
              <span
                className={`
                  flex
                  h-9
                  w-9
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  border
                  transition-all
                  duration-300

                  group-hover:border-[#FF6501]
                  group-hover:bg-[#FF6501]
                  group-hover:text-white

                  ${iconBackground}
                `}
              >
                <MdPhone size={17} />
              </span>

              <span className="min-w-0 break-all text-[13px]">
                +91-9873272496
              </span>
            </a>

            {/* EMAIL */}

            <a
              href="mailto:info@kalikaengineering.in"
              className={`
                group
                mb-4
                flex
                min-w-0
                items-center
                gap-3
                transition-colors
                duration-300
                ${linkColor}
              `}
            >
              <span
                className={`
                  flex
                  h-9
                  w-9
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  border
                  transition-all
                  duration-300

                  group-hover:border-[#FF6501]
                  group-hover:bg-[#FF6501]
                  group-hover:text-white

                  ${iconBackground}
                `}
              >
                <MdEmail size={17} />
              </span>

              <span className="min-w-0 break-all text-[13px]">
                info@kalikaengineering.in
              </span>
            </a>

            {/* LOCATION */}

            <div
              className={`
                flex
                min-w-0
                items-start
                gap-3
                ${bodyColor}
              `}
            >
              <span
                className={`
                  flex
                  h-9
                  w-9
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  border
                  transition-all
                  duration-300

                  hover:border-[#FF6501]
                  hover:bg-[#FF6501]
                  hover:text-white

                  ${iconBackground}
                `}
              >
                <MdLocationOn size={18} />
              </span>

              <span className="min-w-0 text-[13px] leading-5">
                Gali No.8, Lane 3B, Kadipur Industrial Area,
                Gurgaon, Haryana - 122001
              </span>
            </div>

            {/* REQUEST QUOTE */}

            <Link
              href="/contact"
              className="
                group
                mt-7
                inline-flex
                items-center
                gap-2
                rounded-full
                bg-[#FF6501]
                px-5
                py-2.5
                text-[12px]
                font-bold
                uppercase
                tracking-wide
                text-white
                transition-all
                duration-300

                hover:-translate-y-1
                hover:bg-[#ff751f]
                hover:shadow-[0_10px_30px_rgba(255,101,1,0.25)]
              "
            >
              Request a Quote

              <FiArrowRight
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

      {/* =====================================================
          BOTTOM BAR
      ====================================================== */}

      <div
        className={`
          border-t
          transition-colors
          duration-500
          ${borderColor}
          ${bottomBackground}
        `}
      >
        <div
          className="
            mx-auto
            flex
            max-w-7xl
            flex-col
            gap-5
            px-5
            py-5

            sm:px-8

            md:flex-row
            md:items-center
            md:justify-between
            md:gap-x-16

            lg:px-10
            xl:px-12
          "
        >
          {/* COPYRIGHT */}

          <p
            className={`
              text-center
              text-[11px]
              leading-5
              md:text-left
              ${
                isDarkMode
                  ? "text-white/40"
                  : "text-black/45"
              }
            `}
          >
            © {new Date().getFullYear()} Kalika Engineering.
            All rights reserved.
          </p>

          {/* LEGAL LINKS */}

          <div
            className="
              flex
              flex-wrap
              items-center
              justify-center
              gap-5

              sm:gap-6

              md:ml-auto
              md:justify-end
            "
          >
            <Link
              href="/privacy-policy"
              className={`
                whitespace-nowrap
                text-[11px]
                transition-colors
                duration-300
                hover:text-[#FF6501]
                ${
                  isDarkMode
                    ? "text-white/40"
                    : "text-black/45"
                }
              `}
            >
              Privacy Policy
            </Link>

            <span
              className={`
                h-3
                w-px
                ${
                  isDarkMode
                    ? "bg-white/10"
                    : "bg-black/10"
                }
              `}
            />

            <Link
              href="/terms-and-conditions"
              className={`
                whitespace-nowrap
                text-[11px]
                transition-colors
                duration-300
                hover:text-[#FF6501]
                ${
                  isDarkMode
                    ? "text-white/40"
                    : "text-black/45"
                }
              `}
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
