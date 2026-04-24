import { createFileRoute } from "@tanstack/react-router";
import { ShieldCheck } from "lucide-react";
import { OwnerLayout } from "@/components/app/OwnerLayout";
import { PlaceholderPage } from "@/components/app/PlaceholderPage";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/app/compliance")({
  head: () => ({ meta: [{ title: "Kepatuhan — Apotek Pro" }, { name: "robots", content: "noindex" }] }),
  component: () => {
    const { t } = useLang();
    return (
      <OwnerLayout title={t("app.nav.compliance")}>
        <PlaceholderPage icon={ShieldCheck} />
      </OwnerLayout>
    );
  },
});
