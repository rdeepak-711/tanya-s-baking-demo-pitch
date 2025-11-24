import { Instagram, Phone } from "lucide-react";
import content from "@/data/content.json";

export default function Footer() {
    return (
        <footer className="bg-foreground text-primary-foreground py-12">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
                    <div className="text-center md:text-left">
                        <h3 className="text-2xl font-bold font-outfit mb-2">{content.footer.brand}</h3>
                        <p className="text-primary-foreground/70">{content.footer.tagline}</p>
                        <p className="text-primary-foreground/70">{content.footer.address}</p>
                    </div>

                    <div className="flex items-center gap-6">
                        <a
                            href={content.footer.socials.instagram}
                            className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                            aria-label="Instagram"
                        >
                            <Instagram className="w-5 h-5" />
                        </a>
                        <a
                            href={`https://wa.me/${content.enquiry.whatsappNumber}`}
                            className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                            aria-label="WhatsApp"
                        >
                            <Phone className="w-5 h-5" />
                        </a>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 text-center text-sm text-primary-foreground/50">
                    <p>{content.footer.copyright}</p>
                </div>
            </div>
        </footer>
    );
}
