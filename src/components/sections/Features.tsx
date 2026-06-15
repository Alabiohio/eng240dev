import { Code, Cpu, Brain, Laptop, Users, Rocket } from "lucide-react";
import Image from "next/image";
import featuresImg from "../../../assets/images/features.jpg";

const features = [
  {
    title: "Software Development",
    description: "Build modern web, mobile, and desktop applications using the latest industry-standard technologies.",
    icon: Code,
    color: "text-primary",
    bg: "bg-primary/5",
    border: "border-primary/10",
  },
  {
    title: "Robotics & AI",
    description: "Create intelligent hardware solutions and explore the future of machine learning and autonomous systems.",
    icon: Brain,
    color: "text-secondary-brand",
    bg: "bg-secondary-brand/5",
    border: "border-secondary-brand/10",
  },
  {
    title: "Advanced Workshops",
    description: "Hands-on sessions designed to push your technical boundaries and master new engineering skills.",
    icon: Laptop,
    color: "text-accent-violet",
    bg: "bg-accent-violet/5",
    border: "border-accent-violet/10",
  },
];

export default function Features() {
  return (
    <section className="pb-32 bg-[#0A0A0A] relative z-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src={featuresImg}
          alt="Engineering features"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/10 via-[#0A0A0A]/30 to-[#0A0A0A]/10"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="relative -top-20 md:-top-40 z-20 text-right mb-12">
          <h3 className="text-7xl md:text-9xl font-black tracking-tighter leading-[0.8] mb-8">
            <span className="text-primary block">What</span>
            <span className="text-gradient-primary block">We Build</span>
          </h3>
          <p className="text-xl text-gray-400 max-w-xl ml-auto leading-relaxed">
            We provide a dynamic environment for engineering students to collaborate, innovate, and develop elite technical proficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`bg-neutral-900 p-10 rounded-[2.5rem] border border-white/5 hover:border-primary/50 hover:bg-neutral-800 transition-all group relative overflow-hidden`}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className={`${feature.bg} ${feature.color} w-20 h-20 rounded-3xl flex items-center justify-center mb-8 transform group-hover:rotate-6 transition-transform shadow-sm`}>
                <feature.icon size={36} strokeWidth={2.5} />
              </div>
              
              <h4 className="text-2xl font-black text-white mb-4 tracking-tight">{feature.title}</h4>
              <p className="text-gray-400 leading-relaxed text-lg">
                {feature.description}
              </p>
              
              <div className="mt-8 flex items-center text-sm font-bold text-white group-hover:text-primary transition-colors cursor-pointer">
                Learn More <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
