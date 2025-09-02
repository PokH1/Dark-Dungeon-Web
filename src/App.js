import React from "react";

export default function App(){
  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans">
      {/* Header */}
      <header className="flex justify-between items-center p-6 bg-gray-800 shadow-md fixed w-full z-10">
        <h1 className="text-2xl font-bold">Dark Dungeon</h1>
        <nav className="space-x-6">
          <a href="#about" className="hover:text-yellow-400">About</a>
          <a href="#download" className="hover:text-yellow-400">Play</a>
          <a href="#characteres" className="hover:text-yellow-400">Characteres</a>
          <a href="#escenario" className="hover:text-yellow-400">Scenario</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center h-screen px-6 bg-gradient-to-b from-black to-gray-900">
        <h2 className="text-5xl font-extrabold mb-4">Welcome to Dark Dungeon</h2>
        <p className="text-lg max-w-2xl mb-6">
          based game, the longer you survive, the harder it gets.
          You’ll need to combine melee attacks, real-time strategy,
          and take advantage of the power-ups and weapons dropped 
          by enemies to overcome each wave and defeat the bosses 
          that appear every few rounds.
        </p>
        <a 
          href="https://preeminent-ganache-c3f13b.netlify.app/" 
          className="bg-yellow-500 text-black px-6 py-3 rounded-xl font-semibold hover:bg-yellow-400 transition"
          >
            Play Now
          </a>
      </section>

      {/* Personajes */}
      <section id="characteres" className="py-20 px-6 bg-gray-900 text-white">
        <h3 className="text-3xl font-bold mb-12 text-center">Characteres</h3>

        {/* Personaje principal */}
        <div className="flex flex-col md:flex-row items-center mb-16">
          <img 
            src="/images/knigth.png"
            alt="Personaje Principal"
            className="rounded-xl shadow-lg w-72 mb-6 md:mb-0 md::mr-8"
          />
          <div className="max-w-xl text-center md:text-left">
            <h4 className="text-2xl font-bold mb-4">Hero</h4>
            <p>
              Our main character is Randall. Randall is a brave knight 
              who will face and defeat all the waves that come his way. 
              He is the courageous knight destined to vanquish the 
              bosses that appear every few waves.
            </p>
          </div>
        </div>

        {/* Enemigos */}
        <div className="flex flex-col md:flex-row-reverse items-center mb-16">
          <img
            src="/images/Enemy.png"
            alt="Enemios"
            className="rounded-xl shadow-lg w-72 mb-6 md:mb-0 md:ml-8"
          />
          <div className="max-w-xl text-center md:text-left">
            <h4 className="text-2xl font-bold mb-4">Enemies</h4>
            <p>
              These fearsome orcs will be some of the main enemies that 
              try to stop you. In each wave, they will arrive in greater 
              numbers, with more strength and health. They are trained 
              to endure and attack in groups, so you will need to upgrade 
              your weapons and strategies to survive. As you progress, 
              these orcs will become even more dangerous, so be careful.
            </p>
          </div>
        </div>

        {/* Jefe Dragón */}
        <div className="flex flex-col md:flex-row items-center">
          <img 
            src="/images/Drake.png"
            alt="Jefe Dragón"
            className="rounded-xl shadow-lg w-72 mb-6 md:mb-0 md:mr-8"
          />
          <div className="max-w-xl text-center md:text-left">
            <h4 className="text-2xl font-bold mb-4">Dragon</h4>
            <p>
              The bosses that appear will have more health and deal more damage, 
              so be careful. Bosses will appear every certain number of rounds, 
              so make sure to equip yourself as best as you can before the battle.
              They will deal higher damage, so manage your resources wisely.
            </p>
          </div>
        </div>
      </section>

      {/* Escenario */}
      <section id="escenario" className="py-20 px-6 bg-gray-900 text-white">
        <h3 className="text-3xl font-bold mb-12 text-center">Scenario</h3>

        <div className="flex flex-col md:flex-row items-center">
          <img
            src="/images/Playground.png"
            alt="Playground"
            className="rounded-2xl shadow-lg w-full md:w-2/3 mb-6 md:mb-0 md:mr-8"
          />
          <div className="max-w-xl text-center md:text-left">
            <h4 className="text-2xl font-bold mb-4">Fortress</h4>
            <p>
              This fortress is your line of defense. Protect the heart of the 
              kingdom as hordes of orcs approach in increasingly intense waves.
              Every wall, tower, and corridor will be key to withstanding the 
              enemy assaults, who will not stop attacking until they manage to defeat you.
            </p>
          </div>
        </div>
      </section>

      {/* Sobre el Juego */}
      <section id="about" className="py-20 px-6 bg-gray-800 text-center flex flex-col items-center">
        <h3 className="text-3xl font-bold mb-6">About the game</h3>
        <p className="max-w-2xl text-lg leading-relaxed">
          Dark Dungeon is a Web3 game built with Unity and 
          powered by Vara Network. Explore, battle, and 
          strategize in an immersive world where every 
          choice shapes your adventure.
        </p>
      </section>

      {/* Descarga */}
      <section id="download" className="py-20 px-6 bg-gray-800 text-center">
        <h3 className="text-3xl font-bold mb-4">Play the game</h3>
        <p className="mb-6">Integrated with Vara Network</p>
        <a 
          href="https://preeminent-ganache-c3f13b.netlify.app/"
          className="bg-yellow-500 text-black px-6 py-3 rounded-xl font-semibold hover:bg-yellow-400 transition"
        >
          Play Dark Dungeon
        </a>
      </section>

      {/* Social Media */}
      <section className="py-12 px-6 bg-gray-900 text-center">
        <h3 className="text-2xl font-bold mb-6">Follow Us</h3>
        <div className="flex justify-center">
          <a
            href="https://x.com/PlayDarkDungeon"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition"
          >
            <img
              src="/images/x.png"
              alt="X"
              className="w-12 h-12 mx-auto"
            />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="p-6 bg-black text-center text-gray-400">
        <p>© 2025 Dark Dungeon | Developed by Rodrigo Hernandez</p>
      </footer>
    </div>
  );
}