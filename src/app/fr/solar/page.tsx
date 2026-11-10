import Link from "next/link";

export default function FrenchSolarPage() {
  return (
    <main className="min-h-screen bg-slate-100 p-6 flex items-center justify-center">
      <div className="max-w-2xl w-full">

        <h1 className="text-4xl font-bold mb-6">
          Outils Solaires ☀️
        </h1>

        <Link
          href="/fr"
          className="text-blue-600 hover:underline block mb-6"
        >
          ← Retour à l'accueil
        </Link>

        <div className="grid gap-4">

          <Link
            href="/fr/panneau-solaire"
            className="p-6 bg-amber-200 rounded-xl shadow"
          >
            Calculateur de Panneaux Solaires ☀️
          </Link>

          <Link
            href="/fr/batterie"
            className="p-6 bg-cyan-200 rounded-xl shadow"
          >
            Calculateur de Batteries 🔋
          </Link>

          <Link
            href="/fr/onduleur"
            className="p-6 bg-lime-200 rounded-xl shadow"
          >
            Calculateur d'Onduleur ⚡
          </Link>

        </div>

      </div>
    </main>
  );
}