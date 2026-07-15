import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-indigo-50 to-white">
      <div className="mx-auto grid min-h-[90vh] max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2">

        <div>
          <span className="rounded-full bg-pink-100 px-4 py-2 text-sm font-semibold text-pink-600">
            ❤️ Preserve Every Precious Memory
          </span>

          <h1 className="mt-8 text-5xl font-bold leading-tight text-gray-900 lg:text-7xl">
            Create
            <span className="text-indigo-600"> Timeless </span>
            Digital Memories
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Store your photos, videos, letters and unforgettable memories in
            one beautiful digital gift.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <button className="flex items-center gap-2 rounded-xl bg-indigo-600 px-8 py-4 font-semibold text-white hover:bg-indigo-700">
              Get Started
              <ArrowRight size={18} />
            </button>

            <button className="rounded-xl border px-8 py-4 font-semibold hover:bg-gray-100">
              Watch Demo
            </button>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="flex h-[420px] w-[420px] items-center justify-center rounded-[40px] bg-gradient-to-br from-indigo-600 to-pink-500 shadow-2xl">
            <h2 className="text-4xl font-bold text-white">
              LoveCraft ❤️
            </h2>
          </div>
        </div>

      </div>
    </section>
  );
}