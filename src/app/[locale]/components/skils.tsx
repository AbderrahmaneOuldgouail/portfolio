import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useTranslations } from "next-intl";
import React from "react";
import { icons } from "@/lib/icons";

export default function Skils() {
  const t = useTranslations("skils");
  return (
    <section className="md:h-screen-h h-fit">
      <Card className="h-full bg-foreground rounded-3xl">
        <div className="space-y-1.5 p-3 sm:p-6 text-background px-10 flex flex-col sm:flex-row justify-between">
          <div className="text-2xl md:text-4xl lg:text-5xl font-bold w-full sm:w-1/2 lg:w-1/3 text-nowrap">
            {t("header1")}{" "}
            <span className="bg-background text-foreground rounded-lg px-2">
              {t("header2")}
            </span>
          </div>
          <div className=" w-full sm:w-1/2 lg:w-1/3 text-xs sm:text-base border-b h-fit pb-2 ">
            {t("subheader")}
          </div>
        </div>
        <div className="sm:px-6 sm:pb-6 px-3 pb-3 grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-6 ">
          <div className="bg-[#141414] flex flex-col gap-2 sm:gap-4 rounded-xl sm:px-6 sm:py-4 px-3 py-2 text-background border-0">
            <h3 className="text-base sm:text-xl font-bold">{t("language")} </h3>
            <div className="text-muted text-xs sm:text-sm text-nowrap truncate ">
              {t("languageSub")}
            </div>
            <div className="grid grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4">
              {Object.entries(icons.languages).map(([name, icon], index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 capitalize text-xs sm:text-base"
                >
                  <span>{icon}</span>
                  <span>{name}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-[#141414] flex flex-col gap-4 rounded-xl sm:px-6 sm:py-4 px-3 py-2 text-background border-0">
            <h3 className="text-base sm:text-xl font-bold">{t("backend")} </h3>
            <div className="text-muted text-xs sm:text-sm text-nowrap truncate ">
              {t("backendSub")}
            </div>
            <div className="grid grid-cols-3 lg:grid-cols-4 gap-4">
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
          <div className="bg-[#141414] flex flex-col gap-4 rounded-xl sm:px-6 sm:py-4 px-3 py-2 text-background border-0">
            <h3 className="text-base sm:text-xl font-bold">{t("frontend")} </h3>
            <div className="text-muted text-xs sm:text-sm truncate">
              {t("frontendSub")}
            </div>
            <div className="grid grid-cols-3 lg:grid-cols-4 gap-4">
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
          <div className="bg-[#141414] flex flex-col gap-4 rounded-xl sm:px-6 sm:py-4 px-3 py-2 text-background border-0">
            <h3 className="text-base sm:text-xl font-bold">{t("tools")} </h3>
            <div className="text-muted text-xs sm:text-sm truncate">
              {t("toolsSub")}
            </div>
            <div className="grid grid-cols-3 lg:grid-cols-4 gap-4">
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
        </div>
      </Card>
    </section>
  );
}
