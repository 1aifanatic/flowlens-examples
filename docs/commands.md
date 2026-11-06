# Command reference

Install with `npm install -g @1aifanatic/flowlens`. Replace all example paths and function names with your own. Run `flowlens --help` for the installed version's help.

| Goal | Command |
| --- | --- |
| Version | `flowlens --version` |
| Source map or UiPath call map | `flowlens analyze ./project --open` |
| Function workflow | `flowlens analyze ./project --diagram workflow --function checkout --open` |
| Call order | `flowlens analyze ./project --diagram sequence --function placeOrder --open` |
| Value dependencies | `flowlens analyze ./project --diagram dataflow --function calculateTotal --open` |
| Explicit state table | `flowlens analyze ./project --diagram lifecycle --open` |
| Force Python behavior backend | `flowlens analyze ./project --language python --diagram workflow --function checkout --open` |
| UiPath workflow file | `flowlens analyze ./bot --language uipath --diagram workflow --function Main.xaml --open` |
| Maestro embedded subflow | `flowlens analyze ./maestro --diagram workflow --function "Review.flow#subflows/notify" --open` |
| Find callers | `flowlens ask ./project "who calls authenticate?" --open` |
| List functions in one JS/TS file | `flowlens flow ./src/orders.ts --list` |
| One JS/TS function | `flowlens flow ./src/orders.ts --function checkout --open` |
| Custom output | `flowlens analyze ./project --output ./reports/new-run --open` |
| Exclude folders | `flowlens analyze ./project --exclude generated --exclude archived --open` |
| Include an extra extension | `flowlens analyze ./project --extension .hs --open` |
| Render authored JSON | `flowlens render workflow ./diagram.json ./diagram.html` |

Supported `--language` values: `javascript` (includes TypeScript), `python`, `uipath`.

To render a real generated example again, first run `npm run examples -- ts-workflow`, find the printed output folder, and use its `ts-workflow/workflow.json` as the input to `render`. The same renderer command accepts `architecture`, `sequence`, `dataflow` and `lifecycle` JSON of the corresponding schema.

`--exclude` uses a project-relative path prefix. `--extension` adds files to scanning, not a new behavior parser. Existing output directories are rejected. Do not assume a successful source map implies full behavior coverage; read `report.html`.

[Back to README](../README.md)
