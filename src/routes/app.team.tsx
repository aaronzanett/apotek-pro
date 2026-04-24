import { createFileRoute } from "@tanstack/react-router";
import { Users } from "lucide-react";
import { OwnerLayout } from "@/components/app/OwnerLayout";
import { PlaceholderPage } from "@/components/app/PlaceholderPage";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/app/team")({
  head: () => ({ meta: [{ title: "Tim — Apotek Pro" }, { name: "robots", content: "noindex" }] }),
  component: () => {
    const { t } = useLang();
    return (
      <OwnerLayout title={t("app.nav.team")}>
        <PlaceholderPage icon={Users} />
      </OwnerLayout>
    );
  },
});
