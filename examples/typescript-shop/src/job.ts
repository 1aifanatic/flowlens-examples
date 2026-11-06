export const transitions = {
  "queued:start": "running",
  "running:complete": "done",
  "running:fail": "failed",
  "failed:retry": "queued"
} as const;
export const terminal = new Set(["done"]);
