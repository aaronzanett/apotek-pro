import type { ReactNode } from "react";
import { Search, Plus, Filter, Download } from "lucide-react";
import { cn } from "@/lib/utils";

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
  tone?: "default" | "good" | "warn" | "bad";
}) {
  const tones: Record<string, string> = {
    default: "text-foreground",
    good: "text-emerald-600",
    warn: "text-amber-600",
    bad: "text-destructive",
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
}: {
  searchPlaceholder?: string;
  primaryLabel?: string;
  onPrimary?: () => void;
  extra?: ReactNode;
}) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <div className="relative flex-1 min-w-[220px]">
        <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <input
          type="search"
          placeholder={searchPlaceholder ?? "Cari…"}
          className="block w-full rounded-full border border-border bg-cream/60 px-10 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
        />
      </div>
      <button className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-3 py-2 text-xs font-medium text-foreground transition-colors hover:bg-secondary">
        <Filter className="h-3.5 w-3.5" />
        Filter
      </button>
      <button className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-3 py-2 text-xs font-medium text-foreground transition-colors hover:bg-secondary">
        <Download className="h-3.5 w-3.5" />
        Ekspor
      </button>
      {extra}
      {primaryLabel && (
        <button
          onClick={onPrimary}
          className="ml-auto inline-flex items-center gap-1.5 rounded-full bg-ink px-4 py-2 text-xs font-medium text-background transition-colors hover:bg-ink/90"
        >
          <Plus className="h-3.5 w-3.5" />
          {primaryLabel}
        </button>
      )}
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
