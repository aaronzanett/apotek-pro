import { createFileRoute } from "@tanstack/react-router";
import { Building2 } from "lucide-react";
import { OwnerLayout } from "@/components/app/OwnerLayout";
import { OperationalPage } from "@/components/app/OperationalPage";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/app/branches")({
  head: () => ({ meta: [{ name: "description", content: "Manage branches with Apotek Pro by Zanscode." }, { property: "og:title", content: "Branches — Apotek Pro" }, { property: "og:description", content: "Manage branches with Apotek Pro by Zanscode." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }, { title: "Branches — Apotek Pro" }, { name: "robots", content: "noindex" }] }),
  component: () => {
    const { t } = useLang();
    return (
      <OwnerLayout title={t("app.nav.branches")}>
        <OperationalPage icon={Building2} description="Pantau performa dan kesiapan operasional setiap cabang." primaryLabel="Tambah cabang" stats={[{label:"Cabang aktif",value:"3",note:"Semua beroperasi"},{label:"Penjualan hari ini",value:"Rp 18,4 jt",note:"+8,2% dari kemarin"},{label:"Perlu tindakan",value:"2",note:"Stok dan opname"}]} rows={[{name:"Cabang Menteng",detail:"Jakarta Pusat · 8 staf",metric:"Rp 8,2 jt",status:"Aktif",tone:"good"},{name:"Cabang Sudirman",detail:"Jakarta Selatan · 6 staf",metric:"Rp 6,7 jt",status:"Aktif",tone:"good"},{name:"Cabang Kemang",detail:"Jakarta Selatan · 5 staf",metric:"Rp 3,5 jt",status:"Opname",tone:"warn"}]} />
      </OwnerLayout>
    );
  },
});
