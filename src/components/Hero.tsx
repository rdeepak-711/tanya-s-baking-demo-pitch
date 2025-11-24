"use client";

import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import content from "@/data/content.json";

export default function Hero() {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-secondary/30 via-background to-background"
        >
            {/* Decorative Elements */}
            <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

            <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/50 border border-secondary text-xs font-medium text-secondary-foreground mb-6"
                >
                    <Star className="w-3 h-3 fill-current" />
                    <span>FSSAI Approved Home Bakery</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6 max-w-4xl mx-auto leading-tight"
                >
                    {content.hero.headline.split("—")[0]}
                    <span className="block text-primary mt-2">
                        {content.hero.headline.split("—")[1] || "Baking Classes"}
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
                >
                    {content.hero.subHeadline}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <a
                        href="#enquiry"
                        className="px-8 py-4 bg-primary text-primary-foreground text-lg font-semibold rounded-full hover:bg-primary/90 transition-all shadow-xl shadow-primary/25 hover:shadow-2xl hover:-translate-y-1 flex items-center gap-2"
                    >
                        {content.hero.cta}
                        <ArrowRight className="w-5 h-5" />
                    </a>
                    <a
                        href="#portfolio"
                        className="px-8 py-4 bg-white border border-border text-foreground text-lg font-semibold rounded-full hover:bg-secondary/20 transition-colors"
                    >
                        View Portfolio
                    </a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground"
                >
                    {content.hero.notes.map((note, index) => (
                        <div key={index} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                            {note}
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
