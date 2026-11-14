import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-100 flex items-center justify-center p-6">
      <div className="bg-white rounded-xl shadow p-8 max-w-2xl w-full">

        <h1 className="text-4xl font-bold mb-6">
          About ElectroKit ⚡
        </h1>

        <p className="mb-4 text-gray-700">
          ElectroKit is a bilingual electrical engineering toolkit built for
          students, electricians, technicians, and engineers.
        </p>

        <p className="mb-4 text-gray-700">
          The goal of ElectroKit is simple: provide practical, fast, and free
          tools that help solve real-world electrical engineering and
          installation problems.
        </p>

        <p className="mb-6 text-gray-700">
          ElectroKit is the first product developed by North Forge ⚒️ and is
          available in both English and French.
        </p>

        <h2 className="text-2xl font-bold mb-3">
          Current Features
        </h2>

        <div className="mb-6 text-gray-700">

          <p className="font-semibold mb-2">
            ⚡ Electrical Fundamentals
          </p>

          <ul className="list-disc ml-6 mb-4">
            <li>Power Calculator</li>
            <li>Current Calculator</li>
          </ul>

          <p className="font-semibold mb-2">
            🔧 Installation Toolkit
          </p>

          <ul className="list-disc ml-6 mb-4">
            <li>Residential Load Calculator</li>
            <li>Circuit Breaker Selector</li>
            <li>Cable Size Calculator</li>
            <li>Voltage Drop Calculator</li>
            <li>Earthing Calculator</li>
          </ul>

          <p className="font-semibold mb-2">
            ☀️ Solar Toolkit
          </p>

          <ul className="list-disc ml-6">
            <li>Solar Panel Calculator</li>
            <li>Battery Bank Calculator</li>
            <li>Inverter Calculator</li>
          </ul>

        </div>

        <h2 className="text-2xl font-bold mb-3">
          Roadmap
        </h2>

        <ul className="list-disc ml-6 mb-6 text-gray-700">
          <li>Arabic Version 🇩🇿</li>
          <li>Motor Calculators ⚙️</li>
          <li>Transformer Calculators 🔌</li>
          <li>Advanced Solar Design Tools ☀️</li>
          <li>Project Reports & Exports 📄</li>
          <li>User Feedback System 💬</li>
        </ul>

        <h2 className="text-2xl font-bold mb-3">
          Current Version
        </h2>

        <p className="mb-6 text-gray-700">
          ElectroKit v2.2
        </p>

        <p className="mb-6 text-gray-700">
          Built by North Forge ⚒️, a workshop dedicated to building useful,
          practical, and accessible engineering software.
        </p>

        <Link
          href="/"
          className="text-blue-600 hover:underline"
        >
          ← Back to Home
        </Link>

      </div>
    </main>
  );
}