import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone, MapPin, Send, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Apotek Pro" },
      { name: "description", content: "Book a demo or reach our team for onboarding, pricing and support." },
      { property: "og:title", content: "Contact — Apotek Pro" },
      { property: "og:description", content: "Book a demo or talk to Apotek Pro." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <SiteLayout>
      <section className="bg-gradient-hero py-24 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal variant="up">
            <span className="text-sm font-semibold uppercase tracking-wider text-brand-cyan">Contact</span>
            <h1 className="mt-3 text-4xl font-bold sm:text-5xl">Let's talk about your pharmacy</h1>
            <p className="mt-5 text-lg text-white/80">Tell us about your operation — we'll get back within one business day.</p>
          </Reveal>
        </div>
      </section>

      <section className="bg-background py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-5 lg:px-8">
          <Reveal variant="up" className="lg:col-span-2">
            <h2 className="text-2xl font-bold">Reach us directly</h2>
            <p className="mt-3 text-muted-foreground">Our team is based in Jakarta and responds across time zones.</p>
            <ul className="mt-8 space-y-5 text-sm">
              <li className="flex items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-brand text-brand-foreground"><Mail className="h-4 w-4" /></div>
                <div>
                  <div className="font-semibold">Email</div>
                  <a href="mailto:hello@apotekpro.com" className="text-muted-foreground hover:text-foreground">hello@apotekpro.com</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-brand text-brand-foreground"><Phone className="h-4 w-4" /></div>
                <div>
                  <div className="font-semibold">Phone</div>
                  <div className="text-muted-foreground">+62 21 5000 0123</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-brand text-brand-foreground"><MapPin className="h-4 w-4" /></div>
                <div>
                  <div className="font-semibold">Office</div>
                  <div className="text-muted-foreground">Innovation District, Jakarta, Indonesia</div>
                </div>
              </li>
            </ul>
          </Reveal>

          <Reveal variant="up" delay={200} className="lg:col-span-3">
            <form
              onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              className="rounded-2xl border border-border bg-card p-8 shadow-soft"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="text-sm font-medium">Full name</span>
                  <input required type="text" className="mt-1.5 block w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-ring" placeholder="Jane Pharmacist" />
                </label>
                <label className="block">
                  <span className="text-sm font-medium">Work email</span>
                  <input required type="email" className="mt-1.5 block w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-ring" placeholder="you@pharmacy.com" />
                </label>
                <label className="block">
                  <span className="text-sm font-medium">Pharmacy name</span>
                  <input type="text" className="mt-1.5 block w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-ring" placeholder="MediFarma" />
                </label>
                <label className="block">
                  <span className="text-sm font-medium">Branches</span>
                  <select className="mt-1.5 block w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-ring">
                    <option>1</option>
                    <option>2–5</option>
                    <option>6–20</option>
                    <option>20+</option>
                  </select>
                </label>
                <label className="block sm:col-span-2">
                  <span className="text-sm font-medium">How can we help?</span>
                  <textarea rows={5} className="mt-1.5 block w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-ring" placeholder="Tell us about your branches, current systems, and what you'd like to improve." />
                </label>
              </div>
              <Button type="submit" variant="brand" size="lg" className="mt-6 w-full sm:w-auto">
                {sent ? (<><Check className="h-4 w-4" /> Message sent</>) : (<>Send message <Send className="h-4 w-4" /></>)}
              </Button>
              {sent && <p className="mt-3 text-sm text-muted-foreground">Thanks! We'll be in touch within one business day.</p>}
            </form>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}
