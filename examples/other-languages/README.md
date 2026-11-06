# other-languages

Small synthetic source fixture for FlowLens 0.10.0. No private project data.

Run from the **repository root**, after `npm ci`:

## Other languages: source inventory

```sh
npm run examples -- other-source-map
```

Equivalent package command (with a global installation):

```sh
flowlens analyze examples/other-languages --diagram architecture --open
```

## Include a custom source extension

```sh
npm run examples -- custom-extension
```

Equivalent package command (with a global installation):

```sh
flowlens analyze examples/other-languages --extension .hs --open
```

Open the generated gallery path printed by the runner. Every run uses a new directory, so it is safe to repeat. See the [main README](../../README.md) for scope and limits.
