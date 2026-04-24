import { createFileRoute } from "@tanstack/react-router";
import { BarChart3 } from "lucide-react";
import { OwnerLayout } from "@/components/app/OwnerLayout";
import { PlaceholderPage } from "@/components/app/PlaceholderPage";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/app/reports")({
  head: () => ({ meta: [{ title: "Laporan — Apotek Pro" }, { name: "robots", content: "noindex" }] }),
  component: () => {
    const { t } = useLang();
    return (
      <OwnerLayout title={t("app.nav.reports")}>
        <PlaceholderPage icon={BarChart3} />
      </OwnerLayout>
    );
  },
});
