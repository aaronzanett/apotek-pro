import { useSyncExternalStore } from "react";

const KEY = "apotekpro.admin.workspace.v1";

export type AdminTenant = { id: string; name: string; owner: string; country: string; branches: number; users: number; plan: string; mrr: number; status: "active" | "trial" | "past_due" | "suspended"; since: string };
export type AdminUser = { name: string; email: string; tenant: string; role: string; lastSeen: string; mfa: boolean; locked: boolean };
export type AdminTicket = { id: string; subject: string; tenant: string; priority: "high" | "med" | "low"; status: "open" | "waiting" | "resolved"; assignee: string; age: string };
export type AdminInvoice = { id: string; tenant: string; amount: number; issued: string; paid: string; status: "paid" | "open" | "past_due" };
export type AdminStaff = { name: string; email: string; role: "superadmin" | "support" | "billing" | "engineer"; team: string; mfa: boolean; lastSeen: string; active: boolean };
export type AdminAnnouncement = { id: string; title: string; audience: string; status: "scheduled" | "published" | "draft"; date: string };
export type AdminNotification = { id: string; title: string; detail: string; time: string; to: string; read: boolean; tone: "good" | "warn" | "info" };
export type AdminState = {
  tenants: AdminTenant[]; users: AdminUser[]; tickets: AdminTicket[]; invoices: AdminInvoice[]; staff: AdminStaff[]; announcements: AdminAnnouncement[];
  services: { name: string; region: string; status: "operational" | "degraded" | "outage"; p95: string }[];
  subscriptions: { tenant: string; plan: string; seats: number; branches: number; mrr: number; renews: string; status: "active" | "trial" | "past_due" }[];
  audit: { ts: string; actor: string; action: string; target: string; ip: string; severity: "high" | "med" | "low" }[];
  featureFlags: { key: string; desc: string; enabled: boolean; rollout: number }[];
  integrations: { name: string; connected: boolean }[];
  channels: { name: string; enabled: boolean }[];
  notifications: AdminNotification[];
  branding: { productName: string; vendor: string; supportEmail: string; locale: string };
  security: { enforceMfa: boolean; sessionHours: number; ipAllowlist: boolean; region: string };
};

