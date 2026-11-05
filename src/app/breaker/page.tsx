"use client";

import { useState } from "react";
import Link from "next/link";

export default function BreakerPage() {
  const [current, setCurrent] = useState("");

  function breakerSize(current: number) {
    if (current <= 10) return "10 A";
    if (current <= 16) return "16 A";
    if (current <= 20) return "20 A";
    if (current <= 32) return "32 A";
    if (current <= 40) return "40 A";
    return "63 A";
  }

  return (
    <main className="min-h-screen bg-slate-100 flex items-center justify-center p-6">
      <div className="bg-white p-8 rounded-xl shadow w-full max-w-md">

        <h1 className="text-3xl font-bold mb-6">
          Circuit Breaker Selector ⚡
        </h1>

        <Link
          href="/"
          className="text-blue-600 hover:underline mb-4 block"
        >
          ← Back to Home
        </Link>

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
          Recommended Breaker:{" "}
          {breakerSize(Number(current || 0))}
        </div>

      </div>
    </main>
  );
}