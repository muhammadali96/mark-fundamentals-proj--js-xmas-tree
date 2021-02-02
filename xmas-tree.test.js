const {
  xmasTree,
  findLineWidth,
  //makeFoliageSegment,
  makeTreeFoliage,
  makeTreeTrunk,
} = require("./xmas-tree");

test("findLineWidth finds the line width from a foliage height", () => {
  expect(findLineWidth(5)).toStrictEqual(9);
  expect(findLineWidth(3)).toStrictEqual(5);
});

test.skip("makeTreeTrunk returns the tree trunk part of the Christmas tree with given foliage height", () => {
  expect(makeTreeTrunk(5)).toBe(["____#____", "____#____"]);
  expect(makeTreeTrunk(3)).toStrictEqual(["__#__", "__#__"]);
});
test.skip("Test toBe", () => {
  expect(makeTreeTrunk(5)).toStrictEqual(["____#____", "____#____"]);
});

// test.skip("makeFoliageSegment returns the foliage segment for a given level of a tree of given foliage height", () => {
//   expect(makeFoliageSegment(5, 1)).toBe("____#____");
//   expect(makeFoliageSegment(5, 4)).toBe("_#######_");
//   expect(makeFoliageSegment(3, 1)).toBe("__#__");
//   expect(makeFoliageSegment(3, 2)).toBe("_###_");
// });

test("makeTreeFoliage returns the foliage for a tree of given foliage height", () => {
  expect(makeTreeFoliage(5)).toStrictEqual([
    "____#____",
    "___###___",
    "__#####__",
    "_#######_",
    "#########",
  ]);
  expect(makeTreeFoliage(3)).toStrictEqual(["__#__", "_###_", "#####"]);
});

test.skip("xmasTree returns an array modelling a Christmas tree of given foliage height", () => {
  expect(xmasTree(5)).toStrictEqual([
    "____#____",
    "___###___",
    "__#####__",
    "_#######_",
    "#########",
    "____#____",
    "____#____",
  ]);
  expect(xmasTree(3)).toStrictEqual([
    "__#__",
    "_###_",
    "#####",
    "__#__",
    "__#__",
  ]);
});
