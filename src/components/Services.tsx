"use client";

import { motion } from "framer-motion";
import { Cake, GraduationCap, Check } from "lucide-react";
import content from "@/data/content.json";

export default function Services() {
    return (
        <section id="services" className="py-20 bg-secondary/20">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        {content.services.title}
                    </h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* Custom Cakes Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow border border-border"
                    >
                        <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                            <Cake className="w-7 h-7 text-primary" />
                        </div>
                        <h3 className="text-2xl font-bold text-foreground mb-3">
                            {content.services.cards[0].title}
                        </h3>
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                            {content.services.cards[0].description}
                        </p>
                        <ul className="space-y-3">
                            {content.services.cards[0]?.features?.map((feature, idx) => (
                                <li key={idx} className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span className="text-sm text-foreground/80">{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Baking Classes Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow border border-border"
                    >
                        <div className="bg-accent/30 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                            <GraduationCap className="w-7 h-7 text-foreground" />
                        </div>
                        <h3 className="text-2xl font-bold text-foreground mb-3">
                            {content.services.cards[1]?.title}
                        </h3>
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                            {content.services.cards[1]?.description}
                        </p>

                        <div className="space-y-6">
                            {content.services.cards[1]?.subSections?.map((sub, idx) => (
                                <div key={idx} className="bg-secondary/10 p-4 rounded-lg">
                                    <h4 className="font-semibold text-foreground mb-2">{sub.title}</h4>
                                    <ul className="space-y-2">
                                        {sub.items.map((item, i) => (
                                            <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                                                <div className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
