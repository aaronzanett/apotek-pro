import { createFileRoute } from "@tanstack/react-router";
import { Boxes } from "lucide-react";
import { OwnerLayout } from "@/components/app/OwnerLayout";
import { PlaceholderPage } from "@/components/app/PlaceholderPage";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/app/inventory")({
  head: () => ({ meta: [{ title: "Inventaris — Apotek Pro" }, { name: "robots", content: "noindex" }] }),
  component: () => {
    const { t } = useLang();
    return (
      <OwnerLayout title={t("app.nav.inventory")}>
        <PlaceholderPage icon={Boxes} />
      </OwnerLayout>
    );
  },
});
