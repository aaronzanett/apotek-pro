import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function AStat({ label, value, hint, tone = "default" }: { label: string; value: string; hint?: string; tone?: "default" | "good" | "warn" | "bad" | "info" }) {
  const tones: Record<string, string> = {
    default: "text-white",
    good: "text-emerald-400",
    warn: "text-amber-300",
    bad: "text-red-400",
    info: "text-brand-accent",
  };
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
      <p className="text-[11px] font-medium uppercase tracking-wider text-white/50">{label}</p>
      <p className={cn("mt-2 font-display text-3xl tracking-tight", tones[tone])}>{value}</p>
      {hint && <p className="mt-1 text-xs text-white/50">{hint}</p>}
    </div>
  );
}

export function ACard({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("rounded-2xl border border-white/10 bg-white/[0.03] p-5", className)}>{children}</div>;
}

export function ATable({ children }: { children: ReactNode }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">{children}</table>
      </div>
    </div>
  );
}

export function ATh({ children, className }: { children: ReactNode; className?: string }) {
  return <th className={cn("border-b border-white/10 bg-white/[0.04] px-4 py-3 text-left text-[11px] font-semibold uppercase tracking-wider text-white/50", className)}>{children}</th>;
}

export function ATd({ children, className }: { children: ReactNode; className?: string }) {
  return <td className={cn("border-b border-white/5 px-4 py-3 text-white/80", className)}>{children}</td>;
}

export function APill({ children, tone = "default" }: { children: ReactNode; tone?: "default" | "good" | "warn" | "bad" | "info" }) {
  const tones: Record<string, string> = {
    default: "bg-white/10 text-white/70",
    good: "bg-emerald-500/15 text-emerald-300",
    warn: "bg-amber-500/15 text-amber-300",
    bad: "bg-red-500/15 text-red-300",
    info: "bg-brand/15 text-brand-accent",
  };
  return <span className={cn("inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-medium", tones[tone])}>{children}</span>;
}

export function ASectionHeader({ title, subtitle, action }: { title: string; subtitle?: string; action?: ReactNode }) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-3">
      <div>
        <h2 className="font-display text-xl text-white">{title}</h2>
        {subtitle && <p className="mt-1 text-sm text-white/50">{subtitle}</p>}
      </div>
      {action}
    </div>
  );
}

export function AGrid({ cols = 4, children }: { cols?: 2 | 3 | 4; children: ReactNode }) {
  const map = { 2: "sm:grid-cols-2", 3: "sm:grid-cols-2 lg:grid-cols-3", 4: "sm:grid-cols-2 lg:grid-cols-4" } as const;
  return <div className={cn("grid grid-cols-1 gap-3", map[cols])}>{children}</div>;
}
