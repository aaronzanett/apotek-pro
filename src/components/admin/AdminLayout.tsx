import { type ReactNode, useEffect, useState } from "react";
import { Link, useNavigate, useRouterState } from "@tanstack/react-router";
import {
  LayoutDashboard,
  Building2,
  CreditCard,
  Receipt,
  LifeBuoy,
  Users,
  ShieldCheck,
  Activity,
  ScrollText,
  Megaphone,
  Settings,
  LogOut,
  Menu,
  X,
  ShieldAlert,
  ChevronDown,
  Search,
  Bell,
  HelpCircle,
  RotateCcw,
} from "lucide-react";
import { Wordmark } from "@/components/site/Wordmark";
import { cn } from "@/lib/utils";
import { useLang, type Lang } from "@/lib/i18n";
import { getAdminSession, signOutAdmin, DEMO_ADMIN } from "@/lib/admin-session";
import { adminSearchItems, useAdminWorkspace } from "@/lib/admin-demo";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const NAV: { groupKey: string; items: { to: string; labelKey: string; icon: typeof LayoutDashboard; badge?: string }[] }[] = [
  {
    groupKey: "admin.nav.overview",
    items: [
      { to: "/admin", labelKey: "admin.nav.dashboard", icon: LayoutDashboard },
      { to: "/admin/system", labelKey: "admin.nav.system", icon: Activity },
      { to: "/admin/audit", labelKey: "admin.nav.audit", icon: ScrollText },
    ],
  },
  {
    groupKey: "admin.nav.customers",
    items: [
      { to: "/admin/tenants", labelKey: "admin.nav.tenants", icon: Building2 },
      { to: "/admin/users", labelKey: "admin.nav.users", icon: Users },
      { to: "/admin/support", labelKey: "admin.nav.support", icon: LifeBuoy, badge: "7" },
    ],
  },
  {
    groupKey: "admin.nav.revenue",
    items: [
      { to: "/admin/subscriptions", labelKey: "admin.nav.subscriptions", icon: CreditCard },
      { to: "/admin/billing", labelKey: "admin.nav.billing", icon: Receipt },
    ],
  },
  {
    groupKey: "admin.nav.platform",
    items: [
      { to: "/admin/staff", labelKey: "admin.nav.staff", icon: ShieldCheck },
      { to: "/admin/announcements", labelKey: "admin.nav.announcements", icon: Megaphone },
      { to: "/admin/settings", labelKey: "admin.nav.settings", icon: Settings },
    ],
  },
];

function LangPill() {
  const { lang, setLang } = useLang();
  return (
    <div className="inline-flex items-center rounded-full border border-border bg-cream/60 p-0.5 text-[11px] font-medium" role="group" aria-label="Language">
      {(["id", "en"] as Lang[]).map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          className={cn(
            "rounded-full px-2 py-0.5 uppercase tracking-wider transition-all",
            lang === l ? "bg-ink text-background" : "text-muted-foreground hover:text-foreground"
          )}
        >
          {l}
        </button>
      ))}
    </div>
  );
}

