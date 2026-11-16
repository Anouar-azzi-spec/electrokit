"use client";

import { useState } from "react";
import Link from "next/link";

export default function PCBTracePage() {
  const [current, setCurrent] = useState("");

  function traceWidth(current: number) {
    if (current <= 1) return "0.3 mm";
    if (current <= 2) return "0.6 mm";
    if (current <= 3) return "1.0 mm";
    if (current <= 5) return "2.0 mm";
    if (current <= 10) return "4.0 mm";

    return "Use wider traces or multiple copper paths";
  }

  return (
    <main className="min-h-screen bg-slate-100 flex items-center justify-center p-6">
      <div className="bg-white p-8 rounded-xl shadow w-full max-w-md">

        <h1 className="text-3xl font-bold mb-6">
          PCB Trace Width Calculator 🔌
        </h1>

        <Link
          href="/electronics"
          className="text-blue-600 hover:underline mb-4 block"
        >
          ← Back to Electronics Toolkit
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

        <div className="space-y-2 text-lg">

          <p>
            <strong>Copper Thickness:</strong> 1 oz
          </p>

          <p>
            <strong>Recommended Trace Width:</strong>{" "}
            {traceWidth(Number(current || 0))}
          </p>

        </div>

      </div>
    </main>
  );
}