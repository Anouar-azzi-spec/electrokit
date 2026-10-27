import Link from "next/link";

export default function FrenchHome() {
  return (
    <main className="min-h-screen bg-slate-100 flex flex-col items-center justify-center p-6">
      <h1 className="text-5xl font-bold mb-4">
        ElectroKit ⚡
      </h1>

      <p className="text-xl text-gray-700 mb-2 text-center">
        Outils simples de génie électrique
      </p>

      <p className="text-gray-500 mb-8 text-center max-w-md">
        Conçu pour les étudiants, les électriciens et les ingénieurs.
        Rapide. Pratique. Gratuit.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl w-full">
        <Link
          href="/power"
          className="p-6 bg-white rounded-xl shadow text-center hover:scale-105 hover:shadow-xl transition duration-200"
        >
          Calculateur de Puissance ⚡
        </Link>

        <Link
          href="/current"
          className="p-6 bg-blue-200 rounded-xl shadow text-center hover:scale-105 hover:shadow-xl transition duration-200"
        >
          Calculateur de Courant ⚡
        </Link>

        <Link
          href="/voltagedrop"
          className="p-6 bg-yellow-200 rounded-xl shadow text-center hover:scale-105 hover:shadow-xl transition duration-200"
        >
          Chute de Tension ⚡
        </Link>

        <Link
          href="/cablesize"
          className="p-6 bg-purple-200 rounded-xl shadow text-center hover:scale-105 hover:shadow-xl transition duration-200"
        >
          Section de Câble ⚡
        </Link>

        <Link
          href="/about"
          className="p-6 bg-slate-300 rounded-xl shadow text-center hover:scale-105 hover:shadow-xl transition duration-200 md:col-span-2"
        >
          À propos d'ElectroKit ⚡
        </Link>
      </div>

      <p className="mt-10 text-sm text-gray-500">
        Conçu par North Forge ⚒️
      </p>

      <p className="text-xs text-gray-400 mt-1">
        ElectroKit v1.2
      </p>
    </main>
  );
}