import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";

import texture from "@/assets/texture-emerald.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Apotek Pro by Zanscode" },
      { name: "description", content: "Apotek Pro is built by Zanscode to help pharmacies run organized, compliant and patient-first operations." },
      { property: "og:title", content: "About — Apotek Pro" },
      { property: "og:description", content: "Our mission: better pharmacy operations, better patient care." },
    ],
  }),
  component: AboutPage,
});

const values = [
  { n: "01", t: "Patients first", d: "Every feature is judged by one question: does it make care safer or faster?" },
  { n: "02", t: "Operational clarity", d: "If it's not measurable, it's not manageable. Dashboards over spreadsheets." },
  { n: "03", t: "Compliance by default", d: "Audits should never be a scramble. We bake compliance into daily workflows." },
  { n: "04", t: "Quiet craft", d: "Software that fades into the background — and lets pharmacists do their work." },
];

const stats = [
  { v: "500+", l: "Pharmacies served" },
  { v: "12M", l: "Prescriptions dispensed" },
  { v: "6", l: "Countries" },
  { v: "99.98%", l: "Uptime" },
];

function AboutPage() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="bg-background pt-20 pb-16 lg:pt-28 lg:pb-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
          <Reveal variant="up">
            <p className="kicker">About</p>
            <h1 className="mt-5 font-display text-5xl leading-[1.02] text-foreground sm:text-6xl lg:text-7xl">
              Built for pharmacies.<br />
              <em className="serif-italic text-brand">Backed</em> by Zanscode.
            </h1>
            <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
              Apotek Pro is part of the Zanscode product family — technology for well-organized, scalable businesses.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Story + stats */}
      <section className="bg-cream py-24 paper-grain lg:py-32">
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
            <Reveal variant="up" className="lg:col-span-7">
              <p className="kicker">Our story</p>
              <h2 className="mt-5 font-display text-4xl leading-[1.05] text-foreground sm:text-5xl">
                From counter frustrations<br />
                <em className="serif-italic text-brand">to a platform.</em>
              </h2>
              <div className="mt-8 space-y-5 text-lg leading-relaxed text-foreground/80">
                <p>
                  We started Apotek Pro after watching pharmacists juggle spreadsheets, legacy POS,
                  and paper registers — just to close a day. We believe dispensing medicine should feel
                  like a craft, not a clerical marathon.
                </p>
                <p>
                  Today, Apotek Pro powers hundreds of pharmacies across Southeast Asia — from single
                  counters to multi-branch groups — with the same promise: organized operations,
                  safer dispensing, and audit-ready compliance.
                </p>
              </div>
            </Reveal>

            <Reveal variant="scale" delay={150} className="lg:col-span-5">
              <div className="grid grid-cols-2 gap-4">
                {stats.map((s, i) => (
                  <div
                    key={s.l}
                    className={`rounded-3xl border border-border p-7 shadow-soft ${i % 3 === 0 ? "bg-ink text-background" : "bg-background"}`}
                  >
                    <div className={`font-display text-5xl ${i % 3 === 0 ? "text-brand-accent" : "text-foreground"}`}>{s.v}</div>
                    <div className={`mt-3 text-sm ${i % 3 === 0 ? "text-background/60" : "text-muted-foreground"}`}>{s.l}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <Reveal variant="up" className="max-w-3xl">
            <p className="kicker">Our values</p>
            <h2 className="mt-5 font-display text-4xl leading-[1.05] text-foreground sm:text-5xl lg:text-6xl">
              What guides<br />
              <em className="serif-italic text-brand">every decision.</em>
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.t} variant="up" delay={i * 90} as="div">
                <div className="card-hover flex h-full flex-col bg-background p-8 lg:p-10">
                  <span className="font-display text-4xl text-brand">{v.n}</span>
                  <h3 className="mt-8 text-lg font-medium text-foreground">{v.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-ink py-24 text-background lg:py-32">
        <img src={texture} alt="" aria-hidden className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-25 mix-blend-screen" />
        <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8 lg:px-10">
          <Reveal variant="up">
            <h2 className="font-display text-4xl leading-tight sm:text-5xl lg:text-6xl">
              Talk to <em className="serif-italic text-brand-accent">the team.</em>
            </h2>
            <p className="mx-auto mt-6 max-w-lg text-background/70">
              Whether you run one counter or a hundred — we'd love to hear from you.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Button asChild size="lg" variant="hero" className="group">
                <Link to="/contact">Contact us <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></Link>
              </Button>
              <Button asChild size="lg" variant="ghost" className="text-background hover:bg-background/10 hover:text-background">
                <Link to="/product">See the product</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}
