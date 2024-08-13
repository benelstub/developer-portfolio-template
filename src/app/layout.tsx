import type { Metadata } from "next";

// TODO: Remove & uninstall packages if you are not deploying on Vercel
// https://vercel.com/docs/speed-insights/quickstart
// https://vercel.com/docs/analytics/quickstart
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

import { Inter } from "next/font/google";

import { ThemeProvider } from "@/components/providers/theme-provider";
import GoogleCaptchaWrapper from "@/components/GoogleReCaptchaProvider";
import { Footer } from "@/components/ui/footer";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

/* TODO: Update site Metadata

  TODO: change your icon.ico, twitter-image.png, and opengraph-image.png 

  TODO: Update copyright text

  TODO: Set default theme in the ThemeProvider
*/

export const metadata: Metadata = {
  title: "Dev Portfolio",
  description: "My new dev portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head />
      <body className={inter.className}>
        <GoogleCaptchaWrapper>
          <ThemeProvider attribute="class" defaultTheme="system">
            {children}

            <Footer copyrightText="Nameless © 2024" />
          </ThemeProvider>
        </GoogleCaptchaWrapper>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
