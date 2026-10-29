import Link from "next/link";

export default function FrenchAboutPage() {
  return (
    <main className="min-h-screen bg-slate-100 flex items-center justify-center p-6">
      <div className="bg-white rounded-xl shadow p-8 max-w-3xl w-full">

        <div className="mb-6 text-center">
          <Link href="/" className="font-semibold">
            🇬🇧 English
          </Link>

          <span className="mx-2">|</span>

          <Link href="/fr" className="font-semibold">
            🇫🇷 Français
          </Link>
        </div>

        <h1 className="text-4xl font-bold mb-6">
          À propos d'ElectroKit ⚡
        </h1>

        <p className="mb-4 text-gray-700">
          ElectroKit est une collection d'outils pratiques de génie électrique
          conçus pour les étudiants, les électriciens, les techniciens et les
          ingénieurs.
        </p>

        <p className="mb-6 text-gray-700">
          L'objectif d'ElectroKit est de rendre les calculs électriques rapides,
          accessibles et faciles à utiliser.
        </p>

        <h2 className="text-2xl font-bold mb-3">
          Mission
        </h2>

        <p className="mb-6 text-gray-700">
          Fournir des outils pratiques permettant de résoudre rapidement
          des problèmes réels de génie électrique.
        </p>

        <h2 className="text-2xl font-bold mb-3">
          Fonctionnalités Actuelles
        </h2>

        <ul className="list-disc pl-6 mb-6 text-gray-700">
          <li>Calculateur de Puissance</li>
          <li>Calculateur de Courant</li>
          <li>Chute de Tension</li>
          <li>Section de Câble</li>
        </ul>

        <h2 className="text-2xl font-bold mb-3">
          Feuille de Route
        </h2>

        <ul className="list-disc pl-6 mb-6 text-gray-700">
          <li>Version française complète</li>
          <li>Version arabe</li>
          <li>Calculs solaires</li>
          <li>Dimensionnement des disjoncteurs</li>
          <li>Calculs de mise à la terre</li>
          <li>Outils d'installation électrique</li>
        </ul>

        <p className="mb-6 text-gray-600">
          Conçu par North Forge ⚒️
        </p>

        <Link
          href="/fr"
          className="text-blue-600 hover:underline"
        >
          ← Retour à l'accueil
        </Link>

      </div>
    </main>
  );
}