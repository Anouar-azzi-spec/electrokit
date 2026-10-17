export default function Home() {
  return (
    <main className="min-h-screen bg-slate-100 flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold mb-4">
        ElectroKit
      </h1>

      <p className="text-gray-600 mb-8">
        Electrical Engineering Toolkit
      </p>

      <div className="grid grid-cols-2 gap-4">
        <button className="p-6 bg-white rounded-xl shadow">
          Power Calculator
        </button>

        <button className="p-6 bg-white rounded-xl shadow">
          Current Calculator
        </button>

        <button className="p-6 bg-white rounded-xl shadow">
          Voltage Drop
        </button>

        <button className="p-6 bg-white rounded-xl shadow">
          Cable Size
        </button>
      </div>
    </main>
  );
}
