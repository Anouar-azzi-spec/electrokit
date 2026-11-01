"use client";

import { useState } from "react";
import Link from "next/link";

export default function CablePage() {
  const [courant, setCourant] = useState("");

  function getCableSize(i: number) {
    if (i <= 10) return "1.5 mm²";
    if (i <= 16) return "2.5 mm²";
    if (i <= 25) return "4 mm²";
    if (i <= 32) return "6 mm²";
    if (i <= 40) return "10 mm²";

    return "Supérieur à 10 mm²";
  }

  return (
    <main className="min-h-screen bg-slate-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6">
          Calculateur de Section de Câble ⚡
        </h1>

        <Link
          href="/fr"
          className="text-blue-600 hover:underline mb-4 block"
        >
          ← Retour à l'accueil
        </Link>

        <label className="block mb-2">
          Courant (A)
        </label>

        <input
          type="number"
          value={courant}
          onChange={(e) => setCourant(e.target.value)}
          className="w-full border p-2 rounded mb-6"
        />

        <div className="text-xl font-bold">
          Câble recommandé :{" "}
          {getCableSize(Number(courant || 0))}
        </div>
      </div>
    </main>
  );
}