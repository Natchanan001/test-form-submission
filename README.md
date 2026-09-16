# Merge Sorted Arrays - TypeScript

This project implements:

```ts
merge(
  collection_1: number[],
  collection_2: number[],
  collection_3: number[]
): number[]
```

Requirements:
- `collection_1` and `collection_2` are already sorted ascending.
- `collection_3` is already sorted descending.
- The result must be sorted ascending.
- No built-in `sort()` is used.

## Setup

Install Node.js 22 or newer, then run:

```bash
git clone https://github.com/Natchanan001/test-form-submission.git
cd test-form-submission
npm install
```

## Run the example

```bash
npm start
```

This compiles the TypeScript code and runs the example in `src/index.ts`.

Expected output:

```text
[1,2,3,4,5,6,7,8,9]
```

To try other inputs, change the arrays in `src/index.ts` and run `npm start` again.
Keep the first two arrays ascending and the third array descending.

## Run unit tests

```bash
npm test
```

## How it works

The function uses 3 pointers.
- `i` reads `collection_1` from the beginning.
- `j` reads `collection_2` from the beginning.
- `k` reads `collection_3` from the end, because `collection_3` is descending.

On each loop, the smallest current value is pushed into the result.

Time complexity: O(n1 + n2 + n3)
Extra result space: O(n1 + n2 + n3)
