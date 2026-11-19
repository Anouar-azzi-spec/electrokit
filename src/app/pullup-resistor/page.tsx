"use client";

import { useState } from "react";
import Link from "next/link";

export default function PullUpResistorPage() {
  const [voltage, setVoltage] = useState("");
  const [current, setCurrent] = useState("");

  const resistance =
    Number(voltage || 0) /
    ((Number(current || 0) || 1) / 1000);

  function nearestStandard(value: number) {
    if (value <= 1000) return "1 kΩ";
    if (value <= 2200) return "2.2 kΩ";
    if (value <= 4700) return "4.7 kΩ";
    if (value <= 10000) return "10 kΩ";
    if (value <= 22000) return "22 kΩ";
    if (value <= 47000) return "47 kΩ";

    return "100 kΩ";
  }

  return (
    <main className="min-h-screen bg-slate-100 flex items-center justify-center p-6">
      <div className="bg-white p-8 rounded-xl shadow w-full max-w-md">

        <h1 className="text-3xl font-bold mb-6">
          Pull-Up Resistor Calculator 🔌
        </h1>

        <Link
          href="/electronics"
          className="text-blue-600 hover:underline mb-4 block"
        >
          ← Back to Electronics Toolkit
        </Link>

        <label className="block mb-2">
          Supply Voltage (V)
        </label>

        <input
          type="number"
          value={voltage}
          onChange={(e) => setVoltage(e.target.value)}
          className="w-full border p-2 rounded mb-4"
        />

        <label className="block mb-2">
          Sink Current (mA)
        </label>

        <input
          type="number"
          value={current}
          onChange={(e) => setCurrent(e.target.value)}
          className="w-full border p-2 rounded mb-6"
        />

        <div className="space-y-2 text-lg">

          <p>
            <strong>Calculated Resistance:</strong>{" "}
            {resistance.toFixed(0)} Ω
          </p>

          <p>
            <strong>Suggested Standard Value:</strong>{" "}
            {nearestStandard(resistance)}
          </p>

        </div>

      </div>
    </main>
  );
}