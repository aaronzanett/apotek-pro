import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, Zap, Pill, ScanBarcode, Boxes, Truck, ShieldCheck, LineChart, Clock, Thermometer, FileCheck, Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";

import heroBg from "@/assets/hero-pharma.jpg";
import productPos from "@/assets/product-pos.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Apotek Pro — Pharmacy management SaaS by Zanscode" },
      { name: "description", content: "Run your pharmacy end-to-end: POS, prescription dispensing, inventory with expiry tracking, suppliers and compliance reports." },
      { property: "og:title", content: "Apotek Pro — Pharmacy SaaS by Zanscode" },
      { property: "og:description", content: "POS, prescriptions, inventory, suppliers and compliance in one platform." },
    ],
  }),
  component: HomePage,
});

const features = [
  { icon: ScanBarcode, title: "POS & Dispensing", desc: "Fast checkout for OTC and prescription items with barcode and label printing." },
  { icon: Boxes, title: "Inventory & Expiry", desc: "Batch and lot tracking, FEFO dispensing, and proactive expiry alerts." },
  { icon: Truck, title: "Suppliers & POs", desc: "Manage distributors, purchase orders, and goods-received reconciliation." },
  { icon: FileCheck, title: "Reports & Compliance", desc: "Sales analytics, controlled-substance logs, and audit-ready exports." },
  { icon: ShieldCheck, title: "Secure by design", desc: "Role-based access, activity logs, and HIPAA-ready infrastructure." },
  { icon: LineChart, title: "Real-time insights", desc: "Branch-level dashboards from margin to fast-movers, updated live." },
];

const stats = [
  { v: "500+", l: "Pharmacies served" },
  { v: "12M", l: "Prescriptions dispensed" },
  { v: "99.98%", l: "Platform uptime" },
  { v: "24/7", l: "Dedicated support" },
];

const whyItems = [
  { icon: Clock, t: "Dispense in seconds", d: "Smart search finds medicines by name, generic, or barcode instantly." },
  { icon: Thermometer, t: "Never lose stock to expiry", d: "Automated FEFO picks near-expiry batches first and flags dead stock." },
  { icon: Pill, t: "Prescription-safe", d: "Dosage checks, interaction warnings, and mandatory counsel prompts." },
  { icon: ShieldCheck, t: "Audit-ready", d: "Immutable logs for narcotics and regulated items, export on demand." },
];

const testimonials = [
  { quote: "We migrated three branches in a weekend. Expiry losses dropped 60% in the first quarter.", name: "Dr. Sari Pratama", role: "Owner, MediFarma Group" },
  { quote: "Our cashiers learned the POS in under an hour. Queues at peak time are finally gone.", name: "Anita Wijaya", role: "Operations Lead, Sehat24" },
  { quote: "The compliance reports alone saved our pharmacist-in-charge two days a month.", name: "Marcus Lee", role: "PIC, BluePill Pharmacy" },
];

