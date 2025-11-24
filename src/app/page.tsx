import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Enquiry from "@/components/Enquiry";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <main className="min-h-screen bg-background overflow-x-hidden">
            <Navbar />
            <Hero />
            <About />
            <Services />
            <Portfolio />
            <Testimonials />
            <Enquiry />
            <Footer />
        </main>
    );
}
