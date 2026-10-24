"use client";

import { useState } from "react";
import Link from "next/link";

export default function CurrentPage() {
  const [power, setPower] = useState("");
  const [voltage, setVoltage] = useState("");

  const current =
    Number(voltage || 0) === 0
      ? 0
      : Number(power || 0) / Number(voltage || 0);

  return (
    <main className="min-h-screen bg-slate-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow w-96">
        <h1 className="text-3xl font-bold mb-6">
          Current Calculator ⚡
        </h1>
        
        <Link
         href="/"
         className="text-blue-600 hover:underline mb-4 block"
        >
         ← Back to Home
        </Link>

        <label className="block mb-2">
          Power (W)
        </label>

        <input
          type="number"
          value={power}
          onChange={(e) => setPower(e.target.value)}
          className="w-full border p-2 rounded mb-4"
        />

        <label className="block mb-2">
          Voltage (V)
        </label>

        <input
          type="number"
          value={voltage}
          onChange={(e) => setVoltage(e.target.value)}
          className="w-full border p-2 rounded mb-6"
        />

        <div className="text-xl font-bold">
          Current = {current.toFixed(2)} A
        </div>
      </div>
    </main>
  );
}