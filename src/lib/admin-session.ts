// Lightweight admin staff demo session in localStorage.
const KEY = "apotekpro.admin.session";

export type AdminSession = {
  email: string;
  name: string;
  role: "superadmin" | "support" | "billing" | "engineer";
  team: string;
  loggedInAt: number;
};

export const DEMO_ADMIN: AdminSession = {
  email: "admin@zanscode.com",
  name: "Rizki Hartono",
  role: "superadmin",
  team: "Zanscode · Platform",
  loggedInAt: 0,
};

export function getAdminSession(): AdminSession | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as AdminSession) : null;
  } catch {
    return null;
  }
}

export function signInAdmin(email?: string) {
  const session: AdminSession = {
    ...DEMO_ADMIN,
    email: email && email.trim().length > 0 ? email.trim() : DEMO_ADMIN.email,
    loggedInAt: Date.now(),
  };
  try {
    localStorage.setItem(KEY, JSON.stringify(session));
  } catch {}
}

export function signOutAdmin() {
  if (typeof window === "undefined") return;
  try {
    localStorage.removeItem(KEY);
  } catch {}
}
