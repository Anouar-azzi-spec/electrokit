import Link from "next/link";

export default function SolarPage() {
  return (
    <main className="min-h-screen bg-slate-100 p-6 flex items-center justify-center">
      <div className="max-w-2xl w-full">

        <h1 className="text-4xl font-bold mb-6">
          Solar Toolkit ☀️
        </h1>

        <Link
          href="/"
          className="text-blue-600 hover:underline block mb-6"
        >
          ← Back to Home
        </Link>

        <div className="grid gap-4">

          <Link
            href="/solar-panel"
            className="p-6 bg-amber-200 rounded-xl shadow"
          >
            Solar Panel Calculator ☀️
          </Link>

          <Link
            href="/battery"
            className="p-6 bg-cyan-200 rounded-xl shadow"
          >
            Battery Bank Calculator 🔋
          </Link>

          <Link
            href="/inverter"
            className="p-6 bg-lime-200 rounded-xl shadow"
          >
            Inverter Calculator ⚡
          </Link>

        </div>

      </div>
    </main>
  );
}