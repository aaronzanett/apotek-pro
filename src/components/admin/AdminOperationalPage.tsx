import { useMemo, useState } from "react";
import { toast } from "sonner";
import { AdminLayout } from "./AdminLayout";
import { ACard, AGrid, APill, ASectionHeader, AStat, ATable, ATd, ATh, AToolbar } from "./ui";
import { useAdminWorkspace, type AdminState } from "@/lib/admin-demo";
import { useLang, formatPrice } from "@/lib/i18n";
import { Button } from "@/components/ui/button";

export type AdminMode = "tenants" | "users" | "support" | "subscriptions" | "billing" | "staff" | "audit" | "system" | "announcements" | "settings";
const copy: Record<AdminMode, { title: string; subtitle: string }> = {
  tenants: { title: "Tenants", subtitle: "Manage pharmacy organizations, plans, and access." }, users: { title: "Customer users", subtitle: "Review accounts, MFA, locks, and secure impersonation." },
  support: { title: "Support", subtitle: "Triage, assign, and resolve customer requests." }, subscriptions: { title: "Subscriptions", subtitle: "Manage plans, renewals, seats, and recurring revenue." },
  billing: { title: "Billing", subtitle: "Track invoices, payments, and collection follow-up." }, staff: { title: "Internal staff", subtitle: "Manage the Zanscode team and console access." },
  audit: { title: "Audit log", subtitle: "Review and export security-sensitive platform activity." }, system: { title: "System health", subtitle: "Operate services and communicate incident status." },
  announcements: { title: "Announcements", subtitle: "Publish product and service communications." }, settings: { title: "Platform settings", subtitle: "Configure branding, security, features, and integrations." },
};
const tone = (value: string) => value.includes("active") || value.includes("paid") || value.includes("operational") || value.includes("published") || value === "true" ? "good" as const : value.includes("past") || value.includes("high") || value.includes("outage") || value.includes("locked") ? "bad" as const : value.includes("trial") || value.includes("waiting") || value.includes("degraded") || value.includes("scheduled") ? "warn" as const : "info" as const;

