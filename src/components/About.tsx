"use client";

import { motion } from "framer-motion";
import { Award, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import content from "@/data/content.json";
import aboutImage from "@/data/about.jpeg";

export default function About() {
    return (
        <section id="about" className="py-20 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                            {content.about.title}
                        </h2>
                        <p className="text-lg text-muted-foreground mb-6 leading-relaxed whitespace-pre-line">
                            {content.about.body}
                        </p>

                        <div className="space-y-3 mb-8">
                            {content.about.specialties.map((item, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                                    <span className="text-foreground font-medium">{item}</span>
                                </div>
                            ))}
                        </div>

                        <p className="text-muted-foreground italic border-l-4 border-primary pl-4">
                            {content.about.closing}
                        </p>
                    </motion.div>

                    {/* Highlight Box / Image Placeholder */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="aspect-square rounded-2xl bg-secondary/30 flex items-center justify-center relative overflow-hidden">
                            <Image
                                src={aboutImage}
                                alt="Tanya Baking"
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Award Box */}
                        <div className="absolute -bottom-6 -left-6 md:-left-12 bg-white p-6 rounded-xl shadow-xl border border-border max-w-xs">
                            <div className="flex items-start gap-4">
                                <div className="bg-primary/10 p-3 rounded-full">
                                    <Award className="w-8 h-8 text-primary" />
                                </div>
                                <div>
                                    <p className="font-bold text-foreground text-sm">Award Winner</p>
                                    <p className="text-xs text-muted-foreground mt-1">
                                        {content.about.highlight.replace("🏆 ", "")}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
