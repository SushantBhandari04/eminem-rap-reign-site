
import React, { useState } from 'react';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Button } from './ui/button';
import { Send, Award, ThumbsUp } from 'lucide-react';

const FavoriteBarSubmission = () => {
  const [name, setName] = useState('');
  const [favoriteBar, setFavoriteBar] = useState('');
  const [song, setSong] = useState('');
  const [submitted, setSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send data to a backend
    console.log({ name, favoriteBar, song });
    setSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setName('');
      setFavoriteBar('');
      setSong('');
      setSubmitted(false);
    }, 3000);
  };
  
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-red-400 to-purple-400 bg-clip-text text-transparent">
            SHARE YOUR FAVORITE BAR
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            What Eminem lyric hits you the hardest? Share your favorite bar with other fans.
          </p>
        </div>
        
        <div className="bg-gradient-to-r from-gray-800/40 to-gray-900/40 p-1 rounded-xl">
          <div className="bg-gray-900/60 p-8 rounded-lg border border-gray-700/50">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-8">
                <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-4">
                  <ThumbsUp className="text-green-400 w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Thanks for sharing!</h3>
                <p className="text-gray-300">Your favorite bar has been submitted.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-gray-200">Your Name</Label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    required
                    className="bg-gray-800/50 border-gray-700"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="bar" className="text-gray-200">Favorite Bar</Label>
                  <Textarea
                    id="bar"
                    value={favoriteBar}
                    onChange={(e) => setFavoriteBar(e.target.value)}
                    placeholder="Drop your favorite Eminem bar here..."
                    required
                    className="bg-gray-800/50 border-gray-700 min-h-[100px]"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="song" className="text-gray-200">Song Title</Label>
                  <Input
                    id="song"
                    value={song}
                    onChange={(e) => setSong(e.target.value)}
                    placeholder="Which song is it from?"
                    required
                    className="bg-gray-800/50 border-gray-700"
                  />
                </div>
                
                <div className="pt-2">
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.02]"
                  >
                    <Send className="w-4 h-4" />
                    Share Your Bar
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-800/30 p-6 rounded-xl border border-gray-700/50">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                <Award className="text-blue-400 w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-white">Fan Favorite</h3>
                <p className="text-sm text-gray-400">Most voted bar this month</p>
              </div>
            </div>
            <blockquote className="text-xl italic text-gray-300 leading-relaxed">
              "Till I collapse I'm spilling these raps long as you feel 'em, till the day that I drop you'll never say that I'm not killing 'em."
            </blockquote>
            <div className="mt-4 flex justify-between items-center">
              <span className="text-blue-400 font-medium">Till I Collapse</span>
              <span className="text-gray-400 text-sm">The Eminem Show</span>
            </div>
          </div>
          
          <div className="bg-gray-800/30 p-6 rounded-xl border border-gray-700/50">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center">
                <Award className="text-purple-400 w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-white">Editor's Pick</h3>
                <p className="text-sm text-gray-400">Our team's selection</p>
              </div>
            </div>
            <blockquote className="text-xl italic text-gray-300 leading-relaxed">
              "They say music can alter moods and talk to you. Well, can it load a gun up for you and cock it too?"
            </blockquote>
            <div className="mt-4 flex justify-between items-center">
              <span className="text-purple-400 font-medium">Sing For The Moment</span>
              <span className="text-gray-400 text-sm">The Eminem Show</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FavoriteBarSubmission;
