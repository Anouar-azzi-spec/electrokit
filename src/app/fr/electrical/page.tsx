import Link from "next/link";

export default function FrenchElectricalPage() {
  return (
    <main className="min-h-screen bg-slate-100 p-6 flex items-center justify-center">
      <div className="max-w-2xl w-full">

        <h1 className="text-4xl font-bold mb-6">
          Fondamentaux Électriques ⚡
        </h1>

        <Link
          href="/fr"
          className="text-blue-600 hover:underline block mb-6"
        >
          ← Retour à l'accueil
        </Link>

        <div className="grid gap-4">

          <Link
            href="/fr/puissance"
            className="p-6 bg-white rounded-xl shadow"
          >
            Calculateur de Puissance ⚡
          </Link>

          <Link
            href="/fr/courant"
            className="p-6 bg-blue-200 rounded-xl shadow"
          >
            Calculateur de Courant ⚡
          </Link>

        </div>

      </div>
    </main>
  );
}
