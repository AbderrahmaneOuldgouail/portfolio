import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import image from "@/assets/img.png";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

export default function Projects() {
  const t = useTranslations("work");

  return (
    <section
      id="services"
      className="h-screen-h flex flex-col justify-around relative"
    >
      <svg
        id="visual"
        viewBox="0 0 960 540"
        width="960"
        height="540"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute -z-10 top-0 -left-40 h-screen blur-xl opacity-60"
        version="1.1"
      >
        <rect x="0" y="0" width="960" height="540" fill="#FFFFFF"></rect>
        <g transform="translate(514.2598314099645 303.62789410090556)">
          <path
            d="M114.5 -213.9C140.1 -183.7 146.7 -136.1 153.9 -97.5C161.2 -59 169.1 -29.5 169.1 0C169.1 29.5 161.2 59 147.1 85.7C133 112.4 112.8 136.3 87.2 149.7C61.7 163.1 30.8 165.9 -3.7 172.3C-38.2 178.6 -76.3 188.5 -111.8 180.8C-147.3 173.2 -180.2 148.1 -204.4 115.1C-228.7 82 -244.3 41 -234.8 5.5C-225.3 -30 -190.6 -60 -164.3 -89.4C-137.9 -118.9 -120 -147.8 -94 -177.8C-68 -207.8 -34 -238.9 5.2 -248C44.5 -257.1 89 -244.2 114.5 -213.9"
            fill="#00ADEF"
          ></path>
        </g>
      </svg>
      <div className="absolute h-1/3 w-1/3 left-96 -top-32 rotate-45 rounded-b-full z-[-2] inset-0 bg-gradient-to-r from-primary from-10% via-primary via-30% to-secondary to-90% blur-2xl opacity-60"></div>
      <div className="flex items-center gap-4 px-10 justify-between mb-6">
        <h2 className="text-5xl font-bold w-1/4">{t("header")} </h2>
        <p className="w-1/3 border-b border-foreground h-fit pb-2">
          {t("subheader")}
        </p>
      </div>
      <div className="flex w-full h-1/2">
        <div className="w-1/4 flex gap-4 justify-center items-center">
          <Button
            size="icon"
            variant="outline"
            className="rounded-full border-foreground bg-transparent"
          >
            <ArrowLeftIcon className="w-6 h-6" />
          </Button>
          <Button
            size="icon"
            variant="outline"
            className="rounded-full border-foreground bg-transparent"
          >
            <ArrowRightIcon className="w-6 h-6" />
          </Button>
        </div>
        <div className="w-3/4 flex">
          <div className="w-1/3 px-1 gap-2 rounded-lg">
            <img src={image.src} className="rounded-lg -rotate-6" />
            <img src={image.src} className="rounded-lg rotate-3" />
          </div>
          <Card className="w-2/3 bg-foreground text-background">
            <CardHeader>title</CardHeader>
            <CardContent>content</CardContent>
            <CardFooter>footer</CardFooter>
          </Card>
        </div>
      </div>
      <div className="my-10 mx-32">
        <button className="group flex relative border-2 rounded-full border-primary items-center px-6 py-3 transition-all duration-200 ease-in-out cursor-pointer before:content-[''] before:absolute before:top-0 before:left-0 before:rounded-full before:bg-primary before:transition-all before:duration-300 before:size-12 before:hover:w-full">
          <span className="relative group-hover:text-background transition-all duration-200 ease-linear font-bold tracking-wider">
            {t("cta")}
          </span>
        </button>
      </div>
    </section>
  );
}
