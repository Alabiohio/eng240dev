import { Search, Filter } from "lucide-react";
import FeaturedProjects from "@/components/sections/FeaturedProjects";

export default function ProjectsPage() {
  return (
    <div className="pt-32 pb-24 bg-white min-h-screen text-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <h2 className="text-primary text-sm font-black tracking-widest uppercase mb-4 tracking-tight">Project Repository</h2>
          <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-6 tracking-tight">
            Our Portfolio
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-medium">
            Explore the innovative solutions and technological breakthroughs achieved by our student developer community.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-6 mb-20 max-w-4xl mx-auto">
          <div className="relative flex-grow group">
            <div className="absolute inset-0 bg-primary/5 rounded-2xl blur-xl group-hover:bg-primary/10 transition-all"></div>
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors" size={22} />
            <input
              type="text"
              placeholder="Search project intelligence..."
              className="relative w-full pl-14 pr-6 py-5 rounded-2xl bg-gray-50 border border-gray-100 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary transition-all placeholder:text-gray-400 font-medium"
            />
          </div>
          <button className="flex items-center justify-center gap-3 px-10 py-5 bg-white border border-gray-200 rounded-2xl font-black text-gray-900 hover:bg-gray-50 transition-all shadow-sm">
            <Filter size={22} />
            Filter
          </button>
        </div>

        <FeaturedProjects isDark={false} />
        
        <div className="mt-20 p-12 rounded-[2.5rem] bg-gray-50 border border-gray-100 text-center relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] group-hover:bg-primary/10 transition-all"></div>
          <p className="text-gray-400 font-black uppercase tracking-widest text-sm relative z-10 font-mono">End of Intelligence Feed. More Incoming...</p>
        </div>
      </div>
    </div>
  );
}
