// Use environment variable for API base, fallback to local for development
const API_BASE = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000";

export async function scanRepository(repoUrl) {
  const res = await fetch(`${API_BASE}/scan`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      repo_url: repoUrl,
      policy: "standard",
      explain: true,
    }),
  });

  if (!res.ok) {
    let errorMessage = "Scan failed";
    try {
      const err = await res.json();
      errorMessage = err.message || errorMessage;
    } catch (e) {
      // Fallback if response is not JSON
    }
    throw new Error(errorMessage);
  }

  return res.json();
}

export async function scanRepositoryMLObfuscation(repoUrl) {
  const res = await fetch(`${API_BASE}/scan-ml-obfuscation`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      repo_url: repoUrl,
    }),
  });

  if (!res.ok) {
    let errorMessage = "ML Obfuscation scan failed";
    try {
      const err = await res.json();
      errorMessage = err.message || errorMessage;
    } catch (e) {
      // Fallback if response is not JSON
    }
    throw new Error(errorMessage);
  }

  return res.json();
}
