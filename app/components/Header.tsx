"use client";

import { useEffect, useMemo, useState } from "react";

type NavItem = {
  label: string;
  href: string;
};

const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-lume-works" },
  { label: "Research", href: "#research" },
  { label: "Team", href: "#team" },
  { label: "Mentor", href: "#mentor" },
  { label: "Feedback", href: "#feedback" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  const sectionIds = useMemo(
    () => navItems.map((item) => item.href.replace("#", "")),
    []
  );

  useEffect(() => {
    const onScroll = () => {
      const scrollOffset = window.scrollY + 140;
      let current = "home";

      for (const id of sectionIds) {
        const section = document.getElementById(id);
        if (!section) {
          continue;
        }

        if (section.offsetTop <= scrollOffset) {
          current = id;
        }
      }

      setActive(`#${current}`);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [sectionIds]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/70 bg-white/75 shadow-[0_8px_28px_rgba(32,66,158,0.12)] backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <a href="#home" className="group inline-flex items-center gap-2 text-xl font-bold tracking-tight text-ink">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-electric to-violet text-sm font-extrabold text-white shadow-lg shadow-blue-300/40">
            L
          </span>
          <span>LUME</span>
        </a>

        <div className="hidden items-center gap-3 md:flex">
          <nav className="flex items-center gap-2 rounded-full border border-blue-100/80 bg-white/80 px-2 py-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`rounded-full px-3 py-1.5 text-sm font-medium transition ${
                  active === item.href
                    ? "bg-blue-600 text-white shadow-md"
                    : "text-slate-600 hover:bg-blue-50 hover:text-electric"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="#feedback"
            className="rounded-xl bg-gradient-to-r from-electric to-violet px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-indigo-300/50 transition hover:-translate-y-0.5 hover:shadow-xl"
          >
            Take Survey
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((current) => !current)}
          className="inline-flex items-center justify-center rounded-lg border border-blue-100 bg-white/90 p-2 text-slate-700 shadow-sm md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className="sr-only">Open menu</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="h-5 w-5"
          >
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {open ? (
        <div className="border-t border-blue-100 bg-white/95 px-4 py-4 backdrop-blur-md md:hidden">
          <nav className="flex flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`rounded-lg px-2 py-1.5 text-sm font-medium transition ${
                  active === item.href
                    ? "bg-blue-600 text-white"
                    : "text-slate-700 hover:bg-blue-50 hover:text-electric"
                }`}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#feedback"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex w-fit rounded-xl bg-gradient-to-r from-electric to-violet px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-indigo-300/50 transition hover:-translate-y-0.5"
            >
              Take Survey
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
