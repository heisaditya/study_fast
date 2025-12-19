export default function UploadMode({ setMode }) {
  return (
    <div className="min-h-screen text-white flex flex-col items-center justify-center bg-black space-y-6">
      <h1 className="text-4xl font-bold">Upload Your Notes</h1>

      <input type="file" accept="application/pdf" className="mt-2 text-white" />

      <button
        className="mt-6 bg-gray-700 px-6 py-3 rounded-xl"
        onClick={() => setMode("")}>
        Back
      </button>
    </div>
  );
}
