import { createFileRoute } from "@tanstack/react-router";
import { Pill } from "lucide-react";
import { OwnerLayout } from "@/components/app/OwnerLayout";
import { PlaceholderPage } from "@/components/app/PlaceholderPage";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/app/prescriptions")({
  head: () => ({ meta: [{ title: "Resep — Apotek Pro" }, { name: "robots", content: "noindex" }] }),
  component: () => {
    const { t } = useLang();
    return (
      <OwnerLayout title={t("app.nav.prescriptions")}>
        <PlaceholderPage icon={Pill} />
      </OwnerLayout>
    );
  },
});
