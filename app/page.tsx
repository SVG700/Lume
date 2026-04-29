import { Footer } from "./components/Footer";
import { GetLumeSection } from "./components/GetLumeSection";
import { Header } from "./components/Header";
import { ProfileCard } from "./components/ProfileCard";
import { SectionHeading } from "./components/SectionHeading";
import { Reveal } from "./components/Reveal";

// For Vercel deployment, no base path prefix needed
const assetBasePath = "";

const surveyOptions = [
  { label: "LED Marking", votes: 33, accent: "from-blue-500 to-indigo-500" },
  { label: "Dual Side USB", votes: 14, accent: "from-cyan-500 to-blue-500" },
  { label: "Magnetic Guide", votes: 4, accent: "from-violet-500 to-purple-500" },
];

const team = [
  {
    name: "Samhith V Gupta",
    role: "Product Lead & Research Coordinator",
    imageUrl: `${assetBasePath}/samhith.png`,
  },
  {
    name: "C. Parthiv",
    role: "UX Research & User Testing",
    imageUrl: `${assetBasePath}/parthiv.jpeg`,
  },
  {
    name: "P. Panendra Gupta",
    role: "Product Design & Prototyping",
    imageUrl: `${assetBasePath}/panedra.jpeg`,
  },
  {
    name: "Abrar Shariff",
    role: "Technology & Implementation",
    imageUrl: `${assetBasePath}/Abrar.png`,
  },
  {
    name: "Muhammad Farhan",
    role: "Survey Analysis & Documentation",
    imageUrl: `${assetBasePath}/Farhan.jpeg`,
  },
];

const mentor = {
  name: "Dr. Kamalraj D",
  role: "Assistant Professor\nSchool of Design\nPresidency University",
  imageUrl: "https://placehold.co/160x160/ebe6ff/4338ca?text=KD",
};

const totalResponses = 52;
const googleFormUrl = "https://forms.gle/5VRvZ4NJtAvvLhZG7";
const googleFormEmbedUrl =
  "https://docs.google.com/forms/d/e/1FAIpQLSc_MRHmkna2ctotqqs16GtUORkQN04DdgBsCOv14xopEzhhKg/viewform?embedded=true";

const whyCards = [
  {
    title: "Hidden Friction",
    text: "USB connectors look symmetrical, but only one orientation works, causing repeated insertion attempts.",
    icon: "M12 3v18m9-9H3",
  },
  {
    title: "Universal Pain Point",
    text: "Students, professionals, children, and elderly users all face orientation confusion in everyday workflows.",
    icon: "M4 20h16M6 16V8h12v8",
  },
  {
    title: "Low-Light Challenge",
    text: "The experience worsens in low visibility, where the connector direction is hard to identify quickly.",
    icon: "M2 12s4-6 10-6 10 6 10 6-4 6-10 6-10-6-10-6",
  },
];

const howSteps = [
  {
    title: "Insert LUME",
    text: "Place LUME near the USB port like a standard pen drive.",
    icon: "M4 12h16",
  },
  {
    title: "LED shows the correct orientation",
    text: "The LED-facing side quickly signals the right orientation to use.",
    icon: "M2 12s4-6 10-6 10 6 10 6-4 6-10 6-10-6-10-6Zm10 2a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",
  },
  {
    title: "Plug in instantly without flipping",
    text: "Insert confidently on the first attempt with minimal trial and error.",
    icon: "M5 12.5 10 17l9-10",
  },
];

const keyFeatures = [
  {
    title: "LED Orientation Indicator",
    text: "Clear visual orientation cue before insertion.",
    icon: "M12 3v18m9-9H3",
  },
  {
    title: "Faster Plug-In Experience",
    text: "Reduces repeated flipping and insertion retries.",
    icon: "M5 12.5 10 17l9-10",
  },
  {
    title: "User-Friendly Design",
    text: "Simple and intuitive for users of all ages.",
    icon: "M12 4v16M7 9h10",
  },
  {
    title: "Universal Compatibility",
    text: "Works within familiar USB usage behavior and workflows.",
    icon: "M4 20h16M6 16V8h12v8",
  },
];

const conceptHighlights = [
  "LED orientation marker integrated on USB body",
  "Instant visual guidance before insertion",
  "Simple, low-cost enhancement to familiar hardware",
  "Higher confidence in fast-paced and low-light usage",
];

