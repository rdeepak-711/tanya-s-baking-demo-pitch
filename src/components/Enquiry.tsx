"use client";

import { motion } from "framer-motion";
import { MessageCircle, Clock, AlertCircle } from "lucide-react";
import content from "@/data/content.json";

export default function Enquiry() {
    return (
        <section id="enquiry" className="py-20 bg-primary/10">
            <div className="container mx-auto px-4 md:px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-white rounded-3xl p-10 md:p-16 shadow-xl border border-primary/20 max-w-4xl mx-auto"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                        {content.enquiry.title}
                    </h2>
                    <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                        {content.enquiry.content}
                    </p>

                    <a
                        href={`https://wa.me/${content.enquiry.whatsappNumber}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-[#25D366] text-white text-lg font-bold rounded-full hover:bg-[#20bd5a] transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 mb-12"
                    >
                        <MessageCircle className="w-6 h-6" />
                        {content.enquiry.cta}
                    </a>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 text-sm text-muted-foreground border-t border-border pt-8">
                        <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-primary" />
                            <span>{content.enquiry.notes[0]}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <AlertCircle className="w-4 h-4 text-primary" />
                            <span>{content.enquiry.notes[1]}</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
