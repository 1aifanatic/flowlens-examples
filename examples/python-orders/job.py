TRANSITIONS = {
    ("queued", "start"): "running",
    ("running", "complete"): "done",
    ("running", "fail"): "failed",
    ("failed", "retry"): "queued",
}
TERMINAL_STATES = {"done"}
