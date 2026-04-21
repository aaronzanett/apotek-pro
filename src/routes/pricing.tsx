import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Apotek Pro" },
      { name: "description", content: "Transparent plans for single pharmacies, growing chains and enterprise groups." },
      { property: "og:title", content: "Pricing — Apotek Pro" },
      { property: "og:description", content: "Plans for every pharmacy size, from a single counter to multi-branch enterprises." },
    ],
  }),
  component: PricingPage,
});

const tiers = [
  {
    name: "Starter",
    price: "$49",
    cadence: "/ branch / month",
    desc: "For single-location pharmacies getting organized.",
    features: ["1 branch, up to 3 users", "POS & prescription dispensing", "Inventory with expiry tracking", "Daily sales reports", "Email support"],
    cta: "Start with Starter",
    highlighted: false,
  },
  {
    name: "Growth",
    price: "$129",
    cadence: "/ branch / month",
    desc: "For growing chains that need real coordination.",
    features: ["Up to 10 users per branch", "Multi-branch stock transfers", "Supplier & PO management", "Compliance & narcotics register", "Priority chat support"],
    cta: "Choose Growth",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    cadence: "annual contract",
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
  return (
    <SiteLayout>
      <section className="bg-gradient-hero py-24 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal variant="up">
            <span className="text-sm font-semibold uppercase tracking-wider text-brand-cyan">Pricing</span>
            <h1 className="mt-3 text-4xl font-bold sm:text-5xl">Plans that grow with your pharmacy</h1>
            <p className="mt-5 text-lg text-white/80">Simple per-branch pricing. No hidden fees, no surprise add-ons.</p>
          </Reveal>
        </div>
      </section>

      <section className="bg-background py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-3">
            {tiers.map((t, i) => (
              <Reveal key={t.name} variant="up" delay={i * 150} as="div">
                <div className={`lift h-full rounded-2xl border p-8 shadow-soft ${t.highlighted ? "border-brand bg-card shadow-brand" : "border-border bg-card"}`}>
                  {t.highlighted && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-gradient-brand px-3 py-1 text-xs font-medium text-brand-foreground">Most popular</span>
                  )}
                  <h3 className="mt-4 text-xl font-semibold">{t.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{t.desc}</p>
                  <div className="mt-6 flex items-baseline gap-2">
                    <span className="text-4xl font-bold">{t.price}</span>
                    <span className="text-sm text-muted-foreground">{t.cadence}</span>
                  </div>
                  <ul className="mt-6 space-y-3 text-sm">
                    {t.features.map((f) => (
                      <li key={f} className="flex items-start gap-2">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-cyan" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild size="lg" variant={t.highlighted ? "brand" : "outline"} className="mt-8 w-full">
                    <Link to="/contact">{t.cta} <ArrowRight className="ml-1 h-4 w-4" /></Link>
                  </Button>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Reveal variant="up" className="text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Frequently asked</h2>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {faqs.map((f, i) => (
              <Reveal key={f.q} variant="up" delay={i * 120} as="div">
                <div className="lift rounded-2xl border border-border bg-card p-6">
                  <h3 className="font-semibold">{f.q}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{f.a}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
