import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MenuSection from "@/components/MenuSection";
import AboutSection from "@/components/AboutSection";
import ReservationSection from "@/components/ReservationSection";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <MenuSection />
        <AboutSection />
        <ReservationSection />
      </main>
      <Footer />
      <CartDrawer />
    </div>
  );
}
