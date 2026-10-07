import { createFileRoute } from "@tanstack/react-router";
import { Building2, Bell, Globe, ShieldCheck, CreditCard, Receipt } from "lucide-react";
import { OwnerLayout } from "@/components/app/OwnerLayout";
import { SectionHeader, Stack } from "@/components/app/ui";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/app/settings")({
  head: () => ({ meta: [{ name: "description", content: "Manage settings with Apotek Pro by Zanscode." }, { property: "og:title", content: "Settings — Apotek Pro" }, { property: "og:description", content: "Manage settings with Apotek Pro by Zanscode." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }, { title: "Settings — Apotek Pro" }, { name: "robots", content: "noindex" }] }),
  component: SettingsPage,
});

const groups = [
  {
    icon: Building2,
    title: "Profil apotek",
    desc: "Nama, logo, alamat, dan informasi izin (SIA, SIPA).",
    items: ["Identitas apotek", "Dokumen izin", "Penanggung jawab"],
  },
  {
    icon: Receipt,
    title: "Pajak & faktur",
    desc: "PPN, PPh, dan format penomoran invoice.",
    items: ["Pengaturan pajak", "Format invoice", "Header & footer struk"],
  },
  {
    icon: CreditCard,
    title: "Pembayaran & POS",
    desc: "Konfigurasi metode pembayaran dan perangkat printer.",
    items: ["Metode pembayaran", "Printer & laci kas", "Pengaturan diskon"],
  },
  {
    icon: ShieldCheck,
    title: "Keamanan",
    desc: "Otentikasi dua langkah, kebijakan kata sandi, dan log audit.",
    items: ["Kata sandi & 2FA", "Sesi login aktif", "Log aktivitas"],
  },
  {
    icon: Bell,
    title: "Notifikasi",
    desc: "Kelola peringatan stok, kedaluwarsa, dan ringkasan harian.",
    items: ["Peringatan operasional", "Email harian", "Notifikasi WhatsApp"],
  },
  {
    icon: Globe,
    title: "Bahasa & wilayah",
    desc: "Bahasa antarmuka, mata uang, format tanggal, dan zona waktu.",
    items: ["Bahasa", "Mata uang & format angka", "Zona waktu"],
  },
];

function SettingsPage() {
  const { t } = useLang();
  return (
    <OwnerLayout title={t("app.nav.settings")}>
      <Stack>
        <SectionHeader title="Pengaturan apotek" subtitle="Konfigurasi sistem yang berlaku untuk seluruh akun Anda." />

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {groups.map((g) => {
            const Icon = g.icon;
            return (
              <div key={g.title} className="rounded-2xl border border-border bg-background p-5">
                <div className="flex items-start gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand/10 text-brand">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-display text-base text-foreground">{g.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{g.desc}</p>
                  </div>
                </div>
                <ul className="mt-4 space-y-1.5 border-t border-border pt-4">
                  {g.items.map((it) => (
                    <li key={it}>
                      <button className="flex w-full items-center justify-between rounded-lg px-2 py-1.5 text-left text-sm text-foreground hover:bg-secondary">
                        {it}
                        <span className="text-xs text-muted-foreground">›</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </Stack>
    </OwnerLayout>
  );
}
