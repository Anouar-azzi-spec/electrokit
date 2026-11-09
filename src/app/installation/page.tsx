import Link from "next/link";

export default function InstallationPage() {
  return (
    <main className="min-h-screen bg-slate-100 p-6 flex items-center justify-center">
      <div className="max-w-2xl w-full">

        <h1 className="text-4xl font-bold mb-6">
          Installation Toolkit 🔧
        </h1>

        <Link
          href="/"
          className="text-blue-600 hover:underline block mb-6"
        >
          ← Back to Home
        </Link>

        <div className="grid gap-4">

          <Link
            href="/load"
            className="p-6 bg-green-200 rounded-xl shadow"
          >
            Residential Load Calculator 🔧
          </Link>

          <Link
            href="/breaker"
            className="p-6 bg-red-200 rounded-xl shadow"
          >
            Circuit Breaker Selector ⚡
          </Link>

          <Link
            href="/cablesize"
            className="p-6 bg-purple-200 rounded-xl shadow"
          >
            Cable Size Calculator 🔌
          </Link>

          <Link
            href="/voltagedrop"
            className="p-6 bg-yellow-200 rounded-xl shadow"
          >
            Voltage Drop Calculator 📉
          </Link>

          <Link
            href="/earthing"
            className="p-6 bg-emerald-200 rounded-xl shadow"
          >
            Earthing Calculator 🌍
          </Link>

        </div>

      </div>
    </main>
  );
}