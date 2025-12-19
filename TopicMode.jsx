import { useState } from "react";
import Groq from "groq-sdk";

export default function TopicMode({ setMode, setResultData }) {
  const [topic, setTopic] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleGenerate() {
    if (!topic) return alert("Enter a topic first!");
    setLoading(true);

    try {
      const groq = new Groq({
        apiKey: import.meta.env.VITE_GROQ_KEY,
        dangerouslyAllowBrowser: true
      });

      const prompt = `
Create MEDIUM depth learning material for "${topic}".

FORMAT EXACTLY:

NOTES:
Clear structured explanation.

EXAMPLES:
Two useful examples.

PRACTICE_QUESTIONS:
5 questions increasing difficulty.

MINI_TEST:
Short quiz with answers hidden.
`;

      const models = [
        "llama-3.3-70b-versatile",
        "llama-3.1-70b-versatile",
        "llama-3.1-8b-instant"
      ];

      let text = null;

      for (const m of models) {
        try {
          console.log("TRYING MODEL:", m);

          const res = await groq.chat.completions.create({
            model: m,
            messages: [
              {
                role: "user",
                content: prompt
              }
            ]
          });

          text = res.choices[0].message.content;
          if (text) break;
        } catch (err) {
          console.log("FAILED MODEL:", m);
        }
      }

      if (!text) {
        alert("All Groq models failed. Try again later.");
        setLoading(false);
        return;
      }

      console.log("AI OUTPUT ↓↓↓");
      console.log(text);

      let notes = "No notes";
      let examples = "No examples";
      let questions = "No questions";
      let miniTest = "No test";

      if (text.includes("NOTES:"))
        notes = text.split("NOTES:")[1]?.split("EXAMPLES:")[0] || notes;

      if (text.includes("EXAMPLES:"))
        examples =
          text.split("EXAMPLES:")[1]?.split("PRACTICE_QUESTIONS:")[0] ||
          examples;

      if (text.includes("PRACTICE_QUESTIONS:"))
        questions =
          text.split("PRACTICE_QUESTIONS:")[1]?.split("MINI_TEST:")[0] ||
          questions;

      if (text.includes("MINI_TEST:"))
        miniTest = text.split("MINI_TEST:")[1] || miniTest;

      if (notes === "No notes") notes = text;

      setResultData({
        notes,
        examples,
        questions,
        miniTest
      });

      setMode("result");
    } catch (err) {
      console.log("ERROR ↓↓↓");
      console.log(err);
      alert("Groq AI request failed. Check console.");
    }

    setLoading(false);
  }

  return (
    <div className="min-h-screen text-white flex flex-col items-center justify-center bg-black space-y-6">
      <h1 className="text-4xl font-bold">Enter a Topic</h1>

      <input
        className="px-4 py-3 rounded-xl text-black w-[350px]"
        placeholder="Dynamic Programming..."
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
      />

      <button
        onClick={handleGenerate}
        className="bg-indigo-500 px-6 py-3 rounded-xl">
        {loading ? "Generating with AI..." : "Generate"}
      </button>

      <button
        className="bg-gray-700 px-6 py-3 rounded-xl"
        onClick={() => setMode("")}>
        Back
      </button>
    </div>
  );
}
