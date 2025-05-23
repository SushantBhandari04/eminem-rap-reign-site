
import React from 'react';

const Timeline = () => {
  const events = [
    {
      year: "1972",
      title: "Birth",
      description: "Marshall Bruce Mathers III is born in St. Joseph, Missouri"
    },
    {
      year: "1996",
      title: "Infinite",
      description: "Releases debut album 'Infinite' with only 1,000 copies sold"
    },
    {
      year: "1997",
      title: "Slim Shady Born",
      description: "Creates the Slim Shady persona after a difficult period"
    },
    {
      year: "1999",
      title: "Major Label Debut", 
      description: "Signs with Dr. Dre and releases 'The Slim Shady LP'"
    },
    {
      year: "2000",
      title: "Breakthrough",
      description: "'The Marshall Mathers LP' becomes fastest-selling solo album in US history"
    },
    {
      year: "2002",
      title: "The Eminem Show",
      description: "Releases critically acclaimed album showcasing his versatility"
    },
    {
      year: "2002",
      title: "8 Mile",
      description: "Stars in semi-autobiographical film and wins Oscar for 'Lose Yourself'"
    },
    {
      year: "2005",
      title: "Hiatus",
      description: "Takes break from music to deal with personal issues and addiction"
    },
    {
      year: "2010",
      title: "Recovery",
      description: "Returns with 'Recovery', marking his comeback from addiction"
    },
    {
      year: "2022",
      title: "Rock Hall",
      description: "Inducted into Rock and Roll Hall of Fame"
    }
  ];

  return (
    <section className="py-20 px-4 bg-black">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            THE JOURNEY
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From trailer parks to global stardom - the incredible story of Marshall Mathers
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-red-500"></div>

          {events.map((event, index) => (
            <div key={event.year} className="relative flex items-start gap-8 mb-12 group">
              {/* Timeline dot */}
              <div className="relative z-10 w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm border-4 border-black group-hover:scale-110 transition-transform duration-300">
                {event.year.slice(-2)}
              </div>

              {/* Content */}
              <div className="flex-1 bg-gray-800/50 rounded-xl p-6 group-hover:bg-gray-800/80 transition-all duration-300 group-hover:scale-[1.02] border border-gray-700/50 group-hover:border-blue-500/50">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                  <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                    {event.title}
                  </h3>
                  <span className="text-blue-400 font-bold text-lg">{event.year}</span>
                </div>
                <p className="text-gray-300 leading-relaxed">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
