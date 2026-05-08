import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpCircle } from "lucide-react";
import { OwnerLayout } from "@/components/app/OwnerLayout";
import { PlaceholderPage } from "@/components/app/PlaceholderPage";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/app/accounts-receivable")({
  head: () => ({ meta: [{ title: "Piutang — Apotek Pro" }, { name: "robots", content: "noindex" }] }),
  component: () => {
    const { t } = useLang();
    return (
      <OwnerLayout title={t("app.nav.receivable")}>
        <PlaceholderPage icon={ArrowUpCircle} />
      </OwnerLayout>
    );
  },
});
