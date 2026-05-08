import { createFileRoute } from "@tanstack/react-router";
import { CreditCard } from "lucide-react";
import { OwnerLayout } from "@/components/app/OwnerLayout";
import { PlaceholderPage } from "@/components/app/PlaceholderPage";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/app/payment-methods")({
  head: () => ({ meta: [{ title: "Metode Pembayaran — Apotek Pro" }, { name: "robots", content: "noindex" }] }),
  component: () => {
    const { t } = useLang();
    return (
      <OwnerLayout title={t("app.nav.paymentMethods")}>
        <PlaceholderPage icon={CreditCard} />
      </OwnerLayout>
    );
  },
});
