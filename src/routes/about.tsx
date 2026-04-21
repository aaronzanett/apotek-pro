import { createFileRoute, Link } from "@tanstack/react-router";
import { Heart, Target, Shield, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";

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
  { icon: Heart, t: "Patients first", d: "Every feature is judged by one question: does it make care safer or faster?" },
  { icon: Target, t: "Operational clarity", d: "If it's not measurable, it's not manageable. Dashboards over spreadsheets." },
  { icon: Shield, t: "Compliance by default", d: "Audits should never be a scramble. We bake compliance into daily workflows." },
  { icon: Sparkles, t: "Quiet craft", d: "Software that fades into the background — and lets pharmacists do their work." },
];

function AboutPage() {
  return (
    <SiteLayout>
      <section className="bg-gradient-hero py-24 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal variant="up">
            <span className="text-sm font-semibold uppercase tracking-wider text-brand-cyan">About</span>
            <h1 className="mt-3 text-4xl font-bold sm:text-5xl">Built for pharmacies. Backed by Zanscode.</h1>
            <p className="mt-5 text-lg text-white/80">
              Apotek Pro is part of the Zanscode product family — technology for well-organized, scalable businesses.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-background py-24">
        <div className="mx-auto grid max-w-7xl items-start gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <Reveal variant="up">
            <span className="text-sm font-semibold uppercase tracking-wider text-brand">Our story</span>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">From counter frustrations to a platform</h2>
            <p className="mt-4 text-muted-foreground">
              We started Apotek Pro after watching pharmacists juggle spreadsheets, legacy POS,
              and paper registers — just to close a day. We believe dispensing medicine should feel
              like a craft, not a clerical marathon.
            </p>
            <p className="mt-4 text-muted-foreground">
              Today, Apotek Pro powers hundreds of pharmacies across Southeast Asia — from single
              counters to multi-branch groups — with the same promise: organized operations,
              safer dispensing, and audit-ready compliance.
            </p>
          </Reveal>
          <Reveal variant="up" delay={200}>
            <div className="grid grid-cols-2 gap-4">
              {[
                { v: "500+", l: "Pharmacies served" },
                { v: "12M", l: "Prescriptions dispensed" },
                { v: "6", l: "Countries" },
                { v: "99.98%", l: "Uptime" },
              ].map((s) => (
                <div key={s.l} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
                  <div className="text-3xl font-bold text-gradient-brand">{s.v}</div>
                  <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{s.l}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-surface py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal variant="up" className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-brand">Our values</span>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">What guides every decision</h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.t} variant="up" delay={i * 120} as="div">
                <div className="lift h-full rounded-2xl border border-border bg-card p-6 shadow-soft hover:shadow-brand hover:border-brand/40">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-brand text-brand-foreground">
                    <v.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold">{v.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{v.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal variant="up">
            <h2 className="text-3xl font-bold sm:text-4xl">Talk to the team</h2>
            <p className="mt-4 text-muted-foreground">Whether you run one counter or a hundred — we'd love to hear from you.</p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button asChild variant="brand" size="xl"><Link to="/contact">Contact us <ArrowRight className="ml-1 h-4 w-4" /></Link></Button>
              <Button asChild variant="outline" size="xl"><Link to="/product">See the product</Link></Button>
            </div>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}