const guidanceComparison = [
  {
    name: "LED Indicator",
    votes: 33,
    note: "Chosen solution due to clarity and minimal hardware complexity.",
    accent: "from-blue-600 to-indigo-600",
    chosen: true,
  },
  {
    name: "Dual-Side USB",
    votes: 14,
    note: "High usability potential, but more complex connector redesign.",
    accent: "from-cyan-500 to-blue-500",
    chosen: false,
  },
  {
    name: "Magnetic Guide",
    votes: 4,
    note: "Interesting concept, but less preferred by surveyed users.",
    accent: "from-violet-500 to-purple-500",
    chosen: false,
  },
];

function IconBadge({ path }: { path: string }) {
  return (
    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-md shadow-blue-300/40">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-5 w-5"
      >
        <path d={path} strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

export default function Home() {
  return (
    <>
      <Header />

      <main id="home" className="relative overflow-x-clip pt-16 sm:pt-20 md:pt-24 lg:pt-28 xl:pt-32">
        <div className="pointer-events-none absolute inset-0 lume-grid opacity-25" />
        <div className="pointer-events-none absolute -left-24 top-24 h-56 w-56 rounded-full bg-violet-300/25 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 top-[38rem] h-72 w-72 rounded-full bg-blue-300/25 blur-3xl" />

        <section id="home" className="relative min-h-[100svh] w-full flex flex-col items-center justify-center">
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <video
              className="hero-video"
              src={`${assetBasePath}/video/hero.mp4`}
              autoPlay
              loop
              muted
              playsInline
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/70" />
            <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          </div>

          <div className="mx-auto flex flex-col items-center justify-center min-h-[100svh] w-full max-w-6xl px-4 py-24 sm:px-6 md:px-8 lg:px-12 xl:px-16">
            <div className="w-full flex flex-col items-center">
              <div className="space-y-6 sm:space-y-8 flex flex-col items-center">
                {/* Logo */}
                <img 
                  src={`${assetBasePath}/logo.png`} 
                  alt="LUME Logo" 
                  className="h-16 sm:h-24 w-auto object-contain" 
                  style={{filter: 'drop-shadow(0 0 20px rgba(96, 165, 250, 0.3))'}}
                />

                {/* Badge */}
                <p className="inline-flex items-center gap-3 rounded-full bg-slate-800/30 px-4 py-1 text-xs font-semibold text-slate-300 backdrop-blur-sm">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-md" />
                  Design Thinking Product Innovation
                </p>

                {/* Title */}
                <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white drop-shadow-[0_20px_60px_rgba(59,130,246,0.12)] sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-center">
                  <span className="block glow-neon">LUME</span>
                </h1>

                {/* Tagline */}
                <p className="text-lg sm:text-xl md:text-2xl font-semibold text-slate-100 text-center" style={{textShadow: '0 2px 4px rgba(0,0,0,0.8)'}}>Never Flip Your USB Again</p>

                {/* Description */}
                <p className="max-w-2xl text-sm leading-relaxed text-slate-200 sm:text-base md:text-lg text-center">
                  A smart LED-guided USB that eliminates orientation confusion — fast, intuitive, and accessible for everyone.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap justify-center">
                  <a
                    href="#why-lume"
                    className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-violet-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_40px_rgba(79,70,229,0.18)] transition-transform hover:-translate-y-1 sm:w-auto"
                  >
                    Explore LUME
                  </a>
                  <a
                    href="#feedback"
                    className="inline-flex items-center justify-center rounded-full border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-200 hover:bg-slate-800/30 sm:w-auto"
                  >
                    Take Survey
                  </a>
                </div>

                {/* Stats Row */}
                <div className="mt-12 w-full max-w-2xl grid grid-cols-1 gap-6 sm:grid-cols-3 rounded-2xl px-8 py-4" style={{background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(12px)'}}>
                  <div className="text-center">
                    <p className="text-4xl sm:text-5xl font-bold text-blue-400">52</p>
                    <p className="mt-2 text-xs uppercase tracking-[0.14em] text-slate-200 font-medium">Users Surveyed</p>
                  </div>
                  <div className="text-center">
                    <p className="text-4xl sm:text-5xl font-bold text-blue-400">63%</p>
                    <p className="mt-2 text-xs uppercase tracking-[0.14em] text-slate-200 font-medium">Preferred LED</p>
                  </div>
                  <div className="text-center">
                    <p className="text-4xl sm:text-5xl font-bold text-blue-400">1st</p>
                    <p className="mt-2 text-xs uppercase tracking-[0.14em] text-slate-200 font-medium">Prototype Iteration</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
            <a href="#why-lume" aria-label="Scroll" className="animate-bounce rounded-full bg-slate-800/40 p-3 text-slate-200 backdrop-blur-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>
        </section>

        <section id="why-lume" className="relative mx-auto w-full max-w-6xl scroll-mt-24 px-4 py-7 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <Reveal className="section-panel">
            <SectionHeading
              eyebrow="Why LUME Exists"
              title="A small interaction problem with a huge cumulative impact"
              description="Millions of daily insertions are interrupted by orientation confusion — LUME turns that small frustration into a reliable, fast interaction."
            />

            <div className="mt-7 grid grid-cols-1 gap-6 md:grid-cols-3">
              {whyCards.map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl p-5 transition hover:scale-[1.02] hover:shadow-[0_18px_60px_rgba(79,70,229,0.08)] glass-card"
                >
                  <IconBadge path={item.icon} />
                  <p className="mt-4 text-lg font-semibold text-white">{item.title}</p>
                  <p className="mt-2 text-sm text-slate-300">{item.text}</p>
                </article>
              ))}
            </div>
          </Reveal>
        </section>

        <section id="how-lume-works" className="relative mx-auto w-full max-w-6xl scroll-mt-24 px-4 py-7 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <Reveal className="section-panel" delay={60}>
            <SectionHeading
              eyebrow="How LUME Works"
              title="A simple three-step orientation experience"
              description="Fast comprehension, clear LED guidance, and confident first-try insertion."
            />

            <div className="mt-8 flex flex-col gap-4 md:flex-row md:items-stretch md:gap-6">
              <div className="flex w-full flex-col gap-4 md:flex-row md:items-stretch md:gap-6">
                {howSteps.map((step, index) => (
                  <div key={step.title} className="flex w-full flex-col items-center text-center md:w-1/3">
                    <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-violet-500 text-white shadow-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-6 w-6">
                        <path d={step.icon} strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span className="mt-4 text-sm font-bold text-slate-200">Step {index + 1}</span>
                    <h3 className="mt-2 text-lg font-semibold text-white">{step.title}</h3>
                    <p className="mt-1 text-sm text-slate-300">{step.text}</p>
                    {index < howSteps.length - 1 ? (
                      <div className="mt-5 hidden h-px w-24 bg-gradient-to-r from-blue-400/50 to-violet-400/50 md:block" />
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </section>

        <section id="features" className="relative mx-auto w-full max-w-6xl scroll-mt-24 px-4 py-7 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <Reveal className="section-panel" delay={100}>
            <SectionHeading
              eyebrow="Key Features"
              title="Built for speed, clarity, and usability"
              description="LUME combines simple physical design cues with visible orientation guidance for a smoother USB experience."
            />
            <div className="mt-7 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
              {keyFeatures.map((feature) => (
                <article
                  key={feature.title}
                  className="rounded-xl p-5 transition hover:scale-[1.03] glass-card"
                >
                  <div className="inline-flex items-center gap-3">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-violet-500 text-white shadow-md">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-5 w-5">
                        <path d={feature.icon} strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-white">{feature.title}</p>
                      <p className="mt-1 text-xs text-slate-300">{feature.text}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </Reveal>
        </section>

        <section id="prototype" className="relative mx-auto w-full max-w-6xl scroll-mt-24 px-4 py-7 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="section-panel animate-fadeUp [animation-delay:0.14s]">
            <SectionHeading
              eyebrow="LUME Prototype"
              title="A familiar USB form, redesigned for orientation clarity"
              description="The LED USB prototype demonstrates how a small guidance layer can eliminate repeated flipping."
            />

            <div className="mt-6 grid items-center gap-8 lg:grid-cols-[1fr_1fr]">
              <div className="flex items-center justify-center rounded-2xl p-4 sm:p-6 glass-card">
                <div className="relative mx-auto h-56 w-full max-w-sm rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-800 p-4 shadow-2xl sm:h-64 sm:p-6">
                  <div className="relative mx-auto flex h-48 w-full items-center justify-center sm:h-56">
                    <div className="relative h-24 w-40 rounded-xl bg-gradient-to-br from-slate-700 to-slate-800 p-4 sm:h-28 sm:w-48">
                      <div className="absolute left-6 top-6 h-3 w-16 rounded bg-slate-600/40" />
                      <div className="absolute right-6 top-6 h-3 w-14 rounded bg-slate-600/40" />
                      <div className="absolute bottom-8 left-1/2 h-6 w-6 -translate-x-1/2 rounded-full bg-blue-500 shadow-lg animate-pulseSoft" />
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <ul className="space-y-3">
                  {conceptHighlights.map((point) => (
                    <li key={point} className="flex items-start gap-3 rounded-xl p-4 glass-card">
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-violet-500 text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-4 w-4">
                          <path d="M5 12.5 10 17l9-10" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-white">{point}</p>
                        <p className="mt-1 text-xs text-slate-300">Designed to be simple, low-cost and highly visible in real-world use.</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="flex flex-col items-center">
                <div className="w-full overflow-hidden rounded-[12px] shadow-lg transition-transform duration-300 hover:scale-[1.03]">
                  <img
                    src={`${assetBasePath}/prototype1.jpg`}
                    alt="LUME Prototype - Front View"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <p className="mt-4 text-sm font-medium text-slate-300">LUME Prototype - Front View</p>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-full overflow-hidden rounded-[12px] shadow-lg transition-transform duration-300 hover:scale-[1.03]">
                  <img
                    src={`${assetBasePath}/prototype2.jpg`}
                    alt="LUME Prototype - LED Indicator View"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <p className="mt-4 text-sm font-medium text-slate-300">LUME Prototype - LED Indicator View</p>
              </div>
            </div>
          </div>
        </section>

        <section id="research" className="relative mx-auto w-full max-w-6xl scroll-mt-24 px-4 py-7 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <Reveal className="section-panel" delay={140}>
            <SectionHeading
              eyebrow="Research & Validation"
              title="Survey-backed concept selection"
              description="A structured survey with 52 students validated LED Marking as the strongest direction."
            />

            <div className="mt-8 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
              <div className="space-y-5">
                {surveyOptions.map((option) => {
                  const percentage = Math.round((option.votes / totalResponses) * 100);
                  return (
                    <div key={option.label} className="space-y-2 rounded-xl p-4 glass-card">
                      <div className="flex flex-col gap-2 text-sm font-semibold text-slate-200 sm:flex-row sm:items-center sm:justify-between">
                        <span className="break-words pr-2">{option.label}</span>
                        <span className="text-xs font-medium text-slate-300 sm:text-sm">
                          {option.votes} votes ({percentage}%)
                        </span>
                      </div>
                      <div className="h-3.5 w-full overflow-hidden rounded-full bg-slate-800">
                        <div
                          className={`h-full rounded-full bg-gradient-to-r ${option.accent}`}
                          style={{ width: `${percentage}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>

              <aside className="rounded-2xl p-6 glass-card">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">Result Highlight</p>
                <p className="mt-3 text-2xl font-bold text-white">LED Marking Wins</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">
                  LED Marking was selected as the lead concept and shaped the first LUME prototype direction.
                </p>
                <a
                  href={googleFormUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex rounded-xl bg-gradient-to-r from-blue-500 to-violet-500 px-5 py-3 text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5"
                >
                  Open Google Form Survey
                </a>
              </aside>
            </div>
          </Reveal>
        </section>

        <section id="why-led-guidance" className="relative mx-auto w-full max-w-6xl scroll-mt-24 px-4 py-7 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <Reveal className="section-panel" delay={200}>
            <SectionHeading
              eyebrow="Why LED Guidance?"
              title="Why LED was selected over other concepts"
              description="Three concept directions were evaluated through user preference data and product feasibility considerations."
            />

            <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
              {guidanceComparison.map((item) => (
                <article
                  key={item.name}
                  className={`rounded-2xl p-5 transition duration-300 hover:-translate-y-1 hover:shadow-md glass-card ${item.chosen ? "ring-2 ring-blue-500/20" : ""}`}
                >
                  <div className="flex items-center justify-between">
                    <p className="text-lg font-semibold text-white">{item.name}</p>
                    {item.chosen ? (
                      <span className="rounded-full bg-blue-500/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-blue-200">
                        Chosen
                      </span>
                    ) : null}
                  </div>
                  <p className="mt-3 text-sm text-slate-300">{item.note}</p>
                  <p className="mt-4 text-sm font-semibold text-slate-200">{item.votes} votes</p>
                </article>
              ))}
            </div>

            <div className="mt-8 rounded-2xl p-5 sm:p-6 glass-card">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">Survey Result Visualization</p>
              <div className="mt-5 space-y-4">
                {guidanceComparison.map((item) => {
                  const percentage = Math.round((item.votes / totalResponses) * 100);
                  return (
                    <div key={item.name}>
                      <div className="mb-2 flex flex-col gap-1 text-sm font-medium text-slate-200 sm:flex-row sm:items-center sm:justify-between">
                        <span className="break-words pr-2">{item.name}</span>
                        <span className="text-xs text-slate-300 sm:text-sm">
                          {item.votes} votes ({percentage}%)
                        </span>
                      </div>
                      <div className="h-3.5 w-full overflow-hidden rounded-full bg-slate-800">
                        <div
                          className={`h-full rounded-full bg-gradient-to-r ${item.accent}`}
                          style={{ width: `${percentage}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </Reveal>
        </section>

        <GetLumeSection />

        <section id="mentor" className="relative mx-auto w-full max-w-6xl scroll-mt-24 px-4 py-7 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <Reveal className="section-panel" delay={280}>
            <SectionHeading eyebrow="Project Mentor" title="Guided by design leadership" />
            <div className="mt-8 rounded-3xl border border-violet-200 bg-gradient-to-br from-violet-50 via-white to-blue-50 p-3 shadow-sm sm:p-4 md:p-5">
              <ProfileCard
                name={mentor.name}
                role={mentor.role}
                imageUrl={mentor.imageUrl}
                imageAlt="Mentor profile placeholder"
                centered
                size="large"
                className="max-w-2xl border-violet-100 bg-transparent p-6 sm:p-8 md:p-10 shadow-panel"
              />
            </div>
          </Reveal>
        </section>

        <section id="team" className="relative mx-auto w-full max-w-6xl scroll-mt-24 px-4 pb-10 pt-7 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <Reveal className="section-panel" delay={320}>
            <SectionHeading eyebrow="Meet the Team" title="The Minds Behind LUME" />

            <div className="mt-10 space-y-6 sm:space-y-8">
              <div className="flex justify-center">
                <ProfileCard
                  name={team[0].name}
                  role={team[0].role}
                  imageUrl={team[0].imageUrl}
                  imageAlt={`${team[0].name} profile placeholder`}
                  className="w-full max-w-md sm:max-w-lg md:max-w-xl"
                  imagePositionClass="object-[50%_20%]"
                  centered
                  size="large"
                />
              </div>

              <div className="grid grid-cols-1 justify-items-center gap-6 md:grid-cols-2 md:justify-items-stretch">
                <ProfileCard
                  name={team[1].name}
                  role={team[1].role}
                  imageUrl={team[1].imageUrl}
                  imageAlt={`${team[1].name} profile placeholder`}
                  className="w-full max-w-md md:max-w-none"
                />
                <ProfileCard
                  name={team[2].name}
                  role={team[2].role}
                  imageUrl={team[2].imageUrl}
                  imageAlt={`${team[2].name} profile placeholder`}
                  className="w-full max-w-md md:max-w-none"
                />
              </div>

              <div className="grid grid-cols-1 justify-items-center gap-6 md:grid-cols-2 md:justify-items-stretch">
                <ProfileCard
                  name={team[3].name}
                  role={team[3].role}
                  imageUrl={team[3].imageUrl}
                  imageAlt={`${team[3].name} profile placeholder`}
                  className="w-full max-w-md md:max-w-none"
                />
                <ProfileCard
                  name={team[4].name}
                  role={team[4].role}
                  imageUrl={team[4].imageUrl}
                  imageAlt={`${team[4].name} profile placeholder`}
                  className="w-full max-w-md md:max-w-none"
                />
              </div>
            </div>
          </Reveal>
        </section>

        <section id="feedback" className="relative mx-auto w-full max-w-6xl scroll-mt-24 px-4 pb-10 pt-7 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <Reveal className="section-panel" delay={360}>
            <SectionHeading
              eyebrow="Feedback / Survey"
              title="Help Shape the Future of USB Design"
              description="Share your thoughts on the concept and usability direction through the feedback form below."
            />

            <div className="mx-auto mt-8 w-full max-w-4xl overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 p-2 shadow-sm sm:p-3">
              <iframe src={googleFormEmbedUrl} title="LUME Feedback Form" className="h-[520px] w-full rounded-xl sm:h-[600px] md:h-[640px]" loading="lazy">
                Loading...
              </iframe>
            </div>
          </Reveal>
        </section>

      </main>

      <Footer />
    </>
  );
}
