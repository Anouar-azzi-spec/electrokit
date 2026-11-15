"use client";

import { useState } from "react";
import Link from "next/link";

export default function VoltageDividerPage() {
  const [vin, setVin] = useState("");
  const [r1, setR1] = useState("");
  const [r2, setR2] = useState("");

  const vout =
    Number(vin || 0) *
    (Number(r2 || 0) /
      (Number(r1 || 0) + Number(r2 || 0) || 1));

  return (
    <main className="min-h-screen bg-slate-100 flex items-center justify-center p-6">
      <div className="bg-white p-8 rounded-xl shadow w-full max-w-md">

        <h1 className="text-3xl font-bold mb-6">
          Voltage Divider Calculator 🔌
        </h1>

        <Link
          href="/electronics"
          className="text-blue-600 hover:underline mb-4 block"
        >
          ← Back to Electronics Toolkit
        </Link>

        <label className="block mb-2">
          Input Voltage (Vin)
        </label>

        <input
          type="number"
          value={vin}
          onChange={(e) => setVin(e.target.value)}
          className="w-full border p-2 rounded mb-4"
        />

        <label className="block mb-2">
          Resistor R1 (Ω)
        </label>

        <input
          type="number"
          value={r1}
          onChange={(e) => setR1(e.target.value)}
          className="w-full border p-2 rounded mb-4"
        />

        <label className="block mb-2">
          Resistor R2 (Ω)
        </label>

        <input
          type="number"
          value={r2}
          onChange={(e) => setR2(e.target.value)}
          className="w-full border p-2 rounded mb-6"
        />

        <div className="text-xl font-bold">
          Output Voltage (Vout): {vout.toFixed(2)} V
        </div>

      </div>
    </main>
  );
}