"use client";

import { useState } from "react";
import Link from "next/link";

export default function BatteryRuntimePage() {
  const [voltage, setVoltage] = useState("");
  const [capacity, setCapacity] = useState("");
  const [loadPower, setLoadPower] = useState("");

  const energy =
    Number(voltage || 0) *
    Number(capacity || 0);

  const runtime =
    energy /
    (Number(loadPower || 0) || 1);

  return (
    <main className="min-h-screen bg-slate-100 flex items-center justify-center p-6">
      <div className="bg-white p-8 rounded-xl shadow w-full max-w-md">

        <h1 className="text-3xl font-bold mb-6">
          Battery Runtime Calculator 🔋
        </h1>

        <Link
          href="/electronics"
          className="text-blue-600 hover:underline mb-4 block"
        >
          ← Back to Electronics Toolkit
        </Link>

        <label className="block mb-2">
          Battery Voltage (V)
        </label>

        <input
          type="number"
          value={voltage}
          onChange={(e) => setVoltage(e.target.value)}
          className="w-full border p-2 rounded mb-4"
        />

        <label className="block mb-2">
          Battery Capacity (Ah)
        </label>

        <input
          type="number"
          value={capacity}
          onChange={(e) => setCapacity(e.target.value)}
          className="w-full border p-2 rounded mb-4"
        />

        <label className="block mb-2">
          Load Power (W)
        </label>

        <input
          type="number"
          value={loadPower}
          onChange={(e) => setLoadPower(e.target.value)}
          className="w-full border p-2 rounded mb-6"
        />

        <div className="space-y-2 text-lg">

          <p>
            <strong>Battery Energy:</strong>{" "}
            {energy.toFixed(0)} Wh
          </p>

          <p>
            <strong>Estimated Runtime:</strong>{" "}
            {runtime.toFixed(2)} Hours
          </p>

        </div>

      </div>
    </main>
  );
}