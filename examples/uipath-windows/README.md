# uipath-windows

Small synthetic source fixture for FlowLens 0.10.0. No private project data.

This fixture illustrates the source structure recognized by FlowLens. It is **not a complete, deployable UiPath Studio/Maestro project**; activities and expressions are not executed.

Run from the **repository root**, after `npm ci`:

## uipath windows call map

```sh
npm run examples -- uipath-windows-architecture
```

Equivalent package command (with a global installation):

```sh
flowlens analyze examples/uipath-windows --diagram architecture --open
```

## uipath windows workflow

```sh
npm run examples -- uipath-windows-workflow
```

Equivalent package command (with a global installation):

```sh
flowlens analyze examples/uipath-windows --diagram workflow --function Main.xaml --open
```

Open the generated gallery path printed by the runner. Every run uses a new directory, so it is safe to repeat. See the [main README](../../README.md) for scope and limits.
