import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { useTranslations } from "next-intl";
import { ContactMeForm } from "./contact-me-form";

export default function Contact() {
  const t = useTranslations("contact");

  return (
    <section
      id="contact"
      className="py-16 md:h-screen-h flex flex-col gap-8 relative"
    >
      <svg
        id="visual"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute -z-10 top-0 right-0 h-screen blur-xl opacity-60"
        version="1.1"
      >
        <rect x="0" y="0" width="540" height="540" fill="#FFFFFF"></rect>
        <g transform="translate(400 600)">
          <path
            d="M221 -409.4C267.3 -356 272.7 -258.3 322.7 -182.6C372.8 -107 467.7 -53.5 468.1 0.2C468.5 54 374.6 108 320.1 176C265.6 244 250.5 325.9 203.8 334.1C157 342.2 78.5 276.6 6.5 265.3C-65.5 254.1 -131 297.2 -181.5 291.2C-232 285.2 -267.6 230.1 -320 173.4C-372.4 116.7 -441.7 58.3 -431 6.2C-420.3 -46 -329.7 -92 -284.9 -162C-240.2 -232 -241.3 -326 -201.5 -383.2C-161.7 -440.3 -80.8 -460.7 3.2 -466.3C87.3 -471.9 174.7 -462.9 221 -409.4"
            fill="#00ADEF"
          ></path>
        </g>
      </svg>
      <div className="absolute h-1/3 w-1/3 left-40 -bottom-20 rotate-45 rounded-b-full z-[-2] inset-0 bg-gradient-to-r from-primary from-10% via-primary via-30% to-secondary to-90% blur-2xl opacity-60"></div>
      <div className="flex flex-col sm:flex-row items-center gap-4 px-10 justify-between mb-6">
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold w-full sm:w-1/2 lg:w-1/3 text-nowrap">
          {t("header")}
        </h2>
        <p className=" w-full sm:w-1/2 lg:w-1/3 text-xs sm:text-base border-b border-foreground h-fit pb-2 ">
          {t("subheader")}
        </p>
      </div>
      <div className="flex md:flex-row flex-col-reverse gap-8 h-full">
        <ContactMeForm
          trans={{
            name: t("form.name"),
            email: t("form.email"),
            message: t("form.message"),
            sendMessage: t("form.sendMessage"),
            success: t("form.success"),
            error: t("form.error"),
          }}
          type="GET IN TOUCH"
        />
        <div className="space-y-4 w-1/2">
          <a
            href={`mailto:${process.env.EMAIL_ADDRESS}`}
            aria-label={t("ariaLabel.mail")}
            className="flex w-fit gap-2 border-l-2 hover:border-primary hover:text-primary px-4 transition-all duration-300 ease-in-out"
          >
            <Mail className="w-6 h-6" />
            <div className="">
              <p className="uppercase font-bold">email</p>
              <p className="text-sm md:text-base">
                {process.env.EMAIL_ADDRESS}
              </p>
            </div>
          </a>
          <a
            href={`tel:${process.env.PHONE_NUMBER}`}
            aria-label={t("ariaLabel.phone")}
            className="flex w-fit gap-2 border-l-2 hover:border-primary hover:text-primary px-4 transition-all duration-300 ease-in-out"
          >
            <Phone className="w-6 h-6" />
            <div className="">
              <p className="uppercase font-bold">phone</p>
              <p className="text-sm md:text-base">{process.env.PHONE_NUMBER}</p>
            </div>
          </a>
          <a
            href={process.env.GITHUB_URL}
            aria-label={t("ariaLabel.github")}
            className="flex w-fit gap-2 border-l-2 hover:border-primary hover:text-primary px-4 transition-all duration-300 ease-in-out"
          >
            <Github className="w-6 h-6" />
            <div className="">
              <p className="uppercase font-bold">github</p>
              <p className="text-sm md:text-base">@AbderrahmaneOuldgouail</p>
            </div>
          </a>
          <a
            href={process.env.LINKEDIN_URL}
            aria-label={t("ariaLabel.linkedin")}
            className="flex w-fit gap-2 border-l-2 hover:border-primary hover:text-primary px-4 transition-all duration-300 ease-in-out"
          >
            <Linkedin className="w-6 h-6" />
            <div className="">
              <p className="uppercase font-bold">linked in</p>
              <p className="text-sm md:text-base">@abderrahmane-ouldgouail</p>
            </div>
          </a>
          <a
            href={process.env.X_URL}
            aria-label={t("ariaLabel.x")}
            className="group flex w-fit gap-2 border-l-2 hover:border-primary hover:text-primary px-4 transition-all duration-300 ease-in-out"
          >
            <svg
              role="img"
              viewBox="0 0 24 24"
              className="h-6 w-6 fill-foreground group-hover:fill-primary transition-all duration-300 ease-in-out"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>X</title>
              <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
            </svg>

            <div className="">
              <p className="uppercase font-bold">X</p>
              <p className="text-sm md:text-base">@Abdououldgouail</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
