function sudokuSolver(){
  that = this;

  this.solve = function(puzzle){
    that.puzzle = puzzle;
    that.splitStringIntoArray(puzzle)

  }

  this.splitStringIntoArray = function(){
    that.arrayOfBoxValues = that.puzzle.split("");

    that.parseArray(that.arrayOfBoxValues);

  };

  this.parseArray = function(arrayOfBoxValues){
    that.parsedArray = [];
    length = arrayOfBoxValues.length

    for(var i = 0; i < length; i++){
      that.parsedArray.push( parseInt(arrayOfBoxValues[i]) )
    };

    console.log(that.parsedArray)
  }

};


var myPuzzle = new sudokuSolver();
myPuzzle.solve('000000001')
