"use client";

import { useState } from "react";
import Link from "next/link";

export default function UARTBaudPage() {
  const [clockFrequency, setClockFrequency] = useState("");
  const [baudRate, setBaudRate] = useState("");

  const divider =
    Number(clockFrequency || 0) /
    (16 * (Number(baudRate || 1)));

  const actualBaud =
    Number(clockFrequency || 0) /
    (16 * (Math.round(divider) || 1));

  return (
    <main className="min-h-screen bg-slate-100 flex items-center justify-center p-6">
      <div className="bg-white p-8 rounded-xl shadow w-full max-w-md">

        <h1 className="text-3xl font-bold mb-6">
          UART Baud Rate Calculator 📡
        </h1>

        <Link
          href="/electronics"
          className="text-blue-600 hover:underline mb-4 block"
        >
          ← Back to Electronics Toolkit
        </Link>

        <label className="block mb-2">
          Clock Frequency (Hz)
        </label>

        <input
          type="number"
          value={clockFrequency}
          onChange={(e) => setClockFrequency(e.target.value)}
          className="w-full border p-2 rounded mb-4"
        />

        <label className="block mb-2">
          Desired Baud Rate
        </label>

        <input
          type="number"
          value={baudRate}
          onChange={(e) => setBaudRate(e.target.value)}
          className="w-full border p-2 rounded mb-6"
        />

        <div className="space-y-2 text-lg">

          <p>
            <strong>UART Divider:</strong>{" "}
            {divider.toFixed(2)}
          </p>

          <p>
            <strong>Nearest Divider:</strong>{" "}
            {Math.round(divider)}
          </p>

          <p>
            <strong>Actual Baud Rate:</strong>{" "}
            {actualBaud.toFixed(0)}
          </p>

        </div>

      </div>
    </main>
  );
}