"use client";

import { useState } from "react";
import Link from "next/link";

export default function InverterCalculatorPage() {
  const [load, setLoad] = useState("");

  const inverterSize =
    Number(load || 0) * 1.25;

  return (
    <main className="min-h-screen bg-slate-100 flex items-center justify-center p-6">
      <div className="bg-white p-8 rounded-xl shadow w-full max-w-md">

        <h1 className="text-3xl font-bold mb-6">
          Inverter Calculator ⚡
        </h1>

        <Link
          href="/"
          className="text-blue-600 hover:underline mb-4 block"
        >
          ← Back to Home
        </Link>

        <label className="block mb-2">
          Total Load (W)
        </label>

        <input
          type="number"
          value={load}
          onChange={(e) => setLoad(e.target.value)}
          className="w-full border p-2 rounded mb-6"
        />

        <div className="space-y-2 text-lg">

          <p>
            <strong>Total Load:</strong>{" "}
            {Number(load || 0).toFixed(0)} W
          </p>

          <p>
            <strong>Recommended Inverter:</strong>{" "}
            {inverterSize.toFixed(0)} W
          </p>

        </div>

      </div>
    </main>
  );
}