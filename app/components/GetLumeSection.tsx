"use client";

import { useState } from "react";
import { Reveal } from "./Reveal";

const features = [
  "LED-guided orientation indicator",
  "Fast first-try insertion experience",
  "Designed for low-light usability",
  "Familiar pen-drive form factor",
];

export function GetLumeSection() {
  const [notice, setNotice] = useState("");

  return (
    <section id="get-lume" className="relative mx-auto w-full max-w-6xl scroll-mt-24 px-4 py-7 sm:px-6 md:px-8 lg:px-12 xl:px-16">
      <Reveal className="section-panel" delay={260}>
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_1fr]">
          <div className="flex items-center justify-center rounded-3xl p-4 sm:p-6">
            <div className="relative mx-auto h-56 w-full max-w-sm rounded-3xl bg-gradient-to-br from-slate-800 to-slate-900 p-5 shadow-2xl sm:h-64 sm:p-6">
              <div className="relative mx-auto flex h-56 w-full items-center justify-center">
                <div className="relative h-28 w-48 rounded-xl bg-gradient-to-br from-slate-700 to-slate-800 p-4">
                  <div className="absolute left-6 top-6 h-3 w-16 rounded bg-slate-600/40" />
                  <div className="absolute right-6 top-6 h-3 w-14 rounded bg-slate-600/40" />
                  <div className="absolute bottom-8 left-1/2 h-6 w-6 -translate-x-1/2 rounded-full bg-blue-500 shadow-lg animate-pulseSoft" />
                </div>
              </div>
            </div>
            <p className="mt-5 text-center text-sm font-medium text-slate-300">LUME USB Product Image</p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">Get Your LUME USB</p>
            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">LUME USB</h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base lg:text-lg">
              A modern USB concept focused on intuitive orientation guidance. LUME helps users insert drives faster with confidence and less frustration.
            </p>

            <ul className="mt-6 space-y-3">
              {features.map((feature) => (
                <li key={feature} className="rounded-xl p-3 text-sm font-medium text-slate-200 glass-card">
                  {feature}
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-col gap-4 rounded-2xl p-4 sm:flex-row sm:items-end sm:justify-between glass-card">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-300">Price</p>
                <p className="mt-1 text-2xl font-bold text-white">₹250</p>
                <p className="text-xs text-slate-400">Concept pricing</p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-end">
                <button
                  type="button"
                  onClick={() =>
                    setNotice(
                      "This is a concept product — Design Thinking Project"
                    )
                  }
                  className="w-full rounded-full bg-gradient-to-r from-blue-500 to-violet-500 px-5 py-2.5 text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5 sm:w-auto"
                >
                  Buy Now
                </button>
                <a
                  href="#prototype"
                  className="w-full rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 hover:bg-slate-800/30 sm:w-auto"
                >
                  Learn More
                </a>
              </div>
            </div>

            {notice ? (
              <p className="mt-4 rounded-xl p-3 text-sm font-medium text-slate-200 bg-slate-800/40">
                {notice}
              </p>
            ) : null}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
