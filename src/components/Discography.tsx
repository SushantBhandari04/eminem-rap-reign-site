
import React from 'react';

const Discography = () => {
  const albums = [
    { title: "Infinite", year: "1996", type: "Studio Album" },
    { title: "The Slim Shady LP", year: "1999", type: "Studio Album" },
    { title: "The Marshall Mathers LP", year: "2000", type: "Studio Album" },
    { title: "The Eminem Show", year: "2002", type: "Studio Album" },
    { title: "Encore", year: "2004", type: "Studio Album" },
    { title: "Relapse", year: "2009", type: "Studio Album" },
    { title: "Recovery", year: "2010", type: "Studio Album" },
    { title: "The Marshall Mathers LP 2", year: "2013", type: "Studio Album" },
    { title: "Revival", year: "2017", type: "Studio Album" },
    { title: "Kamikaze", year: "2018", type: "Studio Album" },
    { title: "Music to Be Murdered By", year: "2020", type: "Studio Album" },
    { title: "The Death of Slim Shady", year: "2024", type: "Studio Album" }
  ];

  return (
    <section className="py-20 px-4 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-red-400 to-yellow-400 bg-clip-text text-transparent">
            COMPLETE DISCOGRAPHY
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From underground battles to global domination - every album that shaped the legend
          </p>
        </div>

        <div className="grid gap-4">
          {albums.map((album, index) => (
            <div 
              key={album.title}
              className="group flex items-center justify-between p-6 bg-gray-800/30 rounded-xl hover:bg-gray-800/60 transition-all duration-300 hover:scale-[1.02] border border-gray-700/50 hover:border-blue-500/50"
            >
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                    {album.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{album.type}</p>
                </div>
              </div>
              
              <div className="text-right">
                <div className="text-2xl font-bold text-white">{album.year}</div>
                <div className="w-8 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 ml-auto mt-1 group-hover:w-12 transition-all duration-300"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Discography;
