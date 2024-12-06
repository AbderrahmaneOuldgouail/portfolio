import Icon from "@/components/common/Icon";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import React from "react";

export default function Skils() {
  const t = useTranslations("skils");
  const skils = [
    { name: "React", icon: "react", level: 5 },
    { name: "Laravel", icon: "laravel", level: 5 },
    { name: "Tailwind", icon: "tailwind", level: 4 },
    { name: "mysql", icon: "mysql", level: 4 },
    { name: "nextjs", icon: "nextjs", level: 3 },
    { name: "inertiajs", icon: "inertiajs", level: 4 },
  ];
  const techs = [
    "react",
    "laravel",
    "tailwind",
    "typescript",
    "npm",
    "vite",
    "bootstrap",
    "livewire",
    "redis",
    "docker",
    "git",
  ];
  return (
    <section className="h-screen-h ">
      <Card className="h-full bg-foreground rounded-3xl">
        <CardHeader className="text-background px-10 flex flex-row justify-between">
          <div className="text-5xl font-bold w-1/3">
            {t("header1")}{" "}
            <span className="bg-background text-foreground rounded-lg px-2">
              {t("header2")}
            </span>
          </div>
          <div className="w-1/3 border-b h-fit pb-2">{t("subheader")}</div>
        </CardHeader>
        <CardContent className=" grid grid-cols-3 gap-4">
          {skils.map((item) => (
            <div className="flex gap-3 bg-[#141414] rounded-xl px-6 py-4 group transition delay-100 duration-300 hover:bg-primary text-background border-0 hover:rotate-6 hover:scale-105 ease-in-out">
              <Icon name={item.icon} />
              <div className="w-full  flex-col flex justify-around ">
                <p className="text-2xl font-bold capitalize">{item.name}</p>
                <div className="w-full  h-0.5 flex">
                  <div
                    className={cn(
                      "bg-primary h-1 rounded-s-lg  border-background transition-all delay-100 duration-300 ease-in-out group-hover:border-[1px]",
                      item.level == 5 ? "w-full" : `w-${item.level}/5`
                    )}
                  ></div>
                  <div
                    className={cn(
                      "bg-background h-1 rounded-e-lg ",
                      `w-${5 - item.level}/5`
                    )}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
        <CardFooter className="gap-3 pt-10 items-center justify-center">
          {techs.map((item) => (
            <Icon name={item} className="size-20" />
          ))}
        </CardFooter>
      </Card>
    </section>
  );
}
