import { createFileRoute } from "@tanstack/react-router";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { AGrid, AStat, ATable, ATh, ATd, APill } from "@/components/admin/ui";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/admin/users")({
  head: () => ({ meta: [{ title: "Pengguna — Konsol Admin" }, { name: "robots", content: "noindex" }] }),
  component: AdminUsersPage,
});

const USERS = [
  { name: "Sari Pratama", email: "sari@medifarma.id", tenant: "MediFarma Group", role: "owner", lastSeen: "2 min ago", mfa: true },
  { name: "Andi Wijaya", email: "andi@sehatsentosa.id", tenant: "Apotek Sehat Sentosa", role: "owner", lastSeen: "1 hr ago", mfa: true },
  { name: "Lia Hartanto", email: "lia@farmanusa.id", tenant: "Farma Nusantara", role: "owner", lastSeen: "3 hr ago", mfa: false },
  { name: "Bambang R.", email: "bambang@bumi.my", tenant: "Bumi Healthcare", role: "owner", lastSeen: "yesterday", mfa: true },
  { name: "Maya Dewi", email: "maya@cendana.id", tenant: "Apotek Cendana", role: "manager", lastSeen: "5 days ago", mfa: false },
];

function AdminUsersPage() {
  const { t } = useLang();
  return (
    <AdminLayout title={t("admin.page.users.title")} subtitle={t("admin.page.users.subtitle")}>
      <div className="space-y-6">
        <AGrid cols={4}>
          <AStat label="Total accounts" value="942" tone="info" />
          <AStat label="Active 30d" value="781" tone="good" />
          <AStat label="MFA enabled" value="68%" tone="warn" hint="Target: 80%" />
          <AStat label="Locked accounts" value="3" tone="bad" />
        </AGrid>

        <ATable>
          <thead>
            <tr>
              <ATh>Name</ATh>
              <ATh>Email</ATh>
              <ATh>Tenant</ATh>
              <ATh>Role</ATh>
              <ATh>MFA</ATh>
              <ATh>Last seen</ATh>
              <ATh></ATh>
            </tr>
          </thead>
          <tbody>
            {USERS.map((u) => (
              <tr key={u.email}>
                <ATd className="font-medium text-white">{u.name}</ATd>
                <ATd>{u.email}</ATd>
                <ATd>{u.tenant}</ATd>
                <ATd><APill tone="info">{u.role}</APill></ATd>
                <ATd>{u.mfa ? <APill tone="good">on</APill> : <APill tone="warn">off</APill>}</ATd>
                <ATd className="text-white/60">{u.lastSeen}</ATd>
                <ATd>
                  <button className="text-xs text-brand-accent hover:underline">Impersonate</button>
                </ATd>
              </tr>
            ))}
          </tbody>
        </ATable>
      </div>
    </AdminLayout>
  );
}
