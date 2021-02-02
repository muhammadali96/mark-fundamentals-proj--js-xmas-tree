"use strict"
function xmasTree(foliageHeight) {
  /**
   * We've broken down this function into three sub-problems.
   * You can solve the overall kata by solving the sub-problems - you shouldn't need to make changes to this function.
   * (Although, if you wish to, you could.)
   */

  // 1. make the tree foliage
  const foliage = makeTreeFoliage(foliageHeight);
  // 2. make the tree trunk
  const trunk = makeTreeTrunk(foliageHeight);
  // 3. group them together
  console.log(foliage.concat(trunk))
  return foliage.concat(trunk);
}

function findLineWidth(foliageHeight) {
  let correct_width = ((2 * foliageHeight) - 1)
  return correct_width
}

//function makeFoliageSegment(foliageHeight, segmentLevel) { }

// calculate max width W, given Height
// for each required level (L = 1 to Height)
//     calc num hash tags for level L
//     calc num of underscores for level L
//     compose string with # and _
//     print the composed string
function makeTreeFoliage(foliageHeight) {
  const max_width = findLineWidth(foliageHeight)
  let foliage_array = []
  for (let segmentLevel = 1; segmentLevel <= foliageHeight; segmentLevel++) {
    let hashtag_number = (2 * segmentLevel) - 1
    let hashtag_string = ('#').repeat(hashtag_number)
    let half_underscore_number = 0.5 * (max_width - hashtag_number)
    let half_underscore_string = ('_').repeat(half_underscore_number)
    foliage_array.push(`${half_underscore_string}${hashtag_string}${half_underscore_string}`);
  }
  return foliage_array
}
//make tree trunk
// define width of segement
// define how many #
//define how many _
//place # and _ in correct position
function makeTreeTrunk(foliageHeight) {
  let max_width = findLineWidth(foliageHeight)
  let half_underscore_number = 0.5 * (max_width - 1)
  let half_underscore_string = ('_').repeat(half_underscore_number)
  let half_trunk = `${half_underscore_string}#${half_underscore_string}`
  let full_trunk = [half_trunk, half_trunk]
  return full_trunk;
}

// exports the functions so that ./xmas-tree.test.js can import them
module.exports = {
  xmasTree,
  findLineWidth,
  //makeFoliageSegment,
  makeTreeFoliage,
  makeTreeTrunk,
};

xmasTree(3)