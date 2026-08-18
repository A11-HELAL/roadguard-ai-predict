import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ageOptions,
  areaOptions,
  causeOptions,
  collisionOptions,
  dayOptions,
  experienceOptions,
  fieldLabels,
  initialFormData,
  junctionOptions,
  lightOptions,
  movementOptions,
  severityMeta,
  simulatePrediction,
  surfaceConditionOptions,
  surfaceTypeOptions,
  vehicleOptions,
  weatherOptions,
  type FormData,
  type Prediction,
} from "@/lib/predict";

export const Route = createFileRoute("/predict")({
  head: () => ({
    meta: [
      { title: "Run a Prediction — RoadGuard AI" },
      {
        name: "description",
        content:
          "Enter location, driver, road and accident details to get an instant ML-based accident severity prediction.",
      },
      { property: "og:title", content: "Run a Prediction — RoadGuard AI" },
      {
        property: "og:description",
        content: "Four quick steps to an instant accident severity prediction with confidence scores.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PredictPage,
});

const stepLabels = ["Location & Time", "Driver & Vehicle", "Road Conditions", "Accident Details"];

function Field({ label, icon, children }: { label: string; icon: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="label-caps flex items-center gap-1.5">
        <span aria-hidden>{icon}</span>
        {label}
      </span>
      <div className="mt-2">{children}</div>
    </label>
  );
}

function Select({
  value,
  onChange,
  options,
}: {
  value: string;
  onChange: (v: string) => void;
  options: string[];
}) {
  return (
    <select className="field" value={value} onChange={(e) => onChange(e.target.value)}>
      {options.map((o) => (
        <option key={o} value={o}>
          {o}
        </option>
      ))}
    </select>
  );
}

function Toggle({
  value,
  onChange,
  options,
}: {
  value: string;
  onChange: (v: string) => void;
  options: string[];
}) {
  return (
    <div className="flex gap-2">
      {options.map((o) => (
        <button
          key={o}
          type="button"
          onClick={() => onChange(o)}
          className={
            "flex-1 rounded-lg border px-4 py-2.5 text-sm font-semibold transition-all duration-300 " +
            (value === o
              ? "gradient-primary border-transparent text-primary-foreground shadow-[var(--shadow-glow)]"
              : "border-border bg-surface/60 text-muted-foreground hover:text-foreground")
          }
        >
          {o}
        </button>
      ))}
    </div>
  );
}

function Counter({
  value,
  onChange,
  min,
  max,
}: {
  value: number;
  onChange: (v: number) => void;
  min: number;
  max: number;
}) {
  return (
    <div className="flex items-center gap-4">
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="h-1.5 w-full cursor-pointer appearance-none rounded-full bg-border accent-primary"
      />
      <span className="grid size-11 shrink-0 place-items-center rounded-lg border border-primary/40 bg-primary/15 text-lg font-extrabold text-foreground">
        {value}
      </span>
    </div>
  );
}

function PredictPage() {
  const [phase, setPhase] = useState<"form" | "loading" | "result">("form");
  const [step, setStep] = useState(0);
  const [data, setData] = useState<FormData>(initialFormData);
  const [prediction, setPrediction] = useState<Prediction | null>(null);

  const set = <K extends keyof FormData>(key: K, value: FormData[K]) =>
    setData((d) => ({ ...d, [key]: value }));

  function submit() {
    setPrediction(simulatePrediction());
    setPhase("loading");
  }

  if (phase === "loading") return <LoadingScreen onDone={() => setPhase("result")} />;
  if (phase === "result" && prediction)
    return (
      <ResultScreen
        prediction={prediction}
        data={data}
        onReset={() => {
          setPrediction(null);
          setStep(0);
          setPhase("form");
        }}
      />
    );

  return (
    <main className="relative">
      <div className="mesh-bg absolute inset-x-0 top-0 -z-10 h-96 opacity-60" />
      <div className="mx-auto max-w-[680px] px-5 py-14">
        <div className="glass p-7 sm:p-9">
          <div className="flex items-center justify-between gap-2">
            {stepLabels.map((label, i) => (
              <div key={label} className="flex-1">
                <div className="h-1.5 overflow-hidden rounded-full bg-border">
                  <div
                    className="gradient-primary h-full rounded-full transition-all duration-500 ease-in-out"
                    style={{ width: i <= step ? "100%" : "0%" }}
                  />
                </div>
                <div
                  className={
                    "label-caps mt-2 truncate text-[10px] " + (i === step ? "text-foreground" : "")
                  }
                >
                  {label}
                </div>
              </div>
            ))}
          </div>

          <h1 className="mt-8 text-2xl font-extrabold tracking-tight">{stepLabels[step]}</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Step {step + 1} of 4 — all fields feed the model.
          </p>

          <div key={step} className="animate-reveal mt-7 space-y-5">
            {step === 0 && (
              <>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Time of Accident" icon="🕐">
                    <input
                      type="time"
                      className="field"
                      value={data.time}
                      onChange={(e) => set("time", e.target.value)}
                    />
                  </Field>
                  <Field label="Day of Week" icon="📅">
                    <Select value={data.day} onChange={(v) => set("day", v)} options={dayOptions} />
                  </Field>
                </div>
                <Field label="Area Type" icon="📍">
                  <Select value={data.area} onChange={(v) => set("area", v)} options={areaOptions} />
                </Field>
              </>
            )}

            {step === 1 && (
              <>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Age Band" icon="🧑">
                    <Select value={data.age} onChange={(v) => set("age", v)} options={ageOptions} />
                  </Field>
                  <Field label="Sex of Driver" icon="⚧">
                    <Toggle value={data.sex} onChange={(v) => set("sex", v)} options={["Male", "Female"]} />
                  </Field>
                </div>
                <Field label="Driving Experience" icon="🎓">
                  <Select
                    value={data.experience}
                    onChange={(v) => set("experience", v)}
                    options={experienceOptions}
                  />
                </Field>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Vehicle Type" icon="🚗">
                    <Select
                      value={data.vehicle}
                      onChange={(v) => set("vehicle", v)}
                      options={vehicleOptions}
                    />
                  </Field>
                  <Field label="Vehicle Movement" icon="🔄">
                    <Select
                      value={data.movement}
                      onChange={(v) => set("movement", v)}
                      options={movementOptions}
                    />
                  </Field>
                </div>
              </>
            )}

            {step === 2 && (
              <>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Road Surface Type" icon="🛣️">
                    <Select
                      value={data.surfaceType}
                      onChange={(v) => set("surfaceType", v)}
                      options={surfaceTypeOptions}
                    />
                  </Field>
                  <Field label="Road Surface Conditions" icon="💧">
                    <Select
                      value={data.surfaceCondition}
                      onChange={(v) => set("surfaceCondition", v)}
                      options={surfaceConditionOptions}
                    />
                  </Field>
                  <Field label="Light Conditions" icon="💡">
                    <Select value={data.light} onChange={(v) => set("light", v)} options={lightOptions} />
                  </Field>
                  <Field label="Weather" icon="🌦️">
                    <Select
                      value={data.weather}
                      onChange={(v) => set("weather", v)}
                      options={weatherOptions}
                    />
                  </Field>
                </div>
                <Field label="Junction Type" icon="🔀">
                  <Select
                    value={data.junction}
                    onChange={(v) => set("junction", v)}
                    options={junctionOptions}
                  />
                </Field>
              </>
            )}

            {step === 3 && (
              <>
                <Field label="Number of Vehicles Involved" icon="🚘">
                  <Counter value={data.vehicles} onChange={(v) => set("vehicles", v)} min={1} max={7} />
                </Field>
                <Field label="Number of Casualties" icon="🤕">
                  <Counter
                    value={data.casualties}
                    onChange={(v) => set("casualties", v)}
                    min={1}
                    max={8}
                  />
                </Field>
                <Field label="Type of Collision" icon="💥">
                  <Select
                    value={data.collision}
                    onChange={(v) => set("collision", v)}
                    options={collisionOptions}
                  />
                </Field>
                <Field label="Cause of Accident" icon="⚠️">
                  <Select value={data.cause} onChange={(v) => set("cause", v)} options={causeOptions} />
                </Field>
              </>
            )}
          </div>

          <div className="mt-9 flex items-center gap-3">
            {step > 0 && (
              <button
                type="button"
                onClick={() => setStep((s) => s - 1)}
                className="rounded-lg border border-border px-5 py-3 text-sm font-semibold text-muted-foreground transition-all duration-300 hover:text-foreground"
              >
                Back
              </button>
            )}
            {step < 3 ? (
              <button
                type="button"
                onClick={() => setStep((s) => s + 1)}
                className="gradient-primary ml-auto rounded-lg px-7 py-3 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[var(--shadow-glow)]"
              >
                Next →
              </button>
            ) : (
              <button
                type="button"
                onClick={submit}
                className="animate-shine w-full rounded-xl px-7 py-4 text-base font-bold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform duration-300 hover:-translate-y-0.5"
              >
                Analyze Accident →
              </button>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

const loadingTexts = [
  "Processing accident data...",
  "Running ML model...",
  "Calculating severity...",
  "Generating prediction...",
];

function LoadingScreen({ onDone }: { onDone: () => void }) {
  const [progress, setProgress] = useState(0);
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const start = Date.now();
    const tick = setInterval(() => {
      const pct = Math.min(100, ((Date.now() - start) / 2500) * 100);
      setProgress(pct);
    }, 40);
    const cycle = setInterval(() => setTextIndex((i) => (i + 1) % loadingTexts.length), 800);
    const done = setTimeout(onDone, 2600);
    return () => {
      clearInterval(tick);
      clearInterval(cycle);
      clearTimeout(done);
    };
  }, [onDone]);

  return (
    <main className="grid-bg flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center px-5">
      <div className="relative grid place-items-center">
        <div className="gradient-primary animate-glow-pulse absolute size-40 rounded-full blur-3xl" />
        <div className="animate-glow-pulse text-7xl">🧠</div>
      </div>
      <p className="mt-10 text-lg font-semibold">{loadingTexts[textIndex]}</p>
      <div className="mt-6 h-2 w-full max-w-sm overflow-hidden rounded-full bg-border">
        <div
          className="gradient-primary h-full rounded-full transition-[width] duration-100 ease-linear"
          style={{ width: `${progress}%` }}
        />
      </div>
      <p className="label-caps mt-3">{Math.round(progress)}% complete</p>
    </main>
  );
}

function ResultScreen({
  prediction,
  data,
  onReset,
}: {
  prediction: Prediction;
  data: FormData;
  onReset: () => void;
}) {
  const meta = severityMeta[prediction.class];
  const [open, setOpen] = useState(false);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setAnimated(true), 120);
    return () => clearTimeout(t);
  }, []);

  const bars = [
    { label: "Slight Injury", value: prediction.slight, color: "var(--slight)" },
    { label: "Serious Injury", value: prediction.serious, color: "var(--serious)" },
    { label: "Fatal Injury", value: prediction.fatal, color: "var(--fatal)" },
  ];

  return (
    <main className="relative">
      <div className="grid-bg absolute inset-0 -z-10 opacity-60" />
      <div className="mx-auto max-w-[600px] px-5 py-14">
        <div
          className="animate-reveal glass p-9 text-center"
          style={{
            borderColor: `color-mix(in oklab, ${meta.color} 45%, transparent)`,
            boxShadow: `0 0 30px color-mix(in oklab, ${meta.color} 35%, transparent)`,
          }}
        >
          <div className={"text-6xl " + (prediction.class === 2 ? "animate-glow-pulse" : "")}>
            {meta.icon}
          </div>
          <div
            className="label-caps mt-5 inline-block rounded-full px-4 py-1.5 text-[11px]"
            style={{
              color: meta.color,
              background: `color-mix(in oklab, ${meta.color} 15%, transparent)`,
              border: `1px solid color-mix(in oklab, ${meta.color} 35%, transparent)`,
            }}
          >
            {meta.badge}
          </div>
          <h1 className="mt-5 text-3xl font-extrabold tracking-tight">{meta.title}</h1>
          <p className="mt-3 text-sm text-muted-foreground">{meta.subtitle}</p>
        </div>

        <div className="glass mt-6 p-7">
          <p className="label-caps">Model confidence</p>
          <div className="mt-5 space-y-4">
            {bars.map((b) => (
              <div key={b.label}>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">{b.label}</span>
                  <span className="font-bold">{Math.round(b.value * 100)}%</span>
                </div>
                <div className="mt-2 h-2.5 overflow-hidden rounded-full bg-border">
                  <div
                    className="h-full rounded-full transition-all duration-1000 ease-out"
                    style={{
                      width: animated ? `${b.value * 100}%` : "0%",
                      background: b.color,
                      boxShadow: `0 0 14px color-mix(in oklab, ${b.color} 60%, transparent)`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="glass mt-6 overflow-hidden">
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className="flex w-full items-center justify-between px-7 py-5 text-sm font-semibold transition-colors duration-300 hover:text-primary"
          >
            View your inputs
            <span className={"transition-transform duration-300 " + (open ? "rotate-180" : "")}>⌄</span>
          </button>
          {open && (
            <dl className="grid gap-x-6 gap-y-4 border-t border-white/5 px-7 py-6 sm:grid-cols-2">
              {(Object.keys(fieldLabels) as Array<keyof FormData>).map((key) => (
                <div key={key}>
                  <dt className="label-caps">{fieldLabels[key]}</dt>
                  <dd className="mt-1 text-sm">{String(data[key])}</dd>
                </div>
              ))}
            </dl>
          )}
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            onClick={onReset}
            className="gradient-primary flex-1 rounded-xl px-6 py-3.5 text-sm font-bold text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[var(--shadow-glow)]"
          >
            🔄 New Prediction
          </button>
          <Link
            to="/about"
            className="flex-1 rounded-xl border border-border px-6 py-3.5 text-center text-sm font-semibold text-muted-foreground transition-all duration-300 hover:text-foreground"
          >
            📊 About the Model
          </Link>
        </div>
      </div>
    </main>
  );
}
