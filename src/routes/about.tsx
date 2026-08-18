import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About the Model — RoadGuard AI" },
      {
        name: "description",
        content:
          "How RoadGuard AI works: the Ethiopia road traffic accidents dataset, six compared ML models, and the NTI 2025 team behind it.",
      },
      { property: "og:title", content: "About the Model — RoadGuard AI" },
      {
        property: "og:description",
        content: "Dataset, models and team behind the RoadGuard AI severity prediction system.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

const models = [
  { name: "Logistic Regression", type: "Linear" },
  { name: "Decision Tree", type: "Tree-based" },
  { name: "Random Forest", type: "Ensemble" },
  { name: "K-Nearest Neighbors", type: "Instance-based" },
  { name: "Support Vector Machine", type: "Kernel-based" },
  { name: "XGBoost", type: "Boosting" },
];

const team = ["Ahmed Saad", "Youssef Alaa", "Mahmoud Mohamed", "Ahmed Lotfy"];

function initials(name: string) {
  return name
    .split(" ")
    .map((p) => p[0])
    .join("");
}

function About() {
  return (
    <main className="relative">
      <div className="mesh-bg absolute inset-x-0 top-0 -z-10 h-80 opacity-70" />
      <div className="mx-auto max-w-5xl px-5 py-20">
        <p className="label-caps">About</p>
        <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">
          The <span className="gradient-text">project</span>
        </h1>
        <p className="glass mt-8 p-7 text-base leading-relaxed text-muted-foreground">
          RoadGuard AI uses machine learning to predict road accident severity from pre-accident
          conditions. Trained on the Road Traffic Accidents dataset from Ethiopia containing 12,316
          records.
        </p>

        <h2 className="mt-16 text-2xl font-extrabold tracking-tight">Models used</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {models.map((m) => (
            <div key={m.name} className="glass p-6 transition-all duration-300 hover:-translate-y-1">
              <div className="label-caps">{m.type}</div>
              <div className="mt-2 text-lg font-bold">{m.name}</div>
            </div>
          ))}
        </div>

        <h2 className="mt-16 text-2xl font-extrabold tracking-tight">Team</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((name) => (
            <div
              key={name}
              className="glass flex flex-col items-center p-7 text-center transition-all duration-300 hover:-translate-y-1"
            >
              <div className="gradient-primary flex size-16 items-center justify-center rounded-full text-lg font-extrabold text-primary-foreground">
                {initials(name)}
              </div>
              <div className="mt-4 font-bold">{name}</div>
              <div className="label-caps mt-1">NTI — 2025</div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
