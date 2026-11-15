"use client";

import { useState } from "react";
import Link from "next/link";

export default function LedResistorPage() {
  const [supplyVoltage, setSupplyVoltage] = useState("");
  const [ledVoltage, setLedVoltage] = useState("");
  const [ledCurrent, setLedCurrent] = useState("");

  const resistor =
    ((Number(supplyVoltage || 0) -
      Number(ledVoltage || 0)) /
      (Number(ledCurrent || 0) / 1000));

  const power =
    Math.pow(
      Number(supplyVoltage || 0) -
        Number(ledVoltage || 0),
      2
    ) / (resistor || 1);

  return (
    <main className="min-h-screen bg-slate-100 flex items-center justify-center p-6">
      <div className="bg-white p-8 rounded-xl shadow w-full max-w-md">

        <h1 className="text-3xl font-bold mb-6">
          LED Resistor Calculator 💡
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
          value={supplyVoltage}
          onChange={(e) => setSupplyVoltage(e.target.value)}
          className="w-full border p-2 rounded mb-4"
        />

        <label className="block mb-2">
          LED Forward Voltage (V)
        </label>

        <input
          type="number"
          value={ledVoltage}
          onChange={(e) => setLedVoltage(e.target.value)}
          className="w-full border p-2 rounded mb-4"
        />

        <label className="block mb-2">
          LED Current (mA)
        </label>

        <input
          type="number"
          value={ledCurrent}
          onChange={(e) => setLedCurrent(e.target.value)}
          className="w-full border p-2 rounded mb-6"
        />

        <div className="space-y-2 text-lg">

          <p>
            <strong>Required Resistor:</strong>{" "}
            {isFinite(resistor)
              ? resistor.toFixed(0)
              : 0} Ω
          </p>

          <p>
            <strong>Power Dissipation:</strong>{" "}
            {isFinite(power)
              ? power.toFixed(2)
              : 0} W
          </p>

        </div>

      </div>
    </main>
  );
}