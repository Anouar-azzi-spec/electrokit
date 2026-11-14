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
          ElectroKit est une boîte à outils bilingue de génie électrique
          conçue pour les étudiants, les électriciens, les techniciens et les
          ingénieurs.
        </p>

        <p className="mb-4 text-gray-700">
          L'objectif d'ElectroKit est simple : fournir des outils pratiques,
          rapides et gratuits permettant de résoudre des problèmes réels de
          génie électrique et d'installation.
        </p>

        <p className="mb-6 text-gray-700">
          ElectroKit est le premier produit développé par North Forge ⚒️ et est
          disponible en anglais et en français.
        </p>

        <h2 className="text-2xl font-bold mb-3">
          Fonctionnalités Actuelles
        </h2>

        <div className="mb-6 text-gray-700">

          <p className="font-semibold mb-2">
            ⚡ Fondamentaux Électriques
          </p>

          <ul className="list-disc pl-6 mb-4">
            <li>Calculateur de Puissance</li>
            <li>Calculateur de Courant</li>
          </ul>

          <p className="font-semibold mb-2">
            🔧 Outils d'Installation
          </p>

          <ul className="list-disc pl-6 mb-4">
            <li>Calculateur de Charge Résidentielle</li>
            <li>Sélecteur de Disjoncteur</li>
            <li>Section de Câble</li>
            <li>Chute de Tension</li>
            <li>Calculateur de Mise à la Terre</li>
          </ul>

          <p className="font-semibold mb-2">
            ☀️ Outils Solaires
          </p>

          <ul className="list-disc pl-6">
            <li>Calculateur de Panneaux Solaires</li>
            <li>Calculateur de Batteries</li>
            <li>Calculateur d'Onduleur</li>
          </ul>

        </div>

        <h2 className="text-2xl font-bold mb-3">
          Feuille de Route
        </h2>

        <ul className="list-disc pl-6 mb-6 text-gray-700">
          <li>Version Arabe 🇩🇿</li>
          <li>Calculs de Moteurs ⚙️</li>
          <li>Calculs de Transformateurs 🔌</li>
          <li>Outils Solaires Avancés ☀️</li>
          <li>Rapports et Exportations 📄</li>
          <li>Système de Retour Utilisateur 💬</li>
        </ul>

        <h2 className="text-2xl font-bold mb-3">
          Version Actuelle
        </h2>

        <p className="mb-6 text-gray-700">
          ElectroKit v2.2
        </p>

        <p className="mb-6 text-gray-600">
          Développé par North Forge ⚒️, un atelier dédié à la création de logiciels
          d'ingénierie utiles, pratiques et accessibles.
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