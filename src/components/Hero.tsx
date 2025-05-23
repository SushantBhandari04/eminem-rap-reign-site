
import React from 'react';
import { Play } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800"></div>
      
      {/* Eminem image with overlay */}
      <div className="absolute inset-0 z-0 opacity-30">
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Eminem_-_Concert_for_Valor_in_Washington%2C_D.C._Nov._11%2C_2014_%282%29_%28Cropped%29.jpg" 
          alt="Eminem background" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
      </div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-red-500 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-yellow-500 rounded-full animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-6 tracking-tight">
          <span className="bg-gradient-to-r from-blue-400 via-white to-red-400 bg-clip-text text-transparent animate-fade-in">
            EMINEM
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in delay-500">
          The Real Slim Shady. Marshall Bruce Mathers III. The fastest rapper alive. 
          Dive into the legendary career of hip-hop's most controversial and successful artist.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in delay-1000">
          <button className="group flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25">
            <Play className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
            Explore Discography
          </button>
          
          <button className="border-2 border-white/20 px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-black transition-all duration-300 hover:scale-105">
            View Timeline
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 animate-fade-in delay-1500">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-400">220M+</div>
            <div className="text-gray-400 text-sm uppercase tracking-wider">Albums Sold</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-red-400">15</div>
            <div className="text-gray-400 text-sm uppercase tracking-wider">Grammy Awards</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-yellow-400">11</div>
            <div className="text-gray-400 text-sm uppercase tracking-wider">Studio Albums</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-green-400">#1</div>
            <div className="text-gray-400 text-sm uppercase tracking-wider">Fastest Rapper</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