export function AdminOperationalPage({ mode }: { mode: AdminMode }) {
  const ws = useAdminWorkspace(); const { lang } = useLang(); const [query, setQuery] = useState(""); const [filter, setFilter] = useState("All");
  const collectionKey: keyof AdminState = mode === "support" ? "tickets" : mode === "billing" ? "invoices" : mode === "system" ? "services" : mode === "settings" ? "tenants" : mode;
  const collection = (ws[collectionKey] ?? []) as unknown as Array<Record<string, unknown>>;
  const rows = useMemo(() => collection.filter((row) => JSON.stringify(row).toLowerCase().includes(query.toLowerCase())).filter((row) => filter === "All" || filter === "Active" && ["active", "paid", "operational", "published", "resolved"].includes(String(row.status)) || filter === "Needs action" && !["active", "paid", "operational", "published", "resolved"].includes(String(row.status))), [collection, query, filter]);
  const setRows = (value: Array<Record<string, unknown>>) => ws.setCollection(collectionKey, value as never);
  const action = (row: Record<string, unknown>) => {
    const key = String(row.id ?? row.email ?? row.name ?? row.tenant ?? row.ts); let next = { ...row }; let message = "Updated";
    if (mode === "tenants") { next.status = row.status === "suspended" ? "active" : "suspended"; message = `${row.name} is now ${next.status}`; }
    if (mode === "users") { next.locked = !row.locked; message = `${row.email} ${next.locked ? "locked" : "unlocked"}`; }
    if (mode === "support") { next.status = row.status === "resolved" ? "open" : "resolved"; next.assignee = row.assignee === "—" ? "Admin Demo" : row.assignee; message = `${row.id} marked ${next.status}`; }
    if (mode === "subscriptions") { next.status = row.status === "past_due" ? "active" : row.status === "trial" ? "active" : "past_due"; message = `${row.tenant} subscription updated`; }
    if (mode === "billing") { next.status = "paid"; next.paid = new Date().toISOString().slice(0, 10); message = `${row.id} marked paid`; }
    if (mode === "staff") { next.active = !row.active; message = `${row.name} ${next.active ? "activated" : "deactivated"}`; }
    if (mode === "system") { next.status = row.status === "operational" ? "degraded" : "operational"; message = `${row.name} status updated`; }
    if (mode === "announcements") { next.status = row.status === "published" ? "draft" : "published"; message = `${row.title} ${next.status}`; }
    setRows(collection.map((item) => String(item.id ?? item.email ?? item.name ?? item.tenant ?? item.ts) === key ? next : item)); ws.addAudit(`${mode}.update`, key, "med"); toast.success(message);
  };
  const add = (value: string) => {
    const name = value || `New ${mode.slice(0, -1)}`; let row: Record<string, unknown> = { id: `NEW-${Date.now()}`, name, status: "active" };
    if (mode === "tenants") row = { ...row, owner: "Demo Owner", country: "ID", branches: 1, users: 1, plan: "Starter", mrr: 49, status: "trial", since: new Date().toISOString().slice(0, 10) };
    if (mode === "support") row = { id: `T-${Date.now().toString().slice(-4)}`, subject: name, tenant: "Demo tenant", priority: "low", status: "open", assignee: "—", age: "now" };
    if (mode === "users") row = { name, email: `owner${Date.now()}@demo.id`, tenant: "Demo Pharmacy", role: "owner", lastSeen: "invited", mfa: false, locked: false };
    if (mode === "subscriptions") row = { tenant: name, plan: "Starter", seats: 3, branches: 1, mrr: 49, renews: new Date(Date.now() + 2592000000).toISOString().slice(0, 10), status: "trial" };
    if (mode === "billing") row = { id: `INV-${Date.now().toString().slice(-5)}`, tenant: name, amount: 49, issued: new Date().toISOString().slice(0, 10), paid: "—", status: "open" };
    if (mode === "staff") row = { name, email: `new${Date.now()}@zanscode.com`, role: "support", team: "Customer Success", mfa: false, lastSeen: "invited", active: true };
    if (mode === "announcements") row = { id: `ANN-${Date.now()}`, title: name, audience: "All tenants", status: "draft", date: new Date().toISOString().slice(0, 10) };
    setRows([row, ...collection]); ws.addAudit(`${mode}.create`, name); toast.success(`${name} created`);
  };
  if (mode === "settings") return <SettingsPage />;
  const columns = Object.keys(rows[0] ?? collection[0] ?? {}).slice(0, 7);
  return <AdminLayout title={copy[mode].title} subtitle={copy[mode].subtitle}><div className="space-y-6">
    <AGrid cols={4}><AStat label="Total records" value={collection.length} tone="info" /><AStat label="Healthy / active" value={collection.filter((r) => ["active", "paid", "operational", "published", "resolved"].includes(String(r.status))).length} tone="good" /><AStat label="Needs attention" value={collection.filter((r) => ["past_due", "degraded", "open", "high"].includes(String(r.status ?? r.severity))).length} tone="warn" /><AStat label="Demo storage" value="Local" /></AGrid>
    <AToolbar onSearch={setQuery} onFilter={setFilter} searchPlaceholder={`Search ${mode}…`} exportRows={collection as Array<Record<string, string | number | boolean>>} primaryLabel={["tenants", "users", "support", "subscriptions", "billing", "staff", "announcements"].includes(mode) ? `New ${mode === "support" ? "ticket" : mode === "billing" ? "invoice" : mode.slice(0, -1)}` : undefined} onPrimary={add} />
    <ATable><thead><tr>{columns.map((column) => <ATh key={column}>{column.replaceAll("_", " ")}</ATh>)}{mode !== "audit" && <ATh>Action</ATh>}</tr></thead><tbody>{rows.map((row, index) => <tr key={String(row.id ?? row.email ?? row.name ?? row.tenant ?? row.ts ?? index)}>{columns.map((column) => <ATd key={column} className={column === columns[0] ? "font-medium" : ""}>{column === "mrr" || column === "amount" ? formatPrice(Number(row[column]), lang) : column === "status" || column === "severity" || typeof row[column] === "boolean" ? <APill tone={tone(String(row[column]))}>{String(row[column])}</APill> : String(row[column] ?? "—")}</ATd>)}{mode !== "audit" && <ATd><Button type="button" variant="outline" size="sm" disabled={mode === "billing" && row.status === "paid"} onClick={() => action(row)}>{mode === "support" ? row.status === "resolved" ? "Reopen" : "Resolve" : mode === "billing" ? "Mark paid" : mode === "system" ? "Update status" : "Manage"}</Button></ATd>}</tr>)}</tbody></ATable>
    {!rows.length && <ACard className="py-12 text-center text-sm text-muted-foreground">No matching records.</ACard>}
  </div></AdminLayout>;
}

