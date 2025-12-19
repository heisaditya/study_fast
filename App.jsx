import { useState } from "react";
import Hero from "./components/Hero";
import UploadMode from "./components/UploadMode";
import TopicMode from "./components/TopicMode";
import ResultPanel from "./components/ResultPanel";

export default function App() {
  const [mode, setMode] = useState("");
  const [resultData, setResultData] = useState(null);

  return (
    <>
      {mode === "" && <Hero setMode={setMode} />}
      {mode === "upload" && <UploadMode setMode={setMode} />}
      {mode === "topic" && (
  <TopicMode setMode={setMode} setResultData={setResultData} />
)}

      {mode === "result" && <ResultPanel data={resultData} setMode={setMode} />}
    </>
  );
}
