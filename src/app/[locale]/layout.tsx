import type { Metadata } from "next";
import { Inter, Press_Start_2P, Pixelify_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/themeProvider";
import { AestheticProvider } from "@/components/aestheticProvider";
import { RetroSprites } from "@/components/retroSprites";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { StructuredData } from "@/components/structuredData";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({ subsets: ["latin"] });
const pressStart2P = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-press-start",
});
const pixelifySans = Pixelify_Sans({
  subsets: ["latin"],
  variable: "--font-pixelify",
});

export const metadata: Metadata = {
  title: "Muhammad Fadhlan Aziz - Fullstack Web Developer",
  description:
    "Muhammad Fadhlan Aziz - Fullstack Web Developer specializing in React.js, Next.js, Golang, and Express.js. Portfolio showcasing projects, skills, and experience.",
  keywords:
    "Muhammad Fadhlan Aziz, Fullstack Developer, React.js, Next.js, Golang, Web Developer, Portfolio, Indonesia",
  authors: [{ name: "Muhammad Fadhlan Aziz" }],
  creator: "Muhammad Fadhlan Aziz",
  publisher: "Muhammad Fadhlan Aziz",
  openGraph: {
    title: "Muhammad Fadhlan Aziz - Fullstack Web Developer",
    description:
      "Fullstack Web Developer specializing in React.js, Next.js, Golang, and Express.js",
    url: "https://www.fadhlanaz.my.id",
    siteName: "Muhammad Fadhlan Aziz Portfolio",
    images: [
      {
        url: "https://www.fadhlanaz.my.id/images/photo-profile-1x1.png",
        width: 832,
        height: 832,
        alt: "Muhammad Fadhlan Aziz - Fullstack Developer",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Fadhlan Aziz - Fullstack Developer",
    description:
      "Fullstack Web Developer specializing in React.js, Next.js, Golang",
    images: ["https://www.fadhlanaz.my.id/images/photo-profile-1x1.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // verification: {
  //   google: "YOUR_ACTUAL_VERIFICATION_CODE",
  // },
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <StructuredData />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var theme = localStorage.getItem('aesthetic-theme') || 'modern';
                document.documentElement.classList.add('theme-' + theme);
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className={`${inter.className} ${pressStart2P.variable} ${pixelifySans.variable}`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <AestheticProvider>
              {children}
              <RetroSprites />
            </AestheticProvider>
          </ThemeProvider>
          <Analytics />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
