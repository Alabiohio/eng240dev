import { Mail, MessageSquare, MapPin } from "lucide-react";
import { SiX, SiGithub, SiDiscord } from "@icons-pack/react-simple-icons";

const LinkedInIcon = ({ size = 20 }: { size?: number }) => (
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

export default function ContactPage() {
  return (
    <div className="pt-32 pb-24 bg-white min-h-screen text-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <h1 className="text-primary text-sm font-black tracking-widest uppercase mb-4 tracking-tight">Direct Support</h1>
          <h2 className="text-5xl md:text-7xl font-black text-gray-900 mb-6 tracking-tight">Get in Touch</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-medium">
            Have questions about our community? Reach out to the ENG240 Developer team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <div>
            <h3 className="text-2xl font-black text-gray-900 mb-10 tracking-tight">Communication Channels</h3>
            <div className="space-y-10">
              <div className="flex gap-6">
                <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center text-primary shrink-0 border border-primary/10">
                  <Mail size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">Official Email</h4>
                  <p className="text-gray-600">contact@eng240dev.com</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-14 h-14 bg-secondary-brand/5 rounded-2xl flex items-center justify-center text-secondary-brand shrink-0 border border-secondary-brand/10">
                  <MessageSquare size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">Community Discord</h4>
                  <p className="text-gray-600">Join our discussion server for real-time support.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-14 h-14 bg-accent-violet/5 rounded-2xl flex items-center justify-center text-accent-violet shrink-0 border border-accent-violet/10">
                  <MapPin size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">Physical Hub</h4>
                  <p className="text-gray-600">Faculty of Engineering, Tech Cluster Annex.</p>
                </div>
              </div>
            </div>

            <div className="mt-20">
              <h3 className="text-gray-900 font-black uppercase tracking-widest text-sm mb-8 tracking-tight">Follow Our Journey</h3>
              <div className="flex gap-4">
                <a href="#" className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all border border-gray-100 shadow-sm">
                  <SiGithub size={24} />
                </a>
                <a href="#" className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-400 hover:bg-secondary-brand hover:text-white transition-all border border-gray-100 shadow-sm">
                  <LinkedInIcon size={24} />
                </a>
                <a href="#" className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-400 hover:bg-black hover:text-white transition-all border border-gray-100 shadow-sm">
                  <SiX size={24} />
                </a>
                <a href="#" className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-400 hover:bg-[#5865F2] hover:text-white transition-all border border-gray-100 shadow-sm">
                  <SiDiscord size={24} />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white p-12 rounded-[2.5rem] border border-gray-100 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] group-hover:bg-primary/10 transition-all"></div>
            
            <form className="space-y-8 relative z-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <label className="block text-sm font-black text-gray-900 uppercase tracking-widest mb-3 tracking-tight">Your Name</label>
                  <input
                    type="text"
                    className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary transition-all placeholder:text-gray-400 font-medium"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-black text-gray-900 uppercase tracking-widest mb-3 tracking-tight">Email Address</label>
                  <input
                    type="email"
                    className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary transition-all placeholder:text-gray-400 font-medium"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-black text-gray-900 uppercase tracking-widest mb-3 tracking-tight">Subject</label>
                <input
                  type="text"
                  className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary transition-all placeholder:text-gray-400 font-medium"
                  placeholder="Inquiry Topic"
                />
              </div>
              <div>
                <label className="block text-sm font-black text-gray-900 uppercase tracking-widest mb-3 tracking-tight">Message</label>
                <textarea
                  rows={5}
                  className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary transition-all placeholder:text-gray-400 font-medium"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              <button className="w-full py-5 bg-primary text-white rounded-2xl font-black text-lg hover:bg-primary-dark transition-all shadow-xl shadow-primary/20 transform hover:scale-[1.02] active:scale-[0.98]">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
