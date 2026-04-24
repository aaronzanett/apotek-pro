import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, Lock, Mail, ShieldCheck, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Wordmark } from "@/components/site/Wordmark";
import { useLang, type Lang } from "@/lib/i18n";

export const Route = createFileRoute("/admin/login")({
  head: () => ({
    meta: [
      { title: "Konsol Admin — Apotek Pro" },
      { name: "description", content: "Akses internal untuk tim Zanscode." },
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
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-ink text-background">
      <header className="mx-auto flex max-w-7xl items-center justify-between px-5 py-6 sm:px-8 lg:px-10">
        <Link to="/" className="flex items-center gap-2">
          <Wordmark className="h-8 w-auto text-background [&_*]:text-background" />
        </Link>
        <div className="flex items-center gap-3">
          <LangPill />
          <Link to="/" className="hidden items-center gap-1.5 text-sm text-white/60 transition-colors hover:text-white sm:inline-flex">
            <ArrowLeft className="h-3.5 w-3.5" /> {t("auth.backHome")}
          </Link>
        </div>
      </header>

      <main className="mx-auto flex min-h-[calc(100vh-100px)] max-w-md flex-col justify-center px-5 pb-20 sm:px-8">
        <div className="mb-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs uppercase tracking-[0.18em] text-white/70">
            <ShieldCheck className="h-3.5 w-3.5" />
            {t("admin.kicker")}
          </div>
          <h1 className="mt-6 font-display text-4xl leading-tight text-background sm:text-5xl">
            {t("admin.h1")}
          </h1>
          <p className="mt-4 text-sm text-white/60">{t("admin.lead")}</p>
        </div>

        <form
          onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
          className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-sm sm:p-8"
        >
          <label className="block">
            <span className="text-xs uppercase tracking-[0.18em] text-white/60">{t("admin.email")}</span>
            <div className="mt-2 relative">
              <Mail className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40" />
              <input required type="email" placeholder={t("admin.emailPh")} className="block w-full rounded-xl border border-white/10 bg-white/5 px-10 py-3 text-sm text-background placeholder:text-white/30 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30" />
            </div>
          </label>

          <label className="mt-4 block">
            <span className="text-xs uppercase tracking-[0.18em] text-white/60">{t("auth.password")}</span>
            <div className="mt-2 relative">
              <Lock className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40" />
              <input required type="password" placeholder={t("auth.passwordPh")} className="block w-full rounded-xl border border-white/10 bg-white/5 px-10 py-3 text-sm text-background placeholder:text-white/30 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30" />
            </div>
          </label>

          <label className="mt-4 block">
            <span className="text-xs uppercase tracking-[0.18em] text-white/60">{t("admin.totp")}</span>
            <input required type="text" inputMode="numeric" pattern="[0-9]{6}" maxLength={6} placeholder={t("admin.totpPh")} className="mt-2 block w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center text-lg tracking-[0.4em] text-background placeholder:text-white/20 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30" />
          </label>

          <Button type="submit" variant="emerald" size="lg" className="mt-6 w-full">
            {submitted ? <><Check className="h-4 w-4" /> OK</> : t("admin.submit")}
          </Button>

          <p className="mt-5 text-center text-xs text-white/40">
            {t("admin.notice")}
          </p>
        </form>

        <p className="mt-6 text-center text-sm text-white/50">
          {t("admin.ownerHint")}{" "}
          <Link to="/login" className="text-background hover:underline">
            {t("admin.ownerLink")}
          </Link>
        </p>
      </main>
    </div>
  );
}
