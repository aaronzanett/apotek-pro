import { createFileRoute } from "@tanstack/react-router";
import { Store } from "lucide-react";
import { OwnerLayout } from "@/components/app/OwnerLayout";
import { PlaceholderPage } from "@/components/app/PlaceholderPage";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/app/outlets")({
  head: () => ({ meta: [{ title: "Outlet — Apotek Pro" }, { name: "robots", content: "noindex" }] }),
  component: () => {
    const { t } = useLang();
    return (
      <OwnerLayout title={t("app.nav.outlets")}>
        <PlaceholderPage icon={Store} />
      </OwnerLayout>
    );
  },
});
