import { Sparkles } from "lucide-react";
import { useLang } from "@/lib/i18n";

export function PlaceholderPage({ icon: Icon }: { icon: typeof Sparkles }) {
  const { t } = useLang();
  return (
    <div className="mx-auto max-w-2xl py-16 text-center">
      <div className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand/10 text-brand">
        <Icon className="h-6 w-6" />
      </div>
      <h2 className="mt-6 font-display text-3xl text-foreground">
        {t("app.placeholder.title")}
      </h2>
      <p className="mt-3 text-muted-foreground">{t("app.placeholder.body")}</p>
    </div>
  );
}
