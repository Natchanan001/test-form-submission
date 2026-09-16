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

```bash
npm install
```

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
