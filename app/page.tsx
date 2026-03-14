import { Footer } from "./components/Footer";
import { GetLumeSection } from "./components/GetLumeSection";
import { Header } from "./components/Header";
import { ProfileCard } from "./components/ProfileCard";
import { SectionHeading } from "./components/SectionHeading";

const surveyOptions = [
  { label: "LED Marking", votes: 33, accent: "from-blue-500 to-indigo-500" },
  { label: "Dual Side USB", votes: 14, accent: "from-cyan-500 to-blue-500" },
  { label: "Magnetic Guide", votes: 4, accent: "from-violet-500 to-purple-500" },
];

const team = [
  {
    name: "Samhith V Gupta",
    role: "Product Lead & Research Coordinator",
    imageUrl: "/samhith.png",
  },
  {
    name: "C. Parthiv",
    role: "UX Research & User Testing",
    imageUrl: "https://placehold.co/160x160/e8f1ff/27408f?text=CP",
  },
  {
    name: "P. Panedra Gupta",
    role: "Product Design & Prototyping",
    imageUrl: "https://placehold.co/160x160/e8f1ff/27408f?text=PG",
  },
  {
    name: "Abrar",
    role: "Technology & Implementation",
    imageUrl: "https://placehold.co/160x160/e8f1ff/27408f?text=AB",
  },
  {
    name: "Farhan",
    role: "Survey Analysis & Documentation",
    imageUrl: "https://placehold.co/160x160/e8f1ff/27408f?text=FA",
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

      <main id="home" className="relative overflow-x-clip pt-16">
        <div className="pointer-events-none absolute inset-0 lume-grid opacity-25" />
        <div className="pointer-events-none absolute -left-24 top-24 h-56 w-56 rounded-full bg-violet-300/25 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 top-[38rem] h-72 w-72 rounded-full bg-blue-300/25 blur-3xl" />

        <section className="relative mx-auto flex min-h-screen w-full max-w-6xl items-center px-4 pb-14 pt-20 sm:px-6 lg:px-8">
          <div className="grid w-full items-center gap-12 lg:grid-cols-[1.06fr_0.94fr]">
            <div className="space-y-7 animate-fadeUp">
              <p className="inline-flex items-center gap-2 rounded-full border border-blue-200/90 bg-white px-4 py-1 text-sm font-semibold text-blue-700 shadow-sm">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                Design Thinking Product Innovation
              </p>
              <h1 className="text-5xl font-bold tracking-tight text-ink sm:text-6xl md:text-7xl">
                LUME
                <span className="block bg-gradient-to-r from-electric to-violet bg-clip-text text-3xl text-transparent sm:text-4xl md:text-5xl">
                  Never Flip Your USB Again.
                </span>
              </h1>
              <p className="max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
                A concept product designed to make USB insertion intuitive with LED-guided orientation,
                transforming a daily frustration into a smooth, confident interaction.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="#why-lume"
                  className="rounded-xl bg-gradient-to-r from-electric to-violet px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-300/50 transition duration-300 hover:-translate-y-0.5 hover:shadow-xl"
                >
                  Explore LUME
                </a>
                <a
                  href="#feedback"
                  className="rounded-xl border border-indigo-200 bg-white px-6 py-3 text-sm font-semibold text-indigo-700 transition duration-300 hover:-translate-y-0.5 hover:border-indigo-300 hover:bg-indigo-50"
                >
                  Take Survey
                </a>
              </div>
              <div className="grid max-w-2xl gap-3 sm:grid-cols-3">
                <div className="rounded-xl border border-blue-100 bg-white/90 p-4 shadow-sm">
                  <p className="text-2xl font-bold text-ink">52</p>
                  <p className="text-xs uppercase tracking-[0.14em] text-slate-500">Students Surveyed</p>
                </div>
                <div className="rounded-xl border border-blue-100 bg-white/90 p-4 shadow-sm">
                  <p className="text-2xl font-bold text-ink">63%</p>
                  <p className="text-xs uppercase tracking-[0.14em] text-slate-500">Preferred LED</p>
                </div>
                <div className="rounded-xl border border-blue-100 bg-white/90 p-4 shadow-sm">
                  <p className="text-2xl font-bold text-ink">1st</p>
                  <p className="text-xs uppercase tracking-[0.14em] text-slate-500">Prototype Iteration</p>
                </div>
              </div>
            </div>

            <div className="animate-fadeUp rounded-[2rem] border border-blue-100/80 bg-white/90 p-6 shadow-panel backdrop-blur-sm [animation-delay:0.12s]">
              <div className="relative overflow-hidden rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-100 via-white to-violet-100 p-8">
                <div className="absolute -left-10 top-4 h-28 w-28 rounded-full bg-blue-300/30 blur-2xl" />
                <div className="absolute -right-8 bottom-4 h-32 w-32 rounded-full bg-violet-300/30 blur-2xl" />
                <div className="relative mx-auto flex h-64 w-full max-w-xs items-center justify-center rounded-2xl border-4 border-slate-800 bg-slate-900 shadow-2xl">
                  <div className="relative h-28 w-40 rounded-xl bg-slate-100 p-4">
                    <div className="absolute left-4 top-5 h-4 w-16 rounded bg-slate-300" />
                    <div className="absolute right-4 top-5 h-4 w-14 rounded bg-slate-300" />
                    <div className="absolute bottom-6 left-1/2 h-6 w-6 -translate-x-1/2 rounded-full bg-blue-500 shadow-lg shadow-blue-400/60 animate-pulseSoft" />
                    <div className="absolute -bottom-2 left-1/2 h-4 w-14 -translate-x-1/2 rounded-b-lg bg-slate-300" />
                  </div>
                </div>
                <p className="mt-6 text-center text-sm font-medium text-slate-600">
                  Hero Product Placeholder - LED USB Prototype
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="why-lume" className="relative mx-auto w-full max-w-6xl scroll-mt-24 px-4 py-7 sm:px-6 lg:px-8">
          <div className="section-panel animate-fadeUp">
            <SectionHeading
              eyebrow="Why LUME Exists"
              title="A small interaction problem with a huge cumulative impact"
              description="LUME exists to solve one of the most repeated micro-frictions in digital life: USB orientation confusion."
            />
            <div className="mt-7 grid gap-4 md:grid-cols-3">
              {whyCards.map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-blue-100 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
                >
                  <IconBadge path={item.icon} />
                  <p className="mt-4 text-lg font-semibold text-ink">{item.title}</p>
                  <p className="mt-2 text-sm text-slate-600">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="how-lume-works" className="relative mx-auto w-full max-w-6xl scroll-mt-24 px-4 py-7 sm:px-6 lg:px-8">
          <div className="section-panel animate-fadeUp [animation-delay:0.06s]">
            <SectionHeading
              eyebrow="How LUME Works"
              title="A simple three-step orientation experience"
              description="Designed around fast comprehension and one-try insertion."
            />
            <div className="mt-7 grid gap-4 md:grid-cols-3">
              {howSteps.map((step, index) => (
                <article
                  key={step.title}
                  className="rounded-2xl border border-indigo-100 bg-gradient-to-br from-indigo-50 via-white to-blue-50 p-5"
                >
                  <div className="flex items-center justify-between">
                    <IconBadge path={step.icon} />
                    <span className="text-xs font-bold uppercase tracking-[0.16em] text-indigo-500">
                      Step {index + 1}
                    </span>
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-ink">{step.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{step.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="features" className="relative mx-auto w-full max-w-6xl scroll-mt-24 px-4 py-7 sm:px-6 lg:px-8">
          <div className="section-panel animate-fadeUp [animation-delay:0.1s]">
            <SectionHeading
              eyebrow="Key Features"
              title="Built for speed, clarity, and usability"
              description="LUME combines simple physical design cues with visible orientation guidance for a smoother USB experience."
            />
            <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {keyFeatures.map((feature) => (
                <article
                  key={feature.title}
                  className="rounded-xl border border-blue-100 bg-white p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
                >
                  <IconBadge path={feature.icon} />
                  <p className="mt-3 text-sm font-semibold text-slate-800">{feature.title}</p>
                  <p className="mt-2 text-xs text-slate-600">{feature.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="prototype" className="relative mx-auto w-full max-w-6xl scroll-mt-24 px-4 py-7 sm:px-6 lg:px-8">
          <div className="section-panel animate-fadeUp [animation-delay:0.14s]">
            <SectionHeading
              eyebrow="LUME Prototype"
              title="A familiar USB form, redesigned for orientation clarity"
              description="The LED USB prototype demonstrates how a small guidance layer can eliminate repeated flipping."
            />
            <div className="mt-6 grid items-center gap-8 lg:grid-cols-[0.95fr_1.05fr]">
              <div className="rounded-2xl border border-indigo-100 bg-gradient-to-br from-indigo-50 via-white to-blue-100 p-6">
                <div className="mx-auto flex h-56 w-full max-w-sm items-center justify-center rounded-2xl bg-slate-900 shadow-2xl">
                  <div className="relative h-24 w-44 rounded-xl bg-slate-100">
                    <div className="absolute left-5 top-4 h-3 w-14 rounded bg-slate-300" />
                    <div className="absolute right-5 top-4 h-3 w-14 rounded bg-slate-300" />
                    <div className="absolute bottom-5 left-1/2 h-6 w-6 -translate-x-1/2 rounded-full bg-blue-500 shadow-lg shadow-blue-500/60 animate-pulseSoft" />
                  </div>
                </div>
                <p className="mt-4 text-center text-sm text-slate-600">LUME Concept Prototype Placeholder</p>
              </div>
              <ul className="space-y-3">
                {conceptHighlights.map((point) => (
                  <li key={point} className="flex items-start gap-3 rounded-xl border border-blue-100 bg-white p-4">
                    <IconBadge path="M5 12.5 10 17l9-10" />
                    <span className="text-sm font-medium text-slate-700">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="research" className="relative mx-auto w-full max-w-6xl scroll-mt-24 px-4 py-7 sm:px-6 lg:px-8">
          <div className="section-panel animate-fadeUp [animation-delay:0.14s]">
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
                    <div key={option.label} className="space-y-2 rounded-xl border border-blue-100 bg-white p-4 shadow-sm">
                      <div className="flex items-center justify-between text-sm font-semibold text-slate-700">
                        <span>{option.label}</span>
                        <span>
                          {option.votes} votes ({percentage}%)
                        </span>
                      </div>
                      <div className="h-3.5 w-full overflow-hidden rounded-full bg-slate-100">
                        <div
                          className={`h-full rounded-full bg-gradient-to-r ${option.accent}`}
                          style={{ width: `${percentage}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>

              <aside className="rounded-2xl border border-indigo-100 bg-gradient-to-br from-indigo-50 to-blue-50 p-6 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-700">Result Highlight</p>
                <p className="mt-3 text-2xl font-bold text-ink">LED Marking Wins</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  LED Marking was selected as the lead concept and shaped the first LUME prototype direction.
                </p>
                <a
                  href={googleFormUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex rounded-xl bg-gradient-to-r from-electric to-violet px-5 py-3 text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5"
                >
                  Open Google Form Survey
                </a>
              </aside>
            </div>
          </div>
        </section>

        <section id="why-led-guidance" className="relative mx-auto w-full max-w-6xl scroll-mt-24 px-4 py-7 sm:px-6 lg:px-8">
          <div className="section-panel animate-fadeUp [animation-delay:0.2s]">
            <SectionHeading
              eyebrow="Why LED Guidance?"
              title="Why LED was selected over other concepts"
              description="Three concept directions were evaluated through user preference data and product feasibility considerations."
            />

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {guidanceComparison.map((item) => (
                <article
                  key={item.name}
                  className={`rounded-2xl border bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md ${
                    item.chosen
                      ? "border-blue-300 ring-2 ring-blue-100"
                      : "border-blue-100"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <p className="text-lg font-semibold text-ink">{item.name}</p>
                    {item.chosen ? (
                      <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-blue-700">
                        Chosen
                      </span>
                    ) : null}
                  </div>
                  <p className="mt-3 text-sm text-slate-600">{item.note}</p>
                  <p className="mt-4 text-sm font-semibold text-slate-700">{item.votes} votes</p>
                </article>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-blue-100 bg-white p-5 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-700">Survey Result Visualization</p>
              <div className="mt-5 space-y-4">
                {guidanceComparison.map((item) => {
                  const percentage = Math.round((item.votes / totalResponses) * 100);
                  return (
                    <div key={item.name}>
                      <div className="mb-2 flex items-center justify-between text-sm font-medium text-slate-700">
                        <span>{item.name}</span>
                        <span>
                          {item.votes} votes ({percentage}%)
                        </span>
                      </div>
                      <div className="h-3.5 w-full overflow-hidden rounded-full bg-slate-100">
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
          </div>
        </section>

        <GetLumeSection />

        <section id="mentor" className="relative mx-auto w-full max-w-6xl scroll-mt-24 px-4 py-7 sm:px-6 lg:px-8">
          <div className="section-panel animate-fadeUp [animation-delay:0.28s]">
            <SectionHeading eyebrow="Project Mentor" title="Guided by design leadership" />
            <div className="mt-8 rounded-3xl border border-violet-200 bg-gradient-to-br from-violet-50 via-white to-blue-50 p-3 shadow-sm">
              <ProfileCard
                name={mentor.name}
                role={mentor.role}
                imageUrl={mentor.imageUrl}
                imageAlt="Mentor profile placeholder"
                centered
                size="large"
                className="max-w-2xl border-violet-100 bg-white/95 p-10 shadow-panel"
              />
            </div>
          </div>
        </section>

        <section id="team" className="relative mx-auto w-full max-w-6xl scroll-mt-24 px-4 pb-10 pt-7 sm:px-6 lg:px-8">
          <div className="section-panel animate-fadeUp [animation-delay:0.32s]">
            <SectionHeading eyebrow="Meet the Team" title="The Minds Behind LUME" />
            <div className="mt-10 space-y-6">
              <div className="flex justify-center">
                <ProfileCard
                  name={team[0].name}
                  role={team[0].role}
                  imageUrl={team[0].imageUrl}
                  imageAlt={`${team[0].name} profile placeholder`}
                  className="w-full max-w-xl"
                  imagePositionClass="object-[50%_20%]"
                  centered
                />
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <ProfileCard
                  name={team[1].name}
                  role={team[1].role}
                  imageUrl={team[1].imageUrl}
                  imageAlt={`${team[1].name} profile placeholder`}
                  className="w-full"
                />
                <ProfileCard
                  name={team[2].name}
                  role={team[2].role}
                  imageUrl={team[2].imageUrl}
                  imageAlt={`${team[2].name} profile placeholder`}
                  className="w-full"
                />
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <ProfileCard
                  name={team[3].name}
                  role={team[3].role}
                  imageUrl={team[3].imageUrl}
                  imageAlt={`${team[3].name} profile placeholder`}
                  className="w-full"
                />
                <ProfileCard
                  name={team[4].name}
                  role={team[4].role}
                  imageUrl={team[4].imageUrl}
                  imageAlt={`${team[4].name} profile placeholder`}
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="feedback" className="relative mx-auto w-full max-w-6xl scroll-mt-24 px-4 pb-10 pt-7 sm:px-6 lg:px-8">
          <div className="section-panel animate-fadeUp [animation-delay:0.36s]">
            <SectionHeading
              eyebrow="Feedback / Survey"
              title="Help shape the next version of LUME"
              description="Share your thoughts on the concept and usability direction through the feedback form below."
            />
            <div className="mx-auto mt-8 w-full max-w-4xl overflow-hidden rounded-2xl border border-blue-100 bg-white p-2 shadow-sm sm:p-3">
              <iframe
                src={googleFormEmbedUrl}
                title="LUME Feedback Form"
                className="h-[560px] w-full rounded-xl sm:h-[620px]"
                loading="lazy"
              >
                Loading...
              </iframe>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
