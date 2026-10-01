"use client";

import { assets } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import {
FiChevronDown,
FiPhone,
FiMenu,
FiX,
FiArrowRight,
FiSun,
FiMoon,
} from "react-icons/fi";

import { useTheme } from "./ThemeProvider";

function Navbar() {
// =========================================================
// THEME
// =========================================================

const { isDarkMode, toggleTheme } = useTheme();

// =========================================================
// STATES
// =========================================================

const [isMenuOpen, setIsMenuOpen] = useState(false);

const [isProductsOpen, setIsProductsOpen] = useState(false);
const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);

const [isMobileProductsOpen, setIsMobileProductsOpen] =
useState(false);

const [isMobileIndustriesOpen, setIsMobileIndustriesOpen] =
useState(false);

const [isScrolled, setIsScrolled] = useState(false);

const pathname = usePathname();

const productsRef = useRef(null);
const industriesRef = useRef(null);

// =========================================================
// PRODUCTS
// =========================================================

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

// =========================================================
// INDUSTRIES
// =========================================================

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

// =========================================================
// MAIN NAV LINKS
// =========================================================

const navLinks = [
{
name: "Home",
href: "/",
},
{
name: "About Us",
href: "/about",
},
];

// =========================================================
// ACTIVE LINK
// =========================================================

const isActive = (href) =>
href === "/"
? pathname === "/"
: pathname?.startsWith(href);

// =========================================================
// SCROLL EFFECT
// =========================================================

useEffect(() => {
const handleScroll = () => {
setIsScrolled(window.scrollY > 12);
};


handleScroll();

window.addEventListener("scroll", handleScroll, {
  passive: true,
});

return () => {
  window.removeEventListener("scroll", handleScroll);
};


}, []);

// =========================================================
// OUTSIDE CLICK + ESCAPE
// =========================================================

useEffect(() => {
const handleClickOutside = (event) => {
if (
productsRef.current &&
!productsRef.current.contains(event.target)
) {
setIsProductsOpen(false);
}


  if (
    industriesRef.current &&
    !industriesRef.current.contains(event.target)
  ) {
    setIsIndustriesOpen(false);
  }
};

const handleEscape = (event) => {
  if (event.key === "Escape") {
    setIsProductsOpen(false);
    setIsIndustriesOpen(false);
    setIsMenuOpen(false);
  }
};

document.addEventListener(
  "mousedown",
  handleClickOutside
);

document.addEventListener(
  "keydown",
  handleEscape
);

return () => {
  document.removeEventListener(
    "mousedown",
    handleClickOutside
  );

  document.removeEventListener(
    "keydown",
    handleEscape
  );
};


}, []);

// =========================================================
// PREVENT BODY SCROLL
// =========================================================

useEffect(() => {
document.body.style.overflow = isMenuOpen
? "hidden"
: "";


return () => {
  document.body.style.overflow = "";
};


}, [isMenuOpen]);

// =========================================================
// CLOSE MOBILE MENU
// =========================================================

const closeMenu = () => {
setIsMenuOpen(false);
setIsMobileProductsOpen(false);
setIsMobileIndustriesOpen(false);
};

// =========================================================
// DROPDOWN TOGGLES
// =========================================================

const toggleProducts = () => {
setIsProductsOpen((prev) => !prev);
setIsIndustriesOpen(false);
};

const toggleIndustries = () => {
setIsIndustriesOpen((prev) => !prev);
setIsProductsOpen(false);
};

// =========================================================
// NAV TEXT CLASS
// =========================================================

const navTextClass = (active) => `
group
relative
inline-flex
items-center


font-heading
text-[13px]
font-medium
tracking-[0.01em]

lg:text-[14px]
xl:text-[15px]

transition-colors
duration-300

${
  active
    ? "text-brand-orange"
    : isDarkMode
      ? "text-brand-white/90 hover:text-brand-orange"
      : "text-brand-black/85 hover:text-brand-orange"
}


`;

// =========================================================
// DESKTOP UNDERLINE
// =========================================================

