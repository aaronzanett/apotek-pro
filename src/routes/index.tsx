import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowUpRight, ArrowRight, ScanBarcode, Pill, Boxes, Truck, FileCheck, ShieldCheck,
  Clock, Thermometer, Check, Sparkles, TrendingUp, Users, Quote,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";

import heroBottle from "@/assets/hero-bottle.jpg";
import productPos from "@/assets/product-pos.jpg";
import productInventory from "@/assets/product-inventory.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Apotek Pro — A quieter pharmacy operating system" },
      { name: "description", content: "POS, prescriptions, inventory, suppliers and compliance in one calm, connected platform — built by Zanscode." },
      { property: "og:title", content: "Apotek Pro — A quieter pharmacy operating system" },
      { property: "og:description", content: "POS, prescriptions, inventory, suppliers and compliance in one platform." },
    ],
  }),
  component: HomePage,
});

const trusted = ["MediFarma Group", "Sehat24", "BluePill", "Apotek Sentra", "GoodHealth", "FarmaNova", "VitaCare", "KimiaMed"];

function HomePage() {
  return (
    <SiteLayout>
      {/* ============ HERO — asymmetric editorial ============ */}
      <section className="relative overflow-hidden bg-background pt-10 pb-20 sm:pt-14 lg:pt-20 lg:pb-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
            {/* Copy column */}
            <div className="lg:col-span-7 lg:pt-8">
              <Reveal variant="fade">
                <div className="inline-flex items-center gap-2 rounded-full border border-border bg-cream px-3.5 py-1.5 text-xs font-medium text-foreground">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-60"></span>
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand"></span>
                  </span>
                  A Zanscode product · Now in 6 countries
                </div>
              </Reveal>

              <Reveal variant="up" delay={120}>
                <h1 className="mt-8 font-display text-[clamp(2.75rem,6vw,5.5rem)] leading-[0.98] tracking-tight text-foreground">
                  Your pharmacy,<br />
                  <em className="serif-italic text-brand">quietly</em> organized.
                </h1>
              </Reveal>

              <Reveal variant="up" delay={260}>
                <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground">
                  Apotek Pro replaces six disconnected tools with one calm operating system —
                  so your team can focus on patients, not paperwork.
                </p>
              </Reveal>

              <Reveal variant="up" delay={400}>
                <div className="mt-10 flex flex-wrap items-center gap-3">
                  <Button asChild size="lg" variant="brand" className="group">
                    <Link to="/contact">
                      Book a demo
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link to="/product">Take the product tour</Link>
                  </Button>
                </div>
              </Reveal>

              <Reveal variant="fade" delay={600}>
                <div className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-4 text-sm text-muted-foreground">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="h-8 w-8 rounded-full border-2 border-background"
                        style={{
                          background: `linear-gradient(135deg, oklch(0.${40 + i * 5} 0.1 ${140 + i * 15}), oklch(0.${60 + i * 4} 0.12 ${150 + i * 10}))`,
                        }}
                      />
                    ))}
                  </div>
                  <span>
                    <span className="font-medium text-foreground">500+ pharmacists</span> dispensing through Apotek Pro today.
                  </span>
                </div>
              </Reveal>
            </div>

            {/* Visual column — floating product card + image */}
            <div className="relative lg:col-span-5">
              <Reveal variant="scale" delay={300}>
                <div className="relative">
                  {/* Image */}
                  <div className="relative overflow-hidden rounded-3xl bg-cream shadow-card">
                    <img
                      src={heroBottle}
                      alt="Prescription bottle"
                      className="aspect-[4/5] w-full object-cover"
                      width={1280}
                      height={1024}
                    />
                  </div>

                  {/* Floating stat card — top */}
                  <div className="absolute -left-6 top-10 hidden animate-float-soft sm:block">
                    <div className="rounded-2xl border border-border bg-background p-4 shadow-card">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <TrendingUp className="h-3.5 w-3.5 text-brand" />
                        Expiry losses
                      </div>
                      <div className="mt-1 font-display text-3xl text-foreground">−60%</div>
                      <div className="mt-0.5 text-[11px] text-muted-foreground">in first quarter</div>
                    </div>
                  </div>

                  {/* Floating pill — bottom right */}
                  <div className="absolute -right-4 bottom-16 hidden animate-float-soft sm:block" style={{ animationDelay: "-4s" }}>
                    <div className="rounded-2xl border border-border bg-background p-4 shadow-card">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Clock className="h-3.5 w-3.5 text-brand" />
                        Checkout time
                      </div>
                      <div className="mt-1 font-display text-3xl text-foreground">8.2s</div>
                      <div className="mt-0.5 text-[11px] text-muted-foreground">average at peak hour</div>
                    </div>
                  </div>

                  {/* Compliance badge — bottom left */}
                  <div className="absolute -bottom-5 left-4 right-4 rounded-2xl border border-border bg-background p-4 shadow-card sm:left-10 sm:right-10">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-brand">
                        <ShieldCheck className="h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-medium text-foreground">Audit passed · 14 Mar</div>
                        <div className="text-xs text-muted-foreground">Narcotics register exported in one click</div>
                      </div>
                      <Check className="h-4 w-4 text-brand" />
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ============ LOGO MARQUEE ============ */}
      <section className="border-y border-border bg-cream py-10 overflow-hidden">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <p className="kicker text-center">Trusted by pharmacies across Southeast Asia</p>
        </div>
        <div className="mt-6 flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
          <div className="flex shrink-0 animate-marquee-x gap-14 pr-14">
            {[...trusted, ...trusted].map((name, i) => (
              <span key={i} className="whitespace-nowrap font-display text-2xl text-muted-foreground/60">
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ============ BENTO FEATURES ============ */}
      <section className="bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-12">
            <Reveal variant="up" className="lg:col-span-5">
              <p className="kicker">What's inside</p>
              <h2 className="mt-4 font-display text-4xl leading-[1.05] text-foreground sm:text-5xl lg:text-6xl">
                One platform,<br />
                <em className="serif-italic text-brand">every</em> counter workflow.
              </h2>
            </Reveal>
            <Reveal variant="up" delay={200} className="lg:col-span-7 lg:pt-16">
              <p className="text-lg leading-relaxed text-muted-foreground">
                From the first scan to the month-end compliance report, Apotek Pro is built
                around how pharmacists actually work — not the other way around.
              </p>
              <Link
                to="/features"
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-brand"
              >
                Explore all features <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>

          {/* Bento grid */}
          <div className="mt-16 grid gap-4 lg:grid-cols-6 lg:grid-rows-2">
            {/* Big card — POS */}
            <Reveal variant="up" className="lg:col-span-3 lg:row-span-2" as="div">
              <div className="card-hover group relative flex h-full min-h-[420px] flex-col justify-between overflow-hidden rounded-3xl border border-border bg-cream p-8 shadow-soft">
                <div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-ink text-background">
                    <ScanBarcode className="h-5 w-5" />
                  </div>
                  <h3 className="mt-6 font-display text-3xl text-foreground">POS & Dispensing</h3>
                  <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
                    Scan, dispense, counsel, and print — all from one uncluttered screen.
                    Designed by pharmacists for pharmacists.
                  </p>
                </div>
                <div className="relative mt-8 overflow-hidden rounded-2xl border border-border bg-background">
                  <img src={productPos} alt="POS interface" loading="lazy" width={1280} height={960} className="w-full object-cover" />
                </div>
              </div>
            </Reveal>

            {/* Inventory */}
            <Reveal variant="up" delay={120} className="lg:col-span-3" as="div">
              <div className="card-hover group flex h-full min-h-[200px] flex-col justify-between rounded-3xl border border-border bg-accent p-8 shadow-soft">
                <div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand text-brand-foreground">
                    <Boxes className="h-5 w-5" />
                  </div>
                  <h3 className="mt-6 font-display text-2xl text-foreground">Batch & expiry tracking</h3>
                  <p className="mt-2 text-sm text-accent-foreground/80">Every unit traceable. FEFO by default. Never write off near-expiry stock quietly.</p>
                </div>
              </div>
            </Reveal>

            {/* Compliance */}
            <Reveal variant="up" delay={180} className="lg:col-span-2" as="div">
              <div className="card-hover h-full rounded-3xl border border-border bg-background p-7 shadow-soft">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cream text-brand">
                  <FileCheck className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-base font-medium text-foreground">Audit-ready</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">Narcotics register, tax exports, immutable logs.</p>
              </div>
            </Reveal>

            {/* Rx */}
            <Reveal variant="up" delay={240} className="lg:col-span-1" as="div">
              <div className="card-hover flex h-full flex-col items-start rounded-3xl border border-border bg-ink p-7 text-background shadow-soft">
                <Pill className="h-6 w-6 text-brand-accent" />
                <h3 className="mt-auto pt-8 font-display text-xl">Rx-safe dispensing</h3>
              </div>
            </Reveal>
          </div>

          {/* Supporting row */}
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            {[
              { icon: Truck, t: "Suppliers & POs", d: "PO to goods-received, reconciled." },
              { icon: Thermometer, t: "Cold-chain aware", d: "Temperature-sensitive handling built in." },
              { icon: Users, t: "Patient profiles", d: "Allergies & history for safer dispensing." },
            ].map((f, i) => (
              <Reveal key={f.t} variant="up" delay={i * 100} as="div">
                <div className="card-hover flex items-start gap-4 rounded-2xl border border-border bg-background p-6">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cream text-brand">
                    <f.icon className="h-4.5 w-4.5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-foreground">{f.t}</h4>
                    <p className="mt-0.5 text-sm text-muted-foreground">{f.d}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ LARGE EDITORIAL QUOTE ============ */}
      <section className="relative bg-cream py-24 lg:py-32 paper-grain">
        <div className="relative mx-auto max-w-5xl px-5 text-center sm:px-8 lg:px-10">
          <Reveal variant="up">
            <Quote className="mx-auto h-8 w-8 text-brand" />
            <blockquote className="mt-8 font-display text-3xl leading-[1.2] text-foreground sm:text-4xl lg:text-5xl">
              "We migrated three branches in a weekend. Expiry losses dropped
              <em className="serif-italic text-brand"> sixty percent</em> in the first quarter —
              our pharmacist-in-charge gets his weekends back."
            </blockquote>
            <figcaption className="mt-10 flex items-center justify-center gap-4">
              <div className="h-12 w-12 rounded-full bg-gradient-brand" />
              <div className="text-left">
                <div className="text-sm font-medium text-foreground">Dr. Sari Pratama</div>
                <div className="text-sm text-muted-foreground">Owner · MediFarma Group</div>
              </div>
            </figcaption>
          </Reveal>
        </div>
      </section>

      {/* ============ DASHBOARD PREVIEW ============ */}
      <section className="bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid items-center gap-14 lg:grid-cols-12">
            <Reveal variant="up" className="lg:col-span-5">
              <p className="kicker">Clarity at every level</p>
              <h2 className="mt-4 font-display text-4xl leading-[1.05] text-foreground sm:text-5xl lg:text-6xl">
                See the whole pharmacy,<br />
                <em className="serif-italic text-brand">in one glance.</em>
              </h2>
              <p className="mt-6 text-lg text-muted-foreground">
                Branch-level dashboards from margin to fast-movers to expiry windows — updated live.
              </p>
              <ul className="mt-8 space-y-4 text-sm">
                {[
                  "Real-time sales and margin tracking",
                  "Expiry alerts before they become losses",
                  "Stock transfers across branches",
                  "Exports regulators actually accept",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 border-b border-border pb-4 last:border-0">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button asChild variant="brand" className="group">
                  <Link to="/product">
                    See the product tour
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </Button>
              </div>
            </Reveal>

            <Reveal variant="scale" delay={200} className="lg:col-span-7">
              <div className="relative">
                <div className="pointer-events-none absolute -inset-8 rounded-[3rem] bg-gradient-brand opacity-10 blur-3xl" />
                <div className="relative overflow-hidden rounded-3xl border border-border bg-background shadow-card">
                  <img src={productInventory} alt="Inventory dashboard preview" loading="lazy" width={1280} height={960} className="w-full object-cover" />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ CLOSING CTA ============ */}
      <section className="bg-ink py-24 text-background lg:py-32">
        <div className="mx-auto max-w-5xl px-5 text-center sm:px-8 lg:px-10">
          <Reveal variant="up">
            <Sparkles className="mx-auto h-6 w-6 text-brand-accent" />
            <h2 className="mt-6 font-display text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">
              A calmer pharmacy<br />
              starts with <em className="serif-italic text-brand-accent">one demo.</em>
            </h2>
            <p className="mx-auto mt-7 max-w-xl text-background/70">
              Twenty minutes. Your branches, your workflows. No sales pitch — just a working sandbox.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <Button asChild size="lg" variant="hero" className="group">
                <Link to="/contact">
                  Book a demo
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
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
