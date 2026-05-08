import { createFileRoute } from "@tanstack/react-router";
import { UserRound } from "lucide-react";
import { OwnerLayout } from "@/components/app/OwnerLayout";
import { PlaceholderPage } from "@/components/app/PlaceholderPage";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/app/contact-customers")({
  head: () => ({ meta: [{ title: "Pelanggan — Apotek Pro" }, { name: "robots", content: "noindex" }] }),
  component: () => {
    const { t } = useLang();
    return (
      <OwnerLayout title={t("app.nav.customers")}>
        <PlaceholderPage icon={UserRound} />
      </OwnerLayout>
    );
  },
});
