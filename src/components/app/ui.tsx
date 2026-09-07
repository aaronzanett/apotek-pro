import { useMemo, useState, type ReactNode } from "react";
import { Search, Plus, Filter, Download } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ActionDialog } from "@/components/app/ActionDialog";
import { toast } from "sonner";

/* ---------- KPI / Stat card ---------- */
export function StatCard({
  label,
  value,
  hint,
  icon: Icon,
  tone = "default",
}: {
  label: string;
  value: string;
  hint?: string;
  icon?: React.ComponentType<{ className?: string }>;
  tone?: "default" | "good" | "warn" | "bad" | "info";
}) {
  const tones: Record<string, string> = {
    default: "text-foreground",
    good: "text-emerald-600",
    warn: "text-amber-600",
    bad: "text-destructive",
    info: "text-brand",
  };
  return (
    <div className="rounded-2xl border border-border bg-background p-4">
      <div className="flex items-center justify-between">
        <p className="text-xs font-medium text-muted-foreground">{label}</p>
        {Icon && <Icon className="h-4 w-4 text-muted-foreground" />}
      </div>
      <p className={cn("mt-2 font-display text-2xl tracking-tight", tones[tone])}>{value}</p>
      {hint && <p className="mt-1 text-xs text-muted-foreground">{hint}</p>}
    </div>
  );
}

/* ---------- Toolbar above tables ---------- */
export function Toolbar({
  searchPlaceholder,
  primaryLabel,
  onPrimary,
  extra,
  onSearch,
  filterOptions,
  exportRows,
}: {
  searchPlaceholder?: string;
  primaryLabel?: string;
  onPrimary?: () => void;
  extra?: ReactNode;
  onSearch?: (value: string) => void;
  filterOptions?: string[];
  exportRows?: Array<Record<string, string | number>>;
}) {
  const [query, setQuery] = useState("");
  const [filterOpen, setFilterOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("Semua");
  const [actionOpen, setActionOpen] = useState(false);
  const options = useMemo(() => filterOptions ?? ["Semua", "Aktif", "Perlu tindakan"], [filterOptions]);
  const runPrimary = () => onPrimary ? onPrimary() : setActionOpen(true);
  const exportCsv = () => {
    const data = exportRows?.length ? exportRows : [{ laporan: "Apotek Pro", pencarian: query || "Semua", filter: activeFilter }];
    const headers = Object.keys(data[0] ?? {});
    const csv = [headers.join(","), ...data.map((row) => headers.map((key) => JSON.stringify(row[key] ?? "")).join(","))].join("\n");
    const url = URL.createObjectURL(new Blob([csv], { type: "text/csv;charset=utf-8" }));
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "apotek-pro-export.csv";
    anchor.click();
    URL.revokeObjectURL(url);
    toast.success("Data berhasil diekspor");
  };
  return (
    <div className="relative flex flex-wrap items-center gap-2">
      <div className="relative flex-1 min-w-[220px]">
        <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <input
          type="search"
          value={query}
          onChange={(event) => { setQuery(event.target.value); onSearch?.(event.target.value); }}
          placeholder={searchPlaceholder ?? "Cari…"}
          className="block w-full rounded-full border border-border bg-cream/60 px-10 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
        />
      </div>
      <Button type="button" variant="outline" size="sm" onClick={() => setFilterOpen((value) => !value)}>
        <Filter className="h-3.5 w-3.5" />
        {activeFilter === "Semua" ? "Filter" : activeFilter}
      </Button>
      {filterOpen && (
        <div className="absolute right-28 top-11 z-20 w-44 rounded-xl border border-border bg-background p-1 shadow-card">
          {options.map((option) => <Button key={option} type="button" variant="ghost" size="sm" className="w-full justify-start" onClick={() => { setActiveFilter(option); setFilterOpen(false); toast.info(`Filter: ${option}`); }}>{option}</Button>)}
        </div>
      )}
      <Button type="button" variant="outline" size="sm" onClick={exportCsv}>
        <Download className="h-3.5 w-3.5" />
        Ekspor
      </Button>
      {extra}
      {primaryLabel && (
        <Button type="button" variant="brand" size="sm" onClick={runPrimary} className="ml-auto">
          <Plus className="h-3.5 w-3.5" />
          {primaryLabel}
        </Button>
      )}
      {primaryLabel && !onPrimary && <ActionDialog open={actionOpen} onOpenChange={setActionOpen} title={primaryLabel} />}
    </div>
  );
}

/* ---------- Wrapper around a table card ---------- */
export function TableCard({ children }: { children: ReactNode }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-background">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">{children}</table>
      </div>
    </div>
  );
}

export function Th({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <th
      className={cn(
        "border-b border-border bg-cream/40 px-4 py-3 text-left text-[11px] font-semibold uppercase tracking-wider text-muted-foreground",
        className
      )}
    >
      {children}
    </th>
  );
}

export function Td({ children, className }: { children: ReactNode; className?: string }) {
  return <td className={cn("border-b border-border/60 px-4 py-3 text-foreground", className)}>{children}</td>;
}

/* ---------- Status pill ---------- */
export function Pill({
  children,
  tone = "default",
}: {
  children: ReactNode;
  tone?: "default" | "good" | "warn" | "bad" | "info";
}) {
  const tones: Record<string, string> = {
    default: "bg-secondary text-muted-foreground",
    good: "bg-emerald-500/10 text-emerald-700",
    warn: "bg-amber-500/10 text-amber-700",
    bad: "bg-destructive/10 text-destructive",
    info: "bg-brand/10 text-brand",
  };
  return (
    <span className={cn("inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-medium", tones[tone])}>
      {children}
    </span>
  );
}

/* ---------- Section / page header below the route title ---------- */
export function SectionHeader({
  title,
  subtitle,
  action,
}: {
  title: string;
  subtitle?: string;
  action?: ReactNode;
}) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-3">
      <div>
        <h2 className="font-display text-xl text-foreground">{title}</h2>
        {subtitle && <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>}
      </div>
      {action}
    </div>
  );
}

export function Stack({ children }: { children: ReactNode }) {
  return <div className="space-y-6">{children}</div>;
}

export function Grid({
  cols = 4,
  children,
}: {
  cols?: 2 | 3 | 4;
  children: ReactNode;
}) {
  const map = {
    2: "sm:grid-cols-2",
    3: "sm:grid-cols-2 lg:grid-cols-3",
    4: "sm:grid-cols-2 lg:grid-cols-4",
  } as const;
  return <div className={cn("grid grid-cols-1 gap-3", map[cols])}>{children}</div>;
}
