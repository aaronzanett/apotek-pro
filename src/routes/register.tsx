import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight, ArrowLeft, Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Wordmark } from "@/components/site/Wordmark";
import { Reveal } from "@/components/site/Reveal";
import { useLang, type Lang } from "@/lib/i18n";

export const Route = createFileRoute("/register")({
  head: () => ({
    meta: [{ property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }, 
      { title: "Free Demo Registration — Apotek Pro" },
      { name: "description", content: "Buat akun pemilik apotek dan coba Apotek Pro gratis. Tanpa kartu kredit." },
      { property: "og:title", content: "Free Demo Registration — Apotek Pro" },
      { property: "og:description", content: "Mulai apotek Anda di Apotek Pro dalam hitungan menit." },
    ],
  }),
  component: RegisterPage,
});

function LangPill() {
  const { lang, setLang } = useLang();
  return (
    <div className="inline-flex items-center rounded-full border border-border bg-cream/60 p-0.5 text-xs font-medium" role="group" aria-label="Language">
      {(["id", "en"] as Lang[]).map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          className={`rounded-full px-2.5 py-1 uppercase tracking-wider transition-all ${lang === l ? "bg-ink text-background" : "text-muted-foreground hover:text-foreground"}`}
        >
          {l}
        </button>
      ))}
    </div>
  );
}

function RegisterPage() {
  const { t } = useLang();
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-background paper-grain">
      <header className="mx-auto flex max-w-7xl items-center justify-between px-5 py-6 sm:px-8 lg:px-10">
        <Link to="/" className="flex items-center gap-2">
          <Wordmark className="h-8 w-auto" />
        </Link>
        <div className="flex items-center gap-3">
          <LangPill />
          <Link to="/" className="hidden items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground sm:inline-flex">
            <ArrowLeft className="h-3.5 w-3.5" /> {t("auth.backHome")}
          </Link>
        </div>
      </header>

      <main className="mx-auto grid max-w-7xl gap-12 px-5 pb-20 pt-6 sm:px-8 lg:grid-cols-5 lg:gap-16 lg:px-10 lg:pt-10">
        {/* Left — editorial + benefits */}
        <Reveal variant="up" className="lg:col-span-2">
          <div className="rounded-3xl border border-border bg-cream p-8 lg:p-10">
            <p className="kicker">{t("register.kicker")}</p>
            <h1 className="mt-6 font-display text-4xl leading-[1.05] text-foreground sm:text-5xl">
              {t("register.h1.line1")}<br />
              <em className="serif-italic text-brand">{t("register.h1.italic")}</em>
            </h1>
            <p className="mt-6 max-w-md text-muted-foreground">{t("register.lead")}</p>

            <ul className="mt-10 space-y-4 text-sm">
              {[t("register.benefit1"), t("register.benefit2"), t("register.benefit3")].map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-brand/10 text-brand">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-foreground">{b}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1.5 text-xs text-muted-foreground">
              <Sparkles className="h-3.5 w-3.5 text-brand" /> {t("auth.brandLine")}
            </div>
          </div>
        </Reveal>

        {/* Right — form */}
        <Reveal variant="up" delay={120} className="lg:col-span-3">
          <form
            onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
            className="rounded-3xl border border-border bg-background p-7 shadow-card lg:p-10"
          >
            <Button type="button" variant="outline" size="lg" className="w-full">
              <GoogleIcon /> {t("auth.google")}
            </Button>

            <div className="my-6 flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-muted-foreground">
              <div className="h-px flex-1 bg-border" />
              {t("auth.or")}
              <div className="h-px flex-1 bg-border" />
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block sm:col-span-2">
                <span className="kicker m-0">{t("register.fullName")}</span>
                <input required type="text" placeholder={t("register.fullNamePh")} className="mt-2 block w-full rounded-xl border border-border bg-cream px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20" />
              </label>
              <label className="block">
                <span className="kicker m-0">{t("auth.email")}</span>
                <input required type="email" placeholder={t("auth.emailPh")} className="mt-2 block w-full rounded-xl border border-border bg-cream px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20" />
              </label>
              <label className="block">
                <span className="kicker m-0">{t("register.phone")}</span>
                <input required type="tel" placeholder={t("register.phonePh")} className="mt-2 block w-full rounded-xl border border-border bg-cream px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20" />
              </label>
              <label className="block">
                <span className="kicker m-0">{t("register.pharmacy")}</span>
                <input required type="text" placeholder={t("register.pharmacyPh")} className="mt-2 block w-full rounded-xl border border-border bg-cream px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20" />
              </label>
              <label className="block">
                <span className="kicker m-0">{t("register.branches")}</span>
                <select className="mt-2 block w-full rounded-xl border border-border bg-cream px-4 py-3 text-sm text-foreground focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20">
                  <option>1</option>
                  <option>2–5</option>
                  <option>6–20</option>
                  <option>20+</option>
                </select>
              </label>
              <label className="block sm:col-span-2">
                <span className="kicker m-0">{t("auth.password")}</span>
                <input required type="password" placeholder={t("auth.passwordPh")} className="mt-2 block w-full rounded-xl border border-border bg-cream px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20" />
              </label>
            </div>

            <p className="mt-6 text-xs text-muted-foreground">
              {t("register.terms.before")}
              <a href="#" className="text-foreground underline underline-offset-2">{t("register.terms.tos")}</a>
              {t("register.terms.and")}
              <a href="#" className="text-foreground underline underline-offset-2">{t("register.terms.privacy")}</a>.
            </p>

            <Button type="submit" variant="emerald" size="lg" className="mt-6 w-full group">
              {submitted ? <><Check className="h-4 w-4" /> OK</> : <>{t("register.submit")} <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></>}
            </Button>

            <p className="mt-6 text-center text-sm text-muted-foreground">
              {t("register.haveAccount")}{" "}
              <Link to="/login" className="font-medium text-brand hover:underline">
                {t("register.signin")}
              </Link>
            </p>
          </form>
        </Reveal>
      </main>
    </div>
  );
}

function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden>
      <path fill="#EA4335" d="M12 10.2v3.9h5.5c-.2 1.4-1.6 4.1-5.5 4.1-3.3 0-6-2.7-6-6.2s2.7-6.2 6-6.2c1.9 0 3.1.8 3.9 1.5l2.6-2.5C16.9 3.3 14.7 2.4 12 2.4 6.7 2.4 2.4 6.7 2.4 12s4.3 9.6 9.6 9.6c5.5 0 9.2-3.9 9.2-9.4 0-.6-.1-1.1-.2-1.6H12z"/>
    </svg>
  );
}
