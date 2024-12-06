import { useTranslations } from "next-intl";
import { ArrowRightIcon, Github, Linkedin, Mail } from "lucide-react";
import image from "@/assets/profile/profile-pic.png";

export default function Hero() {
  const t = useTranslations("home");

  return (
    <section
      id="hero"
      className="h-screen-h px-8 py-16 flex flex-col gap-8 relative"
    >
      <div className="absolute h-1/3 w-1/2 -top-10 rotate-12  z-[-2] inset-0 bg-gradient-to-r from-primary from-10% via-primary via-30% to-secondary to-90% blur-2xl opacity-70"></div>
      <div className="absolute h-1/2 w-11/12 top-60 left-10 -rotate-12  z-[-2] inset-0 bg-gradient-to-r from-secondary from-10% via-secondary via-30% to-secondary to-70% blur-3xl opacity-60"></div>
      <div className="flex items-center gap-4">
        <img
          className="w-64 h-64 md:w-96 md:h-96 rounded-full object-cover transition-transform duration-300 hover:scale-110"
          src={image.src}
        />
        <div className="scroll-m-20 font-extrabold tracking-tight leading-relaxed text-7xl mb-10 font-serif w-full">
          <div>
            {t("trusted")}{" "}
            <span className="bg-foreground text-background rounded-lg px-2 pb-4 ">
              {t("partner")}
            </span>{" "}
            {t("for")}
          </div>
          <div>
            {t("your")}{" "}
            <span className="bg-foreground text-background rounded-lg px-2 pb-4 ">
              {t("website")}
            </span>{" "}
            {t("develop")}
          </div>
        </div>
      </div>
      <div className="flex justify-between w-full">
        <div>
          <div className=" flex flex-col justify-center items-center gap-2">
            <a
              href={process.env.GITHUB_URL}
              target="blank"
              className="hover:bg-[#181717] group hover:text-background  duration-200 transition-transform ease-in-out size-8 flex justify-center items-center rounded-lg"
            >
              <Github className="group-hover:-rotate-12 duration-200 transition-transform ease-in-out" />
              <span className="absolute opacity-0 group-hover:opacity-100 group-hover:text-foreground group-hover:text-sm group-hover:translate-x-32 duration-300">
                @AbderrahmaneOuldgouail
              </span>
            </a>
            <a
              href={`mailto:${process.env.EMAIL_ADDRESS}`}
              target="blank"
              className="hover:bg-[#EA4335] group hover:text-background  duration-200 transition-transform ease-in-out size-8 flex justify-center items-center rounded-lg"
            >
              <Mail className="group-hover:-rotate-12 duration-200 transition-transform ease-in-out" />
              <span className="absolute opacity-0 group-hover:opacity-100 group-hover:text-foreground group-hover:text-sm group-hover:translate-x-40 duration-300">
                {process.env.EMAIL_ADDRESS}
              </span>
            </a>
            <a
              href={process.env.LINKEDIN_URL}
              target="blank"
              className="hover:bg-[#0A66C2] group hover:text-background  duration-200 transition-transform ease-in-out size-8 flex justify-center items-center rounded-lg"
            >
              <Linkedin className="group-hover:-rotate-12 duration-200 transition-transform ease-in-out" />
              <span className="absolute opacity-0 group-hover:opacity-100 group-hover:text-foreground group-hover:text-sm group-hover:translate-x-24 duration-300">
                @abderrahmane-ouldgouail
              </span>
            </a>
            <a
              href={process.env.X_URL}
              target="blank"
              className="hover:bg-foreground group hover:text-background  duration-200 transition-transform ease-in-out size-8 flex justify-center items-center rounded-lg"
            >
              <svg
                role="img"
                viewBox="0 0 24 24"
                color="white"
                className="size-6 group-fill-foreground group-hover:fill-background group-hover:-rotate-12 duration-200 transition-transform ease-in-out"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>X</title>
                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
              </svg>
              <span className="absolute opacity-0 group-hover:opacity-100 group-hover:text-foreground group-hover:text-sm group-hover:translate-x-24 duration-300">
                @Abdououldgouail
              </span>
            </a>
          </div>
        </div>
        <div className="w-3/4 flex flex-col gap-10">
          <div className="text-xl pr-28">{t("tagline")}</div>{" "}
          <div>
            <button className="group w-1/5 flex relative border-2 rounded-full border-primary items-center px-6 py-3 transition-all duration-200 ease-in-out cursor-pointer before:content-[''] before:absolute before:top-0 before:right-0 before:rounded-full before:bg-primary before:size-12 before:transition-all before:duration-300 before:hover:w-full">
              <a href="#contact" className="flex">
                <span className="relative group-hover:text-background transition-all duration-200 ease-linear font-bold tracking-wider">
                  {t("cta")}
                </span>
                <ArrowRightIcon className="relative top-0 ml-2 group-hover:text-background group-hover:translate-x-6 transition-all duration-200 ease-linear" />
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
