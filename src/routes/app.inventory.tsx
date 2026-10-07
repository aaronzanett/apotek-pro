import { createFileRoute } from "@tanstack/react-router";
import { Boxes } from "lucide-react";
import { OwnerLayout } from "@/components/app/OwnerLayout";
import { OperationalPage } from "@/components/app/OperationalPage";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/app/inventory")({
  head: () => ({ meta: [{ name: "description", content: "Manage inventory with Apotek Pro by Zanscode." }, { property: "og:title", content: "Inventory — Apotek Pro" }, { property: "og:description", content: "Manage inventory with Apotek Pro by Zanscode." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }, { title: "Inventory — Apotek Pro" }, { name: "robots", content: "noindex" }] }),
  component: () => {
    const { t } = useLang();
    return (
      <OwnerLayout title={t("app.nav.inventory")}>
        <OperationalPage icon={Boxes} description="Ringkasan nilai stok, ketersediaan, dan kesehatan inventaris seluruh cabang." primaryLabel="Penyesuaian stok" stats={[{label:"Nilai inventaris",value:"Rp 486 jt",note:"2.842 SKU"},{label:"Ketersediaan",value:"96,4%",note:"Target 95%"},{label:"Stok rendah",value:"24",note:"8 kritis"}]} rows={[{name:"Obat resep",detail:"842 SKU · 18.420 unit",metric:"Rp 268 jt",status:"Sehat",tone:"good"},{name:"Obat bebas",detail:"1.120 SKU · 25.890 unit",metric:"Rp 142 jt",status:"24 rendah",tone:"warn"},{name:"Alat kesehatan",detail:"880 SKU · 6.410 unit",metric:"Rp 76 jt",status:"Sehat",tone:"good"}]} />
      </OwnerLayout>
    );
  },
});
