import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import { useLang } from "@/lib/i18n";

import imgPos from "@/assets/product-pos.jpg";
import imgInventory from "@/assets/product-inventory.jpg";
import imgReports from "@/assets/product-reports.jpg";

export const Route = createFileRoute("/product")({
  head: () => ({
    meta: [{ property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }, 
      { title: "Product Tour — Apotek Pro" },
      { name: "description", content: "Tur visual modul Apotek Pro: POS, inventaris & kedaluwarsa, pemasok, dan laporan kepatuhan." },
      { property: "og:title", content: "Product Tour — Apotek Pro" },
      { property: "og:description", content: "Lihat modul POS, inventaris, dan laporan Apotek Pro." },
      { property: "og:image", content: imgPos },
      { property: "twitter:image", content: imgPos },
    ],
  }),
  component: ProductPage,
});

function ProductPage() {
  const { t } = useLang();

  const modules = [
    {
      n: "01",
      tag: "POS & Pelayanan Resep",
      title: t("product.m1.title"),
      italic: t("product.m1.italic"),
      desc: t("product.m1.desc"),
      bullets: [t("product.m1.b1"), t("product.m1.b2"), t("product.m1.b3"), t("product.m1.b4")],
      img: imgPos,
      alt: "POS preview",
    },
    {
      n: "02",
      tag: "Inventaris & Kedaluwarsa",
      title: t("product.m2.title"),
      italic: t("product.m2.italic"),
      desc: t("product.m2.desc"),
      bullets: [t("product.m2.b1"), t("product.m2.b2"), t("product.m2.b3"), t("product.m2.b4")],
      img: imgInventory,
      alt: "Inventory preview",
      reverse: true,
    },
    {
      n: "03",
      tag: "Pemasok & PO",
      title: t("product.m3.title"),
      italic: t("product.m3.italic"),
      desc: t("product.m3.desc"),
      bullets: [t("product.m3.b1"), t("product.m3.b2"), t("product.m3.b3"), t("product.m3.b4")],
      img: imgReports,
      alt: "Supplier preview",
    },
    {
      n: "04",
      tag: "Laporan & Kepatuhan",
      title: t("product.m4.title"),
      italic: t("product.m4.italic"),
      desc: t("product.m4.desc"),
      bullets: [t("product.m4.b1"), t("product.m4.b2"), t("product.m4.b3"), t("product.m4.b4")],
      img: imgReports,
      alt: "Reports preview",
      reverse: true,
    },
  ];

  return (
    <SiteLayout>
      <section className="bg-background pt-20 pb-16 lg:pt-28 lg:pb-24">
        <div className="mx-auto max-w-5xl px-5 sm:px-8 lg:px-10">
          <Reveal variant="up">
            <p className="kicker">{t("product.kicker")}</p>
            <h1 className="mt-5 font-display text-5xl leading-[1.02] text-foreground sm:text-6xl lg:text-7xl">
              {t("product.h1.line1")}<br />
              <em className="serif-italic text-brand">{t("product.h1.italic")}</em>{t("product.h1.tail")}
            </h1>
            <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
              {t("product.lead")}
            </p>
          </Reveal>
        </div>
      </section>

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

      <section className="bg-ink py-20 text-background lg:py-28">
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-8 lg:px-10">
          <Reveal variant="up">
            <h2 className="font-display text-4xl leading-tight sm:text-5xl lg:text-6xl">
              {t("product.cta.h2")}<em className="serif-italic text-brand-accent">{t("product.cta.italic")}</em>
            </h2>
            <p className="mx-auto mt-6 max-w-lg text-background/70">{t("product.cta.lead")}</p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Button asChild size="lg" variant="hero" className="group">
                <Link to="/contact">{t("cta.bookDemo")} <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></Link>
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