const initial: AdminState = {
  tenants: [
    { id: "med-001", name: "MediFarma Group", owner: "Dr. Sari Pratama", country: "ID", branches: 12, users: 64, plan: "Enterprise", mrr: 1290, status: "active", since: "2023-04-12" },
    { id: "ses-002", name: "Apotek Sehat Sentosa", owner: "Andi Wijaya", country: "ID", branches: 4, users: 18, plan: "Growth", mrr: 396, status: "active", since: "2024-02-08" },
    { id: "fnu-003", name: "Farma Nusantara", owner: "Lia Hartanto", country: "ID", branches: 1, users: 3, plan: "Starter", mrr: 49, status: "trial", since: "2026-05-01" },
    { id: "bum-004", name: "Bumi Healthcare", owner: "Pak Bambang", country: "MY", branches: 7, users: 33, plan: "Growth", mrr: 693, status: "past_due", since: "2024-09-19" },
    { id: "cnd-005", name: "Apotek Cendana", owner: "Maya Dewi", country: "ID", branches: 2, users: 7, plan: "Starter", mrr: 98, status: "active", since: "2026-04-22" },
  ],
  users: [
    { name: "Sari Pratama", email: "sari@medifarma.id", tenant: "MediFarma Group", role: "owner", lastSeen: "2 min ago", mfa: true, locked: false },
    { name: "Andi Wijaya", email: "andi@sehatsentosa.id", tenant: "Apotek Sehat Sentosa", role: "owner", lastSeen: "1 hr ago", mfa: true, locked: false },
    { name: "Lia Hartanto", email: "lia@farmanusa.id", tenant: "Farma Nusantara", role: "owner", lastSeen: "3 hr ago", mfa: false, locked: false },
    { name: "Bambang R.", email: "bambang@bumi.my", tenant: "Bumi Healthcare", role: "owner", lastSeen: "yesterday", mfa: true, locked: true },
  ],
  tickets: [
    { id: "T-2841", subject: "Stock sync stuck after import", tenant: "Bumi Healthcare", priority: "high", status: "open", assignee: "Rizki H.", age: "2h" },
    { id: "T-2839", subject: "Receipt printer not detected on counter 3", tenant: "MediFarma Group", priority: "med", status: "waiting", assignee: "Maya N.", age: "5h" },
    { id: "T-2837", subject: "Request: bulk product CSV upload", tenant: "Apotek Cendana", priority: "low", status: "open", assignee: "—", age: "1d" },
    { id: "T-2825", subject: "How to add a second outlet", tenant: "Farma Nusantara", priority: "low", status: "resolved", assignee: "Maya N.", age: "3d" },
  ],
  invoices: [
    { id: "INV-3892", tenant: "MediFarma Group", amount: 1290, issued: "2026-05-01", paid: "2026-05-02", status: "paid" },
    { id: "INV-3891", tenant: "Bumi Healthcare", amount: 693, issued: "2026-05-01", paid: "—", status: "past_due" },
    { id: "INV-3890", tenant: "Apotek Sehat Sentosa", amount: 396, issued: "2026-05-01", paid: "2026-05-01", status: "paid" },
    { id: "INV-3888", tenant: "Farma Nusantara", amount: 49, issued: "2026-04-30", paid: "—", status: "open" },
  ],
  staff: [
    { name: "Rizki Hartono", email: "rizki@zanscode.com", role: "superadmin", team: "Platform", mfa: true, lastSeen: "now", active: true },
    { name: "Maya Nadia", email: "maya@zanscode.com", role: "support", team: "Customer Success", mfa: true, lastSeen: "12m", active: true },
    { name: "Dion Permana", email: "dion@zanscode.com", role: "engineer", team: "Platform", mfa: true, lastSeen: "1h", active: true },
    { name: "Putri Anggraini", email: "putri@zanscode.com", role: "billing", team: "Finance", mfa: false, lastSeen: "3h", active: true },
  ],
  announcements: [
    { id: "ANN-3", title: "Maintenance window — Sun 18 May, 02:00–03:00 WIB", audience: "All tenants", status: "scheduled", date: "2026-05-14" },
    { id: "ANN-2", title: "New: bulk product CSV import (beta)", audience: "Growth & Enterprise", status: "published", date: "2026-05-12" },
    { id: "ANN-1", title: "Price update for Starter plan effective July 1", audience: "Starter tenants", status: "draft", date: "2026-05-10" },
  ],
  services: [
    { name: "API gateway", region: "ap-southeast-1", status: "operational", p95: "112 ms" }, { name: "Database (primary)", region: "ap-southeast-1", status: "operational", p95: "8 ms" },
    { name: "Background workers", region: "global", status: "degraded", p95: "—" }, { name: "Object storage", region: "ap-southeast-1", status: "operational", p95: "24 ms" },
    { name: "Email delivery", region: "global", status: "operational", p95: "—" }, { name: "Webhook outbound", region: "global", status: "operational", p95: "—" },
  ],
  subscriptions: [
    { tenant: "MediFarma Group", plan: "Enterprise", seats: 64, branches: 12, mrr: 1290, renews: "2026-06-12", status: "active" },
    { tenant: "Apotek Sehat Sentosa", plan: "Growth (annual)", seats: 18, branches: 4, mrr: 396, renews: "2027-02-08", status: "active" },
    { tenant: "Farma Nusantara", plan: "Starter (trial)", seats: 3, branches: 1, mrr: 0, renews: "2026-05-15", status: "trial" },
    { tenant: "Bumi Healthcare", plan: "Growth (monthly)", seats: 33, branches: 7, mrr: 693, renews: "2026-05-19", status: "past_due" },
  ],
  audit: [
    { ts: "2026-05-14 10:42:18", actor: "rizki@zanscode.com", action: "tenant.suspend", target: "Bumi Healthcare", ip: "203.0.113.12", severity: "high" },
    { ts: "2026-05-14 10:38:01", actor: "maya@zanscode.com", action: "user.impersonate.start", target: "andi@sehatsentosa.id", ip: "203.0.113.45", severity: "med" },
    { ts: "2026-05-14 10:01:55", actor: "system", action: "billing.invoice.issue", target: "INV-3892", ip: "internal", severity: "low" },
    { ts: "2026-05-14 09:33:09", actor: "putri@zanscode.com", action: "billing.refund", target: "INV-3870", ip: "203.0.113.88", severity: "high" },
  ],
  featureFlags: [
    { key: "fefo_v2", desc: "New FEFO picking algorithm", enabled: true, rollout: 5 }, { key: "ai_assistant", desc: "Pharmacist AI assistant in dispensing", enabled: false, rollout: 0 },
    { key: "offline_mode", desc: "Offline-tolerant POS", enabled: true, rollout: 100 }, { key: "new_billing_ui", desc: "Redesigned billing dashboard", enabled: false, rollout: 0 },
  ],
  integrations: [{ name: "Stripe", connected: true }, { name: "Xendit (ID)", connected: true }, { name: "Postmark (email)", connected: true }, { name: "Sentry (errors)", connected: true }, { name: "PagerDuty", connected: false }, { name: "Slack #ops", connected: true }],
  channels: [{ name: "In-app banner (owner workspace)", enabled: true }, { name: "Email digest (weekly)", enabled: true }, { name: "Status page", enabled: true }, { name: "Webhook to /api/announcements", enabled: true }],
  notifications: [
    { id: "n1", title: "Payment failed", detail: "Bumi Healthcare invoice needs attention.", time: "8 min", to: "/admin/billing", read: false, tone: "warn" },
    { id: "n2", title: "New priority ticket", detail: "Stock sync issue assigned to the platform team.", time: "25 min", to: "/admin/support", read: false, tone: "warn" },
    { id: "n3", title: "Tenant activated", detail: "Apotek Cendana completed onboarding.", time: "2 hr", to: "/admin/tenants", read: true, tone: "good" },
  ],
  branding: { productName: "Apotek Pro", vendor: "Zanscode", supportEmail: "support@apotekpro.com", locale: "Indonesian (id-ID)" },
  security: { enforceMfa: true, sessionHours: 12, ipAllowlist: false, region: "ap-southeast-1" },
};

