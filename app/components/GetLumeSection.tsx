"use client";

import { useState } from "react";

const features = [
  "LED-guided orientation indicator",
  "Fast first-try insertion experience",
  "Designed for low-light usability",
  "Familiar pen-drive form factor",
];

export function GetLumeSection() {
  const [notice, setNotice] = useState("");

  return (
    <section id="get-lume" className="relative mx-auto w-full max-w-6xl scroll-mt-24 px-4 py-7 sm:px-6 lg:px-8">
      <div className="section-panel animate-fadeUp [animation-delay:0.26s]">
        <div className="grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-100 via-white to-violet-100 p-6">
            <div className="mx-auto flex h-64 w-full max-w-xs items-center justify-center rounded-2xl border-4 border-slate-800 bg-slate-900 shadow-2xl">
              <div className="relative h-28 w-40 rounded-xl bg-slate-100 p-4">
                <div className="absolute left-4 top-5 h-4 w-16 rounded bg-slate-300" />
                <div className="absolute right-4 top-5 h-4 w-14 rounded bg-slate-300" />
                <div className="absolute bottom-6 left-1/2 h-6 w-6 -translate-x-1/2 rounded-full bg-blue-500 shadow-lg shadow-blue-400/60 animate-pulseSoft" />
                <div className="absolute -bottom-2 left-1/2 h-4 w-14 -translate-x-1/2 rounded-b-lg bg-slate-300" />
              </div>
            </div>
            <p className="mt-5 text-center text-sm font-medium text-slate-600">LUME USB Product Image Placeholder</p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-700">Get Your LUME USB</p>
            <h2 className="mt-3 text-4xl font-bold text-ink">LUME USB</h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
              A modern USB concept focused on intuitive orientation guidance. LUME helps users insert drives faster with confidence and less frustration.
            </p>

            <ul className="mt-6 space-y-3">
              {features.map((feature) => (
                <li key={feature} className="rounded-xl border border-blue-100 bg-white px-4 py-3 text-sm font-medium text-slate-700 shadow-sm">
                  {feature}
                </li>
              ))}
            </ul>

            <div className="mt-6 flex items-end justify-between gap-4 rounded-2xl border border-indigo-100 bg-indigo-50/80 p-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-600">Price</p>
                <p className="mt-1 text-2xl font-bold text-ink">INR 999</p>
                <p className="text-xs text-slate-500">Placeholder pricing</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() =>
                    setNotice(
                      "This is a concept product developed as part of a Design Thinking project."
                    )
                  }
                  className="rounded-xl bg-gradient-to-r from-electric to-violet px-5 py-2.5 text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5"
                >
                  Buy Now
                </button>
                <a
                  href="#prototype"
                  className="rounded-xl border border-indigo-200 bg-white px-5 py-2.5 text-sm font-semibold text-indigo-700 transition hover:bg-indigo-50"
                >
                  Learn More
                </a>
              </div>
            </div>

            {notice ? (
              <p className="mt-4 rounded-xl border border-blue-200 bg-blue-50 px-4 py-3 text-sm font-medium text-blue-800">
                {notice}
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
