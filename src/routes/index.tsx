import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowUpRight, ArrowRight, ScanBarcode, Pill, Boxes, Truck, FileCheck, ShieldCheck,
  Clock, Thermometer, Check, Sparkles, TrendingUp, Quote,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import { useLang } from "@/lib/i18n";

import heroBottle from "@/assets/hero-bottle.jpg";
import productPos from "@/assets/product-pos.jpg";
import productInventory from "@/assets/product-inventory.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Apotek Pro — Sistem operasi apotek yang tenang" },
      { name: "description", content: "POS, resep, inventaris, pemasok, dan kepatuhan dalam satu platform yang tenang dan terhubung — dari Zanscode." },
      { property: "og:title", content: "Apotek Pro — Sistem operasi apotek yang tenang" },
      { property: "og:description", content: "POS, resep, inventaris, pemasok, dan kepatuhan dalam satu platform." },
    ],
  }),
  component: HomePage,
});

const trusted = ["MediFarma Group", "Sehat24", "BluePill", "Apotek Sentra", "GoodHealth", "FarmaNova", "VitaCare", "KimiaMed"];

function HomePage() {
  const { t } = useLang();
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden bg-background pt-10 pb-20 sm:pt-14 lg:pt-20 lg:pb-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-7 lg:pt-8">
              <Reveal variant="fade">
                <div className="inline-flex items-center gap-2 rounded-full border border-border bg-cream px-3.5 py-1.5 text-xs font-medium text-foreground">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-60"></span>
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand"></span>
                  </span>
                  {t("home.badge")}
                </div>
              </Reveal>

              <Reveal variant="up" delay={120}>
                <h1 className="mt-8 font-display text-[clamp(2.75rem,6vw,5.5rem)] leading-[0.98] tracking-tight text-foreground">
                  {t("home.h1.line1")}<br />
                  <em className="serif-italic text-brand">{t("home.h1.italic")}</em>{t("home.h1.line2")}
                </h1>
              </Reveal>

              <Reveal variant="up" delay={260}>
                <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground">
                  {t("home.hero.lead")}
                </p>
              </Reveal>

              <Reveal variant="up" delay={400}>
                <div className="mt-10 flex flex-wrap items-center gap-3">
                  <Button asChild size="lg" variant="brand" className="group">
                    <Link to="/contact">
                      {t("cta.bookDemo")}
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link to="/product">{t("cta.productTour")}</Link>
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
                    <span className="font-medium text-foreground">{t("home.hero.users")}</span>{t("home.hero.usersTail")}
                  </span>
                </div>
              </Reveal>
            </div>

            <div className="relative lg:col-span-5">
              <Reveal variant="scale" delay={300}>
                <div className="relative">
                  <div className="relative overflow-hidden rounded-3xl bg-cream shadow-card">
                    <img
                      src={heroBottle}
                      alt="Prescription bottle"
                      className="aspect-[4/5] w-full object-cover"
                      width={1280}
                      height={1024}
                    />
                  </div>

                  <div className="absolute -left-6 top-10 hidden animate-float-soft sm:block">
                    <div className="rounded-2xl border border-border bg-background p-4 shadow-card">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <TrendingUp className="h-3.5 w-3.5 text-brand" />
                        {t("home.float.expiry")}
                      </div>
                      <div className="mt-1 font-display text-3xl text-foreground">−60%</div>
                      <div className="mt-0.5 text-[11px] text-muted-foreground">{t("home.float.expiryNote")}</div>
                    </div>
                  </div>

                  <div className="absolute -right-4 bottom-16 hidden animate-float-soft sm:block" style={{ animationDelay: "-4s" }}>
                    <div className="rounded-2xl border border-border bg-background p-4 shadow-card">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Clock className="h-3.5 w-3.5 text-brand" />
                        {t("home.float.checkout")}
                      </div>
                      <div className="mt-1 font-display text-3xl text-foreground">8.2s</div>
                      <div className="mt-0.5 text-[11px] text-muted-foreground">{t("home.float.checkoutNote")}</div>
                    </div>
                  </div>

                  <div className="absolute -bottom-5 left-4 right-4 rounded-2xl border border-border bg-background p-4 shadow-card sm:left-10 sm:right-10">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-brand">
                        <ShieldCheck className="h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-medium text-foreground">{t("home.audit.title")}</div>
                        <div className="text-xs text-muted-foreground">{t("home.audit.note")}</div>
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

      {/* MARQUEE */}
      <section className="border-y border-border bg-cream py-10 overflow-hidden">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <p className="kicker text-center">{t("home.marquee")}</p>
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

      {/* BENTO */}
      <section className="bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-12">
            <Reveal variant="up" className="lg:col-span-5">
              <p className="kicker">{t("home.bento.kicker")}</p>
              <h2 className="mt-4 font-display text-4xl leading-[1.05] text-foreground sm:text-5xl lg:text-6xl">
                {t("home.bento.h2.line1")}<br />
                <em className="serif-italic text-brand">{t("home.bento.h2.italic")}</em>{t("home.bento.h2.line2")}
              </h2>
            </Reveal>
            <Reveal variant="up" delay={200} className="lg:col-span-7 lg:pt-16">
              <p className="text-lg leading-relaxed text-muted-foreground">
                {t("home.bento.lead")}
              </p>
              <Link
                to="/features"
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-brand"
              >
                {t("cta.exploreFeatures")} <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>

          <div className="mt-16 grid gap-4 lg:grid-cols-6 lg:grid-rows-2">
            <Reveal variant="up" className="lg:col-span-3 lg:row-span-2" as="div">
              <div className="card-hover group relative flex h-full min-h-[420px] flex-col justify-between overflow-hidden rounded-3xl border border-border bg-cream p-8 shadow-soft">
                <div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-ink text-background">
                    <ScanBarcode className="h-5 w-5" />
                  </div>
                  <h3 className="mt-6 font-display text-3xl text-foreground">{t("home.bento.pos.title")}</h3>
                  <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
                    {t("home.bento.pos.desc")}
                  </p>
                </div>
                <div className="relative mt-8 overflow-hidden rounded-2xl border border-border bg-background">
                  <img src={productPos} alt="POS interface" loading="lazy" width={1280} height={960} className="w-full object-cover" />
                </div>
              </div>
            </Reveal>

            <Reveal variant="up" delay={120} className="lg:col-span-3" as="div">
              <div className="card-hover group flex h-full min-h-[200px] flex-col justify-between rounded-3xl border border-border bg-accent p-8 shadow-soft">
                <div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand text-brand-foreground">
                    <Boxes className="h-5 w-5" />
                  </div>
                  <h3 className="mt-6 font-display text-2xl text-foreground">{t("home.bento.batch.title")}</h3>
                  <p className="mt-2 text-sm text-accent-foreground/80">{t("home.bento.batch.desc")}</p>
                </div>
              </div>
            </Reveal>

            <Reveal variant="up" delay={180} className="lg:col-span-2" as="div">
              <div className="card-hover h-full rounded-3xl border border-border bg-background p-7 shadow-soft">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cream text-brand">
                  <FileCheck className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-base font-medium text-foreground">{t("home.bento.audit.title")}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{t("home.bento.audit.desc")}</p>
              </div>
            </Reveal>

            <Reveal variant="up" delay={240} className="lg:col-span-1" as="div">
              <div className="card-hover flex h-full flex-col items-start rounded-3xl border border-border bg-ink p-7 text-background shadow-soft">
                <Pill className="h-6 w-6 text-brand-accent" />
                <h3 className="mt-auto pt-8 font-display text-xl">{t("home.bento.rx.title")}</h3>
              </div>
            </Reveal>
          </div>

          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            {[
              { icon: Truck, t: t("home.bento.suppliers.t"), d: t("home.bento.suppliers.d") },
              { icon: Thermometer, t: t("home.bento.cold.t"), d: t("home.bento.cold.d") },
              { icon: Sparkles, t: t("home.bento.patient.t"), d: t("home.bento.patient.d") },
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

      {/* QUOTE */}
      <section className="relative bg-cream py-24 lg:py-32 paper-grain">
        <div className="relative mx-auto max-w-5xl px-5 text-center sm:px-8 lg:px-10">
          <Reveal variant="up">
            <Quote className="mx-auto h-8 w-8 text-brand" />
            <blockquote className="mt-8 font-display text-3xl leading-[1.2] text-foreground sm:text-4xl lg:text-5xl">
              {t("home.quote.text")}<em className="serif-italic text-brand">{t("home.quote.italic")}</em>{t("home.quote.tail")}
            </blockquote>
            <figcaption className="mt-10 flex items-center justify-center gap-4">
              <div className="h-12 w-12 rounded-full bg-gradient-brand" />
              <div className="text-left">
                <div className="text-sm font-medium text-foreground">{t("home.quote.author")}</div>
                <div className="text-sm text-muted-foreground">{t("home.quote.role")}</div>
              </div>
            </figcaption>
          </Reveal>
        </div>
      </section>

      {/* DASH PREVIEW */}
      <section className="bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid items-center gap-14 lg:grid-cols-12">
            <Reveal variant="up" className="lg:col-span-5">
              <p className="kicker">{t("home.dash.kicker")}</p>
              <h2 className="mt-4 font-display text-4xl leading-[1.05] text-foreground sm:text-5xl lg:text-6xl">
                {t("home.dash.h2.line1")}<br />
                <em className="serif-italic text-brand">{t("home.dash.h2.italic")}</em>
              </h2>
              <p className="mt-6 text-lg text-muted-foreground">
                {t("home.dash.lead")}
              </p>
              <ul className="mt-8 space-y-4 text-sm">
                {["home.dash.li.1", "home.dash.li.2", "home.dash.li.3", "home.dash.li.4"].map((k) => (
                  <li key={k} className="flex items-start gap-3 border-b border-border pb-4 last:border-0">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                    <span className="text-foreground">{t(k)}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button asChild variant="brand" className="group">
                  <Link to="/product">
                    {t("cta.seeProductTour")}
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

      {/* CLOSING CTA */}
      <section className="bg-ink py-24 text-background lg:py-32">
        <div className="mx-auto max-w-5xl px-5 text-center sm:px-8 lg:px-10">
          <Reveal variant="up">
            <Sparkles className="mx-auto h-6 w-6 text-brand-accent" />
            <h2 className="mt-6 font-display text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">
              {t("home.cta.h2.line1")}<br />
              {t("home.cta.h2.line2")}<em className="serif-italic text-brand-accent">{t("home.cta.italic")}</em>
            </h2>
            <p className="mx-auto mt-7 max-w-xl text-background/70">
              {t("home.cta.lead")}
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <Button asChild size="lg" variant="hero" className="group">
                <Link to="/contact">
                  {t("cta.bookDemo")}
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="ghost" className="text-background hover:bg-background/10 hover:text-background">
                <Link to="/pricing">{t("cta.seePricing")}</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}
