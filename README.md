# top-javascript-ethasketch-project

Issue - getting the new grid created by user input to fill equally the space left behind by the original grid.

For some reason lines 31 & 32 in the JS file did not do it:

  gridAdjustment.style.gridTemplateColumns = `repeat(${num1}, 1fr)`;          //Need to get this line right and the one below it to autofill
  gridAdjustment.style.gridTemplateRows = `repeat($
