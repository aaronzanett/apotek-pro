import { createFileRoute } from "@tanstack/react-router";
import { Settings } from "lucide-react";
import { OwnerLayout } from "@/components/app/OwnerLayout";
import { PlaceholderPage } from "@/components/app/PlaceholderPage";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/app/settings")({
  head: () => ({ meta: [{ title: "Pengaturan — Apotek Pro" }, { name: "robots", content: "noindex" }] }),
  component: () => {
    const { t } = useLang();
    return (
      <OwnerLayout title={t("app.nav.settings")}>
        <PlaceholderPage icon={Settings} />
      </OwnerLayout>
    );
  },
});
