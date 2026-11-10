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
          Calculateur de Batteries 🔋
        </h1>

        <Link
          href="/fr"
          className="text-blue-600 hover:underline mb-4 block"
        >
          ← Retour à l'accueil
        </Link>

        <label className="block mb-2">
          Consommation Quotidienne (kWh/jour)
        </label>

        <input
          type="number"
          value={dailyConsumption}
          onChange={(e) => setDailyConsumption(e.target.value)}
          className="w-full border p-2 rounded mb-4"
        />

        <label className="block mb-2">
          Jours d'Autonomie
        </label>

        <input
          type="number"
          value={autonomyDays}
          onChange={(e) => setAutonomyDays(e.target.value)}
          className="w-full border p-2 rounded mb-4"
        />

        <label className="block mb-2">
          Tension de la Batterie (V)
        </label>

        <input
          type="number"
          value={batteryVoltage}
          onChange={(e) => setBatteryVoltage(e.target.value)}
          className="w-full border p-2 rounded mb-6"
        />

        <div className="text-xl font-bold">
          Capacité de Batterie Requise:{" "}
          {batteryCapacity.toFixed(0)} Ah
        </div>

      </div>
    </main>
  );
}