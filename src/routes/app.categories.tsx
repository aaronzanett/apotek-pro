import { createFileRoute } from "@tanstack/react-router";
import { Tag } from "lucide-react";
import { OwnerLayout } from "@/components/app/OwnerLayout";
import { SectionHeader, Stack, Toolbar } from "@/components/app/ui";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/app/categories")({
  head: () => ({ meta: [{ title: "Kategori — Apotek Pro" }, { name: "robots", content: "noindex" }] }),
  component: CategoriesPage,
});

const cats = [
  { name: "Analgesik", desc: "Pereda nyeri & demam", count: 142, color: "bg-rose-500/15 text-rose-700" },
  { name: "Antibiotik", desc: "Obat infeksi bakteri", count: 89, color: "bg-blue-500/15 text-blue-700" },
  { name: "Antihistamin", desc: "Alergi & gatal", count: 54, color: "bg-amber-500/15 text-amber-700" },
  { name: "Suplemen", desc: "Vitamin & mineral", count: 218, color: "bg-emerald-500/15 text-emerald-700" },
  { name: "Diabetes", desc: "Gula darah & insulin", count: 32, color: "bg-violet-500/15 text-violet-700" },
  { name: "Kardiovaskular", desc: "Jantung & pembuluh darah", count: 76, color: "bg-cyan-500/15 text-cyan-700" },
  { name: "Respirasi", desc: "Pernapasan & inhaler", count: 41, color: "bg-indigo-500/15 text-indigo-700" },
  { name: "Alkes", desc: "Alat kesehatan", count: 187, color: "bg-stone-500/15 text-stone-700" },
];

function CategoriesPage() {
  const { t } = useLang();
  return (
    <OwnerLayout title={t("app.nav.categories")}>
      <Stack>
        <SectionHeader title="Kategori produk" subtitle="Kelompokkan produk untuk pencarian & laporan yang lebih rapi." />
        <Toolbar searchPlaceholder="Cari kategori…" primaryLabel="Tambah kategori" />
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {cats.map((c) => (
            <div key={c.name} className="rounded-2xl border border-border bg-background p-4 transition-colors hover:border-foreground/20">
              <div className="flex items-start justify-between">
                <span className={`inline-flex h-9 w-9 items-center justify-center rounded-xl ${c.color}`}>
                  <Tag className="h-4 w-4" />
                </span>
                <span className="text-xs font-medium text-muted-foreground">{c.count} produk</span>
              </div>
              <h3 className="mt-3 font-medium text-foreground">{c.name}</h3>
              <p className="mt-1 text-xs text-muted-foreground">{c.desc}</p>
            </div>
          ))}
        </div>
      </Stack>
    </OwnerLayout>
  );
}
