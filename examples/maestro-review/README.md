# maestro-review

Small synthetic source fixture for FlowLens 0.10.0. No private project data.

This fixture illustrates the source structure recognized by FlowLens. It is **not a complete, deployable UiPath Studio/Maestro project**; activities and expressions are not executed.

Run from the **repository root**, after `npm ci`:

## Maestro review and subflow

```sh
npm run examples -- maestro-workflow
```

Equivalent package command (with a global installation):

```sh
flowlens analyze examples/maestro-review --diagram workflow --function Review.flow --open
```

## Maestro notification subflow

```sh
npm run examples -- maestro-subflow
```

Equivalent package command (with a global installation):

```sh
flowlens analyze examples/maestro-review --diagram workflow --function Review.flow#subflows/notify --open
```

Open the generated gallery path printed by the runner. Every run uses a new directory, so it is safe to repeat. See the [main README](../../README.md) for scope and limits.
