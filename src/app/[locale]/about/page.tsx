import { useTranslations } from "next-intl";
const AboutPage = () => {
  const t = useTranslations("AboutPage");
  return (
    <div>
      <h1>{t("MyName")}</h1>
      <p>{t("About_me")}</p>
    </div>
  );
};

export default AboutPage;
