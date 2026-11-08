"use client";

import { useState } from "react";
import Link from "next/link";

export default function BatteryCalculatorPage() {
  const [dailyConsumption, setDailyConsumption] = useState("");
  const [autonomyDays, setAutonomyDays] = useState("");
  const [batteryVoltage, setBatteryVoltage] = useState("");

  const batteryCapacity =
    (Number(dailyConsumption || 0) *
      Number(autonomyDays || 0) *
      1000) /
    Number(batteryVoltage || 1);

  return (
    <main className="min-h-screen bg-slate-100 flex items-center justify-center p-6">
      <div className="bg-white p-8 rounded-xl shadow w-full max-w-md">

        <h1 className="text-3xl font-bold mb-6">
          Battery Bank Calculator 🔋
        </h1>

        <Link
          href="/"
          className="text-blue-600 hover:underline mb-4 block"
        >
          ← Back to Home
        </Link>

        <label className="block mb-2">
          Daily Consumption (kWh/day)
        </label>

        <input
          type="number"
          value={dailyConsumption}
          onChange={(e) => setDailyConsumption(e.target.value)}
          className="w-full border p-2 rounded mb-4"
        />

        <label className="block mb-2">
          Autonomy Days
        </label>

        <input
          type="number"
          value={autonomyDays}
          onChange={(e) => setAutonomyDays(e.target.value)}
          className="w-full border p-2 rounded mb-4"
        />

        <label className="block mb-2">
          Battery Voltage (V)
        </label>

        <input
          type="number"
          value={batteryVoltage}
          onChange={(e) => setBatteryVoltage(e.target.value)}
          className="w-full border p-2 rounded mb-6"
        />

        <div className="text-xl font-bold">
          Required Battery Capacity:{" "}
          {batteryCapacity.toFixed(0)} Ah
        </div>

      </div>
    </main>
  );
}