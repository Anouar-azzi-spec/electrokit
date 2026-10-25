import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-100 flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold mb-4">
       ElectroKit ⚡
      </h1>

      <p className="text-xl text-gray-700 mb-2 text-center">
       Simple Electrical Engineering Tools
      </p>

      <p className="text-gray-500 mb-8 text-center max-w-md">
       Built for students, electricians and engineers.
       Fast, practical and free.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Link href="/power" className="p-6 bg-white rounded-xl shadow">
          Power Calculator ⚡
        </Link>

        <Link
         href="/current"
         className="p-6 bg-blue-200 rounded-xl shadow text-center hover:bg-blue-300 transition"
        >
          Current Calculator ⚡
        </Link>

       <Link
         href="/voltagedrop"
         className="p-6 bg-yellow-200 rounded-xl shadow text-center hover:bg-yellow-300 transition"
       >
         Voltage Drop ⚡
       </Link>

        <Link
         href="/cablesize"
         className="p-6 bg-purple-200 rounded-xl shadow text-center hover:bg-purple-300 transition"
        >
         Cable Size ⚡
        </Link>
      </div>
      <p className="mt-10 text-sm text-gray-500">
       Built by North Forge ⚒️
      </p>
    </main>
  );
}