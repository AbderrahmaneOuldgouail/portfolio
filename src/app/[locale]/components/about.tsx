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
    <section id="about" className="mb-16 relative">
      <svg
        id="visual"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute w-1/2 -z-10 -top-full left-0 h-screen blur-xl opacity-60"
        version="1.1"
      >
        <g transform="translate(114 303)">
          <path
            d="M114.5 -213.9C140.1 -183.7 146.7 -136.1 153.9 -97.5C161.2 -59 169.1 -29.5 169.1 0C169.1 29.5 161.2 59 147.1 85.7C133 112.4 112.8 136.3 87.2 149.7C61.7 163.1 30.8 165.9 -3.7 172.3C-38.2 178.6 -76.3 188.5 -111.8 180.8C-147.3 173.2 -180.2 148.1 -204.4 115.1C-228.7 82 -244.3 41 -234.8 5.5C-225.3 -30 -190.6 -60 -164.3 -89.4C-137.9 -118.9 -120 -147.8 -94 -177.8C-68 -207.8 -34 -238.9 5.2 -248C44.5 -257.1 89 -244.2 114.5 -213.9"
            fill="#00ADEF"
          ></path>
        </g>
      </svg>
      <Card className="h-full bg-foreground rounded-3xl lg:px-20 sm:px-16 px-8">
        <CardHeader className="text-background flex sm:flex-row flex-col  justify-between">
          <div className="text-2xl md:text-4xl lg:text-5xl font-bold w-full sm:w-1/2 lg:w-1/3 text-nowrap">
            {t("header")}
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 text-xs sm:text-base border-b h-fit pb-2">
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
