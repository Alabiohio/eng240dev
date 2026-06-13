import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <Features />
      <FeaturedProjects />
      <CTA />
    </div>
  );
}
