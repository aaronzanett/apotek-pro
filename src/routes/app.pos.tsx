import { createFileRoute } from "@tanstack/react-router";
import { ScanBarcode } from "lucide-react";
import { OwnerLayout } from "@/components/app/OwnerLayout";
import { PlaceholderPage } from "@/components/app/PlaceholderPage";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/app/pos")({
  head: () => ({ meta: [{ title: "POS — Apotek Pro" }, { name: "robots", content: "noindex" }] }),
  component: () => {
    const { t } = useLang();
    return (
      <OwnerLayout title={t("app.nav.pos")}>
        <PlaceholderPage icon={ScanBarcode} />
      </OwnerLayout>
    );
  },
});
