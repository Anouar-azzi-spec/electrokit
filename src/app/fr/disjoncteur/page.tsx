"use client";

import { useState } from "react";
import Link from "next/link";

export default function DisjoncteurPage() {
  const [courant, setCourant] = useState("");

  function calibreDisjoncteur(courant: number) {
    if (courant <= 10) return "10 A";
    if (courant <= 16) return "16 A";
    if (courant <= 20) return "20 A";
    if (courant <= 32) return "32 A";
    if (courant <= 40) return "40 A";
    return "63 A";
  }

  return (
    <main className="min-h-screen bg-slate-100 flex items-center justify-center p-6">
      <div className="bg-white p-8 rounded-xl shadow w-full max-w-md">

        <h1 className="text-3xl font-bold mb-6">
          Sélecteur de Disjoncteur ⚡
        </h1>

        <Link href="/fr" className="text-blue-600 hover:underline mb-4 block">
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
          Disjoncteur recommandé : {calibreDisjoncteur(Number(courant || 0))}
        </div>

      </div>
    </main>
  );
}