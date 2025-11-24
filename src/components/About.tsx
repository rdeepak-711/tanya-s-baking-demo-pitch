"use client";

import { motion } from "framer-motion";
import { Award, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import content from "@/data/content.json";

export default function About() {
    return (
        <section id="about" className="py-20 bg-background relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-secondary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Image Column */}
                    <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-2xl rotate-6 opacity-20 group-hover:rotate-3 transition-transform duration-500" />
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/5]">
                            <Image
                                src="/about.jpeg"
                                alt="Tanya baking a cake"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>

                        {/* Experience Badge */}
                        <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl border border-primary/10 animate-float">
                            <p className="text-4xl font-bold text-primary">900+</p>
                            <p className="text-sm font-medium text-muted-foreground">Cakes Crafted</p>
                        </div>
                    </div>

                    {/* Content Column */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                                {content.about.title}
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed whitespace-pre-line">
                                {content.about.body}
                            </p>
                        </div>

                        {/* Specialties Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {content.about.specialties.map((item, idx) => (
                                <div key={idx} className="flex items-center gap-3 bg-white/50 p-3 rounded-lg border border-border/50 hover:border-primary/30 transition-colors">
                                    <div className="w-2 h-2 rounded-full bg-primary" />
                                    <span className="text-sm font-medium text-foreground/80">{item}</span>
                                </div>
                            ))}
                        </div>

                        {/* Highlight Box */}
                        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6 rounded-xl border border-primary/20">
                            <p className="font-semibold text-foreground text-center md:text-left">
                                {content.about.highlight}
                            </p>
                        </div>

                        <p className="text-muted-foreground italic border-l-4 border-primary pl-4">
                            "{content.about.closing}"
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
