"use client";

import { useState } from "react";
import Link from "next/link";

export default function TensionPage() {
  const [longueur, setLongueur] = useState("");
  const [courant, setCourant] = useState("");
  const [section, setSection] = useState("");

  const rho = 0.0175;

  const chute =
    (2 *
      rho *
      Number(longueur || 0) *
      Number(courant || 0)) /
    Number(section || 1);

  return (
    <main className="min-h-screen bg-slate-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6">
          Chute de Tension ⚡
        </h1>

        <Link
          href="/fr"
          className="text-blue-600 hover:underline mb-4 block"
        >
          ← Retour à l'accueil
        </Link>

        <label className="block mb-2">
          Longueur (m)
        </label>

        <input
          type="number"
          value={longueur}
          onChange={(e) => setLongueur(e.target.value)}
          className="w-full border p-2 rounded mb-4"
        />

        <label className="block mb-2">
          Courant (A)
        </label>

        <input
          type="number"
          value={courant}
          onChange={(e) => setCourant(e.target.value)}
          className="w-full border p-2 rounded mb-4"
        />

        <label className="block mb-2">
          Section du câble (mm²)
        </label>

        <input
          type="number"
          value={section}
          onChange={(e) => setSection(e.target.value)}
          className="w-full border p-2 rounded mb-6"
        />

        <div className="text-xl font-bold">
          Chute de Tension : {chute.toFixed(2)} V
        </div>
      </div>
    </main>
  );
}