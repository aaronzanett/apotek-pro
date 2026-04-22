import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ScanBarcode, Pill, Boxes, Thermometer, Truck, FileCheck, ShieldCheck,
  LineChart, Users, Bell, Building2, Smartphone, ArrowUpRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/features")({
  head: () => ({
    meta: [
      { title: "Fitur — Apotek Pro" },
      { name: "description", content: "POS, resep, inventaris batch/kedaluwarsa, pemasok, laporan, dan kepatuhan — setiap alur kerja apotek tercakup." },
      { property: "og:title", content: "Fitur — Apotek Pro" },
      { property: "og:description", content: "Daftar fitur lengkap Apotek Pro dari Zanscode." },
    ],
  }),
  component: FeaturesPage,
});

function FeaturesPage() {
  const { t } = useLang();

  const groups = [
    {
      number: "01",
      title: t("features.g1.title"),
      desc: t("features.g1.desc"),
      items: [
        { icon: ScanBarcode, t: t("features.g1.i1.t"), d: t("features.g1.i1.d") },
        { icon: Pill, t: t("features.g1.i2.t"), d: t("features.g1.i2.d") },
        { icon: Users, t: t("features.g1.i3.t"), d: t("features.g1.i3.d") },
        { icon: Smartphone, t: t("features.g1.i4.t"), d: t("features.g1.i4.d") },
      ],
    },
    {
      number: "02",
      title: t("features.g2.title"),
      desc: t("features.g2.desc"),
      items: [
        { icon: Boxes, t: t("features.g2.i1.t"), d: t("features.g2.i1.d") },
        { icon: Thermometer, t: t("features.g2.i2.t"), d: t("features.g2.i2.d") },
        { icon: Truck, t: t("features.g2.i3.t"), d: t("features.g2.i3.d") },
        { icon: Building2, t: t("features.g2.i4.t"), d: t("features.g2.i4.d") },
      ],
    },
    {
      number: "03",
      title: t("features.g3.title"),
      desc: t("features.g3.desc"),
      items: [
        { icon: LineChart, t: t("features.g3.i1.t"), d: t("features.g3.i1.d") },
        { icon: FileCheck, t: t("features.g3.i2.t"), d: t("features.g3.i2.d") },
        { icon: ShieldCheck, t: t("features.g3.i3.t"), d: t("features.g3.i3.d") },
        { icon: Bell, t: t("features.g3.i4.t"), d: t("features.g3.i4.d") },
      ],
    },
  ];

  return (
    <SiteLayout>
      <section className="bg-background pt-20 pb-16 lg:pt-28 lg:pb-24">
        <div className="mx-auto max-w-5xl px-5 sm:px-8 lg:px-10">
          <Reveal variant="up">
            <p className="kicker">{t("features.kicker")}</p>
            <h1 className="mt-5 font-display text-5xl leading-[1.02] text-foreground sm:text-6xl lg:text-7xl">
              {t("features.h1.line1")}<br />
              <em className="serif-italic text-brand">{t("features.h1.italic")}</em>
            </h1>
            <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
              {t("features.lead")}
            </p>
          </Reveal>
        </div>
      </section>

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

      <section className="bg-ink py-20 text-background lg:py-28">
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-8 lg:px-10">
          <Reveal variant="up">
            <h2 className="font-display text-4xl leading-tight sm:text-5xl lg:text-6xl">
              {t("features.cta.h2.line1")}<em className="serif-italic text-brand-accent">{t("features.cta.italic")}</em>
            </h2>
            <p className="mx-auto mt-6 max-w-lg text-background/70">{t("features.cta.lead")}</p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Button asChild size="lg" variant="hero" className="group">
                <Link to="/product">{t("cta.productTour")} <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></Link>
              </Button>
              <Button asChild size="lg" variant="ghost" className="text-background hover:bg-background/10 hover:text-background">
                <Link to="/contact">{t("cta.bookDemo")}</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}
