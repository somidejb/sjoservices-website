import AboutUs from "@/components/shared/AboutUs";
import Banner from "@/components/shared/Banner";
import Contact from "@/components/shared/Contact";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import Plans from "@/components/shared/Plans";
import Projects from "@/components/shared/Projects";
import Testimonials from "@/components/shared/Testimonials";

export default function Home() {
  return (
    <div className = "flex flex-col w-full">
      <Header />
      <Banner />
      <AboutUs />
      <Projects />
      <Testimonials />
      <Plans />
      <Contact />
      <Footer />
    </div>
  );
}
