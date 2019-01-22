# Benchpress

This is a module that runs describe-it syntax tests as benchmarks. This module is still under development.

## Usage

- Write your benchmark files using pattern `*.bench.js`
- Write benchmark suites using `describe`
- Write each benchmark as `it`
- Run `benchpress --file spec-1.bench.js --file spec2.bench.js`

> Supports async (done callback) of `it` blocks

Sample output of running benchpress on example specs
```terminal
this suite does blah again
✓ this is one benchmark x 9.72 ops/sec ±0.43% (48 runs sampled)
✓ this is another benchmark x 1,426,136 ops/sec ±1.05% (90 runs sampled)
Fastest is this is another benchmark

this suite does blah again
✓ this is one benchmark x 15,117 ops/sec ±1.23% (85 runs sampled)
✓ this is another benchmark x 1,420,588 ops/sec ±0.84% (90 runs sampled)
Fastest is this is another benchmark
```

## Limitations
- No programmatic usage yet
- Does not support top-level `it` (they must be within a `describe`)
- No support for before/after functions yet

## Todo
- improve CLI switches
- organise code to support all combination of spec structure
- add before/after support
- clean up CLI output
- add reporter support
