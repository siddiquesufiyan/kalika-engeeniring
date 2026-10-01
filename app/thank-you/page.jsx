
"use client";

import Link from "next/link";
import {
  CheckCircle2,
  ArrowLeft,
  ArrowRight,
  Building2,
  Mail,
  Phone,
} from "lucide-react";

export default function ThankYouPage() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white px-4 py-10 text-black sm:px-6 sm:py-14">

      {/* ================= BACKGROUND ================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* Orange Glow */}
        <div className="absolute left-1/2 top-[-180px] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#FF6501]/8 blur-[120px] sm:h-[520px] sm:w-[520px]" />

        <div className="absolute -bottom-40 -left-40 h-[350px] w-[350px] rounded-full bg-[#FF6501]/5 blur-[100px]" />

        <div className="absolute -right-40 top-1/3 h-[350px] w-[350px] rounded-full bg-black/[0.025] blur-[100px]" />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.8) 1px, transparent 1px)",
            backgroundSize: "45px 45px",
          }}
        />

      </div>

      {/* ================= CONTENT ================= */}

      <div className="relative z-10 w-full max-w-3xl">

        {/* ================= LOGO / BRAND ================= */}

        <div className="mb-8 flex justify-center sm:mb-10">

          <Link
            href="/"
            className="group inline-flex items-center gap-3"
          >

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#FF6501] text-white shadow-lg shadow-[#FF6501]/20">
              <Building2 size={21} />
            </div>

            <div className="text-left">

              <p className="text-sm font-bold tracking-wide text-black">
                KALIKA ENGINEERING
              </p>

              <p className="mt-0.5 text-[9px] font-medium uppercase tracking-[0.2em] text-black/40">
                Precision • Quality • Reliability
              </p>

            </div>

          </Link>

        </div>

        {/* ================= MAIN CARD ================= */}

        <div className="relative overflow-hidden rounded-2xl border border-black/10 bg-white/80 p-6 shadow-[0_20px_70px_rgba(0,0,0,0.08)] backdrop-blur-xl sm:rounded-3xl sm:p-10 md:p-14">

          {/* Top Orange Line */}
          <div className="absolute left-0 right-0 top-0 h-[3px] bg-[#FF6501]" />

          {/* ================= SUCCESS ICON ================= */}

          <div className="flex justify-center">

            <div className="relative">

              {/* Glow */}
              <div className="absolute inset-0 rounded-full bg-[#FF6501]/20 blur-xl" />

              <div className="relative flex h-20 w-20 items-center justify-center rounded-full border border-[#FF6501]/30 bg-[#FF6501]/10 sm:h-24 sm:w-24">

                <CheckCircle2
                  size={48}
                  strokeWidth={1.7}
                  className="text-[#FF6501] sm:h-14 sm:w-14"
                />

              </div>

            </div>

          </div>

          {/* ================= HEADING ================= */}

          <div className="mx-auto mt-7 max-w-2xl text-center sm:mt-8">

            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.25em] text-[#FF6501] sm:text-xs">
              Enquiry Successfully Submitted
            </p>

            <h1 className="text-3xl font-bold leading-tight tracking-tight text-black sm:text-4xl md:text-5xl lg:text-6xl">
              Thank You for
              <span className="block text-[#FF6501]">
                Contacting Us.
              </span>
            </h1>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-black/55 sm:mt-6 sm:text-base">
              Your enquiry has been successfully received by
              Kalika Engineering. Our team will review your
              requirements and get in touch with you shortly.
            </p>

          </div>

          {/* ================= INFO BOX ================= */}

          <div className="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-3 sm:mt-10 sm:grid-cols-2">

            {/* Email */}

            <div className="flex items-center gap-3 rounded-xl border border-black/10 bg-black/[0.025] p-4">

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#FF6501]/10 text-[#FF6501]">
                <Mail size={18} />
              </div>

              <div className="min-w-0">

                <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-black/35">
                  Email
                </p>

                <p className="mt-1 truncate text-xs font-semibold text-black/75 sm:text-sm">
                  info@kalikaengineering.in
                </p>

              </div>

            </div>

            {/* Phone */}

            <div className="flex items-center gap-3 rounded-xl border border-black/10 bg-black/[0.025] p-4">

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#FF6501]/10 text-[#FF6501]">
                <Phone size={18} />
              </div>

              <div>

                <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-black/35">
                  Phone
                </p>

                <p className="mt-1 text-xs font-semibold text-black/75 sm:text-sm">
                  +91 9873272496
                </p>

              </div>

            </div>

          </div>

          {/* ================= DIVIDER ================= */}

          <div className="mx-auto my-8 h-px max-w-2xl bg-black/10 sm:my-10" />

          {/* ================= BUTTONS ================= */}

          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">

            {/* Back to Home */}

            <Link
              href="/"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#FF6501] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#FF6501]/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-black sm:w-auto"
            >

              <ArrowLeft
                size={17}
                className="transition-transform duration-300 group-hover:-translate-x-1"
              />

              Back to Home

            </Link>

            {/* Contact Again */}

            <Link
              href="/contact"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-xl border border-black/15 bg-black/[0.02] px-6 py-3.5 text-sm font-bold text-black/80 transition-all duration-300 hover:border-[#FF6501]/50 hover:bg-[#FF6501]/10 hover:text-black sm:w-auto"
            >

              Contact Us

              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />

            </Link>

          </div>

        </div>

        {/* ================= FOOTER ================= */}

        <div className="mt-7 text-center sm:mt-8">

          <p className="text-[10px] leading-5 text-black/35 sm:text-xs">
            Kalika Engineering • Plastic & Rubber Component Solutions
          </p>

          <p className="mt-1 text-[9px] text-black/25 sm:text-[10px]">
            Gurgaon, Haryana, India
          </p>

        </div>

      </div>

    </main>
  );
}

