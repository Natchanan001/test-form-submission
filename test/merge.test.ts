import { describe, expect, it } from "vitest";
import { merge } from "../src/merge";

describe("merge", () => {
  it("merges 3 collections in ascending order", () => {
    expect(
      merge(
        [1, 4, 7],
        [2, 5, 8],
        [9, 6, 3]
      )
    ).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  it("works with duplicate values", () => {
    expect(
      merge(
        [1, 2, 2],
        [2, 3],
        [4, 2, 1]
      )
    ).toEqual([1, 1, 2, 2, 2, 2, 3, 4]);
  });

  it("works when some collections are empty", () => {
    expect(
      merge(
        [],
        [1, 3, 5],
        [6, 4, 2]
      )
    ).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it("works when all collections are empty", () => {
    expect(merge([], [], [])).toEqual([]);
  });

  it("works with negative numbers", () => {
    expect(
      merge(
        [-5, -1, 4],
        [-3, 2, 8],
        [10, 0, -2]
      )
    ).toEqual([-5, -3, -2, -1, 0, 2, 4, 8, 10]);
  });
});
