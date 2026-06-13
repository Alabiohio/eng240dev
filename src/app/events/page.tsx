import { Calendar, MapPin, Clock } from "lucide-react";

const events = [
  {
    title: "Next.js & Tailwind CSS Workshop",
    date: "July 15, 2026",
    time: "2:00 PM - 5:00 PM",
    location: "Engineering Hall, Room 302",
    description: "Learn how to build modern, high-performance web applications using the latest Next.js features.",
    type: "Workshop",
  },
  {
    title: "AI in Engineering Seminar",
    date: "August 05, 2026",
    time: "10:00 AM - 12:00 PM",
    location: "Main Auditorium",
    description: "A comprehensive look at how artificial intelligence is transforming the engineering landscape.",
    type: "Seminar",
  },
  {
    title: "Community Hackathon 2026",
    date: "September 20-22, 2026",
    time: "48 Hours",
    location: "Innovation Hub",
    description: "Our signature 48-hour event where teams compete to build mission-critical software solutions.",
    type: "Hackathon",
  },
];

export default function EventsPage() {
  return (
    <div className="pt-32 pb-24 bg-white min-h-screen text-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <h2 className="text-primary text-sm font-black tracking-widest uppercase mb-4 tracking-tight">Community Events</h2>
          <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-6 tracking-tight">
            Upcoming Sessions
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-medium">
            Join us for hands-on workshops, insightful seminars, and high-intensity hackathons.
          </p>
        </div>

        <div className="space-y-12">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-white p-10 rounded-[2.5rem] border border-gray-100 flex flex-col md:flex-row gap-12 hover:shadow-2xl hover:border-primary/20 transition-all group shadow-sm"
            >
              <div className="md:w-1/4">
                <div className="bg-gray-50 p-8 rounded-3xl text-center border border-gray-100 group-hover:bg-primary/5 group-hover:border-primary/20 transition-all">
                  <span className="block text-xs font-black uppercase tracking-widest text-primary mb-2">{event.type}</span>
                  <span className="block text-3xl font-black text-gray-900">{event.date.split(',')[0]}</span>
                </div>
              </div>
              <div className="md:w-3/4 flex flex-col justify-center">
                <h3 className="text-3xl font-black text-gray-900 mb-6 group-hover:text-primary transition-colors tracking-tight">{event.title}</h3>
                <div className="flex flex-wrap gap-8 text-gray-500 mb-8 font-bold text-sm uppercase tracking-widest">
                  <div className="flex items-center gap-3">
                    <Clock size={20} className="text-primary" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin size={20} className="text-primary" />
                    <span>{event.location}</span>
                  </div>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed mb-10 font-medium italic">
                  "{event.description}"
                </p>
                <button className="self-start px-10 py-4 bg-primary text-white rounded-full font-black hover:bg-primary-dark transition-all shadow-[0_10px_20px_rgba(16,185,129,0.1)] active:scale-95">
                  Secure Your Spot
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-32 text-center p-16 rounded-[3rem] bg-gray-50 border border-gray-100 opacity-60">
          <h2 className="text-2xl font-black text-gray-900 mb-4 tracking-tight italic">Operations Archive</h2>
          <p className="text-gray-600 font-medium">Missed an event? Access past operation logs and resources in our secure member portal.</p>
        </div>
      </div>
    </div>
  );
}
