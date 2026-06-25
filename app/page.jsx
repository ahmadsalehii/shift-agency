import Header from "@/components/Header/Header";
import AboutSection from "@/components/Pages/Index/About/AboutSection";
import BlogSection from "@/components/Pages/Index/Blog/BlogSection";
import ContactSection from "@/components/Pages/Index/Contact/ContactSection";
import ContactSectionTitle from "@/components/Pages/Index/Contact/ContactSectionTitle";
import Landing from "@/components/Pages/Index/Landing/Landing";
import Projects from "@/components/Pages/Index/Projects/Projects";
import ServicesSection from "@/components/Pages/Index/Services/ServicesSection";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Header />
      <Landing />
      <Projects />
      <AboutSection />
      <ServicesSection />
      <BlogSection />
      <ContactSection />
    </div>
  );
}
