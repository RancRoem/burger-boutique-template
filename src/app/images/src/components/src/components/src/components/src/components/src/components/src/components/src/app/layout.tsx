import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MenuSection from "@/components/MenuSection";
import AboutAndReservation from "@/components/AboutAndReservation";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <MenuSection />
        <AboutAndReservation />
      </main>
      <Footer />
      <CartDrawer />
    </div>
  );
}
