import { Link } from "@tanstack/react-router";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5">
        <Link to="/" className="flex items-center gap-2 text-base font-extrabold tracking-tight">
          <span aria-hidden className="text-lg">
            🛡️
          </span>
          RoadGuard <span className="gradient-text">AI</span>
        </Link>
        <nav className="flex items-center gap-1 text-sm">
          <Link
            to="/"
            className="rounded-md px-3 py-2 text-muted-foreground transition-colors duration-300 hover:text-foreground"
            activeProps={{ className: "text-foreground" }}
            activeOptions={{ exact: true }}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="rounded-md px-3 py-2 text-muted-foreground transition-colors duration-300 hover:text-foreground"
            activeProps={{ className: "text-foreground" }}
          >
            About
          </Link>
          <Link
            to="/predict"
            className="gradient-primary ml-2 rounded-lg px-4 py-2 font-semibold text-primary-foreground transition-all duration-300 hover:shadow-[var(--shadow-glow)]"
          >
            Predict
          </Link>
        </nav>
      </div>
    </header>
  );
}
