import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/footer/Footer";
import { ThemeProvider } from "@/context/ThemeContext";
import AuthProvider from "@/components/AuthProvider/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Katu dev",
  description: "This desc",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="dark bg-slate-300 ">
        <AuthProvider>
          <ThemeProvider>
            <div className=" text-slate-900 dark:text-slate-300 max-w-[1366px] min-h-screen mx-auto my-0 px-14 flex flex-col justify-between">
              <Navbar />
              {children}
              <Footer />
            </div>
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
