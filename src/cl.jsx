import React, { useState } from "react";

export default function ColorMixer() {
  const [color1, setColor1] = useState("#ff0000"); // red
  const [color2, setColor2] = useState("#0000ff"); // blue

  // Function to mix two hex colors
  const mixColors = (c1, c2) => {
    const hexToRgb = (hex) => {
      hex = hex.replace("#", "");
      return {
        r: parseInt(hex.substring(0, 2), 16),
        g: parseInt(hex.substring(2, 4), 16),
        b: parseInt(hex.substring(4, 6), 16),
      };
    };

    const rgbToHex = (r, g, b) =>
      "#" +
      [r, g, b]
        .map((x) => {
          const hex = x.toString(16);
          return hex.length === 1 ? "0" + hex : hex;
        })
        .join("");

    const rgb1 = hexToRgb(c1);
    const rgb2 = hexToRgb(c2);

    const mixed = {
      r: Math.floor((rgb1.r + rgb2.r) / 2),
      g: Math.floor((rgb1.g + rgb2.g) / 2),
      b: Math.floor((rgb1.b + rgb2.b) / 2),
    };

    return rgbToHex(mixed.r, mixed.g, mixed.b);
  };

  const mixedColor = mixColors(color1, color2);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-6">🎨 Tailwind Color Mixer</h1>

      <div className="flex gap-6 mb-6">
        <div className="flex flex-col items-center">
          <input
            type="color"
            value={color1}
            onChange={(e) => setColor1(e.target.value)}
            className="w-20 h-20 cursor-pointer border-2 border-gray-300 rounded"
          />
          <span className="mt-2 text-sm">{color1}</span>
        </div>

        <div className="flex flex-col items-center">
          <input
            type="color"
            value={color2}
            onChange={(e) => setColor2(e.target.value)}
            className="w-20 h-20 cursor-pointer border-2 border-gray-300 rounded"
          />
          <span className="mt-2 text-sm">{color2}</span>
        </div>
      </div>

      <div
        className="w-40 h-40 rounded-lg shadow-lg border-4 border-gray-300"
        style={{ backgroundColor: mixedColor }}
      ></div>

      <p className="mt-4 font-semibold text-lg">Mixed Color: {mixedColor}</p>
    </div>
  );
}
