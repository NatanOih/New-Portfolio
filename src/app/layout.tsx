import Header from "@/components/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/ActiveSectionContextProvider";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/Footer";
import ThemeSwitch from "@/components/ThemeSwitch";
import ThemeContextProvider from "@/context/ThemeContext";
import LoadingContextProvider from "@/context/LoadingContext";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Natan Oihman",
  description: "This is natan Oihman`s portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="!scroll-smooth" suppressHydrationWarning lang="en">
      <body
        className={`${inter.className} bg-[#fde5ec2a]/60 transition-all  text-gray-950 reletive pt-14 sm:pt-14 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90 `}
      >
        {/* <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]" /> */}
        {/* <div className="bg-[#dbd7fb] absolute top-[-1rem]  left-[-35rem] -z-10 h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]" /> */}
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <LoadingContextProvider>
              <Header />
              {children}
              <Footer />
              <Toaster position="bottom-right" />
              <ThemeSwitch />
            </LoadingContextProvider>
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
