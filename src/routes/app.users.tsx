import { createFileRoute } from "@tanstack/react-router";
import { UserCog } from "lucide-react";
import { OwnerLayout } from "@/components/app/OwnerLayout";
import { PlaceholderPage } from "@/components/app/PlaceholderPage";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/app/users")({
  head: () => ({ meta: [{ title: "Pengguna — Apotek Pro" }, { name: "robots", content: "noindex" }] }),
  component: () => {
    const { t } = useLang();
    return (
      <OwnerLayout title={t("app.nav.users")}>
        <PlaceholderPage icon={UserCog} />
      </OwnerLayout>
    );
  },
});
