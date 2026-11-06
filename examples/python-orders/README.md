# python-orders

Small synthetic source fixture for FlowLens 0.10.0. No private project data.

Run from the **repository root**, after `npm ci`:

## Python architecture

```sh
npm run examples -- python-architecture
```

Equivalent package command (with a global installation):

```sh
flowlens analyze examples/python-orders --diagram architecture --language python --open
```

## Python workflow

```sh
npm run examples -- python-workflow
```

Equivalent package command (with a global installation):

```sh
flowlens analyze examples/python-orders --diagram workflow --function checkout --language python --open
```

## Python sequence

```sh
npm run examples -- python-sequence
```

Equivalent package command (with a global installation):

```sh
flowlens analyze examples/python-orders --diagram sequence --function place_order --language python --open
```

## Python dataflow

```sh
npm run examples -- python-dataflow
```

Equivalent package command (with a global installation):

```sh
flowlens analyze examples/python-orders --diagram dataflow --function calculate_total --language python --open
```

## Python lifecycle

```sh
npm run examples -- python-lifecycle
```

Equivalent package command (with a global installation):

```sh
flowlens analyze examples/python-orders --diagram lifecycle --language python --open
```

Open the generated gallery path printed by the runner. Every run uses a new directory, so it is safe to repeat. See the [main README](../../README.md) for scope and limits.
