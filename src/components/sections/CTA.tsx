import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-32 relative overflow-hidden bg-primary">
      {/* Dynamic patterns */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-dark to-primary z-0 opacity-50"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/10 rounded-full blur-[150px] z-0 animate-pulse"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-4xl md:text-7xl font-black text-white mb-8 leading-tight tracking-tight">
          Ready to Build, Learn, <br />
          and <span className="underline decoration-white/30 underline-offset-8">Innovate?</span>
        </h2>
        <p className="text-xl text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed font-medium">
          Join a growing network of engineering students passionate about high-impact software development and technology.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
          <Link
            href="/join"
            className="w-full sm:w-auto px-12 py-5 bg-white text-primary rounded-full font-black text-lg hover:bg-gray-50 transition-all shadow-2xl transform hover:scale-105 active:scale-95"
          >
            Join the Community
          </Link>
          <Link
            href="/contact"
            className="w-full sm:w-auto px-12 py-5 bg-primary-dark text-white border-2 border-primary-dark rounded-full font-bold text-lg hover:bg-white hover:text-primary transition-all transform hover:scale-105"
          >
            Contact the Team
          </Link>
        </div>
      </div>
    </section>
  );
}
