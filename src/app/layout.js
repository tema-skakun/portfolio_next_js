import {Inter} from "next/font/google";
import "./globals.css";
import TransitionProvider from "@/components/transitionProvider";

const inter = Inter({subsets: ["latin"]});

export const metadata = {
  title: "Artem's Portfolio",
  description: "Artem Skakun animated portfolio page",
  keywords: "Artem Skakun Portfolio Application",
  author: "Artem Skakun",
};

export default function RootLayout({children}) {
  return (
    <html lang="en">

    <body className={inter.className}>
    <TransitionProvider>{children}</TransitionProvider>
    </body>
    </html>
  );
}
