import { useState } from "react";
import {
  Search,
  ShieldCheck,
  ShieldAlert,
  Loader2,
  Github,
  FileWarning,
} from "lucide-react";
import { scanRepository } from "./api";

export default function App() {
  const [repoUrl, setRepoUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [report, setReport] = useState(null);
  const [error, setError] = useState(null);

  async function handleScan(e) {
    e.preventDefault();
    if (!repoUrl) return;

    setLoading(true);
    setError(null);
    setReport(null);

    try {
      const data = await scanRepository(repoUrl);
      setReport(data);
    } catch (err) {
      setError(err.message || "Scan failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center px-4">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-3 mb-8">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-7 h-7 text-emerald-600" />
            <h1 className="text-3xl font-bold text-gray-900">
              Repository Security Scanner
            </h1>
          </div>
          <p className="text-gray-600 max-w-md">
            Analyze GitHub repositories for potential security risks and unsafe
            patterns.
          </p>
        </div>

        {/* Input */}
        <form
          onSubmit={handleScan}
          className="flex flex-col sm:flex-row gap-3"
        >
          <div className="relative flex-1">
            <Github className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="https://github.com/user/repository"
              className="w-full h-11 border border-gray-300 rounded-lg pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-black"
              value={repoUrl}
              onChange={(e) => setRepoUrl(e.target.value)}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="h-11 inline-flex items-center justify-center gap-2 bg-black text-white px-6 rounded-lg hover:bg-gray-800 disabled:opacity-50"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Scanning
              </>
            ) : (
              <>
                <Search className="w-4 h-4" />
                Scan
              </>
            )}
          </button>
        </form>

        {/* Error */}
        {error && (
          <p className="mt-4 text-sm text-center text-red-600">
            {error}
          </p>
        )}

        {/* Loading */}
        {loading && (
          <div className="mt-6 flex flex-col items-center gap-2 text-gray-600">
            <Loader2 className="w-6 h-6 animate-spin" />
            <p>Scanning repository…</p>
          </div>
        )}

        {/* Result */}
        {report && <ResultView report={report} />}
      </div>
    </div>
  );
}

function ResultView({ report }) {
  const { risk, policy, ai } = report;
  const isSafe = risk.verdict === "SAFE";

  return (
    <div className="mt-8">
      {/* Verdict */}
      <div
        className={`flex gap-3 p-5 rounded-xl ${
          isSafe ? "bg-emerald-50" : "bg-red-50"
        }`}
      >
        {isSafe ? (
          <ShieldCheck className="w-6 h-6 text-emerald-600" />
        ) : (
          <ShieldAlert className="w-6 h-6 text-red-600" />
        )}

        <div>
          <h2
            className={`text-lg font-semibold ${
              isSafe ? "text-emerald-700" : "text-red-700"
            }`}
          >
            {isSafe
              ? "No security risks detected"
              : "Security risks detected"}
          </h2>
          <p className="text-gray-700 text-sm mt-1">
            {isSafe
              ? "This repository does not show signs of malicious behavior."
              : "This repository contains patterns commonly associated with unsafe or malicious behavior."}
          </p>
        </div>
      </div>

      {/* Summary */}
      <div className="mt-6">
        <h3 className="font-semibold mb-2">Scan Summary</h3>
        <ul className="text-sm text-gray-700 space-y-1">
          <li>Risk Score: {risk.score}</li>
          <li>Verdict: {risk.verdict}</li>
          <li>Policy Decision: {policy.decision}</li>
        </ul>
      </div>

      {/* ✅ PRACTICAL RISKY CODE DETAILS */}
      {ai?.explanation && ai.explanation.length > 0 && (
        <div className="mt-8">
          <h3 className="font-semibold mb-4 flex items-center gap-2">
            <FileWarning className="w-5 h-5 text-red-600" />
            Risky Code Details
          </h3>

          <div className="space-y-4">
            {ai.explanation.map((item, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-xl p-4 bg-gray-50"
              >
                <p className="text-sm">
                  <strong>File:</strong>{" "}
                  <span className="font-mono">{item.file}</span>
                </p>

                <p className="text-sm mt-1">
                  <strong>Issue:</strong> {item.issue}
                </p>

                <p className="text-sm mt-1">
                  <strong>Severity:</strong> {item.severity}
                </p>

                <p className="text-sm mt-2">
                  <strong>Code Pattern:</strong>{" "}
                  <span className="font-mono text-gray-800">
                    {item.pattern}
                  </span>
                </p>

                <p className="text-sm mt-2 text-red-700">
                  <strong>Why Risky:</strong> {item.why_risky}
                </p>

                <p className="text-sm mt-2 text-gray-700">
                  <strong>Impact:</strong> {item.impact}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
