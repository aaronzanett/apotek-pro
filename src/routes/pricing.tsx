import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Check, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Apotek Pro" },
      { name: "description", content: "Transparent per-branch pricing for single pharmacies, growing chains and enterprise groups." },
      { property: "og:title", content: "Pricing — Apotek Pro" },
      { property: "og:description", content: "Plans for every pharmacy size, from a single counter to multi-branch enterprises." },
    ],
  }),
  component: PricingPage,
});

type Cadence = "monthly" | "annual";

const tiers = [
  {
    name: "Starter",
    monthly: 49, annual: 39,
    desc: "For single-location pharmacies getting organized.",
    features: ["1 branch, up to 3 users", "POS & prescription dispensing", "Inventory with expiry tracking", "Daily sales reports", "Email support"],
    cta: "Start with Starter",
    highlighted: false,
  },
  {
    name: "Growth",
    monthly: 129, annual: 99,
    desc: "For growing chains that need real coordination.",
    features: ["Up to 10 users per branch", "Multi-branch stock transfers", "Supplier & PO management", "Compliance & narcotics register", "Priority chat support"],
    cta: "Choose Growth",
    highlighted: true,
  },
  {
    name: "Enterprise",
    monthly: null, annual: null,
    desc: "For groups needing SSO, SLAs and custom integrations.",
    features: ["Unlimited users & branches", "SSO + advanced RBAC", "Custom integrations & API", "Dedicated success manager", "99.99% uptime SLA"],
    cta: "Contact sales",
    highlighted: false,
  },
];

const faqs = [
  { q: "Do you offer onboarding help?", a: "Yes — every plan includes guided onboarding. Growth and Enterprise include data migration from your current system." },
  { q: "Can we try before we buy?", a: "Absolutely. Book a demo and we'll set up a sandbox with your own product list." },
  { q: "Do you support offline counters?", a: "Yes. The POS is offline-tolerant and re-syncs automatically once the connection returns." },
  { q: "Is the data ours?", a: "Always. You can export your full data at any time — no lock-in." },
];

function PricingPage() {
  const [cadence, setCadence] = useState<Cadence>("annual");

  return (
    <SiteLayout>
      {/* Hero */}
      <section className="bg-background pt-20 pb-12 lg:pt-28">
        <div className="mx-auto max-w-5xl px-5 text-center sm:px-8 lg:px-10">
          <Reveal variant="up">
            <p className="kicker">Pricing</p>
            <h1 className="mt-5 font-display text-5xl leading-[1.02] text-foreground sm:text-6xl lg:text-7xl">
              Plans that grow<br />
              with <em className="serif-italic text-brand">your pharmacy.</em>
            </h1>
            <p className="mx-auto mt-8 max-w-xl text-lg text-muted-foreground">
              Simple per-branch pricing. No hidden fees, no surprise add-ons.
            </p>

            {/* Toggle */}
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
                  {c === "monthly" ? "Monthly" : "Annual"}
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

      {/* Tiers */}
      <section className="bg-background pb-24 lg:pb-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-5 lg:grid-cols-3">
            {tiers.map((t, i) => {
              const price = cadence === "monthly" ? t.monthly : t.annual;
              return (
                <Reveal key={t.name} variant="up" delay={i * 130} as="div">
                  <div
                    className={cn(
                      "card-hover relative flex h-full flex-col rounded-3xl border p-8 lg:p-10",
                      t.highlighted
                        ? "border-ink bg-ink text-background shadow-card"
                        : "border-border bg-background shadow-soft"
                    )}
                  >
                    {t.highlighted && (
                      <span className="absolute -top-3 left-8 rounded-full bg-brand px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-brand-foreground">
                        Most popular
                      </span>
                    )}
                    <div className={cn("text-sm font-medium", t.highlighted ? "text-brand-accent" : "text-brand")}>{t.name}</div>
                    <p className={cn("mt-1 text-sm", t.highlighted ? "text-background/70" : "text-muted-foreground")}>{t.desc}</p>

                    <div className="mt-8 flex items-baseline gap-2">
                      {price !== null ? (
                        <>
                          <span className="font-display text-6xl leading-none tracking-tight">${price}</span>
                          <span className={cn("text-sm", t.highlighted ? "text-background/60" : "text-muted-foreground")}>
                            / branch / {cadence === "monthly" ? "mo" : "mo, billed yearly"}
                          </span>
                        </>
                      ) : (
                        <span className="font-display text-5xl leading-none">Custom</span>
                      )}
                    </div>

                    <ul className="mt-8 space-y-3.5 text-sm">
                      {t.features.map((f) => (
                        <li key={f} className="flex items-start gap-3">
                          <Check className={cn("mt-0.5 h-4 w-4 shrink-0", t.highlighted ? "text-brand-accent" : "text-brand")} />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      asChild
                      size="lg"
                      variant={t.highlighted ? "hero" : "brand"}
                      className="mt-10 w-full group"
                    >
                      <Link to="/contact">
                        {t.cta}
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

      {/* FAQ */}
      <section className="bg-cream py-24 paper-grain">
        <div className="relative mx-auto max-w-5xl px-5 sm:px-8 lg:px-10">
          <Reveal variant="up" className="text-center">
            <p className="kicker">FAQ</p>
            <h2 className="mt-4 font-display text-4xl leading-tight text-foreground sm:text-5xl">
              Frequently <em className="serif-italic text-brand">asked.</em>
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
