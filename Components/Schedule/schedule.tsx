const Schedule = () => {
    return (
      <section id="schedule" className="bg-[#061222] text-white py-28">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          
          {/* HEADER */}
          <div className="text-center">
            <p className="text-[#C9A227] uppercase tracking-[0.4em] text-xs">
              Conference Schedule
            </p>
  
            <h2 className="mt-6 text-4xl md:text-5xl font-bold tracking-tight">
              31 July – 2 August
            </h2>
  
            <p className="mt-4 text-slate-400 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
              Three days of diplomacy, debate, and resolution building
              across multiple committees.
            </p>
          </div>
  
          {/* SCHEDULE GRID */}
          <div className="mt-20 grid md:grid-cols-3 gap-10 text-center">
            
            {/* Day 1 */}
            <div>
              <p className="text-[#C9A227] text-sm uppercase tracking-[0.3em]">
                Day 1
              </p>
  
              <h3 className="mt-3 text-xl font-semibold">
                31 July
              </h3>
  
              <p className="mt-3 text-slate-400 text-sm leading-relaxed">
                Opening Ceremony, Roll Call, <br /> Committee Sessions,Social TBD
              </p>
            </div>
  
            {/* Day 2 */}
            <div>
              <p className="text-[#C9A227] text-sm uppercase tracking-[0.3em]">
                Day 2
              </p>
  
              <h3 className="mt-3 text-xl font-semibold">
                1 August
              </h3>
  
              <p className="mt-3 text-slate-400 text-sm leading-relaxed">
                Full Committee Sessions and Debate <br /> Concert
              </p>
            </div>
  
            {/* Day 3 */}
            <div>
              <p className="text-[#C9A227] text-sm uppercase tracking-[0.3em]">
                Day 3
              </p>
  
              <h3 className="mt-3 text-xl font-semibold">
                2 August
              </h3>
  
              <p className="mt-3 text-slate-400 text-sm leading-relaxed">
                Drafting and Voting procedures <br />Closing ceremony and Formal Dinner 
              </p>
            </div>
          </div>
  
        </div>
      </section>
    );
  };
  
  export default Schedule;