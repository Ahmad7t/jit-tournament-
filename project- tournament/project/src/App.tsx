import React from 'react';
import { Trophy, Calendar, MapPin, Users } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-blue-800">
      {/* Hero Section */}
      <header className="relative h-[60vh] flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0" 
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1587280501635-a19de238a81e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
            backgroundBlendMode: 'overlay',
            backgroundColor: 'rgba(0,0,0,0.6)'
          }}
        />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">JIT Premier League</h1>
          <p className="text-xl md:text-2xl mb-8">Jahangirabad Institute of Technology's Premier Cricket Tournament</p>
          <a 
            href="https://forms.gle/dz55w4b332mkEtnK6" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-yellow-500 text-black font-bold py-3 px-8 rounded-full 
                     hover:bg-yellow-400 transform hover:scale-105 transition-all duration-300 
                     shadow-lg hover:shadow-xl"
          >
            Register Now
          </a>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
            <Trophy className="w-12 h-12 text-yellow-500 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Elite Competition</h3>
            <p className="text-gray-300">Compete with the best cricket talent from JIT</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
            <Calendar className="w-12 h-12 text-yellow-500 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Tournament Schedule</h3>
            <p className="text-gray-300">Exciting matches throughout the season</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
            <MapPin className="w-12 h-12 text-yellow-500 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Prime Venue</h3>
            <p className="text-gray-300">State-of-the-art cricket ground at JIT</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
            <Users className="w-12 h-12 text-yellow-500 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Team Spirit</h3>
            <p className="text-gray-300">Build lasting friendships and memories</p>
          </div>
        </div>
      </section>

      {/* Players Section */}
      <section className="py-16 px-4 bg-black/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-12">Featured Players</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                image: "https://github.com/Ahmad7t/jit-tournament-/blob/main/shiraz.jpg?raw=true",
                name: "Shiraz ",
                role: "All-rounder"
              },
              {
                image: "    ",
                name: "Amit Singh",
                role: "Batsman"
              },
              {
                image: "   ",
                name: "   ",
                role: "Bowler"
              }
            ].map((player, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="aspect-w-3 aspect-h-4">
                  <img 
                    src={player.image} 
                    alt={player.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <h3 className="text-xl font-bold text-white">{player.name}</h3>
                  <p className="text-yellow-500">{player.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p>© 2024 JIT Premier League. All rights reserved.</p>
          <p className="mt-2">Jahangirabad Institute of Technology</p>
        </div>
      </footer>
    </div>
  );
}

export default App;