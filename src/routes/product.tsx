import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";

import imgPos from "@/assets/product-pos.jpg";
import imgInventory from "@/assets/product-inventory.jpg";
import imgReports from "@/assets/product-reports.jpg";

export const Route = createFileRoute("/product")({
  head: () => ({
    meta: [
      { title: "Product tour — Apotek Pro" },
      { name: "description", content: "A visual tour of the Apotek Pro modules: POS, inventory & expiry, suppliers and compliance reports." },
      { property: "og:title", content: "Product tour — Apotek Pro" },
      { property: "og:description", content: "See the POS, inventory and reports modules of Apotek Pro." },
      { property: "og:image", content: imgPos },
      { property: "twitter:image", content: imgPos },
    ],
  }),
  component: ProductPage,
});

const modules = [
  {
    n: "01",
    tag: "POS & Dispensing",
    title: "A counter that keeps up",
    italic: "at peak hour.",
    desc: "Scan, dispense, counsel and print — all from one uncluttered screen. Designed by pharmacists, for pharmacists.",
    bullets: ["Barcode, QR and manual search", "Insurance & multi-tender", "Label + receipt in one click", "Offline-tolerant sync"],
    img: imgPos,
    alt: "POS and dispensing dashboard preview",
  },
  {
    n: "02",
    tag: "Inventory & Expiry",
    title: "Batch control,",
    italic: "FEFO by default.",
    desc: "Every unit is tracked by batch, lot and expiry. Never dispense the wrong one — and never write off near-expiry stock quietly.",
    bullets: ["Batch & lot tracking", "Expiry alerts by window", "Auto-reorder thresholds", "Stock transfers across branches"],
    img: imgInventory,
    alt: "Inventory with expiry and reorder alerts",
    reverse: true,
  },
  {
    n: "03",
    tag: "Suppliers & POs",
    title: "From PO to receipt,",
    italic: "tracked.",
    desc: "Issue purchase orders to distributors, receive goods against them, and reconcile discrepancies before the invoice lands.",
    bullets: ["Distributor catalogs", "PO approvals & limits", "Goods receipt + variance", "Invoice reconciliation"],
    img: imgReports,
    alt: "Supplier and purchase order screen",
  },
  {
    n: "04",
    tag: "Reports & Compliance",
    title: "Audit-ready",
    italic: "at any moment.",
    desc: "From daily sales to narcotics register — reports are always one click away, and exports are accepted by your regulator.",
    bullets: ["Sales & margin analytics", "Controlled-substance register", "Tax-ready exports", "Activity & access logs"],
    img: imgReports,
    alt: "Reports and compliance dashboard",
    reverse: true,
  },
];

function ProductPage() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="bg-background pt-20 pb-16 lg:pt-28 lg:pb-24">
        <div className="mx-auto max-w-5xl px-5 sm:px-8 lg:px-10">
          <Reveal variant="up">
            <p className="kicker">Product tour</p>
            <h1 className="mt-5 font-display text-5xl leading-[1.02] text-foreground sm:text-6xl lg:text-7xl">
              Four modules.<br />
              <em className="serif-italic text-brand">One</em> pharmacy platform.
            </h1>
            <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
              Scroll through each core module and see how they fit together.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Modules */}
      {modules.map((m, i) => (
        <section key={m.tag} className={`${i % 2 === 0 ? "bg-cream paper-grain" : "bg-background"} py-20 lg:py-28 relative`}>
          <div className={`relative mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:gap-10 lg:px-10 ${m.reverse ? "lg:[&>*:first-child]:order-2" : ""}`}>
            <Reveal variant="up" className="lg:col-span-5">
              <div className="flex items-center gap-3">
                <span className="font-display text-4xl text-brand">{m.n}</span>
                <span className="h-px w-10 bg-border" />
                <span className="kicker m-0 p-0">{m.tag}</span>
              </div>
              <h2 className="mt-6 font-display text-4xl leading-[1.05] text-foreground sm:text-5xl">
                {m.title}<br />
                <em className="serif-italic text-brand">{m.italic}</em>
              </h2>
              <p className="mt-6 text-lg text-muted-foreground">{m.desc}</p>
              <ul className="mt-8 space-y-3 text-sm">
                {m.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                    <span className="text-foreground">{b}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal variant="scale" delay={200} className="lg:col-span-7">
              <div className="relative">
                <div className="pointer-events-none absolute -inset-6 rounded-[3rem] bg-gradient-brand opacity-10 blur-3xl" />
                <div className="relative overflow-hidden rounded-3xl border border-border bg-background shadow-card">
                  <img src={m.img} alt={m.alt} loading="lazy" width={1280} height={960} className="w-full object-cover" />
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="bg-ink py-20 text-background lg:py-28">
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-8 lg:px-10">
          <Reveal variant="up">
            <h2 className="font-display text-4xl leading-tight sm:text-5xl lg:text-6xl">
              Want a guided <em className="serif-italic text-brand-accent">walkthrough?</em>
            </h2>
            <p className="mx-auto mt-6 max-w-lg text-background/70">We'll tailor the demo to your branches, suppliers and reporting needs.</p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Button asChild size="lg" variant="hero" className="group">
                <Link to="/contact">Book a demo <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></Link>
              </Button>
              <Button asChild size="lg" variant="ghost" className="text-background hover:bg-background/10 hover:text-background">
                <Link to="/pricing">See pricing</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}
