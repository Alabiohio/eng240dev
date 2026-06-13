import { SiX, SiGithub } from "@icons-pack/react-simple-icons";

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

const team = [
  {
    name: "Olanrewaju Johnson",
    role: "Community Lead & Founder",
    department: "Software Engineering",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
    bio: "Passionate about building communities and empowering students through technology.",
  },
  {
    name: "Sarah Johnson",
    role: "Frontend Lead",
    department: "Computer Engineering",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop",
    bio: "UI/UX enthusiast with a focus on creating beautiful and accessible web experiences.",
  },
  {
    name: "David Chen",
    role: "Backend Lead",
    department: "Electrical Engineering",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
    bio: "Loves architecting scalable systems and working with distributed databases.",
  },
  {
    name: "Michael Adebayo",
    role: "Robotics Lead",
    department: "Mechanical Engineering",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop",
    bio: "Expert in embedded systems and autonomous robotics navigation.",
  },
];

export default function TeamPage() {
  return (
    <div className="pt-32 pb-24 bg-background min-h-screen text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <h2 className="text-primary text-sm font-black tracking-widest uppercase mb-4">Elite Division</h2>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
            Meet the Team
          </h1>
          <p className="text-xl text-text-muted max-w-2xl mx-auto leading-relaxed">
            The dedicated operators behind ENG240 Developers who execute the mission daily.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-surface-card rounded-[2.5rem] overflow-hidden border border-white/5 p-8 text-center hover:border-primary/30 transition-all group"
            >
              <div className="relative w-32 h-32 mx-auto mb-8">
                <div className="absolute inset-0 bg-primary rounded-full blur-[20px] opacity-0 group-hover:opacity-20 transition-opacity"></div>
                <div className="relative w-32 h-32 bg-surface-hover rounded-full mx-auto overflow-hidden border-4 border-white/5 group-hover:border-primary/50 transition-all duration-500">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </div>
              
              <h3 className="text-2xl font-black text-white mb-2">{member.name}</h3>
              <p className="text-primary font-bold text-sm mb-4 tracking-wide uppercase italic">{member.role}</p>
              <p className="text-text-muted text-xs mb-6 uppercase tracking-widest font-black">{member.department}</p>
              
              <p className="text-text-secondary text-sm mb-8 leading-relaxed italic">
                "{member.bio}"
              </p>
              
              <div className="flex justify-center space-x-3 items-center">
                <a href="#" className="w-10 h-10 rounded-xl bg-neutral-900 flex items-center justify-center text-text-muted hover:bg-primary hover:text-black transition-all border border-white/5">
                  <SiGithub size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-xl bg-neutral-900 flex items-center justify-center text-text-muted hover:bg-secondary-cyan hover:text-black transition-all border border-white/5">
                  <LinkedInIcon size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-xl bg-neutral-900 flex items-center justify-center text-text-muted hover:bg-white hover:text-black transition-all border border-white/5">
                  <SiX size={18} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
