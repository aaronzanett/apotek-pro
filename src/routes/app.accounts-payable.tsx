import { createFileRoute } from "@tanstack/react-router";
import { ArrowDownCircle } from "lucide-react";
import { OwnerLayout } from "@/components/app/OwnerLayout";
import { PlaceholderPage } from "@/components/app/PlaceholderPage";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/app/accounts-payable")({
  head: () => ({ meta: [{ title: "Hutang — Apotek Pro" }, { name: "robots", content: "noindex" }] }),
  component: () => {
    const { t } = useLang();
    return (
      <OwnerLayout title={t("app.nav.payable")}>
        <PlaceholderPage icon={ArrowDownCircle} />
      </OwnerLayout>
    );
  },
});
