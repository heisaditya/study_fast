export default function ResultPanel({ data, setMode }) {
  return (
    <div className="min-h-screen bg-black text-white px-10 py-8">
      <h1 className="text-4xl font-bold mb-6">📚 Study Material Ready</h1>

      <div className="bg-gray-900 p-6 rounded-xl space-y-4">
        <h2 className="text-2xl font-semibold text-cyan-400">Notes</h2>
        <p>{data.notes}</p>
      </div>

      <div className="bg-gray-900 p-6 rounded-xl space-y-4 mt-6">
        <h2 className="text-2xl font-semibold text-indigo-400">Examples</h2>
        <p>{data.examples}</p>
      </div>

      <div className="bg-gray-900 p-6 rounded-xl space-y-4 mt-6">
        <h2 className="text-2xl font-semibold text-green-400">Practice Questions</h2>
        <p>{data.questions}</p>
      </div>

      <button
        onClick={() => setMode("")}
        className="mt-8 bg-gray-700 px-6 py-3 rounded-xl">
        Back to Home
      </button>
    </div>
  );
}
