import { createFileRoute } from "@tanstack/react-router";
import { Truck } from "lucide-react";
import { OwnerLayout } from "@/components/app/OwnerLayout";
import { PlaceholderPage } from "@/components/app/PlaceholderPage";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/app/suppliers")({
  head: () => ({ meta: [{ title: "Pemasok — Apotek Pro" }, { name: "robots", content: "noindex" }] }),
  component: () => {
    const { t } = useLang();
    return (
      <OwnerLayout title={t("app.nav.suppliers")}>
        <PlaceholderPage icon={Truck} />
      </OwnerLayout>
    );
  },
});
