import { createFileRoute } from "@tanstack/react-router";
import { ShieldCheck } from "lucide-react";
import { OwnerLayout } from "@/components/app/OwnerLayout";
import { OperationalPage } from "@/components/app/OperationalPage";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/app/compliance")({
  head: () => ({ meta: [{ title: "Kepatuhan — Apotek Pro" }, { name: "robots", content: "noindex" }] }),
  component: () => {
    const { t } = useLang();
    return (
      <OwnerLayout title={t("app.nav.compliance")}>
        <OperationalPage icon={ShieldCheck} description="Pantau perizinan, dokumen wajib, dan jejak audit apotek." primaryLabel="Unggah dokumen" stats={[{label:"Skor kepatuhan",value:"96%",note:"Baik"},{label:"Dokumen aktif",value:"28",note:"Semua cabang"},{label:"Segera berakhir",value:"2",note:"Dalam 60 hari"}]} rows={[{name:"SIA Cabang Menteng",detail:"Berlaku hingga 18 Des 2027",metric:"457 hari",status:"Valid",tone:"good"},{name:"SIPA Apt. Sari",detail:"Berlaku hingga 22 Nov 2026",metric:"66 hari",status:"Perpanjang",tone:"warn"},{name:"Berita Acara Narkotika",detail:"Periode Agustus 2026",metric:"Terkirim",status:"Lengkap",tone:"good"}]} />
      </OwnerLayout>
    );
  },
});
