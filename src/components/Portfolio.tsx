"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import content from "@/data/content.json";

interface PortfolioItem {
    id: number;
    category: string;
    title: string;
    description: string;
    instagramUrl: string;
}

export default function Portfolio() {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    // Filter items based on selected category
    const filteredItems = selectedCategory === "All"
        ? content.portfolio.items
        : content.portfolio.items.filter(item => item.category === selectedCategory);

    // Scroll functions
    const scroll = (direction: "left" | "right") => {
        if (scrollContainerRef.current) {
            const scrollAmount = 400;
            scrollContainerRef.current.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth"
            });
        }
    };

    // Convert Instagram URL to embed URL
    const getInstagramEmbedUrl = (url: string) => {
        // Remove query parameters
        const cleanUrl = url.split('?')[0];
        // Ensure trailing slash
        const urlWithSlash = cleanUrl.endsWith('/') ? cleanUrl : `${cleanUrl}/`;
        // Append embed
        return `${urlWithSlash}embed/`;
    };

    return (
        <section id="portfolio" className="py-20 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        {content.portfolio.title}
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        {content.portfolio.caption}
                    </p>
                </motion.div>

                {/* Categories Pills */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {content.portfolio.categories.map((cat, idx) => (
                        <button
                            key={idx}
                            onClick={() => setSelectedCategory(cat)}
                            className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-300 ${selectedCategory === cat
                                ? "bg-primary text-primary-foreground border-primary shadow-lg scale-105"
                                : "bg-secondary/30 text-secondary-foreground border-secondary/50 hover:bg-secondary/50"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Horizontal Scrolling Portfolio */}
                <div className="relative group">
                    {/* Left Scroll Button */}
                    <button
                        onClick={() => scroll("left")}
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -ml-4"
                        aria-label="Scroll left"
                    >
                        <ChevronLeft className="w-6 h-6 text-foreground" />
                    </button>

                    {/* Right Scroll Button */}
                    <button
                        onClick={() => scroll("right")}
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -mr-4"
                        aria-label="Scroll right"
                    >
                        <ChevronRight className="w-6 h-6 text-foreground" />
                    </button>

                    {/* Scrollable Container */}
                    <div
                        ref={scrollContainerRef}
                        className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-8 px-4"
                        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                    >
                        <AnimatePresence mode="popLayout">
                            {filteredItems.map((item, idx) => (
                                <motion.div
                                    key={item.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                                    className="relative flex-shrink-0"
                                >
                                    <a
                                        href={item.instagramUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block group w-80 h-96 bg-muted rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                                    >
                                        {/* Instagram Embed Preview */}
                                        <iframe
                                            src={getInstagramEmbedUrl(item.instagramUrl)}
                                            title={`Instagram post for ${item.title}`}
                                            loading="lazy"
                                            className="absolute inset-0 pointer-events-none"
                                            style={{
                                                width: '200%',
                                                height: '200%',
                                                transform: 'scale(0.5)',
                                                transformOrigin: 'top left',
                                                border: 'none'
                                            }}
                                            scrolling="no"
                                        />

                                        {/* Transparent Overlay for Click Capture */}
                                        <div className="absolute inset-0 bg-transparent" />
                                    </a>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>
            </div>

            <style jsx global>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </section>
    );
}
