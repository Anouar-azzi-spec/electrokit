import Link from "next/link";

export default function ElectricalPage() {
  return (
    <main className="min-h-screen bg-slate-100 p-6 flex items-center justify-center">
      <div className="max-w-2xl w-full">

        <h1 className="text-4xl font-bold mb-6">
          Electrical Fundamentals ⚡
        </h1>

        <Link
          href="/"
          className="text-blue-600 hover:underline block mb-6"
        >
          ← Back to Home
        </Link>

        <div className="grid gap-4">

          <Link
            href="/power"
            className="p-6 bg-white rounded-xl shadow"
          >
            Power Calculator ⚡
          </Link>

          <Link
            href="/current"
            className="p-6 bg-blue-200 rounded-xl shadow"
          >
            Current Calculator ⚡
          </Link>

        </div>

      </div>
    </main>
  );
}
