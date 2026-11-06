# FlowLens examples

**Understand a project through diagrams. No LLM. No API key. Zero LLM inference tokens.**

This is the public getting-started guide and example collection for [`@1aifanatic/flowlens`](https://www.npmjs.com/package/@1aifanatic/flowlens). It contains **25 reproducible scenarios** using small, readable, synthetic projects.

**[Browse the live example gallery](https://1aifanatic.github.io/flowlens-examples/gallery/)** · [Choose an example](#examples) · [Use your own project](#use-your-own-project) · [Troubleshooting](docs/troubleshooting.md)

## Start in three commands

Install [Node.js](https://nodejs.org/) **22 or newer**, then run:

```sh
npm install -g @1aifanatic/flowlens
flowlens --version
flowlens analyze "path/to/your/project" --open
```

Replace `path/to/your/project` with the folder containing your source code or UiPath source project. Keep the quotes if the path contains spaces. You do **not** need to copy your project into this repository or upload it anywhere.

FlowLens reads the files, generates local HTML diagrams and a report, and opens the result in your browser. It does not execute your application or UiPath activities. UiPath Studio is not required for analysis.

Prefer not to install globally?

```sh
npx @1aifanatic/flowlens analyze "path/to/your/project" --open
```

For reproducibility, this example repository pins **FlowLens 0.10.0**. The commands above install the current npm release; use `@1aifanatic/flowlens@0.10.0` to select the same version as these examples.

## Try the examples

Requires Node.js 22+, npm, and Git to clone. **Python 3.8+** is also needed to generate the Python behavior examples. Viewing the already-generated gallery requires only a browser.

```sh
git clone https://github.com/1aifanatic/flowlens-examples.git
cd flowlens-examples
npm ci
npm run examples -- uipath-windows-workflow
```

Open the `Gallery:` path printed in the terminal. The gallery links to the report and interactive diagram.

```sh
# See all available examples
npm run examples:list

# Generate just the examples you want
npm run examples -- ts-workflow ts-dataflow maestro-workflow

# Generate all 25 examples (Python 3.8+ required)
npm run examples

# Check the most recent generation
npm run verify
```

Each run creates a **new** `.archify/examples-...` folder. Running the same example again is safe. There are no project-specific dependencies to install inside the example folders; FlowLens parses their source without running it.

You can also open the committed [`docs/gallery/index.html`](docs/gallery/index.html) after cloning or downloading the repository. GitHub's file viewer displays HTML source; use the live gallery or open the downloaded file in your browser to interact with it.

## Examples

All paths below are relative to this repository. Each fixture folder includes its own README with exact commands.

| Source project | What it demonstrates | Example IDs |
| --- | --- | --- |
| [TypeScript shop](examples/typescript-shop) | Imports, checkout branches, call order, pricing values, job states | `ts-architecture`, `ts-workflow`, `ts-sequence`, `ts-dataflow`, `ts-lifecycle` |
| [TypeScript shop](examples/typescript-shop) | Find who calls `authenticate`; inspect one file/function | `ts-callers`, `ts-single-function` |
| [JavaScript orders](examples/javascript-orders) | Order validation and a return path | `js-workflow` |
| [Python orders](examples/python-orders) | Source map, checkout branches, calls, pricing values, job states | `python-architecture`, `python-workflow`, `python-sequence`, `python-dataflow`, `python-lifecycle` |
| [UiPath Windows](examples/uipath-windows) | Workflow invocation and activity order | `uipath-windows-architecture`, `uipath-windows-workflow` |
| [UiPath cross-platform](examples/uipath-portable) | Portable project metadata and XAML workflows | `uipath-portable-architecture`, `uipath-portable-workflow` |
| [UiPath Windows Legacy](examples/uipath-legacy) | Legacy project metadata and XAML workflows | `uipath-legacy-architecture`, `uipath-legacy-workflow` |
| [UiPath flowchart](examples/uipath-flowchart) | Declared True/False branches | `uipath-flowchart` |
| [UiPath state machine](examples/uipath-state-machine) | Declared state transitions shown as a **workflow** | `uipath-state-machine` |
| [Maestro review](examples/maestro-review) | Declared port labels, connections and embedded subflows | `maestro-workflow`, `maestro-subflow` |
| [Other languages](examples/other-languages) | C#, Go and SQL source inventory; include `.hs` explicitly | `other-source-map`, `custom-extension` |

The UiPath and Maestro fixtures are **minimal static-analysis examples, not deployable automations**. They illustrate the structure FlowLens recognizes without credentials, connectors, external systems or UiPath dependencies.

## Use your own project

Run these commands from any terminal directory. The first argument after `analyze` is the folder to inspect; it does not need to be a Git repository.

### UiPath on Windows

Point at the folder containing `project.json` and your `.xaml` files:

```powershell
flowlens analyze "C:\Users\YourName\Documents\UiPath\InvoiceBot" --open
```

Inspect a particular workflow:

```powershell
flowlens analyze "C:\Users\YourName\Documents\UiPath\InvoiceBot" --diagram workflow --function "Main.xaml" --open
```

For a nested file, use its path relative to the project root:

```powershell
flowlens analyze "C:\Users\YourName\Documents\UiPath\InvoiceBot" --diagram workflow --function "Framework/Process.xaml" --open
```

For a Maestro source project:

```powershell
flowlens analyze "C:\Projects\MaestroReview" --diagram workflow --open
```

Use extracted source folders, not `.nupkg` or `.uipx` archives. If a folder contains many projects, start with **one project at a time** for a clearer result. See [the UiPath guide](docs/uipath.md).

### JavaScript or TypeScript

```sh
flowlens analyze "C:/Projects/MyApp" --open
flowlens analyze "C:/Projects/MyApp" --diagram workflow --function checkout --open
flowlens analyze "C:/Projects/MyApp" --diagram sequence --function placeOrder --open
flowlens analyze "C:/Projects/MyApp" --diagram dataflow --function calculateTotal --open
flowlens ask "C:/Projects/MyApp" "who calls authenticate?" --open
```

Use function names that actually exist in your project. To discover functions in one JS/TS file:

```sh
flowlens flow "C:/Projects/MyApp/src/orders.ts" --list
flowlens flow "C:/Projects/MyApp/src/orders.ts" --function checkout --open
```

### Python

```sh
flowlens analyze "C:/Projects/MyPythonApp" --language python --diagram workflow --function checkout --open
```

Python behavior extraction uses an isolated Python standard-library AST parser. It needs Python 3.8+ on your machine, but it does not import or execute your project and requires no `pip install`.

### macOS and Linux

The same commands work with your local paths:

```sh
flowlens analyze "$HOME/projects/my-app" --open
flowlens analyze ./my-app --diagram workflow --function checkout --open
```

### Other languages and large repositories

```sh
flowlens analyze ./my-java-project --open
flowlens analyze ./my-project --extension .hs --open
flowlens analyze ./my-project --exclude generated --exclude archived --open
```

Other supported file extensions can appear in a source map or text search. **This does not mean FlowLens understands their full behavior.** Adding an extension includes its files in scanning; it does not add a language parser. Exclusion paths are relative to the project being analyzed.

## Choose the right diagram

| Diagram | Useful for | Supported extraction in 0.10.0 |
| --- | --- | --- |
| `architecture` | Source groups/imports; UiPath workflow calls | General source maps; deeper relationships depend on language |
| `workflow` | Branches, returns and activity structure | Supported JS/TS and Python functions; XAML and Maestro workflows |
| `sequence` | Statically resolved call order | Supported straight-line JS/TS and Python functions; not a runtime trace |
| `dataflow` | Which inputs feed local values and returns | Supported JS/TS and Python assignments; no arbitrary branch merging |
| `lifecycle` | Explicit states and events | Supported literal JS/TS or Python transition tables |

UiPath **sequence, dataflow and lifecycle extraction are not available in 0.10.0**. The state-machine example uses `workflow`. Coded C# internals, custom activity internals, dynamic bindings and runtime behavior are not inferred. Complex or unsupported code can produce a coverage warning or an architecture fallback rather than the requested behavior diagram.

`ask` recognizes a limited question grammar and otherwise searches source text. It is not a chatbot and does not reason about arbitrary business questions.

For authored diagram JSON, the package also provides the original renderers:

```sh
flowlens render workflow ./diagram.json ./diagram.html
```

The gallery contains generated JSON files you can inspect as schema-shaped starting points. See the [command reference](docs/commands.md).

## Where are the results?

By default, `analyze` creates `.archify/<project>-<timestamp>` **under the terminal's current directory** and prints the exact paths.

| File | Purpose |
| --- | --- |
| `report.html` | Main report with source evidence, warnings and links |
| `architecture.html`, `workflow.html`, etc. | Interactive diagram for the selected type |
| `analysis.json` | Parsed analysis, including `modelTokens: 0` |
| `evidence.json` | Scanned source evidence |
| `uipath-0.html`, etc. | Individual UiPath workflow views |
| `flow.json` | Detailed evidence from the single-file `flow` command |

Choose an explicit **new** output directory when needed:

```sh
flowlens analyze ./my-project --output ./reports/run-001 --open
```

FlowLens refuses to overwrite an existing directory. Use a new name for the next run, or omit `--output`. The `flow` command emits a workflow view and `flow.json` rather than the full repository report.

## Zero LLM tokens: what that means

**Running FlowLens analysis and rendering consumes zero LLM inference tokens.** It uses local parsers and deterministic rules, with no local model, cloud model, API key, inference server or AI subscription.

- The normal `analyze`, `ask`, `flow` and `render` workflows do not send your source to an LLM.
- Analyzed source code, UiPath activities and Maestro scripts are not executed.
- Installing the package downloads files from npm. Normal source analysis runs locally after installation.
- Optional inherited web/brand capture commands may use the network; they are not used by this example runner.
- Reports can contain source quotations. Only share reports whose contents you intend to share. This public gallery uses synthetic examples.
- This claim is about **operating the package**, not the tools or tokens used to develop the software or write its documentation.

Use FlowLens to explore an unfamiliar repository, prepare handover documentation, review workflow structure or regenerate diagrams after source changes. Treat coverage notes as part of the result: a static view is not proof of runtime behavior.

## Project structure

```text
flowlens-examples/
  README.md                 Start here
  examples/                 Small synthetic source projects + individual guides
  examples.json             The 25 commands and their expected diagram types
  scripts/generate.mjs       Run the installed npm package and build a gallery
  scripts/verify.mjs         Check outputs, links and zero-token records
  docs/commands.md           Copyable command reference
  docs/uipath.md             UiPath-specific walkthrough
  docs/troubleshooting.md    Common errors and fixes
  docs/gallery/              Pre-generated public reports and diagrams
  licenses/                 Upstream renderer notices
  .github/workflows/         Reproduce and verify examples in CI
```

The runner uses the npm package as a dependency; this repository does not contain a second implementation of FlowLens. The lockfile pins the installation. No additional application, server, UI framework or AI SDK is needed.

## Limits, help and contributions

Source scanning is bounded to 5,000 files, 512 KiB per file and 32 MiB total. UiPath overviews show up to 12 items for readability; the report retains the parsed activity hierarchy and full names. Large inputs should be narrowed to a relevant project or folder.

If a command fails, read [troubleshooting](docs/troubleshooting.md). To contribute an example, add a small synthetic fixture and an entry to `examples.json`, then run `npm run examples` and `npm run verify`. Do not add credentials or private project exports. Report issues with the command, package version and a minimal synthetic reproduction.

## License and credits

Example sources and documentation are [MIT licensed](LICENSE). FlowLens builds on [tt-a1i/archify](https://github.com/tt-a1i/archify); generated pages embed its renderer code. The [upstream MIT notice](licenses/ARCHIFY-MIT.txt) and [third-party notices](licenses/THIRD_PARTY_NOTICES.md) are retained. This project is not affiliated with UiPath.
