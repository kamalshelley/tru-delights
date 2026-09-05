import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "./components/site-header";
import { SiteFooter } from "./components/site-footer";
export const metadata: Metadata = { title: { default: "Tru Delights | Café in Moredon, Swindon", template: "%s | Tru Delights" }, description: "Friendly independent café serving coffee, breakfast, lunch and sweet treats at 1A Purton Road, Moredon, Swindon.", icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" } };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body><SiteHeader/>{children}<SiteFooter/></body></html>; }
