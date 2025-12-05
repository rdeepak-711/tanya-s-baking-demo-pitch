import { Outfit } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
    metadataBase: new URL("https://tanya-s-baking-demo.vercel.app"),
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
        url: "https://tanya-s-baking-demo.vercel.app",
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
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Poppins:wght@300;400;500;600&display=swap"
                    rel="stylesheet"
                />
                <script dangerouslySetInnerHTML={{
                    __html: `
                    var ahrefs_analytics_script = document.createElement('script');
                    ahrefs_analytics_script.async = true;
                    ahrefs_analytics_script.src = 'https://analytics.ahrefs.com/analytics.js';
                    ahrefs_analytics_script.setAttribute('data-key', 'Y+dSor4NTHjWJvwoHMFYEQ');
                    document.getElementsByTagName('head')[0].appendChild(ahrefs_analytics_script);
                  `
                }} />
            </head>
            <body className={cn(outfit.variable, "antialiased bg-background text-foreground")}>
                {children}
                <Analytics />
            </body>
        </html>
    );
}
