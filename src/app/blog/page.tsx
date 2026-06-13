const posts = [
  {
    title: "The Rise of AI in Civil Engineering",
    excerpt: "Exploring how machine learning is revolutionizing structural analysis and urban planning.",
    author: "Jane Doe",
    date: "June 10, 2026",
    category: "AI Intelligence",
    image: "https://images.unsplash.com/photo-1503387762-592dea58ef23?q=80&w=800&auto=format&fit=crop",
    accent: "text-accent-violet",
    bg: "bg-accent-violet/5",
    border: "border-accent-violet/10"
  },
  {
    title: "Getting Started with Arduino for Robotics",
    excerpt: "A beginner's guide to building your first autonomous robot with Arduino and basic sensors.",
    author: "John Smith",
    date: "June 05, 2026",
    category: "Robotics Core",
    image: "https://images.unsplash.com/photo-1561144443-f546f610996c?q=80&w=800&auto=format&fit=crop",
    accent: "text-secondary-cyan",
    bg: "bg-secondary-cyan/5",
    border: "border-secondary-cyan/10"
  },
  {
    title: "Mastering Next.js 16 Server Actions",
    excerpt: "Deep dive into the new features of Next.js 16 and how to handle data mutations efficiently.",
    author: "Alex Rivera",
    date: "May 28, 2026",
    category: "Software Protocols",
    image: "https://images.unsplash.com/photo-1618477247222-acbdb0e159b3?q=80&w=800&auto=format&fit=crop",
    accent: "text-primary",
    bg: "bg-primary/5",
    border: "border-primary/10"
  },
];

export default function BlogPage() {
  return (
    <div className="pt-32 pb-24 bg-white min-h-screen text-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <h2 className="text-primary text-sm font-black tracking-widest uppercase mb-4 tracking-tight">Community Feed</h2>
          <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-6 tracking-tight">
            Developer Insights
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-medium">
            Technical articles, tutorials, and field reports from the ENG240 developer community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {posts.map((post, index) => (
            <article
              key={index}
              className="bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl hover:border-primary/20 transition-all flex flex-col group"
            >
              <div className="h-64 overflow-hidden relative">
                <div className="absolute inset-0 bg-primary/5 z-10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
                />
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <div className="flex items-center gap-4 mb-6">
                  <span className={`px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border ${post.bg} ${post.accent} ${post.border}`}>
                    {post.category}
                  </span>
                  <span className="text-gray-400 text-xs font-bold font-mono tracking-tighter">{post.date}</span>
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-4 group-hover:text-primary transition-colors leading-tight tracking-tight">
                  <a href="#">{post.title}</a>
                </h3>
                <p className="text-gray-600 leading-relaxed mb-8 flex-grow font-medium italic">
                  "{post.excerpt}"
                </p>
                <div className="flex items-center gap-4 pt-8 border-t border-gray-100">
                  <div className="w-10 h-10 bg-gray-100 rounded-full border border-gray-200"></div>
                  <div className="flex flex-col">
                    <span className="text-sm font-black text-gray-900">{post.author}</span>
                    <span className="text-[10px] text-primary font-bold uppercase tracking-widest">Active Member</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
