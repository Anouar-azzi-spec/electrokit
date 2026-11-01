"use client";

import { useState } from "react";
import Link from "next/link";

export default function CourantPage() {
  const [puissance, setPuissance] = useState("");
  const [tension, setTension] = useState("");

  const courant =
    Number(puissance || 0) / Number(tension || 1);

  return (
    <main className="min-h-screen bg-slate-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6">
          Calculateur de Courant ⚡
        </h1>

        <Link
          href="/fr"
          className="text-blue-600 hover:underline mb-4 block"
        >
          ← Retour à l'accueil
        </Link>

        <label className="block mb-2">
          Puissance (W)
        </label>

        <input
          type="number"
          value={puissance}
          onChange={(e) => setPuissance(e.target.value)}
          className="w-full border p-2 rounded mb-4"
        />

        <label className="block mb-2">
          Tension (V)
        </label>

        <input
          type="number"
          value={tension}
          onChange={(e) => setTension(e.target.value)}
          className="w-full border p-2 rounded mb-6"
        />

        <div className="text-xl font-bold">
          Courant : {courant.toFixed(2)} A
        </div>
      </div>
    </main>
  );
}