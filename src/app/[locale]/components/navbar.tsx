import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Globe, Menu } from "lucide-react";
import { LangSwitcher } from "@/components/common/LangSwitcher";

export default function Navbar() {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <header className="sticky top-0 z-10 backdrop-blur-sm bg-background/60  ">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <span className="flex gap-2 justify-center items-center">
          <h1 className="text-2xl font-bold">
            <Link href="/#hero" className="hover:text-primary font-bold">
              {t("name")}
            </Link>
          </h1>
        </span>
        <nav className="hidden md:flex items-center space-x-4">
          <ul className="flex gap-4 rtl:me-4">
            <li>
              <Link href="/#hero" className="hover:text-primary font-bold">
                {t("nav.hero")}
              </Link>
            </li>
            <li>
              <Link href="/portfolio" className="hover:text-primary font-bold">
                {t("nav.portfolio")}
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-primary font-bold">
                {t("nav.blog")}
              </Link>
            </li>
          </ul>
          <LangSwitcher />
        </nav>
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-[1.2rem] w-[1.2rem]" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="flex flex-col space-y-4">
              <a href="#hero" className="hover:text-primary">
                {t("nav.hero")}
              </a>
              <a href="/portfolio" className="hover:text-primary">
                {t("nav.portfolio")}
              </a>
              <a href="/blog" className="hover:text-primary">
                {t("nav.blog")}
              </a>
            </nav>
            <div className="mt-4 space-y-4 flex justify-end">
              <LangSwitcher
                trigger={
                  <Button variant="ghost" size="sm">
                    <Globe className="ltr:mr-2 ml-2 h-4 w-4" />
                    {locale === "en" ? "English" : "Français"}
                  </Button>
                }
              />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