function SettingsPage() {
  const ws = useAdminWorkspace();
  const toggleFlag = (key: string) => { ws.setCollection("featureFlags", ws.featureFlags.map((f) => f.key === key ? { ...f, enabled: !f.enabled } : f)); ws.addAudit("feature.toggle", key); toast.success("Feature flag updated"); };
  return <AdminLayout title={copy.settings.title} subtitle={copy.settings.subtitle}><div className="space-y-6"><div className="grid gap-4 lg:grid-cols-2"><ACard><ASectionHeader title="Branding" subtitle="Customer-facing platform identity" /><div className="mt-4 space-y-3">{Object.entries(ws.branding).map(([key, value]) => <label key={key} className="block text-xs font-medium capitalize text-muted-foreground">{key}<input value={value} onChange={(e) => ws.setCollection("branding", { ...ws.branding, [key]: e.target.value })} className="mt-1 block w-full rounded-xl border border-border bg-cream/40 px-3 py-2 text-sm text-foreground" /></label>)}<Button type="button" variant="emerald" onClick={() => { ws.addAudit("branding.save", ws.branding.productName); toast.success("Branding saved"); }}>Save branding</Button></div></ACard><ACard><ASectionHeader title="Security" subtitle="Platform-wide controls" /><div className="mt-4 space-y-3"><Button type="button" variant="outline" className="w-full justify-between" onClick={() => ws.setCollection("security", { ...ws.security, enforceMfa: !ws.security.enforceMfa })}>Enforce staff MFA <APill tone={ws.security.enforceMfa ? "good" : "warn"}>{ws.security.enforceMfa ? "on" : "off"}</APill></Button><Button type="button" variant="outline" className="w-full justify-between" onClick={() => ws.setCollection("security", { ...ws.security, ipAllowlist: !ws.security.ipAllowlist })}>IP allowlist <APill tone={ws.security.ipAllowlist ? "good" : "warn"}>{ws.security.ipAllowlist ? "on" : "off"}</APill></Button></div></ACard></div><ACard><ASectionHeader title="Feature flags" subtitle="Click any rollout to toggle it" /><div className="mt-4 grid gap-2 sm:grid-cols-2">{ws.featureFlags.map((flag) => <Button key={flag.key} type="button" variant="outline" className="h-auto justify-between rounded-xl p-4 text-left" onClick={() => toggleFlag(flag.key)}><span><code className="text-brand">{flag.key}</code><span className="mt-1 block text-xs font-normal text-muted-foreground">{flag.desc}</span></span><APill tone={flag.enabled ? "good" : "default"}>{flag.enabled ? `${flag.rollout}% on` : "off"}</APill></Button>)}</div></ACard><div className="grid gap-4 lg:grid-cols-2"><ACard><ASectionHeader title="Integrations" subtitle="Connect or disconnect demo providers" /><div className="mt-4 grid gap-2">{ws.integrations.map((item) => <Button key={item.name} type="button" variant="outline" className="justify-between" onClick={() => { ws.setCollection("integrations", ws.integrations.map((row) => row.name === item.name ? { ...row, connected: !row.connected } : row)); toast.success(`${item.name} updated`); }}>{item.name}<APill tone={item.connected ? "good" : "warn"}>{item.connected ? "connected" : "disconnected"}</APill></Button>)}</div></ACard><ACard><ASectionHeader title="Announcement channels" subtitle="Control platform delivery" /><div className="mt-4 grid gap-2">{ws.channels.map((item) => <Button key={item.name} type="button" variant="outline" className="justify-between" onClick={() => { ws.setCollection("channels", ws.channels.map((row) => row.name === item.name ? { ...row, enabled: !row.enabled } : row)); toast.success(`${item.name} updated`); }}>{item.name}<APill tone={item.enabled ? "good" : "default"}>{item.enabled ? "on" : "off"}</APill></Button>)}</div></ACard></div></div></AdminLayout>;
}