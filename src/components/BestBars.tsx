
import React from 'react';

const BestBars = () => {
  const bars = [
    {
      lyric: "I am whatever you say I am, if I wasn't, then why would I say I am?",
      song: "The Way I Am",
      album: "The Marshall Mathers LP",
      year: "2000"
    },
    {
      lyric: "Success is my only option, failure's not.",
      song: "Lose Yourself",
      album: "8 Mile Soundtrack",
      year: "2002"
    },
    {
      lyric: "You can sound the alarm, you can call out your guards, you can fence in your yard, you can hold all the cards, but I won't back down.",
      song: "Won't Back Down",
      album: "Recovery",
      year: "2010"
    },
    {
      lyric: "They say music can alter moods and talk to you. Well, can it load a gun up for you and cock it too?",
      song: "Sing For The Moment",
      album: "The Eminem Show",
      year: "2002"
    },
    {
      lyric: "You better lose yourself in the music, the moment, you own it, you better never let it go. You only get one shot, do not miss your chance to blow, this opportunity comes once in a lifetime.",
      song: "Lose Yourself",
      album: "8 Mile Soundtrack",
      year: "2002"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-t from-black to-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-red-400 via-yellow-400 to-green-400 bg-clip-text text-transparent">
            LEGENDARY BARS
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Words that changed the game - the most iconic lyrics from Eminem's catalog
          </p>
        </div>

        <div className="grid gap-8">
          {bars.map((bar, index) => (
            <div 
              key={index}
              className="group bg-gradient-to-r from-gray-800/40 to-gray-900/40 p-1 rounded-xl hover:from-blue-900/20 hover:to-purple-900/20 transition-all duration-500"
            >
              <div className="bg-gray-900/60 p-7 rounded-lg border border-gray-700/50 group-hover:border-blue-500/30">
                <div className="mb-4">
                  <blockquote className="text-xl md:text-2xl font-medium text-white italic leading-relaxed">
                    "{bar.lyric}"
                  </blockquote>
                </div>
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <p className="text-blue-400 font-bold">{bar.song}</p>
                    <p className="text-gray-400 text-sm">{bar.album} • {bar.year}</p>
                  </div>
                  
                  <div>
                    <button className="px-4 py-2 text-sm bg-gray-800 hover:bg-gray-700 rounded-full transition-colors duration-300 text-gray-300 hover:text-white flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      Play Song
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestBars;