export function AdminLayout({ children, title, subtitle }: { children: ReactNode; title?: string; subtitle?: string }) {
  const { t } = useLang();
  const navigate = useNavigate();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [session, setSession] = useState<typeof DEMO_ADMIN | null>(null);
  const workspace = useAdminWorkspace();

  useEffect(() => {
    const s = getAdminSession();
    if (!s) {
      navigate({ to: "/admin/login" });
      return;
    }
    setSession(s);
  }, [navigate]);

  useEffect(() => setOpen(false), [pathname]);

  const handleSignOut = () => {
    signOutAdmin();
    navigate({ to: "/admin/login" });
  };

  const initials = (session?.name ?? "A").split(" ").map((p) => p[0]).slice(0, 2).join("").toUpperCase();
  const searchResults = search.trim().length > 1 ? adminSearchItems.filter((item) => `${item.label} ${item.detail}`.toLowerCase().includes(search.toLowerCase())) : [];
  const unreadCount = workspace.notifications.filter((item) => !item.read).length;

  return (
    <div className="min-h-screen bg-cream/40 text-foreground">
      <div
        className={cn(
          "fixed inset-0 z-40 bg-ink/40 backdrop-blur-sm transition-opacity lg:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0"
        )}
        onClick={() => setOpen(false)}
      />

      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 flex w-72 flex-col border-r border-border bg-background transition-transform duration-300 lg:translate-x-0",
          open ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex h-16 items-center justify-between border-b border-border px-5">
          <Link to="/admin" className="flex items-center gap-2">
            <Wordmark className="h-7 w-auto" />
          </Link>
          <Button type="button" variant="ghost" size="icon" onClick={() => setOpen(false)} className="lg:hidden" aria-label="Close">
            <X className="h-4 w-4" />
          </Button>
        </div>

        <div className="border-b border-border px-5 py-3">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-amber-700">
            <ShieldAlert className="h-3 w-3" />
            {t("admin.shell.console")}
          </div>
          <p className="mt-2 text-xs text-muted-foreground">{t("admin.shell.consoleNote")}</p>
        </div>

        <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-5">
          {NAV.map((group) => (
            <div key={group.groupKey}>
              <p className="px-3 pb-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">{t(group.groupKey)}</p>
              <ul className="space-y-0.5">
                {group.items.map((item) => {
                  const Icon = item.icon;
                  return (
                    <li key={item.to}>
                      <Link
                        to={item.to}
                        activeOptions={{ exact: item.to === "/admin" }}
                        className="group flex items-center gap-3 rounded-xl px-3 py-2 text-sm text-muted-foreground transition-all hover:bg-secondary hover:text-foreground [&.active]:bg-brand/10 [&.active]:text-brand [&.active]:font-medium"
                      >
                        <Icon className="h-4 w-4 shrink-0" />
                        <span className="flex-1 truncate">{t(item.labelKey)}</span>
                        {item.badge && (
                          <span className="rounded-full bg-destructive/20 px-2 py-0.5 text-[10px] font-semibold text-destructive">{item.badge}</span>
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </nav>

        <div className="border-t border-border p-4">
          <div className="rounded-xl border border-border bg-cream p-3"><p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">{t("admin.shell.env")}</p>
          <p className="mt-1 text-xs text-foreground">{session?.team ?? DEMO_ADMIN.team}</p></div>
        </div>
      </aside>

      <div className="lg:pl-72">
        <header className="sticky top-0 z-30 border-b border-border bg-background/80 backdrop-blur-md">
          <div className="flex h-16 items-center gap-3 px-4 sm:px-6 lg:px-8">
            <Button type="button" variant="ghost" size="icon" onClick={() => setOpen(true)} className="lg:hidden" aria-label="Open">
              <Menu className="h-5 w-5" />
            </Button>

            <div className="relative max-w-xl flex-1"><Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" /><input type="search" value={search} onChange={(event) => setSearch(event.target.value)} onKeyDown={(event) => { if (event.key === "Enter" && searchResults[0]) { navigate({ to: searchResults[0].to }); setSearch(""); } }} placeholder="Search admin workspace…" className="block w-full rounded-full border border-border bg-cream/60 px-10 py-2 text-sm placeholder:text-muted-foreground focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20" />
              {searchResults.length > 0 && <div className="absolute left-0 right-0 top-11 z-50 rounded-xl border border-border bg-background p-1 shadow-card">{searchResults.map((result) => <Button key={result.to} type="button" variant="ghost" className="h-auto w-full justify-start rounded-lg px-3 py-2 text-left" onClick={() => { navigate({ to: result.to }); setSearch(""); }}><span><span className="block text-sm font-medium">{result.label}</span><span className="block text-xs font-normal text-muted-foreground">{result.detail}</span></span></Button>)}</div>}
            </div>

            <div className="ml-auto flex items-center gap-2">
              <LangPill />
              <Link to="/app" className="hidden rounded-full border border-border bg-background px-3 py-1.5 text-xs text-muted-foreground transition hover:bg-secondary sm:inline-flex">
                {t("admin.shell.viewOwnerApp")}
              </Link>
              <div className="relative">
                <Button type="button" variant="ghost" size="icon" onClick={() => setNotificationsOpen((value) => !value)} className="relative h-9 w-9" aria-label="Notifications">
                  <Bell className="h-4 w-4" />
                  {unreadCount > 0 && <span className="absolute right-0 top-0 flex h-4 min-w-4 items-center justify-center rounded-full bg-destructive px-1 text-[9px] text-destructive-foreground">{unreadCount}</span>}
                </Button>
                {notificationsOpen && <div className="absolute right-0 top-11 z-50 w-[min(380px,calc(100vw-2rem))] rounded-2xl border border-border bg-background shadow-card"><div className="flex items-center justify-between border-b border-border px-4 py-3"><div><p className="text-sm font-semibold">Notifications</p><p className="text-xs text-muted-foreground">{unreadCount} unread</p></div><Button type="button" variant="ghost" size="sm" onClick={() => workspace.markAllRead()}>Mark all read</Button></div><div className="p-2">{workspace.notifications.map((item) => <Button key={item.id} type="button" variant="ghost" className={cn("h-auto w-full justify-start rounded-xl px-3 py-3 text-left", !item.read && "bg-brand/5")} onClick={() => { workspace.markRead(item.id); setNotificationsOpen(false); navigate({ to: item.to }); }}><span className="min-w-0"><span className="block whitespace-normal text-sm font-medium">{item.title}</span><span className="block whitespace-normal text-xs text-muted-foreground">{item.detail}</span></span></Button>)}</div></div>}
              </div>

              <div className="relative">
                <button
                  onClick={() => setMenu((v) => !v)}
                  className="flex items-center gap-2 rounded-full border border-border bg-background py-1 pl-1 pr-3 text-sm hover:bg-secondary"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand/15 text-[11px] font-semibold text-brand">{initials}</span>
                  <span className="hidden font-medium text-foreground sm:inline">{session?.name ?? DEMO_ADMIN.name}</span>
                  <ChevronDown className="h-3.5 w-3.5 text-muted-foreground" />
                </button>
                {menu && (
                  <>
                    <div className="fixed inset-0 z-40" onClick={() => setMenu(false)} />
                    <div className="absolute right-0 z-50 mt-2 w-60 overflow-hidden rounded-2xl border border-border bg-background shadow-card">
                      <div className="border-b border-border px-4 py-3">
                        <p className="text-sm font-medium text-foreground">{session?.name ?? DEMO_ADMIN.name}</p>
                        <p className="truncate text-xs text-muted-foreground">{session?.email ?? DEMO_ADMIN.email}</p>
                        <p className="mt-1 text-[10px] uppercase tracking-wider text-brand">{session?.role ?? DEMO_ADMIN.role}</p>
                      </div>
                      <div className="p-1.5">
                        <Link to="/admin/settings" onClick={() => setMenu(false)} className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm text-foreground hover:bg-secondary">
                          <Settings className="h-3.5 w-3.5" />
                          {t("app.profile")}
                        </Link>
                        <Button type="button" variant="ghost" onClick={() => { setMenu(false); toast.info("Admin help center", { description: "Demo support is available for all platform operations." }); }} className="w-full justify-start rounded-lg"><HelpCircle />Help</Button>
                        <Button type="button" variant="ghost" onClick={() => { workspace.reset(); workspace.addAudit("demo.reset", "Admin workspace"); setMenu(false); toast.success("Demo admin data reset"); }} className="w-full justify-start rounded-lg"><RotateCcw />Reset demo data</Button>
                        <Button type="button" variant="ghost" onClick={handleSignOut} className="w-full justify-start rounded-lg text-destructive hover:bg-destructive/10 hover:text-destructive">
                          <LogOut className="h-3.5 w-3.5" />
                          {t("app.signOut")}
                        </Button>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

          {title && (
            <div className="border-t border-border bg-background px-4 py-4 sm:px-6 lg:px-8">
              <h1 className="font-display text-2xl text-foreground">{title}</h1>
              {subtitle && <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>}
            </div>
          )}
        </header>

        <main className="px-4 py-6 sm:px-6 lg:px-8">{children}</main>
      </div>
    </div>
  );
}
