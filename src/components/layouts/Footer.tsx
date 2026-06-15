import Link from "next/link";
import { SiX, SiGithub } from "@icons-pack/react-simple-icons";

const LinkedInIcon = ({ size = 24 }: { size?: number }) => (
  <svg 
    role="img" 
    viewBox="0 0 24 24" 
    width={size} 
    height={size} 
    fill="currentColor" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z"/>
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-950 text-white border-t border-white/5 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="text-2xl font-black">
              <span className="text-primary">ENG240</span> <span className="text-white">Developers</span>
            </Link>
            <p className="mt-6 text-text-muted text-lg leading-relaxed">
              Forging the future of engineering through elite code, innovation, and radical collaboration.
            </p>
          </div>

          <div>
            <h3 className="text-white font-black uppercase tracking-widest text-sm mb-8">Navigation</h3>
            <ul className="space-y-4 text-text-secondary">
              <li><Link href="/about" className="hover:text-primary transition-colors font-medium">Core Mission</Link></li>
              <li><Link href="/projects" className="hover:text-primary transition-colors font-medium">Intelligence</Link></li>
              <li><Link href="/events" className="hover:text-primary transition-colors font-medium">Operations</Link></li>
              <li><Link href="/blog" className="hover:text-primary transition-colors font-medium">Insights</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-black uppercase tracking-widest text-sm mb-8">Community</h3>
            <ul className="space-y-4 text-text-secondary">
              <li><Link href="/team" className="hover:text-primary transition-colors font-medium">Elite Team</Link></li>
              <li><Link href="/join" className="hover:text-primary transition-colors font-medium">Apply Now</Link></li>
              <li><Link href="/resources" className="hover:text-primary transition-colors font-medium">Armory</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors font-medium">Signal Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-black uppercase tracking-widest text-sm mb-8">Secure Signal</h3>
            <div className="flex space-x-4 mb-8">
              <a href="#" className="w-12 h-12 rounded-xl bg-neutral-900 flex items-center justify-center text-text-muted hover:bg-primary hover:text-black transition-all border border-white/5" aria-label="GitHub">
                <SiGithub size={20} />
              </a>
              <a href="#" className="w-12 h-12 rounded-xl bg-neutral-900 flex items-center justify-center text-text-muted hover:bg-secondary-brand hover:text-black transition-all border border-white/5" aria-label="LinkedIn">
                <LinkedInIcon size={20} />
              </a>
              <a href="#" className="w-12 h-12 rounded-xl bg-neutral-900 flex items-center justify-center text-text-muted hover:bg-white hover:text-black transition-all border border-white/5" aria-label="X (formerly Twitter)">
                <SiX size={20} />
              </a>
            </div>
            <p className="text-text-muted text-sm font-medium">
              E: info@eng240dev.com
            </p>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-text-muted text-sm font-medium italic">
            &copy; {currentYear} ENG240 Developers.
          </p>
          <div className="flex gap-8 text-xs font-bold uppercase tracking-widest text-text-muted">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
