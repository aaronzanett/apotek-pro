import { createFileRoute } from "@tanstack/react-router";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { AGrid, AStat, ATable, ATh, ATd, APill } from "@/components/admin/ui";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/admin/staff")({
  head: () => ({ meta: [{ title: "Staf — Konsol Admin" }, { name: "robots", content: "noindex" }] }),
  component: StaffPage,
});

const STAFF = [
  { name: "Rizki Hartono", email: "rizki@zanscode.com", role: "superadmin", team: "Platform", mfa: true, lastSeen: "now" },
  { name: "Maya Nadia", email: "maya@zanscode.com", role: "support", team: "Customer Success", mfa: true, lastSeen: "12m" },
  { name: "Dion Permana", email: "dion@zanscode.com", role: "engineer", team: "Platform", mfa: true, lastSeen: "1h" },
  { name: "Putri Anggraini", email: "putri@zanscode.com", role: "billing", team: "Finance", mfa: false, lastSeen: "3h" },
  { name: "Adi Saputra", email: "adi@zanscode.com", role: "support", team: "Customer Success", mfa: true, lastSeen: "yesterday" },
];

function StaffPage() {
  const { t } = useLang();
  return (
    <AdminLayout title={t("admin.page.staff.title")} subtitle={t("admin.page.staff.subtitle")}>
      <div className="space-y-6">
        <AGrid cols={4}>
          <AStat label="Active staff" value="14" tone="info" />
          <AStat label="Superadmins" value="2" tone="warn" />
          <AStat label="MFA enforced" value="93%" tone="good" />
          <AStat label="Pending invites" value="1" />
        </AGrid>

        <div className="flex justify-end">
          <button className="rounded-full bg-brand px-4 py-2 text-xs font-medium text-brand-foreground">Invite staff member</button>
        </div>

        <ATable>
          <thead>
            <tr>
              <ATh>Name</ATh>
              <ATh>Email</ATh>
              <ATh>Role</ATh>
              <ATh>Team</ATh>
              <ATh>MFA</ATh>
              <ATh>Last seen</ATh>
              <ATh></ATh>
            </tr>
          </thead>
          <tbody>
            {STAFF.map((s) => (
              <tr key={s.email}>
                <ATd className="font-medium text-white">{s.name}</ATd>
                <ATd>{s.email}</ATd>
                <ATd>
                  {s.role === "superadmin" && <APill tone="bad">superadmin</APill>}
                  {s.role === "support" && <APill tone="info">support</APill>}
                  {s.role === "engineer" && <APill tone="good">engineer</APill>}
                  {s.role === "billing" && <APill tone="warn">billing</APill>}
                </ATd>
                <ATd>{s.team}</ATd>
                <ATd>{s.mfa ? <APill tone="good">on</APill> : <APill tone="bad">off</APill>}</ATd>
                <ATd className="text-white/60">{s.lastSeen}</ATd>
                <ATd>
                  <button className="text-xs text-brand-accent hover:underline">Manage</button>
                </ATd>
              </tr>
            ))}
          </tbody>
        </ATable>
      </div>
    </AdminLayout>
  );
}
