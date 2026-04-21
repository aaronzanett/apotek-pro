import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Zap } from "lucide-react";
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
    badge: "01 · POS & Dispensing",
    title: "A counter that keeps up at peak hour",
    desc: "Scan, dispense, counsel and print — all from a single screen. Designed by pharmacists for pharmacists.",
    bullets: ["Barcode, QR and manual search", "Insurance & multi-tender", "Label + receipt in one click", "Offline-tolerant sync"],
    img: imgPos,
    alt: "POS and dispensing dashboard preview",
  },
  {
    badge: "02 · Inventory & Expiry",
    title: "Batch-level control, FEFO by default",
    desc: "Every unit is tracked by batch, lot and expiry. Never dispense the wrong one — and never write off near-expiry stock quietly.",
    bullets: ["Batch & lot tracking", "Expiry alerts by window", "Auto-reorder thresholds", "Stock transfers across branches"],
    img: imgInventory,
    alt: "Inventory with expiry and reorder alerts",
    reverse: true,
  },
  {
    badge: "03 · Suppliers & Purchase Orders",
    title: "From PO to goods-received, tracked",
    desc: "Issue purchase orders to distributors, receive goods against them, and reconcile discrepancies before the invoice lands.",
    bullets: ["Distributor catalogs", "PO approvals & limits", "Goods receipt + variance", "Invoice reconciliation"],
    img: imgReports,
    alt: "Supplier and purchase order screen",
  },
  {
    badge: "04 · Reports & Compliance",
    title: "Audit-ready at any moment",
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
      <section className="bg-gradient-hero py-24 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal variant="up">
            <span className="text-sm font-semibold uppercase tracking-wider text-brand-cyan">Product tour</span>
            <h1 className="mt-3 text-4xl font-bold sm:text-5xl">Four modules. One pharmacy platform.</h1>
            <p className="mt-5 text-lg text-white/80">Scroll through each core module and see how they fit together.</p>
          </Reveal>
        </div>
      </section>

      {modules.map((m, i) => (
        <section key={m.badge} className={i % 2 === 0 ? "bg-background py-24" : "bg-surface py-24"}>
          <div className={`mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8 ${m.reverse ? "lg:[&>*:first-child]:order-2" : ""}`}>
            <Reveal variant="up">
              <span className="text-sm font-semibold uppercase tracking-wider text-brand">{m.badge}</span>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">{m.title}</h2>
              <p className="mt-4 text-muted-foreground">{m.desc}</p>
              <ul className="mt-6 space-y-3 text-sm">
                {m.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2 transition-transform duration-300 hover:translate-x-1">
                    <Zap className="h-4 w-4 text-brand-cyan" /> {b}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal variant="scale" delay={200}>
              <div className="relative">
                <div className="absolute -inset-6 rounded-3xl bg-gradient-brand opacity-20 blur-3xl animate-blob-drift" />
                <img src={m.img} alt={m.alt} loading="lazy" width={1280} height={960} className="relative rounded-2xl border border-border shadow-brand transition-transform duration-500 hover:scale-[1.02]" />
              </div>
            </Reveal>
          </div>
        </section>
      ))}

      <section className="bg-background py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal variant="up">
            <h2 className="text-3xl font-bold sm:text-4xl">Want a guided walkthrough?</h2>
            <p className="mt-4 text-muted-foreground">We'll tailor the demo to your branches, suppliers and reporting needs.</p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button asChild variant="brand" size="xl"><Link to="/contact">Book a demo <ArrowRight className="ml-1 h-4 w-4" /></Link></Button>
              <Button asChild variant="outline" size="xl"><Link to="/pricing">See pricing</Link></Button>
            </div>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}
