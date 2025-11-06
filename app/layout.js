import Header from "@/components/Header";
import MobileBottomNavigation from "@/components/MobileBottomNavigation";
import Sidebar from "@/components/Sidebar";
import { Suspense } from "react";
import "./globals.css";

export const metadata = {
  title: "LWS Blogify | Learn with Sumit Assignment",
  description: "Your daily blogs",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body className="bg-white text-gray-900">
        <Header />

        <section className="py-10 border-t border-gray-200">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row">
              {children}
              <Suspense>
                <Sidebar />
              </Suspense>
            </div>
          </div>
        </section>

        {/* Static */}
        <MobileBottomNavigation />
      </body>
    </html>
  );
}
