import { createFileRoute } from "@tanstack/react-router";
import { CalendarX } from "lucide-react";
import { OwnerLayout } from "@/components/app/OwnerLayout";
import { PlaceholderPage } from "@/components/app/PlaceholderPage";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/app/expired-stock")({
  head: () => ({ meta: [{ title: "Stok Kedaluwarsa — Apotek Pro" }, { name: "robots", content: "noindex" }] }),
  component: () => {
    const { t } = useLang();
    return (
      <OwnerLayout title={t("app.nav.expired")}>
        <PlaceholderPage icon={CalendarX} />
      </OwnerLayout>
    );
  },
});
