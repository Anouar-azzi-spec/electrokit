"use client";

import { useState } from "react";
import Link from "next/link";

export default function CapacitorCodePage() {
  const [code, setCode] = useState("");

  function decodeCapacitor(value: string) {
    if (value.length !== 3 || isNaN(Number(value))) {
      return "Invalid Code";
    }

    const firstDigits = Number(value.substring(0, 2));
    const multiplier = Number(value.substring(2));

    const capacitancePf =
      firstDigits * Math.pow(10, multiplier);

    if (capacitancePf >= 1000000) {
      return `${(capacitancePf / 1000000).toFixed(2)} µF`;
    }

    if (capacitancePf >= 1000) {
      return `${(capacitancePf / 1000).toFixed(2)} nF`;
    }

    return `${capacitancePf} pF`;
  }

  return (
    <main className="min-h-screen bg-slate-100 flex items-center justify-center p-6">
      <div className="bg-white p-8 rounded-xl shadow w-full max-w-md">

        <h1 className="text-3xl font-bold mb-6">
          Capacitor Code Decoder 🔋
        </h1>

        <Link
          href="/electronics"
          className="text-blue-600 hover:underline mb-4 block"
        >
          ← Back to Electronics Toolkit
        </Link>

        <label className="block mb-2">
          Capacitor Code
        </label>

        <input
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Example: 104"
          className="w-full border p-2 rounded mb-6"
        />

        <div className="text-xl font-bold">
          Capacitance: {decodeCapacitor(code)}
        </div>

      </div>
    </main>
  );
}