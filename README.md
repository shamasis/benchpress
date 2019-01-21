# Benchpress

This is a module that runs describe-it syntax tests as benchmarks. This module is still under development.

## Usage

- Write your benchmark files using pattern `*.bench.js`
- Write benchmark suites using `describe`
- Write each benchmark as `it`
- Run `benchpress --file spec-1.bench.js --file spec2.bench.js`

> Supports async (done callback) of `it` blocks

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