function HomePage() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-hero opacity-90" />
        </div>
        <div className="pointer-events-none absolute -top-32 right-[-10%] h-96 w-96 rounded-full bg-brand-cyan/20 blur-3xl animate-blob-drift" aria-hidden />
        <div className="pointer-events-none absolute -bottom-32 left-[-10%] h-96 w-96 rounded-full bg-white/10 blur-3xl animate-blob-drift" style={{ animationDelay: "-7s" }} aria-hidden />

        <div className="relative mx-auto max-w-7xl px-4 py-28 sm:px-6 lg:px-8 lg:py-36">
          <div className="max-w-3xl">
            <Reveal variant="fade">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur">
                <Sparkles className="h-3.5 w-3.5" /> A Zanscode product for modern pharmacies
              </span>
            </Reveal>
            <Reveal variant="up" delay={200}>
              <h1 className="mt-6 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                Run your pharmacy like it <span className="text-shine">runs itself</span>.
              </h1>
            </Reveal>
            <Reveal variant="up" delay={400}>
              <p className="mt-6 max-w-2xl text-lg text-white/80">
                Apotek Pro unifies POS, prescriptions, inventory, suppliers and compliance —
                so your team can focus on patients, not paperwork.
              </p>
            </Reveal>
            <Reveal variant="up" delay={600}>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="xl" variant="brand">
                  <Link to="/contact">Book a demo <ArrowRight className="ml-1 h-4 w-4" /></Link>
                </Button>
                <Button asChild size="xl" variant="hero">
                  <Link to="/product">See the product</Link>
                </Button>
              </div>
            </Reveal>
            <dl className="mt-14 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {stats.map((s, i) => (
                <Reveal key={s.l} variant="up" delay={750 + i * 140} as="div">
                  <dt className="text-2xl font-bold text-white sm:text-3xl">{s.v}</dt>
                  <dd className="mt-1 text-xs uppercase tracking-wider text-white/60">{s.l}</dd>
                </Reveal>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-background py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal variant="up" className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-brand">What's inside</span>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Everything a modern pharmacy needs</h2>
            <p className="mt-4 text-muted-foreground">One platform across counter, back-office, and boardroom.</p>
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => (
              <Reveal key={f.title} variant="up" delay={i * 120} as="div">
                <div className="lift group h-full rounded-2xl border border-border bg-card p-6 shadow-soft hover:shadow-brand hover:border-brand/40">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-brand text-brand-foreground transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <f.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold">{f.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Apotek Pro */}
      <section className="bg-surface py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal variant="up" className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-brand">Why teams switch</span>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Built for the realities of pharmacy work</h2>
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {whyItems.map((i, idx) => (
              <Reveal key={i.t} variant="scale" delay={idx * 110} as="div">
                <div className="lift group flex h-full flex-col rounded-2xl border border-border bg-card p-6 hover:shadow-soft hover:border-brand/30">
                  <i.icon className="h-7 w-7 text-brand transition-transform duration-300 group-hover:scale-110" />
                  <h3 className="mt-4 text-base font-semibold">{i.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{i.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Product highlight */}
      <section className="bg-background py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <Reveal variant="up">
            <span className="text-sm font-semibold uppercase tracking-wider text-brand">The POS your counter deserves</span>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">One counter, one screen — everything in reach.</h2>
            <p className="mt-4 text-muted-foreground">
              Search by brand or generic, scan a barcode, auto-apply insurance, print the label and the receipt — all under ten seconds.
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              {["Barcode & QR scanning", "Prescription dispensing with counsel prompts", "Multi-tender & insurance claims", "Offline-tolerant sync"].map((i, idx) => (
                <li key={i} className="flex items-center gap-2 transition-transform duration-300 hover:translate-x-1" style={{ transitionDelay: `${idx * 30}ms` }}>
                  <Zap className="h-4 w-4 text-brand-cyan" /> {i}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex gap-3">
              <Button asChild variant="brand"><Link to="/product">Explore the product</Link></Button>
              <Button asChild variant="outline"><Link to="/pricing">See pricing</Link></Button>
            </div>
          </Reveal>
          <Reveal variant="scale" delay={250}>
            <div className="relative">
              <div className="absolute -inset-6 rounded-3xl bg-gradient-brand opacity-20 blur-3xl animate-blob-drift" />
              <img src={productPos} alt="Apotek Pro POS dashboard" loading="lazy" width={1280} height={960} className="relative rounded-2xl border border-border shadow-brand transition-transform duration-500 hover:scale-[1.02]" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-surface py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal variant="up" className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-brand">Customer love</span>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Pharmacists who've made the switch</h2>
          </Reveal>
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} variant="up" delay={i * 200} as="div">
                <figure className="lift flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-soft hover:border-brand/40 hover:shadow-brand">
                  <Quote className="h-6 w-6 text-brand" />
                  <blockquote className="mt-4 flex-1 text-sm text-foreground">"{t.quote}"</blockquote>
                  <div className="mt-6 flex items-center gap-1 text-brand-cyan">
                    {Array.from({ length: 5 }).map((_, idx) => <Star key={idx} className="h-4 w-4 fill-current" />)}
                  </div>
                  <figcaption className="mt-3 text-sm">
                    <div className="font-semibold">{t.name}</div>
                    <div className="text-muted-foreground">{t.role}</div>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal variant="up">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Ready to modernize your pharmacy?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base text-muted-foreground sm:text-lg">
              See Apotek Pro in a 20-minute guided demo — tailored to your branches and workflows.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Button asChild size="xl" variant="brand">
                <Link to="/contact">Book a demo <ArrowRight className="ml-1 h-4 w-4" /></Link>
              </Button>
              <Button asChild size="xl" variant="outline">
                <Link to="/pricing">See pricing</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}
