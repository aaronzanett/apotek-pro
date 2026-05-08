import { createFileRoute } from "@tanstack/react-router";
import { PackageCheck } from "lucide-react";
import { OwnerLayout } from "@/components/app/OwnerLayout";
import { PlaceholderPage } from "@/components/app/PlaceholderPage";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/app/supply")({
  head: () => ({ meta: [{ title: "Suplai — Apotek Pro" }, { name: "robots", content: "noindex" }] }),
  component: () => {
    const { t } = useLang();
    return (
      <OwnerLayout title={t("app.nav.supply")}>
        <PlaceholderPage icon={PackageCheck} />
      </OwnerLayout>
    );
  },
});
