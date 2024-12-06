import { useTranslations } from "next-intl";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

export default function About() {
  const t = useTranslations("about");

  return (
    <section id="about" className="mb-16">
      <Card className="h-full bg-foreground rounded-3xl">
        <CardHeader className="text-background flex flex-row justify-between">
          <div className="text-5xl font-bold w-1/3">{t("header")}</div>
          <div className="w-1/3 border-b h-fit pb-2">
            {t("subheader")}
          </div>{" "}
        </CardHeader>
        <CardContent className="text-background px-10 flex justify-between"></CardContent>
        <CardFooter className="flex gap-3 text-background leading-loose">
          {t("content1")}
          <br />
          {t("content2")}
          <br />
          {t("content3")}
        </CardFooter>
      </Card>
    </section>
  );
}
