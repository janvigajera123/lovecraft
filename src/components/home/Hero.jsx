import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-[90vh] flex items-center bg-gradient-to-b from-indigo-50 to-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* Left */}
        <div>

          <span className="inline-block bg-pink-100 text-pink-600 px-4 py-2 rounded-full text-sm font-semibold">
            ❤️ Preserve Every Precious Memory
          </span>

          <h1 className="text-6xl font-bold mt-8 leading-tight text-gray-900">
            Create
            <span className="text-indigo-600"> Timeless </span>
            Digital Memories
          </h1>

          <p className="text-gray-600 text-xl mt-6 leading-8">
            Store photos, videos, letters and unforgettable moments in one
            beautiful digital gift.
          </p>

          <div className="flex gap-5 mt-10">

            <button className="bg-indigo-600 text-white px-7 py-4 rounded-xl flex items-center gap-2 hover:bg-indigo-700 transition">
              Get Started
              <ArrowRight size={18} />
            </button>

            <button className="border border-gray-300 px-7 py-4 rounded-xl hover:bg-gray-100 transition">
              Watch Demo
            </button>

          </div>

        </div>

        {/* Right */}
        <div className="flex justify-center">

          <div className="w-[420px] h-[420px] rounded-3xl bg-gradient-to-br from-indigo-500 to-pink-500 shadow-2xl flex items-center justify-center">

            <h2 className="text-white text-3xl font-bold">
              LoveCraft ❤️
            </h2>

          </div>

        </div>

      </div>
    </section>
  );
}