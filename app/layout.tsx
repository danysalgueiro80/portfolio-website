import Header from "@/components/header";
import "./globals.css";
import { Archivo } from 'next/font/google';
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";
import { Analytics } from "@vercel/analytics/next";

const archivo = Archivo({ 
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: "Dany Salgueiro | Salesforce Consultant",
  description: "Dany is a Salesforce Consultant with 3 years of experience.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${archivo.className} bg-white relative pt-28 sm:pt-36 dark:bg-[#0F172A] dark:text-gray-50 dark:text-opacity-90`}
      >
        {/* Removed all light mode background and color divs */}
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />

            <Toaster position="top-right" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
        <Analytics />
      </body>
    </html>
  );
}
