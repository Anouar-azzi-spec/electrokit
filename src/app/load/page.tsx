"use client";

import { useState } from "react";
import Link from "next/link";

export default function LoadCalculatorPage() {
  const [lighting, setLighting] = useState("");
  const [sockets, setSockets] = useState("");
  const [ac, setAc] = useState("");
  const [heater, setHeater] = useState("");
  const [other, setOther] = useState("");

  const totalLoad =
    Number(lighting || 0) +
    Number(sockets || 0) +
    Number(ac || 0) +
    Number(heater || 0) +
    Number(other || 0);

  const current = totalLoad / 230;

  function breakerSize(current: number) {
    if (current <= 10) return "10 A";
    if (current <= 16) return "16 A";
    if (current <= 20) return "20 A";
    if (current <= 32) return "32 A";
    if (current <= 40) return "40 A";
    return "63 A";
  }

  return (
    <main className="min-h-screen bg-slate-100 flex items-center justify-center p-6">
      <div className="bg-white p-8 rounded-xl shadow w-full max-w-md">

        <h1 className="text-3xl font-bold mb-6">
          Residential Load Calculator 🔧
        </h1>

        <Link
          href="/"
          className="text-blue-600 hover:underline mb-4 block"
        >
          ← Back to Home
        </Link>

        <label className="block mb-2">
          Lighting Load (W)
        </label>

        <input
          type="number"
          value={lighting}
          onChange={(e) => setLighting(e.target.value)}
          className="w-full border p-2 rounded mb-4"
        />

        <label className="block mb-2">
          Socket Load (W)
        </label>

        <input
          type="number"
          value={sockets}
          onChange={(e) => setSockets(e.target.value)}
          className="w-full border p-2 rounded mb-4"
        />

        <label className="block mb-2">
          Air Conditioner (W)
        </label>

        <input
          type="number"
          value={ac}
          onChange={(e) => setAc(e.target.value)}
          className="w-full border p-2 rounded mb-4"
        />

        <label className="block mb-2">
          Water Heater (W)
        </label>

        <input
          type="number"
          value={heater}
          onChange={(e) => setHeater(e.target.value)}
          className="w-full border p-2 rounded mb-4"
        />

        <label className="block mb-2">
          Other Loads (W)
        </label>

        <input
          type="number"
          value={other}
          onChange={(e) => setOther(e.target.value)}
          className="w-full border p-2 rounded mb-6"
        />

        <div className="space-y-2 text-lg">

          <p>
            <strong>Total Load:</strong>{" "}
            {totalLoad.toFixed(0)} W
          </p>

          <p>
            <strong>Estimated Current:</strong>{" "}
            {current.toFixed(2)} A
          </p>

          <p>
            <strong>Suggested Breaker:</strong>{" "}
            {breakerSize(current)}
          </p>

        </div>

      </div>
    </main>
  );
}