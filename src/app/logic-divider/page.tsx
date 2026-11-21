"use client";

import { useState } from "react";
import Link from "next/link";

export default function LogicDividerPage() {
  const [inputVoltage, setInputVoltage] = useState("");
  const [targetVoltage, setTargetVoltage] = useState("");
  const [r1, setR1] = useState("1000");

  const r1Value = Number(r1 || 0);
  const vin = Number(inputVoltage || 0);
  const vout = Number(targetVoltage || 0);

  const r2 =
    vin > vout && vout > 0
      ? (vout * r1Value) / (vin - vout)
      : 0;

  const calculatedVoltage =
    vin * (r2 / (r1Value + r2 || 1));

  return (
    <main className="min-h-screen bg-slate-100 flex items-center justify-center p-6">
      <div className="bg-white p-8 rounded-xl shadow w-full max-w-md">

        <h1 className="text-3xl font-bold mb-6">
          Logic Level Divider Calculator 🔌
        </h1>

        <Link
          href="/electronics"
          className="text-blue-600 hover:underline mb-4 block"
        >
          ← Back to Electronics Toolkit
        </Link>

        <label className="block mb-2">
          Input Voltage (V)
        </label>

        <input
          type="number"
          value={inputVoltage}
          onChange={(e) => setInputVoltage(e.target.value)}
          className="w-full border p-2 rounded mb-4"
        />

        <label className="block mb-2">
          Target Voltage (V)
        </label>

        <input
          type="number"
          value={targetVoltage}
          onChange={(e) => setTargetVoltage(e.target.value)}
          className="w-full border p-2 rounded mb-4"
        />

        <label className="block mb-2">
          R1 (Ω)
        </label>

        <input
          type="number"
          value={r1}
          onChange={(e) => setR1(e.target.value)}
          className="w-full border p-2 rounded mb-6"
        />

        <div className="space-y-2 text-lg">

          <p>
            <strong>Required R2:</strong>{" "}
            {r2.toFixed(0)} Ω
          </p>

          <p>
            <strong>Output Voltage:</strong>{" "}
            {calculatedVoltage.toFixed(2)} V
          </p>

        </div>

      </div>
    </main>
  );
}