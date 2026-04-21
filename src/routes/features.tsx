import { createFileRoute, Link } from "@tanstack/react-router";
import { ScanBarcode, Pill, Boxes, Thermometer, Truck, FileCheck, ShieldCheck, LineChart, Users, Bell, Building2, Smartphone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/features")({
  head: () => ({
    meta: [
      { title: "Features — Apotek Pro pharmacy SaaS" },
      { name: "description", content: "POS, prescriptions, batch/expiry inventory, suppliers, reports and compliance — a complete pharmacy toolkit." },
      { property: "og:title", content: "Features — Apotek Pro" },
      { property: "og:description", content: "The full feature list of Apotek Pro by Zanscode." },
    ],
  }),
  component: FeaturesPage,
});

const groups = [
  {
    title: "Counter & dispensing",
    items: [
      { icon: ScanBarcode, t: "Point of sale", d: "Barcode/QR scan, multi-tender, receipts and label printing." },
      { icon: Pill, t: "Prescription dispensing", d: "Rx intake, dosage/interaction checks, counsel prompts, refills." },
      { icon: Users, t: "Patient profiles", d: "Allergies, chronic meds and history for safer dispensing." },
      { icon: Smartphone, t: "Tablet & kiosk mode", d: "Works beautifully on counter PCs, tablets and kiosks." },
    ],
  },
  {
    title: "Inventory & supply",
    items: [
      { icon: Boxes, t: "Batch & lot tracking", d: "Every unit traceable by batch, lot and expiry." },
      { icon: Thermometer, t: "Expiry & FEFO", d: "Near-expiry alerts and automatic first-expire-first-out picks." },
      { icon: Truck, t: "Suppliers & POs", d: "Purchase orders, goods receipt, and distributor management." },
      { icon: Building2, t: "Multi-branch", d: "Transfer stock across branches with a full audit trail." },
    ],
  },
  {
    title: "Insights & compliance",
    items: [
      { icon: LineChart, t: "Real-time analytics", d: "Sales, margins, fast-movers and branch comparison dashboards." },
      { icon: FileCheck, t: "Compliance reports", d: "Narcotics register, tax exports and audit-ready logs." },
      { icon: ShieldCheck, t: "Role-based access", d: "Pharmacist, cashier and admin permissions with activity logs." },
      { icon: Bell, t: "Smart alerts", d: "Low stock, expiry, cash variance and anomaly notifications." },
    ],
  },
];

function FeaturesPage() {
  return (
    <SiteLayout>
      <section className="bg-gradient-hero py-24 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal variant="up">
            <span className="text-sm font-semibold uppercase tracking-wider text-brand-cyan">Features</span>
            <h1 className="mt-3 text-4xl font-bold sm:text-5xl">Every workflow, covered.</h1>
            <p className="mt-5 text-lg text-white/80">From the first scan to the month-end report — Apotek Pro has it.</p>
          </Reveal>
        </div>
      </section>

      {groups.map((g, gi) => (
        <section key={g.title} className={gi % 2 === 0 ? "bg-background py-20" : "bg-surface py-20"}>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal variant="up">
              <h2 className="text-2xl font-bold sm:text-3xl">{g.title}</h2>
            </Reveal>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {g.items.map((f, i) => (
                <Reveal key={f.t} variant="up" delay={i * 100} as="div">
                  <div className="lift group h-full rounded-2xl border border-border bg-card p-6 shadow-soft hover:shadow-brand hover:border-brand/40">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-brand text-brand-foreground transition-transform duration-300 group-hover:scale-110">
                      <f.icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 text-base font-semibold">{f.t}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{f.d}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="bg-background py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal variant="up">
            <h2 className="text-3xl font-bold sm:text-4xl">See it in motion</h2>
            <p className="mt-4 text-muted-foreground">Explore the product pages or book a live walkthrough.</p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button asChild variant="brand" size="xl"><Link to="/product">Product tour <ArrowRight className="ml-1 h-4 w-4" /></Link></Button>
              <Button asChild variant="outline" size="xl"><Link to="/contact">Book a demo</Link></Button>
            </div>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}
