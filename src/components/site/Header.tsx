import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Wordmark } from "./Wordmark";
import { cn } from "@/lib/utils";
import { useLang, type Lang } from "@/lib/i18n";

function LangSwitch({ className }: { className?: string }) {
  const { lang, setLang } = useLang();
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border border-border bg-cream/60 p-0.5 text-xs font-medium",
        className
      )}
      role="group"
      aria-label="Language"
    >
      <Globe className="ml-2 mr-1 h-3.5 w-3.5 text-muted-foreground" aria-hidden />
      {(["id", "en"] as Lang[]).map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          className={cn(
            "rounded-full px-2.5 py-1 uppercase tracking-wider transition-all",
            lang === l ? "bg-ink text-background" : "text-muted-foreground hover:text-foreground"
          )}
        >
          {l}
        </button>
      ))}
    </div>
  );
}

export function Header() {
  const { t } = useLang();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const nav = [
    { to: "/", label: t("nav.home") },
    { to: "/features", label: t("nav.features") },
    { to: "/product", label: t("nav.product") },
    { to: "/pricing", label: t("nav.pricing") },
    { to: "/about", label: t("nav.about") },
    { to: "/contact", label: t("nav.contact") },
  ] as const;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) {
      const original = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => { document.body.style.overflow = original; };
    }
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10 py-3">
        <Link to="/" className="flex items-center gap-2 shrink-0" onClick={() => setOpen(false)}>
          <Wordmark className="h-8 w-auto" />
        </Link>

        <nav className="hidden items-center gap-0.5 md:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              preload="render"
              className="relative rounded-full px-3.5 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground [&.active]:text-foreground"
              activeProps={{
                className:
                  "relative rounded-full px-3.5 py-2 text-sm font-medium text-foreground active",
              }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <LangSwitch />
          <Link
            to="/login"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            {t("cta.signin")}
          </Link>
          <Button asChild size="sm" variant="brand" className="group">
            <Link to="/register">
              {t("cta.demo")}
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </Button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <LangSwitch />
          <button
            className={cn(
              "relative inline-flex h-10 w-10 items-center justify-center rounded-full text-foreground transition-colors hover:bg-secondary",
              open && "bg-secondary"
            )}
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            <Menu className={cn("absolute h-5 w-5 transition-all duration-300", open ? "rotate-90 scale-0 opacity-0" : "opacity-100")} />
            <X className={cn("absolute h-5 w-5 transition-all duration-300", open ? "opacity-100" : "-rotate-90 scale-0 opacity-0")} />
          </button>
        </div>
      </div>

      <div
        className={cn(
          "fixed inset-x-0 top-18 bottom-0 z-40 bg-background/70 backdrop-blur-sm transition-opacity duration-300 md:hidden",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        )}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />
      <div
        className={cn(
          "fixed inset-x-0 top-18 z-40 origin-top border-b border-border bg-background shadow-card transition-all duration-300 ease-out md:hidden",
          open ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-3 opacity-0"
        )}
      >
        <nav className="mx-auto max-w-7xl px-5 py-4 sm:px-6">
          <ul className="space-y-1">
            {nav.map((n, i) => (
              <li
                key={n.to}
                className={cn("transform transition-all duration-300", open ? "translate-x-0 opacity-100" : "-translate-x-2 opacity-0")}
                style={{ transitionDelay: open ? `${60 + i * 35}ms` : "0ms" }}
              >
                <Link
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between rounded-xl px-4 py-3 font-display text-lg text-foreground transition-colors hover:bg-secondary"
                  activeOptions={{ exact: n.to === "/" }}
                >
                  <span>{n.label}</span>
                  <ArrowUpRight className="h-4 w-4 opacity-40" />
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-4 grid gap-2">
            <Button asChild size="lg" variant="brand" className="w-full">
              <Link to="/register" onClick={() => setOpen(false)}>
                {t("cta.demo")}
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="w-full">
              <Link to="/login" onClick={() => setOpen(false)}>
                {t("cta.signin")}
              </Link>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
