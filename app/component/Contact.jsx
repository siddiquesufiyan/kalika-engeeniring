"use client";

import Faq from "./Faq";
import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock3,
  Building2,
  Send,
  ArrowUpRight,
} from "lucide-react";
import { useTheme } from "./ThemeProvider";

function Contact() {
  const { isDarkMode } = useTheme();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const sectionBg = isDarkMode
    ? "bg-brand-black"
    : "bg-brand-white";

  const primaryText = isDarkMode
    ? "text-brand-white"
    : "text-brand-black";

  const secondaryText = isDarkMode
    ? "text-brand-white/60"
    : "text-brand-black/55";

  const borderColor = isDarkMode
    ? "border-brand-white/30"
    : "border-brand-black/10";

  const cardBg = isDarkMode
    ? "bg-brand-black"
    : "bg-brand-white";

  const inputBg = isDarkMode
    ? "bg-brand-black"
    : "bg-[#fafafa]";

  const inputText = isDarkMode
    ? "text-brand-white"
    : "text-brand-black";

  const placeholderText = isDarkMode
    ? "placeholder:text-brand-white/35"
    : "placeholder:text-brand-black/35";

  // ================= FORM SUBMIT =================

  const handleSubmit = async (event) => {
    event.preventDefault();

    setIsSubmitting(true);
    setSubmitError("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    formData.append(
      "access_key",
      "92e18fae-5d08-46b5-b904-bc6595702324"
    );

    formData.append(
      "subject",
      "New Business Enquiry - Kalika Engineering"
    );

    formData.append(
      "from_name",
      "Kalika Engineering Website"
    );

    formData.append(
      "replyto",
      formData.get("email")
    );

    formData.append(
      "redirect",
      `${window.location.origin}/thank-you`
    );

    formData.append("botcheck", "");

    try {
      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      if (data.success) {
        form.reset();
        window.location.href = "/thank-you";
      } else {
        setSubmitError(
          data.message ||
            "Something went wrong. Please try again."
        );
      }
    } catch (error) {
      console.error("Web3Forms Error:", error);

      setSubmitError(
        "Unable to send your enquiry. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      className={`relative overflow-hidden py-16 transition-colors duration-300 sm:py-20 lg:py-24 ${sectionBg}`}
    >
      {/* ================= BACKGROUND DECORATION ================= */}

      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-brand-orange/5 blur-3xl" />

      <div
        className={`pointer-events-none absolute -right-40 bottom-20 h-80 w-80 rounded-full blur-3xl ${
          isDarkMode
            ? "bg-brand-white/[0.03]"
            : "bg-brand-black/[0.03]"
        }`}
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* ================= SECTION HEADER ================= */}

        <div className="mb-10 max-w-3xl sm:mb-14">

          <div className="mb-4 flex items-center gap-3">
            <span className="h-[2px] w-10 bg-brand-orange" />

            <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-orange sm:text-xs">
              Get In Touch
            </span>
          </div>

          <h2
            className={`text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl md:text-5xl ${primaryText}`}
          >
            Let&apos;s Discuss Your
            <span className="text-brand-orange">
              {" "}Component Requirement.
            </span>
          </h2>

          <p
            className={`mt-4 max-w-2xl text-sm leading-7 sm:text-base ${secondaryText}`}
          >
            Looking for reliable plastic or rubber components for your
            industrial application? Share your requirement with our team
            and let&apos;s discuss the right manufacturing solution.
          </p>

        </div>

        {/* ================= CONTACT + FORM ================= */}

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-10">

          {/* =====================================================
              LEFT — CONTACT DETAILS
          ====================================================== */}

          <div className="rounded-2xl bg-brand-black p-6 sm:p-8 md:p-10">

            {/* Heading */}

            <div className="mb-8">

              <div className="mb-3 flex items-center gap-2">

                <Building2
                  size={17}
                  className="text-brand-orange"
                />

                <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand-orange">
                  Contact Information
                </span>

              </div>

              <h3 className="text-2xl font-bold text-brand-white sm:text-3xl">
                Talk to Our Team
              </h3>

              <p className="mt-3 text-sm leading-6 text-brand-white/50">
                Connect with Kalika Engineering for OEM, industrial and
                custom plastic & rubber component requirements.
              </p>

            </div>

            {/* ================= CONTACT CARDS ================= */}

            <div className="space-y-3">

              {/* PHONE */}

              <a
                href="tel:+919873272496"
                className="group flex items-center gap-4 rounded-xl border border-brand-white/30 bg-brand-white/[0.035] p-4 transition-all duration-300 hover:border-brand-orange/50 hover:bg-brand-orange/10"
              >

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-brand-orange/10 text-brand-orange transition-all duration-300 group-hover:bg-brand-orange group-hover:text-brand-white">
                  <Phone size={19} />
                </div>

                <div className="min-w-0 flex-1">

                  <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-white/35">
                    Phone
                  </p>

                  <p className="mt-1 text-sm font-semibold text-brand-white transition-colors group-hover:text-brand-orange">
                    +91 9873272496 / +91 7250326821
                  </p>

                </div>

                <ArrowUpRight
                  size={16}
                  className="text-brand-white/20 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-orange"
                />

              </a>

              {/* EMAIL */}

              <a
                href="mailto:info@kalikaengineering.in"
                className="group flex items-center gap-4 rounded-xl border border-brand-white/30 bg-brand-white/[0.035] p-4 transition-all duration-300 hover:border-brand-orange/50 hover:bg-brand-orange/10"
              >

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-brand-orange/10 text-brand-orange transition-all duration-300 group-hover:bg-brand-orange group-hover:text-brand-white">
                  <Mail size={19} />
                </div>

                <div className="min-w-0 flex-1">

                  <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-white/35">
                    Email
                  </p>

                  <p className="mt-1 truncate text-sm font-semibold text-brand-white transition-colors group-hover:text-brand-orange">
                    info@kalikaengineering.in
                  </p>

                </div>

                <ArrowUpRight
                  size={16}
                  className="text-brand-white/20 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-orange"
                />

              </a>

              {/* ADDRESS */}

              <div className="flex items-start gap-4 rounded-xl border border-brand-white/30 bg-brand-white/[0.035] p-4">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-brand-orange/10 text-brand-orange">
                  <MapPin size={19} />
                </div>

                <div>

                  <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-white/35">
                    Visit Our Facility
                  </p>

                  <p className="mt-1 text-sm font-medium leading-6 text-brand-white/80">
                    Gali No.8, Lane 3B,
                    <br />
                    Kadipur Industrial Area,
                    <br />
                    Gurgaon, Haryana - 122001
                  </p>

                </div>

              </div>

              {/* BUSINESS HOURS */}

              <div className="flex items-start gap-4 rounded-xl border border-brand-white/30 bg-brand-white/[0.035] p-4">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-brand-orange/10 text-brand-orange">
                  <Clock3 size={19} />
                </div>

                <div>

                  <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-white/35">
                    Business Hours
                  </p>

                  <p className="mt-1 text-sm font-medium leading-6 text-brand-white/80">
                    Monday – Saturday
                    <br />
                    9:00 AM – 6:00 PM
                  </p>

                </div>

              </div>

            </div>

            {/* ================= BOTTOM HIGHLIGHT ================= */}

            <div className="mt-8 border-t border-brand-white/30 pt-6">

              <div className="flex items-center gap-3">

                <span className="h-2 w-2 rounded-full bg-brand-orange shadow-[0_0_12px_#ff6501]" />

                <p className="text-xs font-medium text-brand-white/50">
                  OEM & Custom Component Enquiries
                </p>

              </div>

              <p className="mt-3 text-sm leading-6 text-brand-white/70">
                Share your drawing, specification, material requirement,
                quantity or application details with our team.
              </p>

            </div>

          </div>

          {/* =====================================================
              RIGHT — ENQUIRY FORM
          ====================================================== */}

          <div
            className={`
              rounded-2xl border p-6 shadow-xl
              transition-colors duration-300
              sm:p-8 md:p-10
              ${borderColor}
              ${cardBg}
            `}
          >

            {/* Form Heading */}

            <div className="mb-8">

              <div className="mb-3 flex items-center gap-2">

                <span className="h-2 w-2 rounded-full bg-brand-orange" />

                <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand-orange">
                  Business Enquiry
                </span>

              </div>

              <h3
                className={`text-2xl font-bold sm:text-3xl ${primaryText}`}
              >
                Request a Quote
              </h3>

              <p
                className={`mt-2 text-sm leading-6 ${secondaryText}`}
              >
                Fill in your details and tell us what you need. Our team
                will review your requirement and get in touch.
              </p>

            </div>

            {/* ================= FORM ================= */}

            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >

              {/* NAME + COMPANY */}

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

                <div>

                  <label
                    htmlFor="fullName"
                    className={`mb-2 block text-xs font-bold ${primaryText}`}
                  >
                    Full Name
                  </label>

                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    placeholder="Your full name"
                    required
                    className={`
                      h-12 w-full rounded-lg border px-4 text-sm
                      outline-none transition-all
                      focus:border-brand-orange
                      focus:ring-4 focus:ring-brand-orange/10
                      ${borderColor}
                      ${inputBg}
                      ${inputText}
                      ${placeholderText}
                    `}
                  />

                </div>

                <div>

                  <label
                    htmlFor="businessName"
                    className={`mb-2 block text-xs font-bold ${primaryText}`}
                  >
                    Business Name
                  </label>

                  <input
                    id="businessName"
                    name="businessName"
                    type="text"
                    placeholder="Company name"
                    required
                    className={`
                      h-12 w-full rounded-lg border px-4 text-sm
                      outline-none transition-all
                      focus:border-brand-orange
                      focus:ring-4 focus:ring-brand-orange/10
                      ${borderColor}
                      ${inputBg}
                      ${inputText}
                      ${placeholderText}
                    `}
                  />

                </div>

              </div>

              {/* EMAIL + PHONE */}

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

                <div>

                  <label
                    htmlFor="email"
                    className={`mb-2 block text-xs font-bold ${primaryText}`}
                  >
                    Business Email
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@company.com"
                    required
                    className={`
                      h-12 w-full rounded-lg border px-4 text-sm
                      outline-none transition-all
                      focus:border-brand-orange
                      focus:ring-4 focus:ring-brand-orange/10
                      ${borderColor}
                      ${inputBg}
                      ${inputText}
                      ${placeholderText}
                    `}
                  />

                </div>

                <div>

                  <label
                    htmlFor="phone"
                    className={`mb-2 block text-xs font-bold ${primaryText}`}
                  >
                    Phone Number
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    required
                    className={`
                      h-12 w-full rounded-lg border px-4 text-sm
                      outline-none transition-all
                      focus:border-brand-orange
                      focus:ring-4 focus:ring-brand-orange/10
                      ${borderColor}
                      ${inputBg}
                      ${inputText}
                      ${placeholderText}
                    `}
                  />

                </div>

              </div>

              {/* SERVICE */}
<div>
  <label
    htmlFor="service"
    className={`mb-2 block text-xs font-bold ${primaryText}`}
  >
    Service / Product Requirement
  </label>

  <select
    id="service"
    name="service"
    defaultValue=""
    required
    className={`
      h-12 w-full rounded-lg border px-4 text-sm
      outline-none transition-all
      focus:border-brand-orange
      focus:ring-4 focus:ring-brand-orange/10
      ${borderColor}
      ${inputBg}
      ${inputText}
    `}
  >
    <option value="" disabled>
      Select your requirement
    </option>

    <option value="plastic-components">Plastic Components</option>
    <option value="rubber-components">Rubber Components</option>
    <option value="automobile-parts">Automobile Parts</option>
    <option value="electrical-parts">Electrical Parts</option>
    <option value="wiring-parts">Wiring Parts</option>
    <option value="plastic-rubber-washer">Plastic & Rubber Washer</option>
    <option value="tap-washer">Tap Washer</option>
    <option value="rubber-bush">Rubber Bush</option>
    <option value="rubber-o-ring-seal">Rubber O-Ring & Seal</option>
    <option value="gasket">Gasket</option>
    <option value="grommet">Grommet</option>
    <option value="protective-cap">Protective Cap</option>
    <option value="dust-cap">Dust Cap</option>
    <option value="teflon-ring">Teflon Ring</option>
    <option value="dust-cover">Dust Cover</option>
    <option value="pvc-pipe-cap">PVC Pipe Cap</option>
    <option value="moss-cap">Moss Cap</option>
    <option value="plastic-bush">Plastic Bush</option>
    <option value="nylon-bush-washer">Nylon Bush & Washer</option>
    <option value="machinery-hydraulic-parts">
      Machinery & Hydraulic Parts
    </option>

    <option value="tapered-cap-plugs">Tapered Cap/Plugs</option>
    <option value="centre-pull-plugs">Centre Pull Plugs</option>
    <option value="side-pull-tabs">Side Pull Tabs</option>
    <option value="tractor-parts">Tractor Parts</option>
    <option value="packing-bush">Packing Bush</option>
    <option value="dmc-insulator">DMC INSULATOR 8X40MM</option>
    <option value="flange-gasket">Flange Gasket</option>
    <option value="flange-protection-strip">Flange Protection Strip</option>
    <option value="pp-corrugated-sheet">PP Corrugated Sheet</option>
    <option value="water-pump-cap">Water Pump Cap</option>
    <option value="cooler-parts">Cooler Parts</option>
    <option value="drain-plug">Drain Plug</option>
    <option value="motor-cap">Motor Cap</option>
    <option value="geyser-parts">Geyser Parts</option>
    <option value="geyser-gasket">Geyser Gasket</option>
    <option value="geyser-sleeve">Geyser Sleeve</option>
    <option value="geyser-knob">Geyser Knob</option>
    <option value="wall-supporter">Wall Supporter</option>
    <option value="rubber-sanitary-parts">Rubber Sanitary Parts</option>
    <option value="rubber-filter-cap">Rubber Filter Cap</option>
    <option value="pall-ring">
      Pall Ring (Rasching Ring Alu. 25mm)
    </option>
  </select>
</div>
              {/* REQUIREMENT */}

              <div>

                <label
                  htmlFor="requirements"
                  className={`mb-2 block text-xs font-bold ${primaryText}`}
                >
                  Brief Requirements
                </label>

                <textarea
                  id="requirements"
                  name="requirements"
                  rows={6}
                  required
                  placeholder="Tell us about your component, material, dimensions, quantity, application, drawing/specification or other requirements..."
                  className={`
                    w-full resize-none rounded-lg border px-4 py-3
                    text-sm leading-6 outline-none transition-all
                    focus:border-brand-orange
                    focus:ring-4 focus:ring-brand-orange/10
                    ${borderColor}
                    ${inputBg}
                    ${inputText}
                    ${placeholderText}
                  `}
                />

              </div>

              {/* ERROR MESSAGE */}

              {submitError && (
                <div className="rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-500">
                  {submitError}
                </div>
              )}

              {/* SUBMIT */}

              <button
                type="submit"
                disabled={isSubmitting}
                className={`
                  group flex w-full cursor-pointer items-center
                  justify-center gap-2 rounded-lg bg-brand-orange
                  px-6 py-3.5 text-sm font-bold text-brand-white
                  shadow-lg shadow-brand-orange/20
                  transition-all duration-300
                  hover:-translate-y-0.5
                  hover:bg-brand-black
                  disabled:cursor-not-allowed
                  disabled:opacity-60
                  disabled:hover:translate-y-0
                `}
              >

                {isSubmitting ? (
                  <>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-brand-white/30 border-t-brand-white" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Enquiry

                    <Send
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </>
                )}

              </button>

            </form>

          </div>

        </div>

        {/* ================= FAQ ================= */}

        <Faq />

        {/* =====================================================
            FULL WIDTH MAP
        ====================================================== */}

        <div
          className={`
            mt-10 overflow-hidden rounded-2xl border
            bg-brand-black shadow-xl
            sm:mt-12
            ${
              isDarkMode
                ? "border-brand-white/30"
                : "border-brand-black/10"
            }
          `}
        >

          {/* MAP HEADER */}

          <div className="flex flex-col gap-3 bg-brand-black px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-7">

            <div>

              <div className="flex items-center gap-2">

                <MapPin
                  size={17}
                  className="text-brand-orange"
                />

                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-orange">
                  Find Us
                </span>

              </div>

              <h3 className="mt-1 text-lg font-bold text-brand-white sm:text-xl">
                Our Manufacturing Facility
              </h3>

            </div>

            <p className="max-w-md text-xs leading-5 text-brand-white/45 sm:text-right">
              Kadipur Industrial Area, Gurgaon, Haryana - 122001
            </p>

          </div>

          {/* MAP */}

          <div className="relative h-[280px] w-full sm:h-[350px] md:h-[400px] lg:h-[450px]">

            <iframe
              title="Kalika Engineering Manufacturing Facility Location"
              src="https://www.google.com/maps?q=Gali+No.8,+Lane+3B,+Kadipur+Industrial+Area,+Gurgaon,+Haryana+122001&output=embed"
              className="absolute inset-0 h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            {/* MAP LOCATION BADGE */}

            <div className="absolute bottom-4 left-4 max-w-[calc(100%-2rem)] sm:bottom-5 sm:left-5">

              <div className="flex items-center gap-3 rounded-xl border border-brand-white/30 bg-brand-black/90 px-4 py-3 shadow-2xl backdrop-blur-md">

                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-orange text-brand-white">
                  <MapPin size={16} />
                </div>

                <div>

                  <p className="text-xs font-bold text-brand-white">
                    Kalika Engineering
                  </p>

                  <p className="mt-0.5 text-[10px] text-brand-white/50">
                    Kadipur Industrial Area, Gurgaon
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Contact;