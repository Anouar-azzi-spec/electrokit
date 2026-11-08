"use client";

import { useState } from "react";
import Link from "next/link";

export default function EarthingCalculatorPage() {
  const [phaseSize, setPhaseSize] = useState("");

  function getEarthingSize(phase: number) {
    if (phase <= 16) return `${phase} mm²`;
    if (phase <= 35) return "16 mm²";

    return `${phase / 2} mm²`;
  }

  return (
    <main className="min-h-screen bg-slate-100 flex items-center justify-center p-6">
      <div className="bg-white p-8 rounded-xl shadow w-full max-w-md">

        <h1 className="text-3xl font-bold mb-6">
          Earthing Conductor Calculator 🌍
        </h1>

        <Link
          href="/"
          className="text-blue-600 hover:underline mb-4 block"
        >
          ← Back to Home
        </Link>

        <label className="block mb-2">
          Phase Conductor Size (mm²)
        </label>

        <input
          type="number"
          value={phaseSize}
          onChange={(e) => setPhaseSize(e.target.value)}
          className="w-full border p-2 rounded mb-6"
        />

        <div className="text-xl font-bold">
          Recommended Earthing Conductor:{" "}
          {getEarthingSize(Number(phaseSize || 0))}
        </div>

      </div>
    </main>
  );
}