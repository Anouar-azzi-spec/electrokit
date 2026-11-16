"use client";

import { useState } from "react";
import Link from "next/link";

const digitValues: Record<string, number> = {
  Black: 0,
  Brown: 1,
  Red: 2,
  Orange: 3,
  Yellow: 4,
  Green: 5,
  Blue: 6,
  Violet: 7,
  Grey: 8,
  White: 9,
};

const multipliers: Record<string, number> = {
  Black: 1,
  Brown: 10,
  Red: 100,
  Orange: 1000,
  Yellow: 10000,
  Green: 100000,
  Blue: 1000000,
  Violet: 10000000,
  Grey: 100000000,
  White: 1000000000,
};

const tolerances: Record<string, string> = {
  Gold: "±5%",
  Silver: "±10%",
  Brown: "±1%",
  Red: "±2%",
};

export default function ResistorCodePage() {
  const [band1, setBand1] = useState("Brown");
  const [band2, setBand2] = useState("Black");
  const [band3, setBand3] = useState("Red");
  const [band4, setBand4] = useState("Gold");

  const resistance =
    (digitValues[band1] * 10 + digitValues[band2]) *
    multipliers[band3];

  return (
    <main className="min-h-screen bg-slate-100 flex items-center justify-center p-6">
      <div className="bg-white p-8 rounded-xl shadow w-full max-w-lg">

        <h1 className="text-3xl font-bold mb-6">
          Resistor Color Code Decoder 🎨
        </h1>

        <Link
          href="/electronics"
          className="text-blue-600 hover:underline mb-4 block"
        >
          ← Back to Electronics Toolkit
        </Link>

        <div className="space-y-4">

          <div>
            <label className="block mb-2">
              Band 1
            </label>

            <select
              value={band1}
              onChange={(e) => setBand1(e.target.value)}
              className="w-full border p-2 rounded"
            >
              {Object.keys(digitValues).map((color) => (
                <option key={color}>{color}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block mb-2">
              Band 2
            </label>

            <select
              value={band2}
              onChange={(e) => setBand2(e.target.value)}
              className="w-full border p-2 rounded"
            >
              {Object.keys(digitValues).map((color) => (
                <option key={color}>{color}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block mb-2">
              Multiplier Band
            </label>

            <select
              value={band3}
              onChange={(e) => setBand3(e.target.value)}
              className="w-full border p-2 rounded"
            >
              {Object.keys(multipliers).map((color) => (
                <option key={color}>{color}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block mb-2">
              Tolerance Band
            </label>

            <select
              value={band4}
              onChange={(e) => setBand4(e.target.value)}
              className="w-full border p-2 rounded"
            >
              {Object.keys(tolerances).map((color) => (
                <option key={color}>{color}</option>
              ))}
            </select>
          </div>

        </div>

        <div className="mt-6 space-y-2 text-lg">

          <p>
            <strong>Resistance:</strong>{" "}
            {resistance.toLocaleString()} Ω
          </p>

          <p>
            <strong>Tolerance:</strong>{" "}
            {tolerances[band4]}
          </p>

        </div>

      </div>
    </main>
  );
}