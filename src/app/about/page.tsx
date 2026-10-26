import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-100 flex items-center justify-center p-6">
      <div className="bg-white rounded-xl shadow p-8 max-w-2xl">
        <h1 className="text-4xl font-bold mb-6">
          About ElectroKit ⚡
        </h1>

        <p className="mb-4 text-gray-700">
          ElectroKit is a collection of practical electrical
          engineering tools built for students,
          electricians, technicians and engineers.
        </p>

        <p className="mb-4 text-gray-700">
          The goal of ElectroKit is simple:
          provide fast, practical and free tools
          that help users solve real-world electrical
          engineering problems.
        </p>

        <p className="mb-6 text-gray-700">
          ElectroKit is the first product developed
          by North Forge ⚒️.
        </p>

        <h2 className="text-2xl font-bold mb-3">
          Current Features
        </h2>

        <ul className="list-disc ml-6 mb-6">
          <li>Power Calculator</li>
          <li>Current Calculator</li>
          <li>Voltage Drop Calculator</li>
          <li>Cable Size Calculator</li>
        </ul>

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