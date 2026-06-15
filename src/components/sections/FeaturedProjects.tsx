import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";

const projects = [
  {
    title: "EcoTrack",
    description: "A smart environmental monitoring system using IoT and React.",
    tags: ["IoT", "React", "Node.js"],
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=800&auto=format&fit=crop",
    gradient: "from-primary/10 to-secondary-brand/10"
  },
  {
    title: "AI Study Buddy",
    description: "Personalized learning assistant powered by LLMs for engineering students.",
    tags: ["AI", "Next.js", "Python"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop",
    gradient: "from-accent-violet/10 to-secondary-brand/10"
  },
  {
    title: "RoverX",
    description: "An autonomous navigation robot built for rough terrain exploration.",
    tags: ["Robotics", "C++", "ROS"],
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=800&auto=format&fit=crop",
    gradient: "from-primary/10 to-accent-violet/10"
  },
];

export default function FeaturedProjects({ isDark = false }: { isDark?: boolean }) {
  return (
    <section className={`py-32 ${isDark ? 'bg-black text-white' : 'bg-white text-gray-900'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h3 className={`text-4xl md:text-6xl font-black tracking-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>Featured Projects</h3>
          </div>
          <Link
            href="/projects"
            className="flex items-center gap-2 px-8 py-4 bg-gray-50 border border-gray-100 rounded-full font-bold text-gray-900 hover:bg-gray-100 transition-all group shadow-sm"
          >
            Full Portfolio <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-[2rem] overflow-hidden border border-gray-100 hover:border-primary/30 hover:shadow-2xl transition-all flex flex-col"
            >
              <div className="relative h-64 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} z-10 opacity-30`}></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 z-20 flex gap-2">
                  <button className="p-3 bg-white rounded-full text-gray-900 hover:bg-primary hover:text-white transition-all border border-gray-100 shadow-lg">
                    <SiGithub size={20} />
                  </button>
                  <button className="p-3 bg-white rounded-full text-gray-900 hover:bg-secondary-brand hover:text-white transition-all border border-gray-100 shadow-lg">
                    <ExternalLink size={20} />
                  </button>
                </div>
              </div>

              <div className="p-8 flex-grow flex flex-col">
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-1.5 bg-gray-50 text-secondary-brand text-xs font-black rounded-full border border-gray-100"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h4 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">{project.title}</h4>
                <p className="text-gray-600 leading-relaxed mb-8 flex-grow">
                  {project.description}
                </p>
                <Link
                  href={`/projects/${project.title.toLowerCase().replace(/\s+/g, "-")}`}
                  className="text-primary font-black text-sm hover:text-primary-dark flex items-center group/link"
                >
                  View Details <ArrowRight size={18} className="ml-2 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
