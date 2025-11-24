import { Outfit } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Metadata } from "next";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
    metadataBase: new URL("https://tanyas-baking.vercel.app"),
    title: {
        default: "Tanya's Baking | Custom Cakes & Classes in Chennai",
        template: "%s | Tanya's Baking"
    },
    description: "FSSAI approved home bakery in Madambakkam, Chennai. Specializing in custom theme cakes, eggless bakes, and professional baking classes.",
    keywords: ["custom cakes chennai", "baking classes chennai", "home baker madambakkam", "theme cakes", "eggless cakes", "tanya's baking", "birthday cakes chennai"],
    authors: [{ name: "Tanya's Baking" }],
    creator: "Tanya's Baking",
    publisher: "Tanya's Baking",
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    openGraph: {
        title: "Tanya's Baking | Custom Cakes & Classes in Chennai",
        description: "Handcrafted custom cakes and professional baking workshops in Madambakkam, Chennai. FSSAI approved.",
        url: "https://tanyas-baking.vercel.app",
        siteName: "Tanya's Baking",
        locale: "en_IN",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Tanya's Baking | Custom Cakes & Classes in Chennai",
        description: "Handcrafted custom cakes and professional baking workshops in Madambakkam, Chennai.",
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
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className={cn(outfit.variable, "antialiased bg-background text-foreground")}>
                {children}
            </body>
        </html>
    );
}
