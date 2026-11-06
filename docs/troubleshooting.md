# Troubleshooting

## “Output already exists”

FlowLens does not overwrite output directories. The simplest fix is to omit `--output`:

```powershell
flowlens analyze "C:\Projects\InvoiceBot" --open
```

Or choose a new path, such as `--output "C:\Reports\InvoiceBot-run-002"`. You do not need to delete your existing report.

## “flowlens” is not recognized

Run `npm install -g @1aifanatic/flowlens`, reopen your terminal, then run `flowlens --version`. Alternatively use `npx @1aifanatic/flowlens analyze "path/to/project" --open`. The npm package name is scoped; the executable name is simply `flowlens`.

## Node.js version error

Check `node --version`. FlowLens requires Node.js 22 or newer. This examples repository pins package version 0.10.0.

## Python examples fail

Check `python --version` or `python3 --version`. Python behavior analysis requires Python 3.8+ available to the package. You can still run non-Python examples:

```sh
npm run examples -- ts-workflow uipath-windows-workflow
```

## No supported files, or missing source

Point at an extracted source directory. Dependencies/build folders are excluded; Git ignore rules apply when Git listing is available. Symlinks are not followed. Use `--extension .ext` for an additional textual source extension, or analyze a smaller folder. That option does not add behavior analysis for a new language.

## Function is missing or ambiguous

Use a name present in your source. For a JS/TS file, `flowlens flow ./src/orders.ts --list` lists selectable functions. For repeated JS/TS function names, a file-qualified selector such as `src/orders.ts:checkout` can disambiguate repository analysis. For XAML, use the exact project-relative file path.

## Unsupported behavior or an architecture fallback

Not every source construct can be converted into a behavior diagram. Read the printed explanation and coverage notes. Narrow the function or use `--diagram architecture`. Do not interpret an omitted edge as proof that a relationship cannot exist at runtime. UiPath 0.10.0 supports architecture/workflow extraction only.

## “Data-flow layout validation failed”

Version 0.10.0 can reject some dataflow layouts when a generated edge crosses another node. A three-input pricing calculation with a subtotal feeding both tax and total exposed this during example verification. The public TypeScript fixture uses a smaller linear calculation that passes validation. For an affected real function, use its workflow or architecture view and retain the diagnostic when reporting the issue; do not assume the dataflow diagram was generated successfully.

## The browser does not open

Open the exact `.html` path printed in the terminal. No web server is needed for local viewing. GitHub's normal file viewer shows HTML source; use the live gallery or download the files to interact with them.

## Overview seems incomplete

UiPath overviews are bounded for readability. Open `report.html` and expand the activity tree for complete parsed names and structure. Start with one project instead of a workspace containing many projects.

## Can I share the output?

Yes, if you intend to share its source evidence too. Reports may include code quotations and project details. This repository publishes only synthetic examples. Your normal local runs do not upload their reports.

[Back to README](../README.md)
