import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone, ShieldCheck, Globe, ArrowUpRight } from "lucide-react";
import { Wordmark } from "./Wordmark";

const columns = [
  {
    title: "Product",
    links: [
      { to: "/features" as const, label: "Features" },
      { to: "/product" as const, label: "Product tour" },
      { to: "/pricing" as const, label: "Pricing" },
      { to: "/contact" as const, label: "Book a demo" },
    ],
  },
  {
    title: "Company",
    links: [
      { to: "/about" as const, label: "About" },
      { to: "/contact" as const, label: "Contact" },
      { to: "/about" as const, label: "A Zanscode product" },
    ],
  },
  {
    title: "Resources",
    links: [
      { to: "/features" as const, label: "Help center" },
      { to: "/contact" as const, label: "Support" },
      { to: "/contact" as const, label: "Status" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-cream paper-grain">
      <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
        {/* Editorial headline */}
        <div className="max-w-3xl">
          <p className="kicker">Let's talk</p>
          <h2 className="mt-4 font-display text-4xl leading-[1.05] text-foreground sm:text-5xl lg:text-6xl">
            Ready to bring <em className="serif-italic text-brand">clarity</em><br className="hidden sm:block" />
            to your pharmacy?
          </h2>
          <div className="mt-8">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 font-display text-2xl text-foreground transition-colors hover:text-brand"
            >
              Book a demo
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ink text-background transition-transform group-hover:translate-x-1">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </Link>
          </div>
        </div>

        <div className="mt-20 grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Link to="/" className="inline-flex items-center">
              <Wordmark className="h-8 w-auto" />
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Apotek Pro is a pharmacy operating system by Zanscode. POS, prescriptions,
              inventory and compliance — quietly connected.
            </p>

            <ul className="mt-7 space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                <a href="mailto:hello@apotekpro.com" className="text-foreground hover:text-brand transition-colors">
                  hello@apotekpro.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                <span className="text-muted-foreground">+62 21 5000 0123</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                <span className="text-muted-foreground">Jakarta, Indonesia</span>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-7">
            {columns.map((col) => (
              <div key={col.title}>
                <h4 className="kicker text-foreground/70">{col.title}</h4>
                <ul className="mt-5 space-y-3 text-sm">
                  {col.links.map((link, i) => (
                    <li key={`${col.title}-${i}`}>
                      <Link to={link.to} className="text-muted-foreground transition-colors hover:text-foreground">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-5 py-5 text-xs text-muted-foreground sm:px-8 lg:px-10">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <span className="inline-flex items-center gap-1.5"><ShieldCheck className="h-3.5 w-3.5" /> HIPAA-ready</span>
            <span className="inline-flex items-center gap-1.5"><ShieldCheck className="h-3.5 w-3.5" /> ISO 27001</span>
            <span className="inline-flex items-center gap-1.5"><ShieldCheck className="h-3.5 w-3.5" /> GDPR</span>
            <span className="inline-flex items-center gap-1.5"><Globe className="h-3.5 w-3.5" /> Multi-branch</span>
          </div>
          <p>© {new Date().getFullYear()} Apotek Pro · A Zanscode product</p>
        </div>
      </div>
    </footer>
  );
}
