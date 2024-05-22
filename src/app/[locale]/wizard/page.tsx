import WizardContent from "@/components/WizardContent";
import { useTranslations } from "next-intl";

export default function page() {
  const t = useTranslations("Wizard");



  return (
    <>
      <WizardContent t={t("Warning")} />
    </>
  );
}
