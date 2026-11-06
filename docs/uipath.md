# UiPath walkthrough

## 1. Locate the source folder

Use the project folder containing `project.json`, `Main.xaml`, and any child workflow folders. Analyze extracted source, not a published `.nupkg` or `.uipx` archive. Studio does not need to be installed for FlowLens to parse the source.

## 2. Generate the overview

```powershell
flowlens analyze "C:\Projects\InvoiceBot" --open
```

The default UiPath view maps workflows and statically resolved workflow invocations. The report links to individual workflow diagrams and activity trees.

## 3. Focus on one workflow

```powershell
flowlens analyze "C:\Projects\InvoiceBot" --diagram workflow --function "Main.xaml" --open
```

Use a relative path such as `Steps/Validate.xaml` when files share the same basename. Choose the target project folder rather than an entire drive. In a mixed-language folder, `--language uipath` selects the UiPath backend explicitly.

## 4. Read both the picture and the evidence

- Workflow overviews keep up to 12 items visible for readability.
- Expand the activity hierarchy in `report.html` for the full parsed structure and authored display names.
- Review warnings about unresolved or unsupported constructs.
- Declared XAML flowchart edges and state transitions can be shown in workflow views. This is static source structure, not a robot execution trace.
- Maestro `.flow` diagrams retain declared node connections and source-port labels. Embedded subflows have their own views.

## 5. Re-run after changes

Repeat the command. The default timestamped output preserves previous runs. If choosing `--output`, supply a new directory each time.

## Supported scope in 0.10.0

Windows, Portable/cross-platform and Legacy project metadata are recognized with supported XAML structures. Modern activity names can be included in the activity tree; that does not imply semantic understanding of every activity.

UiPath architecture and workflow extraction are available. UiPath sequence, dataflow and lifecycle extraction are not. Coded C# workflow internals, custom activity implementations, runtime bindings, XAML switch-case edges and implicit exception paths are not inferred. Expressions and scripts are never evaluated.

The public fixtures are deliberately small **static-analysis examples**, not complete Studio projects. For your real automation, use its actual source directory. FlowLens never runs the bot or needs its credentials.

Try `npm run examples -- uipath-windows-architecture uipath-windows-workflow maestro-workflow` from this repository root.

[Back to README](../README.md)
