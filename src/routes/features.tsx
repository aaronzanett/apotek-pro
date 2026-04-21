import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ScanBarcode, Pill, Boxes, Thermometer, Truck, FileCheck, ShieldCheck,
  LineChart, Users, Bell, Building2, Smartphone, ArrowUpRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/features")({
  head: () => ({
    meta: [
      { title: "Features — Apotek Pro" },
      { name: "description", content: "POS, prescriptions, batch/expiry inventory, suppliers, reports and compliance — every pharmacy workflow covered." },
      { property: "og:title", content: "Features — Apotek Pro" },
      { property: "og:description", content: "The full feature list of Apotek Pro by Zanscode." },
    ],
  }),
  component: FeaturesPage,
});

const groups = [
  {
    number: "01",
    title: "Counter & dispensing",
    desc: "The experience your cashiers and pharmacists actually enjoy.",
    items: [
      { icon: ScanBarcode, t: "Point of sale", d: "Barcode/QR scan, multi-tender, receipts and label printing." },
      { icon: Pill, t: "Prescription dispensing", d: "Rx intake, dosage/interaction checks, counsel prompts, refills." },
      { icon: Users, t: "Patient profiles", d: "Allergies, chronic meds and history for safer dispensing." },
      { icon: Smartphone, t: "Tablet & kiosk mode", d: "Works beautifully on counter PCs, tablets and kiosks." },
    ],
  },
  {
    number: "02",
    title: "Inventory & supply",
    desc: "Batch-level control that makes expiry losses a thing of the past.",
    items: [
      { icon: Boxes, t: "Batch & lot tracking", d: "Every unit traceable by batch, lot and expiry date." },
      { icon: Thermometer, t: "Expiry & FEFO", d: "Near-expiry alerts and first-expire-first-out picks." },
      { icon: Truck, t: "Suppliers & POs", d: "Purchase orders, goods receipt, distributor management." },
      { icon: Building2, t: "Multi-branch", d: "Transfer stock across branches with a full audit trail." },
    ],
  },
  {
    number: "03",
    title: "Insights & compliance",
    desc: "Audit-ready at any moment. Insights where you need them.",
    items: [
      { icon: LineChart, t: "Real-time analytics", d: "Sales, margins, fast-movers and branch comparison." },
      { icon: FileCheck, t: "Compliance reports", d: "Narcotics register, tax exports and audit-ready logs." },
      { icon: ShieldCheck, t: "Role-based access", d: "Pharmacist, cashier and admin permissions with logs." },
      { icon: Bell, t: "Smart alerts", d: "Low stock, expiry, cash variance and anomaly detection." },
    ],
  },
];

function FeaturesPage() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="bg-background pt-20 pb-16 lg:pt-28 lg:pb-24">
        <div className="mx-auto max-w-5xl px-5 sm:px-8 lg:px-10">
          <Reveal variant="up">
            <p className="kicker">Features</p>
            <h1 className="mt-5 font-display text-5xl leading-[1.02] text-foreground sm:text-6xl lg:text-7xl">
              Every workflow,<br />
              <em className="serif-italic text-brand">covered.</em>
            </h1>
            <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
              From the first scan to the month-end report — Apotek Pro is built
              around the real shape of pharmacy work.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Feature groups — magazine layout */}
      {groups.map((g, gi) => (
        <section key={g.title} className={`${gi % 2 === 0 ? "bg-cream paper-grain" : "bg-background"} py-20 lg:py-28 relative`}>
          <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="grid gap-10 lg:grid-cols-12">
              <Reveal variant="up" className="lg:col-span-4">
                <div className="font-display text-7xl text-brand lg:text-8xl">{g.number}</div>
                <div className="mt-6 h-px w-12 bg-border" />
                <h2 className="mt-6 font-display text-3xl leading-tight text-foreground sm:text-4xl">{g.title}</h2>
                <p className="mt-4 text-muted-foreground">{g.desc}</p>
              </Reveal>

              <div className="lg:col-span-8">
                <div className="grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2">
                  {g.items.map((f, i) => (
                    <Reveal key={f.t} variant="up" delay={i * 90} as="div">
                      <div className="card-hover group flex h-full flex-col bg-background p-7 lg:p-8">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cream text-brand transition-colors group-hover:bg-ink group-hover:text-background">
                          <f.icon className="h-4.5 w-4.5" />
                        </div>
                        <h3 className="mt-6 text-lg font-medium text-foreground">{f.t}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.d}</p>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="bg-ink py-20 text-background lg:py-28">
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-8 lg:px-10">
          <Reveal variant="up">
            <h2 className="font-display text-4xl leading-tight sm:text-5xl lg:text-6xl">
              See it in <em className="serif-italic text-brand-accent">motion.</em>
            </h2>
            <p className="mx-auto mt-6 max-w-lg text-background/70">Explore the product tour or book a guided walkthrough tailored to your branches.</p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Button asChild size="lg" variant="hero" className="group">
                <Link to="/product">Product tour <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></Link>
              </Button>
              <Button asChild size="lg" variant="ghost" className="text-background hover:bg-background/10 hover:text-background">
                <Link to="/contact">Book a demo</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}
