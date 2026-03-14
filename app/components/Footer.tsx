export function Footer() {
  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "Features", href: "#features" },
    { label: "How LUME Works", href: "#how-lume-works" },
    { label: "Research", href: "#research" },
    { label: "Prototype", href: "#prototype" },
    { label: "Team", href: "#team" },
    { label: "Feedback Survey", href: "#feedback" },
  ];

  return (
    <footer className="mt-20 border-t border-slate-800 bg-slate-950 text-slate-200">
      <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <section>
            <p className="text-2xl font-bold tracking-tight text-white">LUME</p>
            <p className="mt-2 text-sm font-medium text-blue-300">Never Flip Your USB Again.</p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
              A design innovation that improves USB usability through LED-guided orientation.
            </p>
          </section>

          <section>
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-300">Quick Links</h3>
            <ul className="mt-4 space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 transition hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-300">Project Info</h3>
            <div className="mt-4 space-y-2 text-sm text-slate-400">
              <p>Design Thinking Project</p>
              <p>School of Design</p>
              <p>Presidency University</p>
              <p className="pt-2 text-slate-300">Mentor: Dr. Kamalraj D</p>
            </div>
          </section>

          <section>
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-300">Feedback</h3>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
              Help us improve LUME by sharing your feedback.
            </p>
            <a
              href="#feedback"
              className="mt-5 inline-flex rounded-xl bg-gradient-to-r from-electric to-violet px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition hover:-translate-y-0.5 hover:shadow-xl"
            >
              Take Survey
            </a>
          </section>
        </div>

        <div className="mt-10 border-t border-slate-800 pt-5">
          <div className="flex flex-col gap-2 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 LUME. All rights reserved.</p>
            <p>Design Thinking Project - Presidency University</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
