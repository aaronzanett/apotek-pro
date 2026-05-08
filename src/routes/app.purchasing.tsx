import { createFileRoute } from "@tanstack/react-router";
import { ShoppingCart } from "lucide-react";
import { OwnerLayout } from "@/components/app/OwnerLayout";
import { PlaceholderPage } from "@/components/app/PlaceholderPage";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/app/purchasing")({
  head: () => ({ meta: [{ title: "Pembelian — Apotek Pro" }, { name: "robots", content: "noindex" }] }),
  component: () => {
    const { t } = useLang();
    return (
      <OwnerLayout title={t("app.nav.purchasing")}>
        <PlaceholderPage icon={ShoppingCart} />
      </OwnerLayout>
    );
  },
});
