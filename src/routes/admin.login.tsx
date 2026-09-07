import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, ArrowUpRight, KeyRound, Lock, Mail, ShieldCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Wordmark } from "@/components/site/Wordmark";
import { useLang, type Lang } from "@/lib/i18n";
import { signInAdmin, DEMO_ADMIN } from "@/lib/admin-session";

export const Route = createFileRoute("/admin/login")({
  head: () => ({
    meta: [
      { title: "Konsol Admin — Apotek Pro" },
      { name: "description", content: "Akses internal untuk tim Zanscode." },
      { property: "og:title", content: "Konsol Admin — Apotek Pro" },
      { property: "og:description", content: "Akses internal untuk tim Zanscode." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: AdminLoginPage,
});

function LangPill() {
  const { lang, setLang } = useLang();
  return (
    <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 p-0.5 text-xs font-medium" role="group" aria-label="Language">
      {(["id", "en"] as Lang[]).map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          className={`rounded-full px-2.5 py-1 uppercase tracking-wider transition-all ${lang === l ? "bg-background text-ink" : "text-white/60 hover:text-white"}`}
        >
          {l}
        </button>
      ))}
    </div>
  );
}

function AdminLoginPage() {
  const { t } = useLang();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [totp, setTotp] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    signInAdmin(email);
    navigate({ to: "/admin" });
  };

  const handleAutofill = () => {
    setEmail(DEMO_ADMIN.email);
    setPassword("demo-password");
    setTotp("123456");
  };

  return (
    <div className="min-h-screen bg-ink text-background">
      <header className="border-b border-white/10 bg-ink/95 shadow-lg backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
          <Link to="/" className="flex items-center gap-2 [--foreground:var(--background)]" aria-label="Apotek Pro">
            <Wordmark className="h-8 w-auto" />
          </Link>
          <div className="flex items-center gap-3">
            <LangPill />
            <Link to="/" className="hidden items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm font-medium text-white/80 transition-colors hover:border-brand/50 hover:text-white sm:inline-flex">
              <ArrowLeft className="h-3.5 w-3.5" /> {t("auth.backHome")}
            </Link>
          </div>
        </div>
      </header>

      <main className="mx-auto grid max-w-7xl gap-12 px-5 pb-20 pt-6 sm:px-8 lg:grid-cols-5 lg:gap-16 lg:px-10 lg:pt-10">
        <section className="hidden lg:col-span-2 lg:flex lg:min-h-[620px] lg:flex-col lg:justify-between rounded-3xl border border-white/10 bg-white/[0.04] p-10">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-white/70">
              <ShieldCheck className="h-3.5 w-3.5" />
              {t("admin.kicker")}
            </div>
            <h1 className="mt-7 font-display text-5xl leading-[1.05] text-background">
              {t("admin.h1")}
            </h1>
            <p className="mt-6 max-w-sm text-base leading-relaxed text-white/60">{t("admin.lead")}</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-ink/50 p-5">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-brand/30 bg-brand/10 text-brand-accent">
                <KeyRound className="h-4 w-4" />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-background">{t("admin.accessTitle")}</p>
                <p className="mt-1 text-xs text-white/45">{t("admin.accessNote")}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="lg:col-span-3">
          <div className="mx-auto max-w-md">
            <div className="lg:hidden">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-brand-accent">{t("admin.kicker")}</p>
              <h1 className="mt-4 font-display text-4xl leading-tight text-background">{t("admin.h1")}</h1>
              <p className="mt-4 text-white/60">{t("admin.lead")}</p>
            </div>

            <div className="mt-6 rounded-2xl border border-brand/30 bg-brand/10 p-4">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-brand/20 text-brand-accent">
                  <Sparkles className="h-3.5 w-3.5" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-background">{t("login.demo.title")}</p>
                  <p className="mt-1 text-xs leading-relaxed text-white/55">{t("admin.demoBody")}</p>
                  <Button type="button" variant="outline" size="sm" onClick={handleAutofill} className="mt-3 border-brand/30 bg-ink text-brand-accent hover:bg-brand hover:text-brand-foreground">
                    {t("admin.demoFill")} <ArrowUpRight className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="mt-5 rounded-3xl border border-white/10 bg-white/[0.04] p-7 shadow-lg sm:p-9">
              <label className="block">
                <span className="text-xs font-medium uppercase tracking-[0.18em] text-white/60">{t("admin.email")}</span>
                <div className="relative mt-2">
                  <Mail className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40" />
                  <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder={t("admin.emailPh")} className="block w-full rounded-xl border border-white/10 bg-white/5 px-10 py-3 text-sm text-background placeholder:text-white/30 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30" />
                </div>
              </label>

              <label className="mt-4 block">
                <span className="text-xs font-medium uppercase tracking-[0.18em] text-white/60">{t("auth.password")}</span>
                <div className="relative mt-2">
                  <Lock className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40" />
                  <input required type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder={t("auth.passwordPh")} className="block w-full rounded-xl border border-white/10 bg-white/5 px-10 py-3 text-sm text-background placeholder:text-white/30 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30" />
                </div>
              </label>

              <label className="mt-4 block">
                <span className="text-xs font-medium uppercase tracking-[0.18em] text-white/60">{t("admin.totp")}</span>
                <input required type="text" inputMode="numeric" pattern="[0-9]{6}" maxLength={6} value={totp} onChange={(e) => setTotp(e.target.value.replace(/\D/g, ""))} placeholder={t("admin.totpPh")} className="mt-2 block w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center text-lg tracking-[0.4em] text-background placeholder:text-white/20 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30" />
              </label>

              <Button type="submit" variant="emerald" size="lg" className="mt-6 w-full group">
                {t("admin.submit")}
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Button>

              <p className="mt-5 text-center text-xs text-white/40">{t("admin.notice")}</p>
            </form>
            <p className="mt-6 text-center text-sm text-white/50">
              {t("admin.ownerHint")}{" "}
              <Link to="/login" className="font-medium text-background hover:underline">
                {t("admin.ownerLink")}
              </Link>
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