const navUnderline = `
after:absolute
after:left-0
after:right-0
after:-bottom-[5px]
after:h-[2px]

after:origin-left
after:rounded-full

after:bg-brand-orange

after:transition-transform
after:duration-300
after:ease-out


`;

// =========================================================
// DROPDOWN ITEM CLASS
// =========================================================

const dropdownItemClass = `
group
flex
items-center
justify-between


rounded-lg

px-3
py-2

font-body
text-[13px]

transition-all
duration-200

${
  isDarkMode
    ? `
      text-brand-white/75
      hover:bg-brand-white/10
      hover:text-brand-white
    `
    : `
      text-brand-black/75
      hover:bg-brand-black
      hover:text-brand-white
    `
}


`;

return (
<>
{/* =====================================================
NAVBAR
====================================================== */}


  <header
    className={`
      fixed
      left-0
      top-0
      z-50
      w-full

      border-b

      transition-all
      duration-500
      ease-out

      ${
        isDarkMode
          ? `
            border-brand-white/10
            bg-brand-black

            ${
              isScrolled
                ? `
                  border-brand-white/20
                  shadow-[0_8px_32px_rgba(255,255,255,0.08)]
                `
                : `
                  shadow-[0_8px_30px_rgba(0,0,0,0.18)]
                `
            }
          `
          : `
            border-brand-black/10
            bg-brand-white

            ${
              isScrolled
                ? `
                  border-brand-black/15
                  shadow-[0_8px_30px_rgba(0,0,0,0.10)]
                `
                : `
                  shadow-[0_8px_30px_rgba(0,0,0,0.05)]
                `
            }
          `
      }
    `}
  >
    <nav
      className="
        mx-auto
        flex
        h-[66px]
        w-full
        max-w-7xl
        items-center
        justify-between

        px-3

        sm:h-[68px]
        sm:px-4

        md:grid
        md:h-[70px]
        md:grid-cols-[1fr_auto_1fr]
        md:px-6

        lg:h-[72px]
        lg:px-8
      "
    >
      {/* =================================================
          LOGO
      ================================================== */}

      <Link
        href="/"
        aria-label="Kalika Engineering Home"
        onClick={closeMenu}
        className="
          group
          flex
          min-w-0
          shrink-0
          items-center
          gap-1

          md:justify-self-start
        "
      >
        <div
          className={`
            flex
            h-9
            w-[68px]
            shrink-0
            items-center
            justify-center
            overflow-hidden
            rounded-md

            transition-all
            duration-300

            sm:h-10
            sm:w-[76px]

            ${
              isDarkMode
                ? "bg-white"
                : "bg-transparent"
            }
          `}
        >
          <Image
            src={assets.kalika}
            alt="Kalika Engineering"
            width={200}
            height={70}
            priority
            sizes="100px"
            className="
              block
              h-auto
              w-full
              max-h-full
              object-contain

              transition-transform
              duration-300

              group-hover:scale-[1.02]
            "
          />
        </div>

        <span className="flex min-w-0 flex-col leading-none">
          <span
            className={`
              font-heading
              text-[15px]
              font-extrabold
              tracking-tight

              transition-colors
              duration-300

              sm:text-[16px]

              ${
                isDarkMode
                  ? "text-brand-white"
                  : "text-brand-black"
              }
            `}
          >
            KALIKA
          </span>

          <span
            className="
              font-heading
              text-[8px]
              font-semibold
              tracking-[0.2em]
              text-brand-orange

              sm:text-[9px]
            "
          >
            ENGINEERING
          </span>
        </span>
      </Link>

      {/* =================================================
          DESKTOP NAVIGATION
      ================================================== */}

      <ul
        className="
          hidden
          items-center

          gap-4

          font-heading

          md:flex
          lg:gap-5
          xl:gap-6
        "
      >
        {/* =================================================
            HOME + ABOUT
        ================================================== */}

        {navLinks.map((link) => {
          const active = isActive(link.href);

          return (
            <li key={link.name}>
              <Link
                href={link.href}
                className={`
                  ${navTextClass(active)}
                  ${navUnderline}

                  ${
                    active
                      ? "after:scale-x-100"
                      : "after:scale-x-0 hover:after:scale-x-100"
                  }

                  py-2
                `}
              >
                {link.name}
              </Link>
            </li>
          );
        })}

        {/* =================================================
            PRODUCTS
        ================================================== */}

        <li
          ref={productsRef}
          className="
            relative
            flex
            items-center
          "
        >
          <div
            className={`
              flex
              items-center
              gap-[5px]
              rounded-md
              py-2
            `}
          >
            {/* Products Text */}

            <Link
              href="/products"
              className={`
                ${navTextClass(
                  isActive("/products")
                )}

                ${navUnderline}

                ${
                  isActive("/products")
                    ? "after:scale-x-100"
                    : "after:scale-x-0 hover:after:scale-x-100"
                }
              `}
            >
              Products
            </Link>

            {/* Products Arrow */}

            <button
              type="button"
              onClick={toggleProducts}
              aria-label="Toggle Products menu"
              aria-expanded={isProductsOpen}
              className={`
                flex
                h-6
                w-6
                cursor-pointer
                items-center
                justify-center

                rounded-full

                transition-all
                duration-200

                ${
                  isDarkMode
                    ? `
                      text-brand-white/75
                      hover:bg-brand-white/10
                      hover:text-brand-orange
                    `
                    : `
                      text-brand-black/75
                      hover:bg-brand-black/5
                      hover:text-brand-orange
                    `
                }
              `}
            >
              <FiChevronDown
                size={14}
                strokeWidth={2.3}
                className={`
                  transition-transform
                  duration-300
                  ease-out

                  ${
                    isProductsOpen
                      ? "rotate-180 text-brand-orange"
                      : ""
                  }
                `}
              />
            </button>
          </div>

          {/* Products Dropdown */}

          <div
            className={`
              absolute
              left-1/2
              top-full

              mt-3

              w-[250px]

              -translate-x-1/2

              origin-top

              rounded-xl
              border
              p-1.5

              shadow-[0_20px_50px_rgba(0,0,0,0.16)]

              transition-all
              duration-300
              ease-[cubic-bezier(0.22,1,0.36,1)]

              ${
                isDarkMode
                  ? `
                    border-brand-white/10
                    bg-brand-black
                  `
                  : `
                    border-brand-black/10
                    bg-brand-white
                  `
              }

              ${
                isProductsOpen
                  ? `
                    visible
                    pointer-events-auto
                    translate-y-0
                    scale-100
                    opacity-100
                  `
                  : `
                    invisible
                    pointer-events-none
                    -translate-y-2
                    scale-[0.96]
                    opacity-0
                  `
              }
            `}
          >
            {products.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() =>
                  setIsProductsOpen(false)
                }
                className={dropdownItemClass}
              >
                <span>{item.name}</span>

                <FiArrowRight
                  size={13}
                  className="
                    shrink-0
                    text-brand-orange/45

                    transition-all
                    duration-200

                    group-hover:translate-x-1
                    group-hover:text-brand-orange
                  "
                />
              </Link>
            ))}
          </div>
        </li>

        {/* =================================================
            INDUSTRIES
        ================================================== */}

        <li
          ref={industriesRef}
          className="
            relative
            flex
            items-center
          "
        >
          <div
            className="
              flex
              items-center
              gap-[5px]
              rounded-md
              py-2
            "
          >
            {/* Industries Text */}

            <Link
              href="/industries"
              className={`
                ${navTextClass(
                  isActive("/industries")
                )}

                ${navUnderline}

                ${
                  isActive("/industries")
                    ? "after:scale-x-100"
                    : "after:scale-x-0 hover:after:scale-x-100"
                }
              `}
            >
              Industries
            </Link>

            {/* Industries Arrow */}

            <button
              type="button"
              onClick={toggleIndustries}
              aria-label="Toggle Industries menu"
              aria-expanded={isIndustriesOpen}
              className={`
                flex
                h-6
                w-6
                cursor-pointer
                items-center
                justify-center

                rounded-full

                transition-all
                duration-200

                ${
                  isDarkMode
                    ? `
                      text-brand-white/75
                      hover:bg-brand-white/10
                      hover:text-brand-orange
                    `
                    : `
                      text-brand-black/75
                      hover:bg-brand-black/5
                      hover:text-brand-orange
                    `
                }
              `}
            >
              <FiChevronDown
                size={14}
                strokeWidth={2.3}
                className={`
                  transition-transform
                  duration-300
                  ease-out

                  ${
                    isIndustriesOpen
                      ? "rotate-180 text-brand-orange"
                      : ""
                  }
                `}
              />
            </button>
          </div>

          {/* Industries Dropdown */}

          <div
            className={`
              absolute
              left-1/2
              top-full

              mt-3

              w-[220px]

              -translate-x-1/2

              origin-top

              rounded-xl
              border
              p-1.5

              shadow-[0_20px_50px_rgba(0,0,0,0.16)]

              transition-all
              duration-300
              ease-[cubic-bezier(0.22,1,0.36,1)]

              ${
                isDarkMode
                  ? `
                    border-brand-white/10
                    bg-brand-black
                  `
                  : `
                    border-brand-black/10
                    bg-brand-white
                  `
              }

              ${
                isIndustriesOpen
                  ? `
                    visible
                    pointer-events-auto
                    translate-y-0
                    scale-100
                    opacity-100
                  `
                  : `
                    invisible
                    pointer-events-none
                    -translate-y-2
                    scale-[0.96]
                    opacity-0
                  `
              }
            `}
          >
            {industries.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() =>
                  setIsIndustriesOpen(false)
                }
                className={dropdownItemClass}
              >
                <span>{item.name}</span>

                <FiArrowRight
                  size={13}
                  className="
                    shrink-0
                    text-brand-orange/45

                    transition-all
                    duration-200

                    group-hover:translate-x-1
                    group-hover:text-brand-orange
                  "
                />
              </Link>
            ))}
          </div>
        </li>

        {/* =================================================
            MANUFACTURING
        ================================================== */}

        <li>
          <Link
            href="/manufacturing-process"
            className={`
              ${navTextClass(
                isActive(
                  "/manufacturing-process"
                )
              )}

              ${navUnderline}

              ${
                isActive(
                  "/manufacturing-process"
                )
                  ? "after:scale-x-100"
                  : "after:scale-x-0 hover:after:scale-x-100"
              }

              py-2
            `}
          >
            Manufacturing
          </Link>
        </li>

        {/* =================================================
            CONTACT
        ================================================== */}

        <li>
          <Link
            href="/contact"
            className={`
              ${navTextClass(
                isActive("/contact")
              )}

              ${navUnderline}

              ${
                isActive("/contact")
                  ? "after:scale-x-100"
                  : "after:scale-x-0 hover:after:scale-x-100"
              }

              py-2
            `}
          >
            Contact
          </Link>
        </li>
      </ul>

      {/* =================================================
          RIGHT ACTIONS
      ================================================== */}

      <div
        className="
          ml-auto
          flex
          shrink-0
          items-center
          justify-end
          gap-2

          md:ml-0
          md:justify-self-end

          lg:gap-2.5
        "
      >
        {/* =================================================
            THEME TOGGLE
        ================================================== */}

        <button
          type="button"
          onClick={toggleTheme}
          aria-label={
            isDarkMode
              ? "Switch to light mode"
              : "Switch to dark mode"
          }
          aria-pressed={isDarkMode}
          className={`
            flex
            h-9
            w-9
            shrink-0
            cursor-pointer
            items-center
            justify-center

            rounded-full
            border

            transition-all
            duration-300

            sm:h-10
            sm:w-10

            ${
              isDarkMode
                ? `
                  border-brand-white/15
                  bg-white
                  text-brand-black

                  hover:border-brand-orange
                `
                : `
                  border-brand-black
                  bg-brand-black
                  text-brand-white

                  hover:border-brand-orange
                `
            }
          `}
        >
          <FiSun
            aria-hidden="true"
            size={17}
            strokeWidth={2.2}
            className={
              isDarkMode
                ? "block"
                : "hidden"
            }
          />

          <FiMoon
            aria-hidden="true"
            size={17}
            strokeWidth={2.2}
            className={
              isDarkMode
                ? "hidden"
                : "block"
            }
          />
        </button>

        {/* =================================================
            DESKTOP CTA
        ================================================== */}

        <Link
          href="/contact"
          className="
            hidden
            items-center
            gap-2

            rounded-full

            bg-brand-orange

            px-3.5
            py-2.5

            font-heading
            text-[13px]
            font-semibold
            text-brand-white

            shadow-[0_8px_20px_rgba(255,101,1,0.16)]

            transition-all
            duration-300

            hover:-translate-y-0.5
            hover:bg-brand-black
            hover:shadow-[0_12px_24px_rgba(0,0,0,0.16)]

            md:flex
            lg:px-4
        "
        >
          <FiPhone
            size={14}
            strokeWidth={2.25}
          />

          Request a Quote
        </Link>

        {/* =================================================
            MOBILE MENU BUTTON
        ================================================== */}

        <button
          type="button"
          onClick={() => setIsMenuOpen(true)}
          aria-label="Open navigation menu"
          aria-expanded={isMenuOpen}
          className="
            flex
            h-10
            w-10
            shrink-0
            cursor-pointer
            items-center
            justify-center

            rounded-full

            bg-brand-orange
            text-brand-white

            shadow-[0_8px_20px_rgba(255,101,1,0.16)]

            transition-all
            duration-300

            hover:-translate-y-0.5
            hover:bg-brand-black

            md:hidden
          "
        >
          <FiMenu
            size={19}
            strokeWidth={2.25}
          />
        </button>
      </div>
    </nav>
  </header>

  {/* =====================================================
      MOBILE OVERLAY
  ====================================================== */}

  <div
    onClick={closeMenu}
    className={`
      fixed
      inset-0
      z-[60]

      bg-brand-black/50
      backdrop-blur-[3px]

      transition-opacity
      duration-300

      md:hidden

      ${
        isMenuOpen
          ? "visible opacity-100"
          : "invisible pointer-events-none opacity-0"
      }
    `}
  />

  {/* =====================================================
      MOBILE SIDE MENU
  ====================================================== */}

  <aside
    aria-hidden={!isMenuOpen}
    className={`
      fixed
      right-0
      top-0
      z-[70]

      h-[100dvh]
      w-[320px]
      max-w-[90vw]

      border-l

      shadow-[-24px_0_60px_rgba(0,0,0,0.24)]

      transition-transform
      duration-500
      ease-[cubic-bezier(0.22,1,0.36,1)]

      md:hidden

      ${
        isDarkMode
          ? `
            border-brand-white/10
            bg-brand-black
          `
          : `
            border-brand-black/10
            bg-brand-white
          `
      }

      ${
        isMenuOpen
          ? "translate-x-0"
          : "translate-x-full"
      }
    `}
  >
    {/* =================================================
        MOBILE HEADER
    ================================================== */}

    <div
      className={`
        flex
        h-[76px]
        items-center
        justify-between

        border-b

        px-4

        sm:px-5

        ${
          isDarkMode
            ? "border-brand-white/10"
            : "border-brand-black/10"
        }
      `}
    >
      {/* Mobile Logo */}

      <Link
        href="/"
        onClick={closeMenu}
        className="
          flex
          cursor-pointer
          items-center
          gap-1
        "
      >
        <Image
          src={assets.kalika}
          alt="Kalika Engineering"
          width={40}
          height={40}
          className="
            h-9
            w-9
            rounded-md
            object-contain
          "
        />

        <span className="flex flex-col leading-none">
          <span
            className={`
              font-heading
              text-[15px]
              font-extrabold

              ${
                isDarkMode
                  ? "text-brand-white"
                  : "text-brand-black"
              }
            `}
          >
            KALIKA
          </span>

          <span
            className="
              font-heading
              text-[8px]
              font-semibold
              tracking-[0.2em]
              text-brand-orange
            "
          >
            ENGINEERING
          </span>
        </span>
      </Link>

      {/* Mobile Header Actions */}

      <div className="flex shrink-0 items-center gap-2">
        {/* Theme */}

        <button
          type="button"
          onClick={toggleTheme}
          aria-label={
            isDarkMode
              ? "Switch to light mode"
              : "Switch to dark mode"
          }
          className={`
            flex
            h-10
            w-10
            shrink-0
            cursor-pointer
            items-center
            justify-center

            rounded-full
            border

            transition-colors
            duration-300

            ${
              isDarkMode
                ? `
                  border-brand-white/10
                  bg-white
                  text-brand-black
                `
                : `
                  border-brand-black
                  bg-brand-black
                  text-brand-white
                `
            }
          `}
        >
          <FiSun
            aria-hidden="true"
            size={17}
            strokeWidth={2.2}
            className={
              isDarkMode
                ? "block"
                : "hidden"
            }
          />

          <FiMoon
            aria-hidden="true"
            size={17}
            strokeWidth={2.2}
            className={
              isDarkMode
                ? "hidden"
                : "block"
            }
          />
        </button>

        {/* Close */}

        <button
          type="button"
          onClick={closeMenu}
          aria-label="Close navigation menu"
          className={`
            flex
            h-10
            w-10
            shrink-0
            cursor-pointer
            items-center
            justify-center

            rounded-full

            transition-all
            duration-300

            ${
              isDarkMode
                ? `
                  bg-brand-white/10
                  text-brand-white

                  hover:bg-brand-orange
                `
                : `
                  bg-brand-black/5
                  text-brand-black

                  hover:bg-brand-orange
                  hover:text-brand-white
                `
            }
          `}
        >
          <FiX size={19} />
        </button>
      </div>
    </div>

    {/* =================================================
        MOBILE NAV CONTENT
    ================================================== */}

    <div
      className="
        h-[calc(100dvh-76px)]

        overflow-y-auto
        overscroll-contain

        px-4
        py-5

        sm:px-5
        sm:py-6
      "
    >
      <ul
        className="
          space-y-1

          font-heading
          text-[15px]
          font-medium
        "
      >
        {/* =================================================
            HOME + ABOUT
        ================================================== */}

        {navLinks.map((link) => {
          const active = isActive(link.href);

          return (
            <li key={link.name}>
              <Link
                href={link.href}
                onClick={closeMenu}
                className={`
                  group
                  relative
                  flex
                  items-center
                  justify-between

                  rounded-xl

                  px-4
                  py-3.5

                  transition-all
                  duration-300

                  ${
                    active
                      ? "text-brand-orange"
                      : isDarkMode
                        ? `
                          text-brand-white/90
                          hover:bg-brand-white/5
                          hover:text-brand-orange
                        `
                        : `
                          text-brand-black/85
                          hover:bg-brand-black/5
                          hover:text-brand-orange
                        `
                  }
                `}
              >
                {link.name}

                <span
                  className={`
                    absolute
                    bottom-2.5
                    left-4

                    h-[2px]

                    rounded-full
                    bg-brand-orange

                    transition-all
                    duration-300

                    ${
                      active
                        ? "w-8"
                        : "w-0 group-hover:w-8"
                    }
                  `}
                />
              </Link>
            </li>
          );
        })}

        {/* =================================================
            MOBILE PRODUCTS
        ================================================== */}

        <li>
          <div className="flex w-full items-center">
            <Link
              href="/products"
              onClick={closeMenu}
              className={`
                group
                relative
                flex
                flex-1
                items-center

                rounded-xl

                px-4
                py-3.5

                transition-all
                duration-300

                ${
                  isActive("/products")
                    ? "text-brand-orange"
                    : isDarkMode
                      ? `
                        text-brand-white/90
                        hover:bg-brand-white/5
                        hover:text-brand-orange
                      `
                      : `
                        text-brand-black/85
                        hover:bg-brand-black/5
                        hover:text-brand-orange
                      `
                }
              `}
            >
              Products

              <span
                className={`
                  absolute
                  bottom-2.5
                  left-4

                  h-[2px]

                  rounded-full
                  bg-brand-orange

                  transition-all
                  duration-300

                  ${
                    isActive("/products")
                      ? "w-8"
                      : "w-0 group-hover:w-8"
                  }
                `}
              />
            </Link>

            <button
              type="button"
              onClick={() =>
                setIsMobileProductsOpen(
                  (prev) => !prev
                )
              }
              aria-label="Toggle Products menu"
              aria-expanded={
                isMobileProductsOpen
              }
              className={`
                flex
                h-12
                w-12
                shrink-0
                cursor-pointer
                items-center
                justify-center

                rounded-xl

                ${
                  isDarkMode
                    ? `
                      text-brand-white/80
                      hover:bg-brand-white/5
                    `
                    : `
                      text-brand-black/80
                      hover:bg-brand-black/5
                    `
                }
              `}
            >
              <FiChevronDown
                size={17}
                className={`
                  transition-transform
                  duration-300

                  ${
                    isMobileProductsOpen
                      ? "rotate-180 text-brand-orange"
                      : ""
                  }
                `}
              />
            </button>
          </div>

          {/* Product List */}

          <div
            className={`
              grid
              overflow-hidden

              transition-[grid-template-rows,opacity]
              duration-300
              ease-out

              ${
                isMobileProductsOpen
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }
            `}
          >
            <div className="min-h-0">
              <div
                className={`
                  ml-3
                  mt-1
                  space-y-1

                  border-l
                  pl-3

                  ${
                    isDarkMode
                      ? "border-brand-white/10"
                      : "border-brand-black/10"
                  }
                `}
              >
                {products.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={closeMenu}
                    className={`
                      group
                      flex
                      items-center
                      gap-2

                      rounded-lg

                      px-3
                      py-2.5

                      font-body
                      text-sm

                      transition-colors
                      duration-200

                      ${
                        isDarkMode
                          ? `
                            text-brand-white/65
                            hover:text-brand-orange
                          `
                          : `
                            text-brand-black/65
                            hover:text-brand-orange
                          `
                      }
                    `}
                  >
                    <span
                      className="
                        h-1
                        w-1
                        shrink-0

                        rounded-full

                        bg-brand-orange/50

                        transition-transform
                        duration-200

                        group-hover:scale-125
                      "
                    />

                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </li>

        {/* =================================================
            MOBILE INDUSTRIES
        ================================================== */}

        <li>
          <div className="flex w-full items-center">
            <Link
              href="/industries"
              onClick={closeMenu}
              className={`
                group
                relative
                flex
                flex-1
                items-center

                rounded-xl

                px-4
                py-3.5

                transition-all
                duration-300

                ${
                  isActive("/industries")
                    ? "text-brand-orange"
                    : isDarkMode
                      ? `
                        text-brand-white/90
                        hover:bg-brand-white/5
                        hover:text-brand-orange
                      `
                      : `
                        text-brand-black/85
                        hover:bg-brand-black/5
                        hover:text-brand-orange
                      `
                }
              `}
            >
              Industries

              <span
                className={`
                  absolute
                  bottom-2.5
                  left-4

                  h-[2px]

                  rounded-full
                  bg-brand-orange

                  transition-all
                  duration-300

                  ${
                    isActive("/industries")
                      ? "w-8"
                      : "w-0 group-hover:w-8"
                  }
                `}
              />
            </Link>

            <button
              type="button"
              onClick={() =>
                setIsMobileIndustriesOpen(
                  (prev) => !prev
                )
              }
              aria-label="Toggle Industries menu"
              aria-expanded={
                isMobileIndustriesOpen
              }
              className={`
                flex
                h-12
                w-12
                shrink-0
                cursor-pointer
                items-center
                justify-center

                rounded-xl

                ${
                  isDarkMode
                    ? `
                      text-brand-white/80
                      hover:bg-brand-white/5
                    `
                    : `
                      text-brand-black/80
                      hover:bg-brand-black/5
                    `
                }
              `}
            >
              <FiChevronDown
                size={17}
                className={`
                  transition-transform
                  duration-300

                  ${
                    isMobileIndustriesOpen
                      ? "rotate-180 text-brand-orange"
                      : ""
                  }
                `}
              />
            </button>
          </div>

          {/* Industry List */}

          <div
            className={`
              grid
              overflow-hidden

              transition-[grid-template-rows,opacity]
              duration-300
              ease-out

              ${
                isMobileIndustriesOpen
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }
            `}
          >
            <div className="min-h-0">
              <div
                className={`
                  ml-3
                  mt-1
                  space-y-1

                  border-l
                  pl-3

                  ${
                    isDarkMode
                      ? "border-brand-white/10"
                      : "border-brand-black/10"
                  }
                `}
              >
                {industries.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={closeMenu}
                    className={`
                      group
                      flex
                      items-center
                      gap-2

                      rounded-lg

                      px-3
                      py-2.5

                      font-body
                      text-sm

                      transition-colors
                      duration-200

                      ${
                        isDarkMode
                          ? `
                            text-brand-white/65
                            hover:text-brand-orange
                          `
                          : `
                            text-brand-black/65
                            hover:text-brand-orange
                          `
                      }
                    `}
                  >
                    <span
                      className="
                        h-1
                        w-1
                        shrink-0

                        rounded-full

                        bg-brand-orange/50

                        transition-transform
                        duration-200

                        group-hover:scale-125
                      "
                    />

                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </li>

        {/* =================================================
            MANUFACTURING
        ================================================== */}

        <li>
          <Link
            href="/manufacturing-process"
            onClick={closeMenu}
            className={`
              group
              relative
              flex
              items-center
              justify-between

              rounded-xl

              px-4
              py-3.5

              transition-all
              duration-300

              ${
                isActive(
                  "/manufacturing-process"
                )
                  ? "text-brand-orange"
                  : isDarkMode
                    ? `
                      text-brand-white/90
                      hover:bg-brand-white/5
                      hover:text-brand-orange
                    `
                    : `
                      text-brand-black/85
                      hover:bg-brand-black/5
                      hover:text-brand-orange
                    `
              }
            `}
          >
            Manufacturing Process

            <span
              className={`
                absolute
                bottom-2.5
                left-4

                h-[2px]

                rounded-full
                bg-brand-orange

                transition-all
                duration-300

                ${
                  isActive(
                    "/manufacturing-process"
                  )
                    ? "w-8"
                    : "w-0 group-hover:w-8"
                }
              `}
            />
          </Link>
        </li>

        {/* =================================================
            CONTACT
        ================================================== */}

        <li>
          <Link
            href="/contact"
            onClick={closeMenu}
            className={`
              group
              relative
              flex
              items-center
              justify-between

              rounded-xl

              px-4
              py-3.5

              transition-all
              duration-300

              ${
                isActive("/contact")
                  ? "text-brand-orange"
                  : isDarkMode
                    ? `
                      text-brand-white/90
                      hover:bg-brand-white/5
                      hover:text-brand-orange
                    `
                    : `
                      text-brand-black/85
                      hover:bg-brand-black/5
                      hover:text-brand-orange
                    `
              }
            `}
          >
            Contact

            <span
              className={`
                absolute
                bottom-2.5
                left-4

                h-[2px]

                rounded-full
                bg-brand-orange

                transition-all
                duration-300

                ${
                  isActive("/contact")
                    ? "w-8"
                    : "w-0 group-hover:w-8"
                }
              `}
            />
          </Link>
        </li>
      </ul>

      {/* =================================================
          MOBILE CTA
      ================================================== */}

      <div className="mt-6 px-1">
        <Link
          href="/contact"
          onClick={closeMenu}
          className="
            flex
            w-full
            items-center
            justify-center
            gap-2

            rounded-xl

            bg-brand-orange

            px-5
            py-3.5

            font-heading
            text-sm
            font-semibold
            text-brand-white

            shadow-[0_10px_24px_rgba(255,101,1,0.18)]

            transition-all
            duration-300

            hover:-translate-y-0.5
            hover:bg-brand-black
          "
        >
          <FiPhone size={16} />

          Request a Quote
        </Link>
      </div>
    </div>
  </aside>
</>


);
}

export default Navbar;
