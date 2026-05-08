import { createFileRoute } from "@tanstack/react-router";
import { Tag } from "lucide-react";
import { OwnerLayout } from "@/components/app/OwnerLayout";
import { PlaceholderPage } from "@/components/app/PlaceholderPage";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/app/categories")({
  head: () => ({ meta: [{ title: "Kategori — Apotek Pro" }, { name: "robots", content: "noindex" }] }),
  component: () => {
    const { t } = useLang();
    return (
      <OwnerLayout title={t("app.nav.categories")}>
        <PlaceholderPage icon={Tag} />
      </OwnerLayout>
    );
  },
});
