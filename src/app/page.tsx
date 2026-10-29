import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-100 flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold mb-4">
       ElectroKit ⚡
      </h1>
     <div className="mb-6">
       <Link href="/" className="font-semibold">
         🇬🇧 English
       </Link>

        <span className="mx-2">|</span>

       <Link href="/fr" className="font-semibold">
         🇫🇷 Français
       </Link>
     </div>


      <p className="text-xl text-gray-700 mb-2 text-center">
       Simple Electrical Engineering Tools
      </p>

      <p className="text-gray-500 mb-8 text-center max-w-md">
       Built for students, electricians and engineers.
       Fast, practical and free.
      </p>

      <div 
        className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl w-full">
        <Link href="/power" 
         className="p-6 bg-white rounded-xl shadow text-center hover:scale-105 hover:shadow-xl transition duration-200">
          Power Calculator ⚡
        </Link>

        <Link
         href="/current"
         className="p-6 bg-blue-200 rounded-xl shadow text-center 
         hover:scale-105 hover:shadow-xl transition duration-200"
        >
          Current Calculator ⚡
        </Link>

       <Link
         href="/voltagedrop"
         className="p-6 bg-yellow-200 rounded-xl shadow text-center 
         hover:scale-105 hover:shadow-xl transition duration-200"
       >
         Voltage Drop ⚡
       </Link>

        <Link
         href="/cablesize"
         className="p-6 bg-purple-200 rounded-xl shadow text-center 
         hover:scale-105 hover:shadow-xl transition duration-200"
        >
         Cable Size ⚡
        </Link>
        <Link
         href="/about"
         className="p-6 bg-gray-200 rounded-xl shadow text-center 
         hover:scale-105 hover:shadow-xl transition duration-200 md:col-span-2"
        >
          About ElectroKit ⚡
        </Link>
      </div>
      <p className="mt-10 text-sm text-gray-500">
       Built by North Forge ⚒️
      </p>
      <p className="text-xs text-gray-400 mt-1">
       ElectroKit v1.2
      </p>
    </main>
  );
}