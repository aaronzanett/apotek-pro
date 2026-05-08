import { createFileRoute } from "@tanstack/react-router";
import { Boxes } from "lucide-react";
import { OwnerLayout } from "@/components/app/OwnerLayout";
import { PlaceholderPage } from "@/components/app/PlaceholderPage";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/app/stock")({
  head: () => ({ meta: [{ title: "Stok Produk — Apotek Pro" }, { name: "robots", content: "noindex" }] }),
  component: () => {
    const { t } = useLang();
    return (
      <OwnerLayout title={t("app.nav.stock")}>
        <PlaceholderPage icon={Boxes} />
      </OwnerLayout>
    );
  },
});
