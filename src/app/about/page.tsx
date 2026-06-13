export default function AboutPage() {
  return (
    <div className="pt-32 pb-24 bg-white min-h-screen text-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <h2 className="text-primary text-sm font-black tracking-widest uppercase mb-4 tracking-tight">The Origin Story</h2>
          <h1 className="text-5xl md:text-8xl font-black text-gray-900 mb-10 leading-tight tracking-tight">
            The Mission <br />
            Behind <span className="text-gradient-primary">ENG240</span>
          </h1>
          <p className="text-2xl text-gray-600 mb-16 leading-relaxed font-medium">
            We are a student-led high-performance community dedicated to mastering software development, collaboration, and technological breakthrough.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center mb-32">
          <div className="space-y-8">
            <h3 className="text-3xl font-black text-gray-900 underline decoration-primary decoration-4 underline-offset-8">Bridging the Gap</h3>
            <p className="text-gray-600 text-xl leading-relaxed">
              ENG240 Developers was established to solve a critical need: the transition from academic theory to real-world engineering practice.
            </p>
            <p className="text-gray-600 text-xl leading-relaxed">
              We operate as an incubator where builders from all engineering divisions converge to build complex projects and solve challenging problems.
            </p>
          </div>
          <div className="relative group">
            <div className="absolute inset-0 bg-primary/10 rounded-[3rem] blur-3xl group-hover:bg-primary/20 transition-all"></div>
            <div className="relative bg-white rounded-[3rem] h-[500px] overflow-hidden border border-gray-100 shadow-xl group-hover:border-primary/30 transition-all duration-700">
               <img 
                 src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop" 
                 alt="Team working together" 
                 className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
               />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-32">
          {[
            { 
              title: "Strategic Vision", 
              desc: "Building a thriving engineering network that drives innovation and excellence in technology.",
              color: "border-gray-100",
              accent: "text-primary",
              bg: "bg-gray-50/50"
            },
            { 
              title: "Active Mission", 
              desc: "Leveraging code to solve problems while preparing members for successful careers in tech.",
              color: "border-gray-100",
              accent: "text-secondary-cyan",
              bg: "bg-gray-50/50"
            },
            { 
              title: "Our Core Values", 
              desc: "Innovation, collaboration, and continuous technical evolution are at the heart of our community.",
              color: "border-gray-100",
              accent: "text-accent-violet",
              bg: "bg-gray-50/50"
            }
          ].map((card, i) => (
            <div key={i} className={`p-10 rounded-[2rem] border ${card.color} ${card.bg} hover:shadow-xl hover:border-primary/20 transition-all group`}>
              <h4 className={`text-2xl font-black mb-6 ${card.accent}`}>{card.title}</h4>
              <p className="text-gray-600 leading-relaxed text-lg font-medium">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
