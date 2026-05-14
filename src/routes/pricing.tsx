import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Check, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import { cn } from "@/lib/utils";
import { useLang, formatPrice } from "@/lib/i18n";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Harga — Apotek Pro" },
      { name: "description", content: "Harga per cabang yang transparan untuk apotek tunggal, jaringan yang berkembang, dan grup enterprise." },
      { property: "og:title", content: "Harga — Apotek Pro" },
      { property: "og:description", content: "Paket untuk setiap ukuran apotek, dari satu konter hingga enterprise multi-cabang." },
    ],
  }),
  component: PricingPage,
});

type Cadence = "monthly" | "annual";

function PricingPage() {
  const { t, lang } = useLang();
  const [cadence, setCadence] = useState<Cadence>("annual");

  const tiers = [
    {
      name: t("pricing.tier.starter"),
      monthly: 49, annual: 39,
      desc: t("pricing.tier.starter.desc"),
      features: [
        t("pricing.starter.f1"), t("pricing.starter.f2"), t("pricing.starter.f3"),
        t("pricing.starter.f4"), t("pricing.starter.f5"),
      ],
      cta: t("pricing.tier.starter.cta"),
      highlighted: false,
    },
    {
      name: t("pricing.tier.growth"),
      monthly: 129, annual: 99,
      desc: t("pricing.tier.growth.desc"),
      features: [
        t("pricing.growth.f1"), t("pricing.growth.f2"), t("pricing.growth.f3"),
        t("pricing.growth.f4"), t("pricing.growth.f5"),
      ],
      cta: t("pricing.tier.growth.cta"),
      highlighted: true,
    },
    {
      name: t("pricing.tier.ent"),
      monthly: null as number | null, annual: null as number | null,
      desc: t("pricing.tier.ent.desc"),
      features: [
        t("pricing.ent.f1"), t("pricing.ent.f2"), t("pricing.ent.f3"),
        t("pricing.ent.f4"), t("pricing.ent.f5"),
      ],
      cta: t("pricing.tier.ent.cta"),
      highlighted: false,
    },
  ];

  const faqs = [
    { q: t("pricing.faq.q1"), a: t("pricing.faq.a1") },
    { q: t("pricing.faq.q2"), a: t("pricing.faq.a2") },
    { q: t("pricing.faq.q3"), a: t("pricing.faq.a3") },
    { q: t("pricing.faq.q4"), a: t("pricing.faq.a4") },
  ];

  return (
    <SiteLayout>
      <section className="bg-background pt-20 pb-12 lg:pt-28">
        <div className="mx-auto max-w-5xl px-5 text-center sm:px-8 lg:px-10">
          <Reveal variant="up">
            <p className="kicker">{t("pricing.kicker")}</p>
            <h1 className="mt-5 font-display text-5xl leading-[1.02] text-foreground sm:text-6xl lg:text-7xl">
              {t("pricing.h1.line1")}<br />
              {t("pricing.h1.line2")}<em className="serif-italic text-brand">{t("pricing.h1.italic")}</em>
            </h1>
            <p className="mx-auto mt-8 max-w-xl text-lg text-muted-foreground">
              {t("pricing.lead")}
            </p>

            <div className="mt-10 inline-flex items-center rounded-full border border-border bg-cream p-1">
              {(["monthly", "annual"] as const).map((c) => (
                <button
                  key={c}
                  onClick={() => setCadence(c)}
                  className={cn(
                    "rounded-full px-5 py-2 text-sm font-medium transition-all",
                    cadence === c
                      ? "bg-ink text-background shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {c === "monthly" ? t("pricing.toggle.monthly") : t("pricing.toggle.annual")}
                  {c === "annual" && (
                    <span className="ml-1.5 rounded-full bg-accent px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-brand">
                      −20%
                    </span>
                  )}
                </button>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-background pb-24 lg:pb-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-5 lg:grid-cols-3">
            {tiers.map((tier, i) => {
              const price = cadence === "monthly" ? tier.monthly : tier.annual;
              return (
                <Reveal key={tier.name} variant="up" delay={i * 130} as="div">
                  <div
                    className={cn(
                      "card-hover relative flex h-full flex-col rounded-3xl border p-8 lg:p-10",
                      tier.highlighted
                        ? "border-ink bg-ink text-background shadow-card"
                        : "border-border bg-background shadow-soft"
                    )}
                  >
                    {tier.highlighted && (
                      <span className="absolute -top-3 left-8 rounded-full bg-brand px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-brand-foreground">
                        {t("pricing.popular")}
                      </span>
                    )}
                    <div className={cn("text-sm font-medium", tier.highlighted ? "text-brand-accent" : "text-brand")}>{tier.name}</div>
                    <p className={cn("mt-1 text-sm", tier.highlighted ? "text-background/70" : "text-muted-foreground")}>{tier.desc}</p>

                    <div className="mt-8 flex items-baseline gap-2">
                      {price !== null ? (
                        <>
                          <span className={cn("font-display leading-none tracking-tight", lang === "id" ? "text-4xl sm:text-5xl" : "text-6xl")}>{formatPrice(price, lang)}</span>
                          <span className={cn("text-sm", tier.highlighted ? "text-background/60" : "text-muted-foreground")}>
                            {cadence === "monthly" ? t("pricing.priceUnit.mo") : t("pricing.priceUnit.yr")}
                          </span>
                        </>
                      ) : (
                        <span className="font-display text-5xl leading-none">{t("pricing.custom")}</span>
                      )}
                    </div>

                    <ul className="mt-8 space-y-3.5 text-sm">
                      {tier.features.map((f) => (
                        <li key={f} className="flex items-start gap-3">
                          <Check className={cn("mt-0.5 h-4 w-4 shrink-0", tier.highlighted ? "text-brand-accent" : "text-brand")} />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      asChild
                      size="lg"
                      variant={tier.highlighted ? "hero" : "brand"}
                      className="mt-10 w-full group"
                    >
                      <Link to="/contact">
                        {tier.cta}
                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </Link>
                    </Button>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-cream py-24 paper-grain">
        <div className="relative mx-auto max-w-5xl px-5 sm:px-8 lg:px-10">
          <Reveal variant="up" className="text-center">
            <p className="kicker">{t("pricing.faq.kicker")}</p>
            <h2 className="mt-4 font-display text-4xl leading-tight text-foreground sm:text-5xl">
              {t("pricing.faq.title")}<em className="serif-italic text-brand">{t("pricing.faq.italic")}</em>
            </h2>
          </Reveal>

          <div className="mt-14 divide-y divide-border border-y border-border">
            {faqs.map((f, i) => (
              <Reveal key={f.q} variant="up" delay={i * 100} as="div">
                <details className="group py-6">
                  <summary className="flex cursor-pointer items-start justify-between gap-4 list-none">
                    <h3 className="font-display text-xl text-foreground sm:text-2xl">{f.q}</h3>
                    <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border bg-background text-foreground transition-transform group-open:rotate-45">
                      <span className="text-lg leading-none">+</span>
                    </span>
                  </summary>
                  <p className="mt-4 max-w-3xl text-muted-foreground">{f.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
