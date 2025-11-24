"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import content from "@/data/content.json";

export default function Testimonials() {
    return (
        <section id="testimonials" className="py-20 bg-secondary/30">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        {content.testimonials.title}
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {content.testimonials.items.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.2 }}
                            className="bg-white p-8 rounded-2xl shadow-sm border border-border relative"
                        >
                            <Quote className="w-10 h-10 text-primary/20 absolute top-6 right-6" />
                            <p className="text-lg text-foreground/80 italic mb-6 leading-relaxed">
                                "{item.text}"
                            </p>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                                    {item.author[0]}
                                </div>
                                <div>
                                    <p className="font-bold text-foreground">{item.author}</p>
                                    <div className="flex text-yellow-400 text-xs">
                                        {[...Array(5)].map((_, i) => (
                                            <span key={i}>★</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
