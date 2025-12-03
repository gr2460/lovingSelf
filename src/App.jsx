import { useState } from "react";
import "./App.css";

function App() {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const [name, setName] = useState("");
  const [wish, setWish] = useState("");

  const color = `rgb(${red}, ${green}, ${blue})`;

  const handleBtn = () => {
    setWish(
      `💖 May ${name} always find strength, joy, and peace in the beautiful love they hold for themselves.`
    );
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-pink-200 via-purple-200 to-indigo-200 p-6">
      {/* Header */}
      <div className="flex items-center gap-2 text-3xl font-extrabold text-pink-700 mb-6">
        <h1>Do you</h1>
        <i className="fa-regular fa-heart text-red-500"></i>
        <h1>yourself?</h1>
      </div>

      {/* Color Box */}
      <h2 className="text-lg font-semibold mb-2 text-gray-700">
        🎨 Change the color you like
      </h2>
      <br />
      <div
        className="relative w-24 h-20 rotate-[-45deg] mb-6 transition-all duration-300"
        style={{ backgroundColor: color }}
      >
        {/* Left lobe */}
        <div
          className="absolute top-[-2.5rem] left-0 w-24 h-20 rounded-full"
          style={{ backgroundColor: color }}
        ></div>
        {/* Right lobe */}
        <div
          className="absolute top-0 left-6 w-24 h-20 rounded-full"
          style={{ backgroundColor: color }}
        ></div>
      </div>

      {/* Sliders */}
      <div className="space-y-4 w-64">
        <div>
          <label className="block text-sm font-medium text-red-600">Red</label>
          <input
            type="range"
            min={0}
            max={255}
            value={red}
            onChange={(e) => setRed(e.target.value)}
            className="w-full accent-red-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-green-600">Green</label>
          <input
            type="range"
            min={0}
            max={255}
            value={green}
            onChange={(e) => setGreen(e.target.value)}
            className="w-full accent-green-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-blue-600">Blue</label>
          <input
            type="range"
            min={0}
            max={255}
            value={blue}
            onChange={(e) => setBlue(e.target.value)}
            className="w-full accent-blue-500"
          />
        </div>
      </div>

      {/* Name + Wish */}
      <div className="mt-8 text-center">
        <input
          type="text"
          placeholder="✨ Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-400 outline-none"
        />
        <h2 className="mt-4 text-gray-700 font-medium">
          Enter your name and click the magical button
        </h2>
        <button
          onClick={handleBtn}
          className="mt-4 px-6 py-2 bg-pink-500 text-white rounded-full shadow-lg hover:bg-pink-600 transition flex items-center gap-2"
        >
          Click Me <i className="fa fa-heart text-red-300"></i>
        </button>

        {wish && (
          <h1 className="mt-6 text-xl font-semibold text-purple-700 animate-pulse">
            {wish}
          </h1>
        )}
      </div>
    </div>
  );
}

export default App;
