const API_BASE = "http://127.0.0.1:8000";

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
    const err = await res.json();
    throw new Error(err.message || "Scan failed");
  }

  return res.json();
}
