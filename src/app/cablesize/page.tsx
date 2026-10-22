"use client";

import { useState } from "react";

export default function CableSizePage() {
  const [current, setCurrent] = useState("");

  function getCableSize(i: number) {
    if (i <= 10) return "1.5 mm²";
    if (i <= 16) return "2.5 mm²";
    if (i <= 25) return "4 mm²";
    if (i <= 32) return "6 mm²";
    if (i <= 40) return "10 mm²";

    return "Above 10 mm²";
  }

  return (
    <main className="min-h-screen bg-slate-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow w-96">
        <h1 className="text-3xl font-bold mb-6">
          Cable Size Calculator ⚡
        </h1>

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
          Recommended Cable:{" "}
          {getCableSize(Number(current || 0))}
        </div>
      </div>
    </main>
  );
}
