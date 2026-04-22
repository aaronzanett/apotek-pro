import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone, MapPin, Check, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Kontak — Apotek Pro" },
      { name: "description", content: "Pesan demo atau hubungi tim kami untuk onboarding, harga, dan dukungan." },
      { property: "og:title", content: "Kontak — Apotek Pro" },
      { property: "og:description", content: "Pesan demo atau bicara dengan tim Apotek Pro." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { t } = useLang();
  const [sent, setSent] = useState(false);

  return (
    <SiteLayout>
      <section className="bg-background pt-20 pb-12 lg:pt-28">
        <div className="mx-auto max-w-5xl px-5 sm:px-8 lg:px-10">
          <Reveal variant="up">
            <p className="kicker">{t("contact.kicker")}</p>
            <h1 className="mt-5 font-display text-5xl leading-[1.02] text-foreground sm:text-6xl lg:text-7xl">
              {t("contact.h1.line1")}<br />
              <em className="serif-italic text-brand">{t("contact.h1.italic")}</em>
            </h1>
            <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
              {t("contact.lead")}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-background pb-24 lg:pb-32">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:px-8 lg:grid-cols-5 lg:gap-14 lg:px-10">
          <Reveal variant="up" className="lg:col-span-2">
            <div className="rounded-3xl border border-border bg-cream p-8 paper-grain">
              <div className="relative">
                <p className="kicker">{t("contact.reach.kicker")}</p>
                <p className="mt-4 text-sm text-muted-foreground">
                  {t("contact.reach.note")}
                </p>

                <ul className="mt-8 space-y-6 text-sm">
                  <li className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-background text-brand">
                      <Mail className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="kicker m-0">{t("contact.email")}</div>
                      <a href="mailto:hello@apotekpro.com" className="mt-1 block text-foreground transition-colors hover:text-brand">
                        hello@apotekpro.com
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-background text-brand">
                      <Phone className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="kicker m-0">{t("contact.phone")}</div>
                      <div className="mt-1 text-foreground">+62 21 5000 0123</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-background text-brand">
                      <MapPin className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="kicker m-0">{t("contact.office")}</div>
                      <div className="mt-1 whitespace-pre-line text-foreground">{t("contact.officeAddr")}</div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </Reveal>

          <Reveal variant="up" delay={150} className="lg:col-span-3">
            <form
              onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              className="rounded-3xl border border-border bg-background p-8 shadow-card lg:p-10"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="kicker m-0">{t("contact.form.name")}</span>
                  <input required type="text" className="mt-2 block w-full rounded-xl border border-border bg-cream px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20" placeholder={t("contact.form.namePh")} />
                </label>
                <label className="block">
                  <span className="kicker m-0">{t("contact.form.email")}</span>
                  <input required type="email" className="mt-2 block w-full rounded-xl border border-border bg-cream px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20" placeholder={t("contact.form.emailPh")} />
                </label>
                <label className="block">
                  <span className="kicker m-0">{t("contact.form.pharmacy")}</span>
                  <input type="text" className="mt-2 block w-full rounded-xl border border-border bg-cream px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20" placeholder={t("contact.form.pharmacyPh")} />
                </label>
                <label className="block">
                  <span className="kicker m-0">{t("contact.form.branches")}</span>
                  <select className="mt-2 block w-full rounded-xl border border-border bg-cream px-4 py-3 text-sm text-foreground focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20">
                    <option>1</option>
                    <option>2–5</option>
                    <option>6–20</option>
                    <option>20+</option>
                  </select>
                </label>
                <label className="block sm:col-span-2">
                  <span className="kicker m-0">{t("contact.form.help")}</span>
                  <textarea rows={5} className="mt-2 block w-full rounded-xl border border-border bg-cream px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20" placeholder={t("contact.form.helpPh")} />
                </label>
              </div>
              <Button type="submit" variant="brand" size="lg" className="mt-7 group">
                {sent ? (<><Check className="h-4 w-4" /> {t("contact.form.sent")}</>) : (<>{t("contact.form.send")} <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></>)}
              </Button>
              {sent && <p className="mt-4 text-sm text-muted-foreground">{t("contact.form.thanks")}</p>}
            </form>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}
