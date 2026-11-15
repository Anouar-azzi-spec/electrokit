import Link from "next/link";

export default function ElectronicsPage() {
  return (
    <main className="min-h-screen bg-slate-100 p-6 flex items-center justify-center">
      <div className="max-w-2xl w-full">

        <h1 className="text-4xl font-bold mb-6">
          Electronics Toolkit 🔌
        </h1>

        <Link
          href="/"
          className="text-blue-600 hover:underline block mb-6"
        >
          ← Back to Home
        </Link>

        <div className="grid gap-4">

          <Link
            href="/led-resistor"
            className="p-6 bg-orange-200 rounded-xl shadow"
          >
            LED Resistor Calculator 💡
          </Link>
          <Link href="/voltage-divider" className="p-6 bg-yellow-200 rounded-xl shadow">
           Voltage Divider Calculator 🔌
          </Link>

        </div>

      </div>
    </main>
  );
}
