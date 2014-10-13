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

    that.devideIntoRows(that.parsedArray);
  }

  this.devideIntoRows = function(array){
    this.row1 = [that.parsedArray[0], that.parsedArray[1], that.parsedArray[2]]
    this.row2 = [that.parsedArray[3], that.parsedArray[4], that.parsedArray[5]]
    this.row3 = [that.parsedArray[6], that.parsedArray[7], that.parsedArray[8]]
    this.allRows = [this.row1, this.row2, this.row3]

    console.log(that.allRows);

  }

};


var myPuzzle = new sudokuSolver();
myPuzzle.solve('000000001')