let state = initial;
let hydrated = false;
const listeners = new Set<() => void>();
const cloneInitial = () => JSON.parse(JSON.stringify(initial)) as AdminState;
function hydrate() { if (hydrated || typeof window === "undefined") return; hydrated = true; try { const raw = localStorage.getItem(KEY); if (raw) state = { ...cloneInitial(), ...(JSON.parse(raw) as AdminState) }; } catch {} }
function emit() { if (typeof window !== "undefined") localStorage.setItem(KEY, JSON.stringify(state)); listeners.forEach((listener) => listener()); }
function update(recipe: (current: AdminState) => AdminState) { hydrate(); state = recipe(state); emit(); }
function subscribe(listener: () => void) { listeners.add(listener); return () => listeners.delete(listener); }
function snapshot() { hydrate(); return state; }

export function useAdminWorkspace() {
  const data = useSyncExternalStore(subscribe, snapshot, () => initial);
  return {
    ...data,
    setCollection: <K extends keyof AdminState>(key: K, value: AdminState[K]) => update((current) => ({ ...current, [key]: value })),
    markRead: (id: string) => update((current) => ({ ...current, notifications: current.notifications.map((n) => n.id === id ? { ...n, read: true } : n) })),
    markAllRead: () => update((current) => ({ ...current, notifications: current.notifications.map((n) => ({ ...n, read: true })) })),
    addAudit: (action: string, target: string, severity: "high" | "med" | "low" = "low") => update((current) => ({ ...current, audit: [{ ts: new Date().toLocaleString("sv-SE"), actor: "admin@zanscode.com", action, target, ip: "demo", severity }, ...current.audit] })),
    reset: () => { state = cloneInitial(); emit(); },
  };
}

export const adminSearchItems = [
  { label: "Dashboard", detail: "Platform overview", to: "/admin" }, { label: "Tenants", detail: "Pharmacies and plans", to: "/admin/tenants" },
  { label: "Users", detail: "Customer accounts", to: "/admin/users" }, { label: "Support", detail: "Ticket queue", to: "/admin/support" },
  { label: "Subscriptions", detail: "Plans and renewals", to: "/admin/subscriptions" }, { label: "Billing", detail: "Invoices and payments", to: "/admin/billing" },
  { label: "Staff", detail: "Internal access", to: "/admin/staff" }, { label: "Audit", detail: "Security events", to: "/admin/audit" },
  { label: "System", detail: "Service health", to: "/admin/system" }, { label: "Announcements", detail: "Customer communications", to: "/admin/announcements" },
  { label: "Settings", detail: "Platform configuration", to: "/admin/settings" },
] as const;