import { useMemo, useState } from "react";
import { CheckCircle2, Clock3, MoreHorizontal, type LucideIcon } from "lucide-react";
import { toast } from "sonner";
import { Toolbar, Grid, StatCard, TableCard, Th, Td, Pill } from "@/components/app/ui";
import { Button } from "@/components/ui/button";

type Row = { name: string; detail: string; metric: string; status: string; tone?: "good" | "warn" | "bad" | "info" | "default" };

export function OperationalPage({ icon: Icon, description, stats, rows, primaryLabel }: {
  icon: LucideIcon;
  description: string;
  stats: Array<{ label: string; value: string; note: string }>;
  rows: Row[];
  primaryLabel: string;
}) {
  const [query, setQuery] = useState("");
  const [items, setItems] = useState(rows);
  const filtered = useMemo(() => items.filter((item) => `${item.name} ${item.detail} ${item.status}`.toLowerCase().includes(query.toLowerCase())), [items, query]);
  return (
    <div className="space-y-6">
      <div className="flex items-start gap-3 rounded-2xl border border-border bg-background p-5 shadow-soft">
        <span className="rounded-xl bg-brand/10 p-2.5 text-brand"><Icon className="h-5 w-5" /></span>
        <div><h2 className="font-display text-xl font-semibold">Ringkasan operasional</h2><p className="mt-1 text-sm text-muted-foreground">{description}</p></div>
      </div>
      <Grid>{stats.map((stat, index) => <StatCard key={stat.label} label={stat.label} value={stat.value} hint={stat.note} tone={index === 2 ? "warn" : index === 1 ? "info" : "default"} />)}</Grid>
      <Toolbar searchPlaceholder="Cari data…" onSearch={setQuery} primaryLabel={primaryLabel} exportRows={items.map((item) => ({ nama: item.name, detail: item.detail, nilai: item.metric, status: item.status }))} />
      <TableCard>
        <thead><tr><Th>Nama</Th><Th>Informasi</Th><Th>Nilai</Th><Th>Status</Th><Th>Aksi</Th></tr></thead>
        <tbody>{filtered.map((item) => <tr key={item.name} className="hover:bg-cream/30"><Td><span className="font-medium">{item.name}</span></Td><Td>{item.detail}</Td><Td>{item.metric}</Td><Td><Pill tone={item.tone ?? "default"}>{item.status}</Pill></Td><Td><Button type="button" variant="ghost" size="icon" className="h-8 w-8" onClick={() => { setItems((current) => current.map((row) => row.name === item.name ? { ...row, status: "Ditinjau", tone: "good" } : row)); toast.success(`${item.name} telah ditinjau`); }} aria-label={`Tinjau ${item.name}`}><MoreHorizontal className="h-4 w-4" /></Button></Td></tr>)}</tbody>
      </TableCard>
      <div className="grid gap-3 md:grid-cols-2">
        <Button type="button" variant="outline" className="h-auto justify-start rounded-xl p-4" onClick={() => toast.info("Tidak ada proses yang tertunda lebih dari 24 jam")}><Clock3 className="text-amber-500" /><span className="text-left"><span className="block font-medium">Periksa pekerjaan tertunda</span><span className="block text-xs font-normal text-muted-foreground">Validasi aktivitas yang memerlukan tindak lanjut</span></span></Button>
        <Button type="button" variant="outline" className="h-auto justify-start rounded-xl p-4" onClick={() => toast.success("Seluruh data demo berhasil divalidasi")}><CheckCircle2 className="text-emerald-500" /><span className="text-left"><span className="block font-medium">Validasi data</span><span className="block text-xs font-normal text-muted-foreground">Jalankan pemeriksaan kelengkapan otomatis</span></span></Button>
      </div>
    </div>
  );
}