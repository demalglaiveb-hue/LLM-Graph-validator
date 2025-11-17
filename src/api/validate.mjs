// src/api/validate.mjs
// Minimal HTTP-style handler placeholder (framework-agnostic).

import { validateLlmGraph } from "../core/validate.ts";

export async function handleValidate(requestBody) {
  try {
    const doc = typeof requestBody === "string" ? JSON.parse(requestBody) : requestBody;
    const result = validateLlmGraph(doc);
    return {
      status: 200,
      body: result
    };
  } catch (err) {
    return {
      status: 400,
      body: { error: "Invalid JSON", details: String(err) }
    };
  }
}
