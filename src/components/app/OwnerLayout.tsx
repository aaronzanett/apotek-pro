import { type ReactNode, useEffect, useMemo, useState } from "react";
import { Link, useNavigate, useRouterState } from "@tanstack/react-router";
import {
  LayoutDashboard,
  ScanBarcode,
  Pill,
  Boxes,
  Truck,
  Building2,
  Users,
  Settings,
  Search,
  Bell,
  ChevronDown,
  ChevronRight,
  LogOut,
  Menu,
  X,
  Sparkles,
  HelpCircle,
  Tag,
  Ruler,
  Archive,
  CreditCard,
  AlertTriangle,
  CalendarX,
  ClipboardCheck,
  ShoppingCart,
  PackageCheck,
  Receipt,
  BookOpen,
  ArrowDownCircle,
  ArrowUpCircle,
  UserCog,
  KeyRound,
  Contact,
  UserRound,
  Store,
  Database,
  Wallet,
  Shield,
} from "lucide-react";
import { Wordmark } from "@/components/site/Wordmark";
import { cn } from "@/lib/utils";
import { useLang, type Lang } from "@/lib/i18n";
import { getDemoSession, signOutDemo, DEMO_OWNER } from "@/lib/demo-session";

type NavItem = {
  to: string;
  labelKey: string;
  icon: typeof LayoutDashboard;
  badge?: string;
};

type NavGroup = {
  key: string;
  labelKey: string;
  icon: typeof LayoutDashboard;
  collapsible?: boolean;
  items: NavItem[];
};

function buildNav(): NavGroup[] {
  return [
    {
      key: "workspace",
      labelKey: "app.nav.workspace",
      icon: LayoutDashboard,
      items: [
        { to: "/app", labelKey: "app.nav.dashboard", icon: LayoutDashboard },
        { to: "/app/pos", labelKey: "app.nav.pos", icon: ScanBarcode },
        { to: "/app/sales", labelKey: "app.nav.sales", icon: Receipt },
        { to: "/app/prescriptions", labelKey: "app.nav.prescriptions", icon: Pill, badge: "3" },
      ],
    },
    {
      key: "masterData",
      labelKey: "app.nav.masterData",
      icon: Database,
      collapsible: true,
      items: [
        { to: "/app/products", labelKey: "app.nav.products", icon: Pill },
        { to: "/app/categories", labelKey: "app.nav.categories", icon: Tag },
        { to: "/app/units", labelKey: "app.nav.units", icon: Ruler },
        { to: "/app/shelves", labelKey: "app.nav.shelves", icon: Archive },
        { to: "/app/payment-methods", labelKey: "app.nav.paymentMethods", icon: CreditCard },
      ],
    },
    {
      key: "inventoryGroup",
      labelKey: "app.nav.inventoryGroup",
      icon: Boxes,
      collapsible: true,
      items: [
        { to: "/app/stock", labelKey: "app.nav.stock", icon: Boxes },
        { to: "/app/defecta", labelKey: "app.nav.defecta", icon: AlertTriangle },
        { to: "/app/expired-stock", labelKey: "app.nav.expired", icon: CalendarX },
        { to: "/app/stock-opname", labelKey: "app.nav.opname", icon: ClipboardCheck },
      ],
    },
    {
      key: "purchasingGroup",
      labelKey: "app.nav.purchasingGroup",
      icon: ShoppingCart,
      collapsible: true,
      items: [
        { to: "/app/purchasing", labelKey: "app.nav.purchasing", icon: ShoppingCart },
        { to: "/app/supply", labelKey: "app.nav.supply", icon: PackageCheck },
      ],
    },
    {
      key: "finance",
      labelKey: "app.nav.finance",
      icon: Wallet,
      collapsible: true,
      items: [
        { to: "/app/cash-book", labelKey: "app.nav.cashBook", icon: BookOpen },
        { to: "/app/accounts-payable", labelKey: "app.nav.payable", icon: ArrowDownCircle },
        { to: "/app/accounts-receivable", labelKey: "app.nav.receivable", icon: ArrowUpCircle },
      ],
    },
    {
      key: "contacts",
      labelKey: "app.nav.contacts",
      icon: Users,
      collapsible: true,
      items: [
        { to: "/app/contact-customers", labelKey: "app.nav.customers", icon: UserRound },
        { to: "/app/contact-employees", labelKey: "app.nav.employees", icon: Contact },
        { to: "/app/contact-suppliers", labelKey: "app.nav.contactSuppliers", icon: Truck },
      ],
    },
    {
      key: "admin",
      labelKey: "app.nav.admin",
      icon: Shield,
      collapsible: true,
      items: [
        { to: "/app/users", labelKey: "app.nav.users", icon: UserCog },
        { to: "/app/roles", labelKey: "app.nav.roles", icon: KeyRound },
        { to: "/app/outlets", labelKey: "app.nav.outlets", icon: Store },
      ],
    },
    {
      key: "account",
      labelKey: "app.nav.account",
      icon: Settings,
      items: [{ to: "/app/settings", labelKey: "app.nav.settings", icon: Settings }],
    },
  ];
}

