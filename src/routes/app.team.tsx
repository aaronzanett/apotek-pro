import { createFileRoute } from "@tanstack/react-router";
import { Users } from "lucide-react";
import { OwnerLayout } from "@/components/app/OwnerLayout";
import { OperationalPage } from "@/components/app/OperationalPage";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/app/team")({
  head: () => ({ meta: [{ title: "Tim — Apotek Pro" }, { name: "robots", content: "noindex" }] }),
  component: () => {
    const { t } = useLang();
    return (
      <OwnerLayout title={t("app.nav.team")}>
        <OperationalPage icon={Users} description="Kelola anggota tim, jadwal, dan akses kerja di seluruh cabang." primaryLabel="Undang anggota" stats={[{label:"Anggota aktif",value:"19",note:"3 cabang"},{label:"Sedang bertugas",value:"12",note:"Shift pagi"},{label:"Undangan",value:"2",note:"Menunggu diterima"}]} rows={[{name:"apt. Sari Pratama",detail:"Owner · Semua cabang",metric:"Terakhir aktif sekarang",status:"Aktif",tone:"success"},{name:"Rizky Maulana",detail:"Apoteker · Menteng",metric:"Shift 08.00–16.00",status:"Bertugas",tone:"info"},{name:"Nadia Putri",detail:"Kasir · Kemang",metric:"Diundang 2 jam lalu",status:"Diundang",tone:"warning"}]} />
      </OwnerLayout>
    );
  },
});
