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
  const [scrolled, setScrolled] = useState(false);

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
      setScrolled(window.scrollY > 24);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [sectionIds]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-slate-800 bg-slate-900/60 backdrop-blur-xl shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <a href="#home" className="group inline-flex items-center gap-3 text-xl font-extrabold tracking-tight text-white sm:text-2xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-violet-400 drop-shadow-[0_8px_24px_rgba(99,102,241,0.15)]">LUME</span>
          <span className="ml-1 hidden text-sm font-medium text-slate-300 md:block">Never Flip Your USB</span>
        </a>

        <div className="hidden items-center gap-3 md:flex">
          <nav className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-2 py-1 backdrop-blur-sm">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`rounded-full px-3 py-1.5 text-sm font-medium transition ${
                  active === item.href
                    ? "bg-blue-600 text-white shadow-md"
                    : "text-slate-200 hover:bg-white/10 hover:text-white"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="#feedback"
            className="rounded-xl bg-gradient-to-r from-blue-500 to-violet-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-indigo-300/50 transition hover:-translate-y-0.5 hover:shadow-xl"
          >
            Take Survey
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((current) => !current)}
          className="inline-flex items-center justify-center rounded-lg border border-white/10 bg-white/5 p-2 text-slate-100 shadow-sm backdrop-blur-md md:hidden"
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
        <div className="absolute inset-x-0 top-full border-b border-white/10 bg-slate-950/95 px-4 py-4 backdrop-blur-xl md:hidden">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 sm:px-2 md:px-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`w-full rounded-xl px-3 py-3 text-sm font-medium transition ${
                  active === item.href
                    ? "bg-blue-600 text-white"
                    : "text-slate-200 hover:bg-white/10 hover:text-white"
                }`}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#feedback"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex w-full justify-center rounded-xl bg-gradient-to-r from-blue-500 to-violet-500 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-300/50 transition hover:-translate-y-0.5"
            >
              Take Survey
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