function LangPill() {
  const { lang, setLang } = useLang();
  return (
    <div
      className="inline-flex items-center rounded-full border border-border bg-cream/60 p-0.5 text-[11px] font-medium"
      role="group"
      aria-label="Language"
    >
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

export function OwnerLayout({ children, title }: { children: ReactNode; title?: string }) {
  const { t } = useLang();
  const navigate = useNavigate();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [userMenu, setUserMenu] = useState(false);
  const [session, setSession] = useState<typeof DEMO_OWNER | null>(null);

  // Hydrate session client-side, redirect to /login if absent
  useEffect(() => {
    const s = getDemoSession();
    if (!s) {
      navigate({ to: "/login" });
      return;
    }
    setSession(s);
  }, [navigate]);

  // Close sidebar on route change (mobile)
  useEffect(() => {
    setSidebarOpen(false);
  }, [pathname]);

  const groups = useMemo(() => buildNav(), []);

  // Track which collapsible groups are open. Auto-open the group containing the active route.
  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>(() => {
    const initial: Record<string, boolean> = {};
    for (const g of groups) {
      if (g.collapsible) initial[g.key] = false;
    }
    return initial;
  });

  useEffect(() => {
    setOpenGroups((prev) => {
      const next = { ...prev };
      for (const g of groups) {
        if (g.collapsible && g.items.some((i) => pathname === i.to || pathname.startsWith(i.to + "/"))) {
          next[g.key] = true;
        }
      }
      return next;
    });
  }, [pathname, groups]);

  const toggleGroup = (key: string) =>
    setOpenGroups((prev) => ({ ...prev, [key]: !prev[key] }));

  const handleSignOut = () => {
    signOutDemo();
    navigate({ to: "/login" });
  };

  const initials =
    (session?.name ?? "U")
      .split(" ")
      .map((p) => p[0])
      .slice(0, 2)
      .join("")
      .toUpperCase() || "U";

  return (
    <div className="min-h-screen bg-cream/40 text-foreground">
      {/* Mobile overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-ink/40 backdrop-blur-sm transition-opacity lg:hidden",
          sidebarOpen ? "opacity-100" : "pointer-events-none opacity-0"
        )}
        onClick={() => setSidebarOpen(false)}
        aria-hidden="true"
      />

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 flex w-72 flex-col border-r border-border bg-background transition-transform duration-300 lg:translate-x-0",
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex h-16 items-center justify-between border-b border-border px-5">
          <Link to="/app" className="flex items-center gap-2">
            <Wordmark className="h-7 w-auto" />
          </Link>
          <button
            onClick={() => setSidebarOpen(false)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground lg:hidden"
            aria-label="Close sidebar"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-3 py-5">
          <nav className="space-y-4">
            {groups.map((group) => {
              const GroupIcon = group.icon;
              const isOpen = group.collapsible ? !!openGroups[group.key] : true;
              const hasActive = group.items.some(
                (i) => pathname === i.to || pathname.startsWith(i.to + "/")
              );

              const renderItems = (
                <ul className={cn("space-y-0.5", group.collapsible && "mt-0.5")}>
                  {group.items.map((item) => {
                    const Icon = item.icon;
                    return (
                      <li key={item.to}>
                        <Link
                          to={item.to}
                          activeOptions={{ exact: item.to === "/app" }}
                          className={cn(
                            "group flex items-center gap-3 rounded-xl px-3 py-2 text-sm text-muted-foreground transition-all hover:bg-secondary hover:text-foreground [&.active]:bg-brand/10 [&.active]:text-brand [&.active]:font-medium",
                            group.collapsible && "pl-9"
                          )}
                        >
                          {!group.collapsible && <Icon className="h-4 w-4 shrink-0" />}
                          <span className="flex-1 truncate">{t(item.labelKey)}</span>
                          {item.badge && (
                            <span className="rounded-full bg-brand/10 px-2 py-0.5 text-[10px] font-semibold text-brand">
                              {item.badge}
                            </span>
                          )}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              );

              if (!group.collapsible) {
                return (
                  <div key={group.key}>
                    <p className="px-3 pb-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                      {t(group.labelKey)}
                    </p>
                    {renderItems}
                  </div>
                );
              }

              return (
                <div key={group.key}>
                  <button
                    type="button"
                    onClick={() => toggleGroup(group.key)}
                    aria-expanded={isOpen}
                    className={cn(
                      "flex w-full items-center gap-3 rounded-xl px-3 py-2 text-sm transition-colors hover:bg-secondary",
                      hasActive ? "text-foreground" : "text-muted-foreground"
                    )}
                  >
                    <GroupIcon className="h-4 w-4 shrink-0" />
                    <span className="flex-1 text-left font-medium">{t(group.labelKey)}</span>
                    <ChevronRight
                      className={cn("h-3.5 w-3.5 transition-transform", isOpen && "rotate-90")}
                    />
                  </button>
                  {isOpen && renderItems}
                </div>
              );
            })}
          </nav>
        </div>

        {/* Sidebar footer — demo banner */}
        <div className="border-t border-border p-4">
          <div className="rounded-xl border border-border bg-cream p-3">
            <div className="flex items-center gap-2 text-xs font-medium text-foreground">
              <Sparkles className="h-3.5 w-3.5 text-brand" />
              {t("app.demoMode")}
            </div>
            <p className="mt-1 text-[11px] leading-relaxed text-muted-foreground">
              {session?.pharmacy ?? DEMO_OWNER.pharmacy} · {session?.branch ?? DEMO_OWNER.branch}
            </p>
          </div>
        </div>
      </aside>

      {/* Main */}
      <div className="lg:pl-72">
        {/* Topbar */}
        <header className="sticky top-0 z-30 border-b border-border bg-background/80 backdrop-blur-md">
          <div className="flex h-16 items-center gap-3 px-4 sm:px-6 lg:px-8">
            <button
              onClick={() => setSidebarOpen(true)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground lg:hidden"
              aria-label="Open sidebar"
            >
              <Menu className="h-5 w-5" />
            </button>

            {/* Search */}
            <div className="relative flex-1 max-w-xl">
              <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="search"
                placeholder={t("app.search")}
                className="block w-full rounded-full border border-border bg-cream/60 px-10 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
              />
            </div>

            <div className="ml-auto flex items-center gap-2">
              {/* Branch picker */}
              <button className="hidden items-center gap-2 rounded-full border border-border bg-cream/60 px-3 py-1.5 text-xs text-foreground transition-colors hover:bg-cream md:inline-flex">
                <Building2 className="h-3.5 w-3.5 text-muted-foreground" />
                {session?.branch ?? DEMO_OWNER.branch}
                <ChevronDown className="h-3 w-3 text-muted-foreground" />
              </button>

              <LangPill />

              <button
                className="relative inline-flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                aria-label="Notifications"
              >
                <Bell className="h-4 w-4" />
                <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-destructive" />
              </button>

              {/* User menu */}
              <div className="relative">
                <button
                  onClick={() => setUserMenu((v) => !v)}
                  className="flex items-center gap-2 rounded-full border border-border bg-background py-1 pl-1 pr-3 text-sm transition-colors hover:bg-secondary"
                  aria-haspopup="menu"
                  aria-expanded={userMenu}
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand/15 text-[11px] font-semibold text-brand">
                    {initials}
                  </span>
                  <span className="hidden font-medium text-foreground sm:inline">
                    {session?.name ?? DEMO_OWNER.name}
                  </span>
                  <ChevronDown className="h-3.5 w-3.5 text-muted-foreground" />
                </button>

                {userMenu && (
                  <>
                    <div
                      className="fixed inset-0 z-40"
                      onClick={() => setUserMenu(false)}
                      aria-hidden="true"
                    />
                    <div className="absolute right-0 z-50 mt-2 w-56 overflow-hidden rounded-2xl border border-border bg-background shadow-card">
                      <div className="border-b border-border px-4 py-3">
                        <p className="text-sm font-medium text-foreground">
                          {session?.name ?? DEMO_OWNER.name}
                        </p>
                        <p className="truncate text-xs text-muted-foreground">
                          {session?.email ?? DEMO_OWNER.email}
                        </p>
                      </div>
                      <div className="p-1.5">
                        <Link
                          to="/app/settings"
                          className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm text-foreground transition-colors hover:bg-secondary"
                          onClick={() => setUserMenu(false)}
                        >
                          <Settings className="h-3.5 w-3.5 text-muted-foreground" />
                          {t("app.profile")}
                        </Link>
                        <a
                          href="#"
                          className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm text-foreground transition-colors hover:bg-secondary"
                        >
                          <HelpCircle className="h-3.5 w-3.5 text-muted-foreground" />
                          {t("app.help")}
                        </a>
                        <button
                          onClick={handleSignOut}
                          className="flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-left text-sm text-destructive transition-colors hover:bg-destructive/10"
                        >
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
            <div className="border-t border-border bg-background px-4 py-4 sm:px-6 lg:px-8">
              <h1 className="font-display text-2xl text-foreground">{title}</h1>
            </div>
          )}
        </header>

        <main className="px-4 py-6 sm:px-6 lg:px-8">{children}</main>
      </div>
    </div>
  );
}
