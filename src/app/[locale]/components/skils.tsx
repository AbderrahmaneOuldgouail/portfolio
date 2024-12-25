import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";
import { useTranslations } from "next-intl";
import React from "react";
import { icons } from "@/lib/icons";

export default function Skils() {
  const t = useTranslations("skils");
  return (
    <section className="h-screen-h ">
      <Card className="h-full bg-foreground rounded-3xl">
        <CardHeader className="text-background px-10 flex flex-row justify-between">
          <div className="text-3xl md:text-4xl lg:text-5xl font-bold w-1/2 sm:w-1/3 text-nowrap">
            {t("header1")}{" "}
            <span className="bg-background text-foreground rounded-lg px-2">
              {t("header2")}
            </span>
          </div>
          <div className="w-1/2 sm:w-1/3 border-b h-fit pb-2">
            {t("subheader")}
          </div>
        </CardHeader>
        <CardContent className="m-auto grid grid-cols-2 grid-rows-2 h-2/3 gap-6">
          <div className="bg-[#141414] flex flex-col gap-4 rounded-xl px-6 py-4 text-background border-0">
            <h3 className="text-xl font-bold">{t("language")} </h3>
            <div className="text-muted text-sm">{t("languageSub")}</div>
            <div className="flex gap-4 flex-wrap">
              {Object.entries(icons.languages).map(([name, icon], index) => (
                <div
                  key={index}
                  className="flex items-center gap-1 h-10 capitalize"
                >
                  {icon} {name}{" "}
                </div>
              ))}
            </div>
          </div>
          <div className="bg-[#141414] flex flex-col gap-4 rounded-xl px-6 py-4 text-background border-0">
            <h3 className="text-xl font-bold">{t("backend")} </h3>
            <div className="text-muted text-sm">{t("backendSub")}</div>
            <div className="flex gap-4 flex-wrap">
              {Object.entries(icons.backend).map(([name, icon], index) => (
                <div
                  key={index}
                  className="flex items-center gap-1 h-10 capitalize"
                >
                  {icon} {name}{" "}
                </div>
              ))}
            </div>
          </div>
          <div className="bg-[#141414] flex flex-col gap-4 rounded-xl px-6 py-4 text-background border-0">
            <h3 className="text-xl font-bold">{t("frontend")} </h3>
            <div className="text-muted text-sm">{t("frontendSub")}</div>
            <div className="flex gap-4 flex-wrap">
              {Object.entries(icons.frontend).map(([name, icon], index) => (
                <div
                  key={index}
                  className="flex items-center gap-1 h-10 capitalize"
                >
                  {icon} {name}{" "}
                </div>
              ))}
            </div>
          </div>
          <div className="bg-[#141414] flex flex-col gap-4 rounded-xl px-6 py-4 text-background border-0">
            <h3 className="text-xl font-bold">{t("tools")} </h3>
            <div className="text-muted text-sm">{t("toolsSub")}</div>
            <div className="flex gap-4 flex-wrap">
              {Object.entries(icons.tools).map(([name, icon], index) => (
                <div
                  key={index}
                  className="flex items-center gap-1 h-10 capitalize"
                >
                  {icon} {name}{" "}
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
