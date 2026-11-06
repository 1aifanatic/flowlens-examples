# typescript-shop

Small synthetic source fixture for FlowLens 0.10.0. No private project data.

Run from the **repository root**, after `npm ci`:

## TypeScript architecture

```sh
npm run examples -- ts-architecture
```

Equivalent package command (with a global installation):

```sh
flowlens analyze examples/typescript-shop --diagram architecture --open
```

## TypeScript workflow

```sh
npm run examples -- ts-workflow
```

Equivalent package command (with a global installation):

```sh
flowlens analyze examples/typescript-shop --diagram workflow --function checkout --open
```

## TypeScript sequence

```sh
npm run examples -- ts-sequence
```

Equivalent package command (with a global installation):

```sh
flowlens analyze examples/typescript-shop --diagram sequence --function placeOrder --open
```

## TypeScript dataflow

```sh
npm run examples -- ts-dataflow
```

Equivalent package command (with a global installation):

```sh
flowlens analyze examples/typescript-shop --diagram dataflow --function calculateTotal --open
```

## TypeScript lifecycle

```sh
npm run examples -- ts-lifecycle
```

Equivalent package command (with a global installation):

```sh
flowlens analyze examples/typescript-shop --diagram lifecycle --open
```

## Find callers of authenticate

```sh
npm run examples -- ts-callers
```

Equivalent package command (with a global installation):

```sh
flowlens ask examples/typescript-shop "who calls authenticate?" --open
```

## Single-file checkout workflow

```sh
npm run examples -- ts-single-function
```

Equivalent package command (with a global installation):

```sh
flowlens flow examples/typescript-shop/src/checkout.ts --function checkout --open
```

Open the generated gallery path printed by the runner. Every run uses a new directory, so it is safe to repeat. See the [main README](../../README.md) for scope and limits.
