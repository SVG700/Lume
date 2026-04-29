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
        <div className="grid items-stretch gap-8 lg:grid-cols-[1fr_1fr]">
          <div className="flex self-stretch justify-center">
            <img
              src="/prototype2.jpg"
              alt="LUME Prototype"
              className="block h-full w-full rounded-2xl object-contain shadow-[0_0_20px_rgba(59,130,246,0.25)]"
            />
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
