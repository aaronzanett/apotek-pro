import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight, ArrowLeft, Mail, Lock, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Wordmark } from "@/components/site/Wordmark";
import { Reveal } from "@/components/site/Reveal";
import { useLang, type Lang } from "@/lib/i18n";
import { signInDemo, DEMO_OWNER } from "@/lib/demo-session";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Masuk pemilik apotek — Apotek Pro" },
      { name: "description", content: "Masuk ke dasbor Apotek Pro untuk mengelola cabang, stok, dan resep apotek Anda." },
      { property: "og:title", content: "Masuk — Apotek Pro" },
      { property: "og:description", content: "Masuk ke dasbor pemilik apotek Apotek Pro." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: LoginPage,
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

function LoginPage() {
  const { t } = useLang();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Demo: any credentials work
    signInDemo(email);
    navigate({ to: "/app" });
  };

  const fillDemo = () => {
    setEmail(DEMO_OWNER.email);
    setPassword("demo1234");
  };

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
        {/* Left — editorial */}
        <Reveal variant="up" className="hidden lg:col-span-2 lg:block">
          <div className="sticky top-10 rounded-3xl border border-border bg-cream p-10">
            <p className="kicker">{t("login.kicker")}</p>
            <h1 className="mt-6 font-display text-5xl leading-[1.05] text-foreground">
              {t("login.h1")}
            </h1>
            <p className="mt-6 max-w-md text-base text-muted-foreground">{t("login.lead")}</p>
            <p className="mt-10 text-xs uppercase tracking-[0.18em] text-muted-foreground">
              {t("auth.brandLine")}
            </p>
          </div>
        </Reveal>

        {/* Right — form */}
        <Reveal variant="up" delay={120} className="lg:col-span-3">
          <div className="mx-auto max-w-md">
            <div className="lg:hidden">
              <p className="kicker">{t("login.kicker")}</p>
              <h1 className="mt-4 font-display text-4xl leading-tight text-foreground">{t("login.h1")}</h1>
              <p className="mt-4 text-muted-foreground">{t("login.lead")}</p>
            </div>

            {/* Demo helper */}
            <div className="mt-6 rounded-2xl border border-brand/30 bg-brand/[0.05] p-4">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-brand/15 text-brand">
                  <Sparkles className="h-3.5 w-3.5" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-foreground">{t("login.demo.title")}</p>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                    {t("login.demo.body")}
                  </p>
                  <button
                    type="button"
                    onClick={fillDemo}
                    className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-brand/30 bg-background px-3 py-1.5 text-xs font-medium text-brand transition-colors hover:bg-brand hover:text-brand-foreground"
                  >
                    {t("login.demo.fill")}
                    <ArrowUpRight className="h-3 w-3" />
                  </button>
                </div>
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              className="mt-5 rounded-3xl border border-border bg-background p-7 shadow-card lg:p-9"
            >
              <Button type="button" variant="outline" size="lg" className="w-full" onClick={handleSubmit}>
                <GoogleIcon /> {t("auth.google")}
              </Button>

              <div className="my-6 flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                <div className="h-px flex-1 bg-border" />
                {t("auth.or")}
                <div className="h-px flex-1 bg-border" />
              </div>

              <label className="block">
                <span className="kicker m-0">{t("auth.email")}</span>
                <div className="mt-2 relative">
                  <Mail className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <input
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t("auth.emailPh")}
                    className="block w-full rounded-xl border border-border bg-cream px-10 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
                  />
                </div>
              </label>

              <label className="mt-4 block">
                <div className="flex items-center justify-between">
                  <span className="kicker m-0">{t("auth.password")}</span>
                  <a href="#" className="text-xs text-brand hover:underline">{t("auth.forgot")}</a>
                </div>
                <div className="mt-2 relative">
                  <Lock className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <input
                    required
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder={t("auth.passwordPh")}
                    className="block w-full rounded-xl border border-border bg-cream px-10 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
                  />
                </div>
              </label>

              <label className="mt-5 inline-flex items-center gap-2 text-sm text-muted-foreground">
                <input type="checkbox" className="h-4 w-4 rounded border-border text-brand focus:ring-brand/30" />
                {t("auth.remember")}
              </label>

              <Button type="submit" variant="emerald" size="lg" className="mt-6 w-full group">
                {t("login.submit")}
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Button>
            </form>

            <div className="mt-6 space-y-2 text-center text-sm">
              <p className="text-muted-foreground">
                {t("login.noAccount")}{" "}
                <Link to="/register" className="font-medium text-brand hover:underline">
                  {t("login.register")}
                </Link>
              </p>
              <p className="text-xs text-muted-foreground">
                {t("login.adminHint")}{" "}
                <Link to="/admin/login" className="hover:text-foreground hover:underline">
                  {t("login.adminLink")}
                </Link>
              </p>
            </div>
          </div>
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
