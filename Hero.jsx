export default function Hero({ setMode }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#020617] to-black text-white flex items-center justify-center px-6">
      <div className="max-w-4xl text-center space-y-6">
        <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-indigo-400">
          Instant AI Study Companion
        </h1>

        <p className="text-gray-300 text-lg">
          Upload notes or enter a topic. Get clear explanations, examples,
          practice questions & a mini test instantly.
        </p>

        <div className="flex gap-6 justify-center">
          <button
            onClick={() => setMode("upload")}
            className="px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 transition font-semibold">
            Upload Notes (PDF)
          </button>

          <button
            onClick={() => setMode("topic")}
            className="px-6 py-3 rounded-xl bg-indigo-500 hover:bg-indigo-400 transition font-semibold">
            Try Topic Mode
          </button>
        </div>
      </div>
    </div>
  );
}
