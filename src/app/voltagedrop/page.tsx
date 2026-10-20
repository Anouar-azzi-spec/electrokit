"use client";

import { useState } from "react";

export default function VoltageDropPage() {
  const [current, setCurrent] = useState("");
  const [length, setLength] = useState("");
  const [section, setSection] = useState("");

  const voltageDrop =
    Number(section || 0) === 0
      ? 0
      : (2 * 0.0175 * Number(length || 0) * Number(current || 0)) /
        Number(section || 0);

  return (
    <main className="min-h-screen bg-slate-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow w-96">
        <h1 className="text-3xl font-bold mb-6">
          Voltage Drop Calculator ⚡
        </h1>

        <label className="block mb-2">
          Current (A)
        </label>

        <input
          type="number"
          value={current}
          onChange={(e) => setCurrent(e.target.value)}
          className="w-full border p-2 rounded mb-4"
        />

        <label className="block mb-2">
          Length (m)
        </label>

        <input
          type="number"
          value={length}
          onChange={(e) => setLength(e.target.value)}
          className="w-full border p-2 rounded mb-4"
        />

        <label className="block mb-2">
          Cable Section (mm²)
        </label>

        <input
          type="number"
          value={section}
          onChange={(e) => setSection(e.target.value)}
          className="w-full border p-2 rounded mb-6"
        />

        <div className="text-xl font-bold">
          Voltage Drop = {voltageDrop.toFixed(2)} V
        </div>
      </div>
    </main>
  );
}