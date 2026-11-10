import Link from "next/link";

export default function FrenchInstallationPage() {
  return (
    <main className="min-h-screen bg-slate-100 p-6 flex items-center justify-center">
      <div className="max-w-2xl w-full">

        <h1 className="text-4xl font-bold mb-6">
          Outils d'Installation 🔧
        </h1>

        <Link
          href="/fr"
          className="text-blue-600 hover:underline block mb-6"
        >
          ← Retour à l'accueil
        </Link>

        <div className="grid gap-4">

          <Link
            href="/fr/charge"
            className="p-6 bg-green-200 rounded-xl shadow"
          >
            Calculateur de Charge Résidentielle 🔧
          </Link>

          <Link
            href="/fr/disjoncteur"
            className="p-6 bg-red-200 rounded-xl shadow"
          >
            Sélecteur de Disjoncteur ⚡
          </Link>

          <Link
            href="/fr/sectiondecable"
            className="p-6 bg-purple-200 rounded-xl shadow"
          >
            Section de Câble 🔌
          </Link>

          <Link
            href="/fr/chutedetension"
            className="p-6 bg-yellow-200 rounded-xl shadow"
          >
            Chute de Tension 📉
          </Link>

          <Link
            href="/fr/terre"
            className="p-6 bg-emerald-200 rounded-xl shadow"
          >
            Calculateur de Mise à la Terre 🌍
          </Link>

        </div>

      </div>
    </main>
  );
}