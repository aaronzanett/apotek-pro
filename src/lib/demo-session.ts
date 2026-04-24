// Lightweight demo session stored in localStorage. Replace with real auth later.
const KEY = "apotekpro.demo.session";

export type DemoSession = {
  email: string;
  name: string;
  pharmacy: string;
  branch: string;
  role: "owner";
  loggedInAt: number;
};

export const DEMO_OWNER: DemoSession = {
  email: "owner@demo.apotekpro.com",
  name: "Sari Pratama",
  pharmacy: "MediFarma Group",
  branch: "Cabang Menteng",
  role: "owner",
  loggedInAt: 0,
};

export function getDemoSession(): DemoSession | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return null;
    return JSON.parse(raw) as DemoSession;
  } catch {
    return null;
  }
}

export function setDemoSession(s: DemoSession) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(KEY, JSON.stringify(s));
  } catch {}
}

export function signInDemo(email?: string) {
  setDemoSession({
    ...DEMO_OWNER,
    email: email && email.trim().length > 0 ? email.trim() : DEMO_OWNER.email,
    loggedInAt: Date.now(),
  });
}

export function signOutDemo() {
  if (typeof window === "undefined") return;
  try {
    localStorage.removeItem(KEY);
  } catch {}
}
