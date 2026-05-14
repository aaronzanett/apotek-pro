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
} from "lucide-react";
import { Wordmark } from "@/components/site/Wordmark";
import { cn } from "@/lib/utils";
import { useLang, type Lang } from "@/lib/i18n";
import { getAdminSession, signOutAdmin, DEMO_ADMIN } from "@/lib/admin-session";

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
    <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 p-0.5 text-[11px] font-medium" role="group" aria-label="Language">
      {(["id", "en"] as Lang[]).map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          className={cn(
            "rounded-full px-2 py-0.5 uppercase tracking-wider transition-all",
            lang === l ? "bg-background text-ink" : "text-white/60 hover:text-white"
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
  const [session, setSession] = useState<typeof DEMO_ADMIN | null>(null);

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

  return (
    <div className="min-h-screen bg-ink text-background">
      <div
        className={cn(
          "fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity lg:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0"
        )}
        onClick={() => setOpen(false)}
      />

      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 flex w-72 flex-col border-r border-white/10 bg-[#0b0b14] transition-transform duration-300 lg:translate-x-0",
          open ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex h-16 items-center justify-between border-b border-white/10 px-5">
          <Link to="/admin" className="flex items-center gap-2">
            <Wordmark className="h-7 w-auto text-background [&_*]:text-background" />
          </Link>
          <button onClick={() => setOpen(false)} className="inline-flex h-9 w-9 items-center justify-center rounded-full text-white/50 hover:bg-white/5 hover:text-white lg:hidden" aria-label="Close">
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="border-b border-white/10 px-5 py-3">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-amber-400/30 bg-amber-400/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-amber-300">
            <ShieldAlert className="h-3 w-3" />
            {t("admin.shell.console")}
          </div>
          <p className="mt-2 text-xs text-white/50">{t("admin.shell.consoleNote")}</p>
        </div>

        <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-5">
          {NAV.map((group) => (
            <div key={group.groupKey}>
              <p className="px-3 pb-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/40">{t(group.groupKey)}</p>
              <ul className="space-y-0.5">
                {group.items.map((item) => {
                  const Icon = item.icon;
                  return (
                    <li key={item.to}>
                      <Link
                        to={item.to}
                        activeOptions={{ exact: item.to === "/admin" }}
                        className="group flex items-center gap-3 rounded-xl px-3 py-2 text-sm text-white/60 transition-all hover:bg-white/5 hover:text-white [&.active]:bg-brand/15 [&.active]:text-brand-accent [&.active]:font-medium"
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

        <div className="border-t border-white/10 p-4">
          <p className="text-[10px] uppercase tracking-[0.18em] text-white/40">{t("admin.shell.env")}</p>
          <p className="mt-1 text-xs text-white/70">{session?.team ?? DEMO_ADMIN.team}</p>
        </div>
      </aside>

      <div className="lg:pl-72">
        <header className="sticky top-0 z-30 border-b border-white/10 bg-[#0b0b14]/80 backdrop-blur">
          <div className="flex h-16 items-center gap-3 px-4 sm:px-6 lg:px-8">
            <button onClick={() => setOpen(true)} className="inline-flex h-9 w-9 items-center justify-center rounded-full text-white/60 hover:bg-white/5 hover:text-white lg:hidden" aria-label="Open">
              <Menu className="h-5 w-5" />
            </button>

            <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/70 md:inline-flex">
              <Activity className="h-3.5 w-3.5 text-emerald-400" />
              {t("admin.shell.allSystems")}
            </div>

            <div className="ml-auto flex items-center gap-2">
              <LangPill />
              <Link to="/app" className="hidden rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/70 transition hover:bg-white/10 sm:inline-flex">
                {t("admin.shell.viewOwnerApp")}
              </Link>

              <div className="relative">
                <button
                  onClick={() => setMenu((v) => !v)}
                  className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 py-1 pl-1 pr-3 text-sm hover:bg-white/10"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand/20 text-[11px] font-semibold text-brand-accent">{initials}</span>
                  <span className="hidden font-medium text-white sm:inline">{session?.name ?? DEMO_ADMIN.name}</span>
                  <ChevronDown className="h-3.5 w-3.5 text-white/50" />
                </button>
                {menu && (
                  <>
                    <div className="fixed inset-0 z-40" onClick={() => setMenu(false)} />
                    <div className="absolute right-0 z-50 mt-2 w-60 overflow-hidden rounded-2xl border border-white/10 bg-[#0b0b14] shadow-2xl">
                      <div className="border-b border-white/10 px-4 py-3">
                        <p className="text-sm font-medium text-white">{session?.name ?? DEMO_ADMIN.name}</p>
                        <p className="truncate text-xs text-white/50">{session?.email ?? DEMO_ADMIN.email}</p>
                        <p className="mt-1 text-[10px] uppercase tracking-wider text-amber-300">{session?.role ?? DEMO_ADMIN.role}</p>
                      </div>
                      <div className="p-1.5">
                        <Link to="/admin/settings" onClick={() => setMenu(false)} className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm text-white/80 hover:bg-white/5">
                          <Settings className="h-3.5 w-3.5" />
                          {t("app.profile")}
                        </Link>
                        <button onClick={handleSignOut} className="flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-left text-sm text-destructive hover:bg-destructive/10">
                          <LogOut className="h-3.5 w-3.5" />
                          {t("app.signOut")}
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

          {title && (
            <div className="border-t border-white/10 px-4 py-4 sm:px-6 lg:px-8">
              <h1 className="font-display text-2xl text-white">{title}</h1>
              {subtitle && <p className="mt-1 text-sm text-white/50">{subtitle}</p>}
            </div>
          )}
        </header>

        <main className="px-4 py-6 sm:px-6 lg:px-8">{children}</main>
      </div>
    </div>
  );
}
