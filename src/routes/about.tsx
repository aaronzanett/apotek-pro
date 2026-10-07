import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import { useLang } from "@/lib/i18n";

import texture from "@/assets/texture-emerald.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [{ property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }, 
      { title: "About — Apotek Pro by Zanscode" },
      { name: "description", content: "Apotek Pro dibangun oleh Zanscode untuk membantu apotek beroperasi rapi, patuh, dan berfokus pada pasien." },
      { property: "og:title", content: "About — Apotek Pro by Zanscode" },
      { property: "og:description", content: "Misi kami: operasi apotek yang lebih baik, pelayanan pasien yang lebih baik." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const { t } = useLang();

  const values = [
    { n: "01", t: t("about.v1.t"), d: t("about.v1.d") },
    { n: "02", t: t("about.v2.t"), d: t("about.v2.d") },
    { n: "03", t: t("about.v3.t"), d: t("about.v3.d") },
    { n: "04", t: t("about.v4.t"), d: t("about.v4.d") },
  ];

  const stats = [
    { v: "500+", l: t("about.stat.l1") },
    { v: "12M", l: t("about.stat.l2") },
    { v: "6", l: t("about.stat.l3") },
    { v: "99.98%", l: t("about.stat.l4") },
  ];

  return (
    <SiteLayout>
      <section className="bg-background pt-20 pb-16 lg:pt-28 lg:pb-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
          <Reveal variant="up">
            <p className="kicker">{t("about.kicker")}</p>
            <h1 className="mt-5 font-display text-5xl leading-[1.02] text-foreground sm:text-6xl lg:text-7xl">
              {t("about.h1.line1")}<br />
              <em className="serif-italic text-brand">{t("about.h1.italic")}</em>{t("about.h1.line2.after")}
            </h1>
            <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
              {t("about.lead")}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-cream py-24 paper-grain lg:py-32">
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
            <Reveal variant="up" className="lg:col-span-7">
              <p className="kicker">{t("about.story.kicker")}</p>
              <h2 className="mt-5 font-display text-4xl leading-[1.05] text-foreground sm:text-5xl">
                {t("about.story.h2.line1")}<br />
                <em className="serif-italic text-brand">{t("about.story.italic")}</em>
              </h2>
              <div className="mt-8 space-y-5 text-lg leading-relaxed text-foreground/80">
                <p>{t("about.story.p1")}</p>
                <p>{t("about.story.p2")}</p>
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

      <section className="bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <Reveal variant="up" className="max-w-3xl">
            <p className="kicker">{t("about.values.kicker")}</p>
            <h2 className="mt-5 font-display text-4xl leading-[1.05] text-foreground sm:text-5xl lg:text-6xl">
              {t("about.values.h2.line1")}<br />
              <em className="serif-italic text-brand">{t("about.values.italic")}</em>
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

      <section className="relative overflow-hidden bg-ink py-24 text-background lg:py-32">
        <img src={texture} alt="" aria-hidden className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-25 mix-blend-screen" />
        <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8 lg:px-10">
          <Reveal variant="up">
            <h2 className="font-display text-4xl leading-tight sm:text-5xl lg:text-6xl">
              {t("about.cta.h2")}<em className="serif-italic text-brand-accent">{t("about.cta.italic")}</em>
            </h2>
            <p className="mx-auto mt-6 max-w-lg text-background/70">
              {t("about.cta.lead")}
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Button asChild size="lg" variant="hero" className="group">
                <Link to="/contact">{t("cta.contactUs")} <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></Link>
              </Button>
              <Button asChild size="lg" variant="ghost" className="text-background hover:bg-background/10 hover:text-background">
                <Link to="/product">{t("cta.seeProduct")}</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}
