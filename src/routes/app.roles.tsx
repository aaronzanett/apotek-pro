import { createFileRoute } from "@tanstack/react-router";
import { KeyRound } from "lucide-react";
import { OwnerLayout } from "@/components/app/OwnerLayout";
import { PlaceholderPage } from "@/components/app/PlaceholderPage";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/app/roles")({
  head: () => ({ meta: [{ title: "Peran & Akses — Apotek Pro" }, { name: "robots", content: "noindex" }] }),
  component: () => {
    const { t } = useLang();
    return (
      <OwnerLayout title={t("app.nav.roles")}>
        <PlaceholderPage icon={KeyRound} />
      </OwnerLayout>
    );
  },
});
