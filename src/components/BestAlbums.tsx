
import React from 'react';

const BestAlbums = () => {
  const albums = [
    {
      title: "The Marshall Mathers LP",
      year: "2000",
      image: "https://hiphopcorner.fr/wp-content/uploads/2016/05/image-eminem-cover-album-marshall-mathers-lp.jpg",
      description: "Eminem's most personal and controversial album",
      tracks: ["The Real Slim Shady", "Stan", "The Way I Am"]
    },
    {
      title: "The Eminem Show", 
      year: "2002",
      image: "https://upload.wikimedia.org/wikipedia/en/3/35/The_Eminem_Show.jpg",
      description: "A masterpiece showcasing Eminem's lyrical genius",
      tracks: ["Without Me", "Lose Yourself", "Cleanin' Out My Closet"]
    },
    {
      title: "The Slim Shady LP",
      year: "1999", 
      image: "https://upload.wikimedia.org/wikipedia/en/3/35/Eminem_-_The_Slim_Shady_LP_CD_cover.jpg",
      description: "The album that introduced the world to Slim Shady",
      tracks: ["My Name Is", "Guilty Conscience", "Role Model"]
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            LEGENDARY ALBUMS
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            The albums that defined a generation and cemented Eminem's place in hip-hop history
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {albums.map((album, index) => (
            <div 
              key={album.title}
              className="group bg-gray-800/50 rounded-2xl overflow-hidden hover:bg-gray-800/80 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={album.image} 
                  alt={album.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="text-2xl font-bold text-white">{album.year}</div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors duration-300">
                  {album.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {album.description}
                </p>
                
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Key Tracks:</h4>
                  {album.tracks.map((track, trackIndex) => (
                    <div key={trackIndex} className="text-sm text-gray-300 flex items-center gap-2">
                      <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
                      {track}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestAlbums;
