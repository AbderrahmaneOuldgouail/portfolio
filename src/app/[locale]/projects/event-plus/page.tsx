import { useLocale } from "next-intl";
import { getTranslations } from "next-intl/server";

export async function generateMetadata() {
  const t = await getTranslations("projects.event-plus");
  return {
    title: t("name"),
    description: t("description"),
  };
}

export default function project() {
  const locale = useLocale();

  let MDXContent;
  switch (locale) {
    case "en":
      MDXContent = require("./en.mdx").default;
      break;
    case "fr":
      MDXContent = require("./fr.mdx").default;
      break;
    case "ar":
      MDXContent = require("./ar.mdx").default;
  }

  return <MDXContent />;
}
