"use client";

import { useState } from "react";
import Link from "next/link";

export default function SolarCalculatorPage() {
  const [dailyConsumption, setDailyConsumption] = useState("");
  const [sunHours, setSunHours] = useState("");

  const requiredArray =
    Number(dailyConsumption || 0) /
    Number(sunHours || 1);

  const panelCount =
    Math.ceil(requiredArray / 0.4);

  return (
    <main className="min-h-screen bg-slate-100 flex items-center justify-center p-6">
      <div className="bg-white p-8 rounded-xl shadow w-full max-w-md">

        <h1 className="text-3xl font-bold mb-6">
          Calculateur de Panneaux Solaires ☀️
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
          Heures d'Ensoleillement
        </label>

        <input
          type="number"
          value={sunHours}
          onChange={(e) => setSunHours(e.target.value)}
          className="w-full border p-2 rounded mb-6"
        />

        <div className="space-y-2 text-lg">

          <p>
            <strong> Puissance Solaire Requise:</strong>{" "}
            {requiredArray.toFixed(2)} kW
          </p>

          <p>
            <strong>Nombre de Panneaux Estimé (400 W):</strong>{" "}
            {panelCount}
          </p>

        </div>

      </div>
    </main>
  );
}