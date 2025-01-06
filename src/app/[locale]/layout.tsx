import "../globals.css";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { useLocale } from "next-intl";
import Navbar from "@/app/[locale]/components/navbar";
import Footer from "./components/footer";
import { Toaster } from "@/components/ui/sonner";
import { getTranslations } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("metadata");

  return {
    metadataBase: new URL(process.env.SITE_URL!),
    title: t("title"),
    description: t("description"),
    keywords:
      "Abderrahmane Ouldgouail, software developer, web development, PHP, Laravel, JavaScript, MySQL, portfolio, web applications, frontend development, backend development",
    applicationName: "My Portfolio",
    authors: {
      name: "Abderrahmane Ouldgouail",
      url: "https://abderrahmane-ouldgouail.vercel.app",
    },
    generator: "Next.js",
    creator: "Abderrahmane Ouldgouail",
    robots: "index, follow",
    openGraph: {
      siteName: "Abderrahmane Ouldgouail Portfolio",
      title: t("title"),
      description: t("og-description"),
      type: "website",
      url: "https://abderrahmane-ouldgouail.vercel.app",
      images: t("preview-image"),
    },
    alternates: {
      languages: {
        en: "/en",
        fr: "/fr",
        ar: "/ar",
      },
    },
  };
}

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const locale = useLocale();

  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <head>
        <meta name="google-site-verification" content="vnP_U4nkW-gZqsfayXXTqNFazn3a-kQOGtLPZF1mctk" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className="antialiased">
        <Navbar />
        {children}
        <Toaster richColors />
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
