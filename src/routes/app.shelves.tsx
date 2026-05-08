import { createFileRoute } from "@tanstack/react-router";
import { Archive } from "lucide-react";
import { OwnerLayout } from "@/components/app/OwnerLayout";
import { PlaceholderPage } from "@/components/app/PlaceholderPage";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/app/shelves")({
  head: () => ({ meta: [{ title: "Rak — Apotek Pro" }, { name: "robots", content: "noindex" }] }),
  component: () => {
    const { t } = useLang();
    return (
      <OwnerLayout title={t("app.nav.shelves")}>
        <PlaceholderPage icon={Archive} />
      </OwnerLayout>
    );
  },
});
