"use client";

import { useState } from "react";
import Link from "next/link";

export default function TerrePage() {
  const [sectionPhase, setSectionPhase] = useState("");

  function sectionTerre(phase: number) {
    if (phase <= 16) return `${phase} mm²`;
    if (phase <= 35) return "16 mm²";

    return `${phase / 2} mm²`;
  }

  return (
    <main className="min-h-screen bg-slate-100 flex items-center justify-center p-6">
      <div className="bg-white p-8 rounded-xl shadow w-full max-w-md">

        <h1 className="text-3xl font-bold mb-6">
          Calculateur de Mise à la Terre 🌍
        </h1>

        <Link href="/fr" className="text-blue-600 hover:underline mb-4 block">
          ← Retour à l'accueil
        </Link>

        <label className="block mb-2">
          Section du conducteur de phase (mm²)
        </label>

        <input
          type="number"
          value={sectionPhase}
          onChange={(e) => setSectionPhase(e.target.value)}
          className="w-full border p-2 rounded mb-6"
        />

        <div className="text-xl font-bold">
          Conducteur de terre recommandé :
          {" "}
          {sectionTerre(Number(sectionPhase || 0))}
        </div>

      </div>
    </main>
  );
}