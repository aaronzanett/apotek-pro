import { useSyncExternalStore } from "react";

export type OwnerNotification = {
  id: string;
  title: string;
  detail: string;
  time: string;
  to: string;
  read: boolean;
  tone: "warn" | "info" | "good";
};

export type DemoWorkspaceState = {
  activeBranch: string;
  notifications: OwnerNotification[];
};

const KEY = "apotekpro.owner.workspace.v1";
const EVENT = "apotekpro-owner-workspace";

export const branches = ["Cabang Menteng", "Cabang Sudirman", "Cabang Kemang"];

export const initialWorkspace: DemoWorkspaceState = {
  activeBranch: branches[0],
  notifications: [
    { id: "n1", title: "Stok Amoxicillin menipis", detail: "Tersisa 12 strip, di bawah batas reorder 20.", time: "8 menit", to: "/app/defecta", read: false, tone: "warn" },
    { id: "n2", title: "3 batch segera kedaluwarsa", detail: "Tinjau batch dengan masa simpan kurang dari 30 hari.", time: "24 menit", to: "/app/expired-stock", read: false, tone: "warn" },
    { id: "n3", title: "PO-2026-0118 telah diterima", detail: "Penerimaan dari PT Kimia Farma berhasil dicatat.", time: "1 jam", to: "/app/supply", read: false, tone: "good" },
    { id: "n4", title: "Opname Cabang Menteng selesai", detail: "Selisih 2 item menunggu persetujuan pemilik.", time: "Kemarin", to: "/app/stock-opname", read: true, tone: "info" },
  ],
};

const listeners = new Set<() => void>();
let memoryState = initialWorkspace;

function readState(): DemoWorkspaceState {
  if (typeof window === "undefined") return memoryState;
  try {
    const raw = window.localStorage.getItem(KEY);
    if (raw) memoryState = JSON.parse(raw) as DemoWorkspaceState;
  } catch {
    memoryState = initialWorkspace;
  }
  return memoryState;
}

function writeState(next: DemoWorkspaceState) {
  memoryState = next;
  if (typeof window !== "undefined") {
    window.localStorage.setItem(KEY, JSON.stringify(next));
    window.dispatchEvent(new Event(EVENT));
  }
  listeners.forEach((listener) => listener());
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  if (typeof window !== "undefined") window.addEventListener(EVENT, listener);
  return () => {
    listeners.delete(listener);
    if (typeof window !== "undefined") window.removeEventListener(EVENT, listener);
  };
}

export function useOwnerWorkspace() {
  const state = useSyncExternalStore(subscribe, readState, () => initialWorkspace);
  return {
    ...state,
    setBranch: (activeBranch: string) => writeState({ ...readState(), activeBranch }),
    markRead: (id: string) => writeState({ ...readState(), notifications: readState().notifications.map((n) => n.id === id ? { ...n, read: true } : n) }),
    markAllRead: () => writeState({ ...readState(), notifications: readState().notifications.map((n) => ({ ...n, read: true })) }),
    reset: () => writeState(initialWorkspace),
  };
}

export const globalSearchItems = [
  { label: "Paracetamol 500mg", detail: "Produk · PRD-0001", to: "/app/products" },
  { label: "Amoxicillin 500mg", detail: "Stok menipis · PRD-0014", to: "/app/stock" },
  { label: "Ahmad Hidayat", detail: "Resep · RX-2026-0918", to: "/app/prescriptions" },
  { label: "INV-2026-04812", detail: "Penjualan · Rp 86.500", to: "/app/sales" },
  { label: "PT Kimia Farma", detail: "Pemasok · termin 30 hari", to: "/app/contact-suppliers" },
  { label: "PO-2026-0118", detail: "Pembelian · menunggu barang", to: "/app/purchasing" },
];