"use client";

import { useState } from "react";
import Link from "next/link";

export default function PowerPage() {
  const [voltage, setVoltage] = useState("");
  const [current, setCurrent] = useState("");

  const power =
    Number(voltage || 0) * Number(current || 0);

  return (
    <main className="min-h-screen bg-slate-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6">
          Power Calculator ⚡
        </h1>
        <Link
         href="/"
         className="text-blue-600 hover:underline mb-4 block"
        >
         ← Back to Home
        </Link>

        <label className="block mb-2">
          Voltage (V)
        </label>

        <input
          type="number"
          value={voltage}
          onChange={(e) => setVoltage(e.target.value)}
          className="w-full border p-2 rounded mb-4"
        />

        <label className="block mb-2">
          Current (A)
        </label>

        <input
          type="number"
          value={current}
          onChange={(e) => setCurrent(e.target.value)}
          className="w-full border p-2 rounded mb-6"
        />

        <div className="text-xl font-bold">
          Power = {power} W
        </div>
      </div>
    </main>
  );
}