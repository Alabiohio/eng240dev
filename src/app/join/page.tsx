export default function JoinPage() {
  return (
    <div className="pt-32 pb-24 bg-white min-h-screen text-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <h2 className="text-primary text-sm font-black tracking-widest uppercase mb-4 tracking-tight">Recruitment Protocol</h2>
          <h1 className="text-5xl md:text-8xl font-black text-gray-900 mb-6 leading-tight tracking-tight">
            Join the <span className="text-gradient-primary">Collective</span>
          </h1>
          <p className="text-xl text-gray-600 font-medium">
            Initiate your application to become part of an elite network of engineering students building the future.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 max-w-6xl mx-auto">
          <div className="space-y-12">
            <div>
              <h3 className="text-3xl font-black text-gray-900 mb-10 underline decoration-primary decoration-4 underline-offset-8 tracking-tight">Selection Criteria</h3>
              <div className="space-y-8">
                {[
                  { 
                    num: "01", 
                    title: "Technical Passion", 
                    desc: "Demonstrated interest in mastering complex software systems and engineering principles." 
                  },
                  { 
                    num: "02", 
                    title: "Collaborative Spirit", 
                    desc: "Willingness to operate within cross-functional teams to execute mission-critical projects." 
                  },
                  { 
                    num: "03", 
                    title: "Continuous Growth", 
                    desc: "Commitment to technical evolution and staying at the absolute edge of technology." 
                  }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 group">
                    <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-primary shrink-0 font-black text-xl border border-gray-100 group-hover:border-primary/50 transition-all shadow-sm">
                      {item.num}
                    </div>
                    <div>
                      <h4 className="font-black text-gray-900 text-lg mb-2 tracking-tight">{item.title}</h4>
                      <p className="text-gray-600 leading-relaxed italic font-medium">"{item.desc}"</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 p-10 rounded-[2.5rem] border border-dashed border-gray-200 relative overflow-hidden group">
              <div className="absolute top-[-20%] right-[-20%] w-40 h-40 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-all"></div>
              <h3 className="text-xl font-black text-gray-900 mb-6 uppercase tracking-widest tracking-tight">Entry Requirements</h3>
              <ul className="space-y-4 text-gray-600 font-bold uppercase text-xs tracking-widest">
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Faculty of Engineering Status</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Problem Solving Mindset</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> High Mission Dedication</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Infinite Learning Loop</li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-12 rounded-[3rem] border border-gray-100 shadow-2xl relative shadow-primary/5 group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] group-hover:bg-primary/10 transition-all"></div>
            <h3 className="text-2xl font-black text-gray-900 mb-10 tracking-tight relative z-10">Application Intake</h3>
            <form className="space-y-8 relative z-10">
              <div>
                <label className="block text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-3">Operator Name</label>
                <input
                  type="text"
                  className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary transition-all placeholder:text-gray-400 font-medium"
                  placeholder="Full Legal Name"
                />
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-3">Division</label>
                  <select className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary transition-all appearance-none font-medium">
                    <option>Software Eng</option>
                    <option>Computer Eng</option>
                    <option>Electrical Eng</option>
                    <option>Mechanical Eng</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-3">Current Level</label>
                  <select className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary transition-all appearance-none font-medium">
                    <option>100L</option>
                    <option>200L</option>
                    <option>300L</option>
                    <option>400L</option>
                    <option>500L</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-3">Skill Intelligence</label>
                <input
                  type="text"
                  className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary transition-all placeholder:text-gray-400 font-medium"
                  placeholder="React, Python, Robotics, etc."
                />
              </div>
              <div>
                <label className="block text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-3">Strategic Intent</label>
                <textarea
                  rows={4}
                  className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary transition-all placeholder:text-gray-400 font-medium"
                  placeholder="Why do you wish to join our ranks?"
                ></textarea>
              </div>
              <button className="w-full py-5 bg-primary text-white rounded-2xl font-black text-lg hover:bg-primary-dark transition-all shadow-xl shadow-primary/20 transform hover:scale-[1.02] active:scale-[0.98]">
                Submit Evaluation Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
