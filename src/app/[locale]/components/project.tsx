import { useTranslations } from "next-intl";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/projects";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import React from "react";

export default function Project() {
  const t = useTranslations("work");

  return (
    <section
      id="projects"
      className="h-screen-h flex flex-col justify-around relative lg:px-20 sm:px-16 px-8"
    >
      <svg
        id="visual"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute w-1/2 -z-10 top-0 right-0 h-screen blur-xl opacity-60"
        version="1.1"
      >
        <g transform="translate(414 303)">
          <path
            d="M114.5 -213.9C140.1 -183.7 146.7 -136.1 153.9 -97.5C161.2 -59 169.1 -29.5 169.1 0C169.1 29.5 161.2 59 147.1 85.7C133 112.4 112.8 136.3 87.2 149.7C61.7 163.1 30.8 165.9 -3.7 172.3C-38.2 178.6 -76.3 188.5 -111.8 180.8C-147.3 173.2 -180.2 148.1 -204.4 115.1C-228.7 82 -244.3 41 -234.8 5.5C-225.3 -30 -190.6 -60 -164.3 -89.4C-137.9 -118.9 -120 -147.8 -94 -177.8C-68 -207.8 -34 -238.9 5.2 -248C44.5 -257.1 89 -244.2 114.5 -213.9"
            fill="#00ADEF"
          ></path>
        </g>
      </svg>
      <div className="absolute h-1/3 w-1/3 left-1/2 -top-32 rotate-45 rounded-b-full z-[-2] inset-0 bg-gradient-to-r from-primary from-10% via-primary via-30% to-secondary to-90% blur-2xl opacity-60"></div>
      <div className="flex flex-col sm:flex-row items-center gap-4 px-10 justify-between sm:my-6 ">
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold w-full sm:w-1/2 lg:w-1/3 text-nowrap">
          {t("header")}{" "}
        </h2>
        <p className=" w-full sm:w-1/2 lg:w-1/3 text-xs sm:text-base border-b border-foreground pb-2 ">
          {t("subheader")}
        </p>
      </div>
      <div className="md:flex justify-center ">
        <ProjectSlider />
      </div>
      <div className="my-10 mx-auto ">
        <button className="group flex relative border-2 rounded-full border-primary items-center px-6 py-3 transition-all duration-200 ease-in-out cursor-pointer before:content-[''] before:absolute before:top-0 before:left-0 before:rounded-full before:bg-primary before:transition-all before:duration-300 before:size-12 before:hover:w-full">
          <span className="relative group-hover:text-background transition-all duration-200 ease-linear font-bold tracking-wider">
            {t("cta")}
          </span>
        </button>
      </div>
    </section>
  );
}

function ProjectSlider() {
  const tProjects = useTranslations("projects");
  const t = useTranslations("work");

  return (
    <div className="md:w-11/12 ">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent className="w-full ">
          {projects.map((item) => (
            <CarouselItem
              className="flex items-center sm:flex-row flex-col gap-4 w-2/3 px-2"
              key={item.slug}
            >
              <div className="sm:w-1/3 w-full sm:flex-col flex items-center justify-center px-1 gap-2 rounded-lg">
                <Image
                  src={item.img1}
                  alt={`image 1 ${item.slug}`}
                  className="rounded-lg  "
                />
              </div>
              <Card className="sm:w-2/3 w-full h-full bg-foreground text-background flex flex-col justify-between">
                <div>
                  <CardHeader>
                    <h3 className="font-bold sm:text-xl">
                      {tProjects(`${item.slug}.name`)}
                    </h3>
                  </CardHeader>
                  <CardContent>
                    <p className="sm:text-base text-xs">
                      {tProjects(`${item.slug}.description`)}{" "}
                    </p>
                  </CardContent>
                </div>
                <CardFooter className="justify-end gap-4">
                  {item.live ? (
                    <a href={item.live} target="blank">
                      <Button
                        className="hover:opacity-85 bg-secondary text-xs sm:text-sm"
                        size="sm"
                      >
                        {t("live")}
                      </Button>
                    </a>
                  ) : (
                    <Button
                      className="bg-secondary text-xs sm:text-sm"
                      size="sm"
                      disabled
                    >
                      {t("live")}
                    </Button>
                  )}
                  {item.github ? (
                    <a href={item.github} target="blank">
                      <Button
                        className="hover:opacity-85 bg-gray-700 text-xs sm:text-sm"
                        size="sm"
                      >
                        GitHub
                      </Button>
                    </a>
                  ) : (
                    <Button
                      className="bg-gray-700 text-xs sm:text-sm"
                      size="sm"
                      disabled
                    >
                      GitHub
                    </Button>
                  )}
                  <Link href={`/projects/${item.slug}`} passHref>
                    <Button
                      className="hover:opacity-85 text-xs sm:text-sm"
                      size="sm"
                    >
                      {t("show")}
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext className="top-full left-2/3 translate-y-full" />
        <CarouselPrevious className="top-full left-1/3 translate-y-full" />
      </Carousel>
    </div>
  );
}
