"use client";

import { useState } from "react";
import Link from "next/link";

export default function ADCResolutionPage() {
  const [referenceVoltage, setReferenceVoltage] = useState("");
  const [resolution, setResolution] = useState("12");

  const levels = Math.pow(2, Number(resolution));
  const voltagePerStep =
    Number(referenceVoltage || 0) / levels;

  return (
    <main className="min-h-screen bg-slate-100 flex items-center justify-center p-6">
      <div className="bg-white p-8 rounded-xl shadow w-full max-w-md">

        <h1 className="text-3xl font-bold mb-6">
          ADC Resolution Calculator 📊
        </h1>

        <Link
          href="/electronics"
          className="text-blue-600 hover:underline mb-4 block"
        >
          ← Back to Electronics Toolkit
        </Link>

        <label className="block mb-2">
          Reference Voltage (V)
        </label>

        <input
          type="number"
          step="0.1"
          value={referenceVoltage}
          onChange={(e) => setReferenceVoltage(e.target.value)}
          className="w-full border p-2 rounded mb-4"
        />

        <label className="block mb-2">
          ADC Resolution (bits)
        </label>

        <select
          value={resolution}
          onChange={(e) => setResolution(e.target.value)}
          className="w-full border p-2 rounded mb-6"
        >
          <option value="8">8-bit</option>
          <option value="10">10-bit</option>
          <option value="12">12-bit</option>
          <option value="16">16-bit</option>
        </select>

        <div className="space-y-2 text-lg">

          <p>
            <strong>ADC Levels:</strong>{" "}
            {levels.toLocaleString()}
          </p>

          <p>
            <strong>Voltage Per Step:</strong>{" "}
            {voltagePerStep.toFixed(6)} V
          </p>

        </div>

      </div>
    </main>
  );
}