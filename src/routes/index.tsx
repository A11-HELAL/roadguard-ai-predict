import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "RoadGuard AI — Accident Severity Prediction" },
      {
        name: "description",
        content:
          "AI-powered road accident severity prediction trained on 12,316 real accident records. NTI Graduation Project 2025.",
      },
      { property: "og:title", content: "RoadGuard AI — Accident Severity Prediction" },
      {
        property: "og:description",
        content: "Predict road accident severity with a machine learning model trained on real data.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const stats = [
  { icon: "🗃️", number: "12,316", label: "Training Records" },
  { icon: "🤖", number: "6", label: "ML Models Compared" },
  { icon: "🎯", number: "3", label: "Severity Levels" },
];

const steps = [
  { icon: "📝", title: "Fill the Form", text: "Enter accident details across four quick steps." },
  { icon: "🧠", title: "AI Analysis", text: "The model processes every input signal." },
  { icon: "📊", title: "Get Results", text: "Instant severity prediction with confidence." },
];

function Index() {
  return (
    <main>
      <section className="relative overflow-hidden">
        <div className="mesh-bg absolute inset-0 -z-10" />
        <div className="absolute inset-0 -z-10 opacity-[0.08]" aria-hidden>
          <svg className="h-full w-full" preserveAspectRatio="none" viewBox="0 0 1200 700">
            <path d="M-50 620 C300 520 500 480 1250 300" fill="none" stroke="currentColor" strokeWidth="2" />
            <path d="M-50 700 C350 600 600 540 1250 380" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="24 22" />
            <path d="M-50 540 C250 460 620 420 1250 200" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="8 18" />
          </svg>
        </div>

        <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-4xl flex-col items-center justify-center px-5 py-24 text-center">
          <span className="animate-reveal rounded-full bg-secondary/25 px-4 py-1.5 text-xs font-semibold text-foreground ring-1 ring-inset ring-secondary/40">
            🎓 NTI Graduation Project 2025
          </span>
          <h1 className="animate-reveal mt-7 text-5xl leading-[1.05] font-extrabold tracking-tight sm:text-6xl md:text-[64px]">
            Predict Road Accident <span className="gradient-text">Severity</span>
          </h1>
          <p className="animate-reveal mt-6 max-w-2xl text-lg text-muted-foreground sm:text-2xl">
            AI-powered system trained on 12,316 real accident records
          </p>
          <Link
            to="/predict"
            className="gradient-primary animate-reveal mt-10 rounded-xl px-8 py-4 text-base font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110"
          >
            Start Prediction →
          </Link>

          <div className="mt-20 grid w-full gap-4 sm:grid-cols-3">
            {stats.map((s) => (
              <div key={s.label} className="glass p-6 transition-all duration-300 hover:-translate-y-1">
                <div className="text-2xl">{s.icon}</div>
                <div className="mt-3 text-3xl font-extrabold">{s.number}</div>
                <div className="label-caps mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-24">
        <p className="label-caps text-center">How it works</p>
        <h2 className="mt-3 text-center text-3xl font-extrabold tracking-tight sm:text-4xl">
          Three steps to a prediction
        </h2>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {steps.map((s, i) => (
            <div key={s.title} className="glass p-7 transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{s.icon}</span>
                <span className="label-caps">Step {i + 1}</span>
              </div>
              <h3 className="mt-4 text-lg font-bold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
