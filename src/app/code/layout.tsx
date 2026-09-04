import type { Metadata } from "next";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import { Toaster } from "react-hot-toast";
import ActiveSectionContextProvider from "./_context/ActiveSectionContextProvider";
import ThemeContextProvider from "./_context/ThemeContext";
import LoadingContextProvider from "./_context/LoadingContext";

export const metadata: Metadata = {
  title: "Natan Oihman | Developer",
  description: "Natan Oihman's software development portfolio",
};

export default function CodeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-[#fde5ec2a]/60 transition-all text-gray-950 relative pt-14 sm:pt-14 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90 min-h-screen overflow-x-hidden">
      <ThemeContextProvider>
        <ActiveSectionContextProvider>
          <LoadingContextProvider>
            <Header />
            {children}
            <Footer />
            <Toaster position="bottom-right" />
          </LoadingContextProvider>
        </ActiveSectionContextProvider>
      </ThemeContextProvider>
    </div>
  );
}
