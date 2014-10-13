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

    that.generatePossibles(this.allRows.length)

  };

  this.generatePossibles = function(number){
    var possibleAnswers = []
    for(var i = 0; i < number; i++){
      possibleAnswers.push(i + 1)
    };

    console.log(possibleAnswers);

    that.attackRow(that.allRows);

  }

  this.attackRow = function(rows){

    for(var i = 0; i < rows.length; i++){
      that.findSolvedSquare(rows[i]);
    }
  }

  this.findSolvedSquare = function(row){
    rowLength = row.length
    for(var i = 0; i < rowLength; i++){
    console.log(i)
  }


};


var myPuzzle = new sudokuSolver();
myPuzzle.solve('000000001')


// hash = { row1 => [1,2,3],
//       ...}

// hash = { 1 => {row1 => nil, row2 => nil, row3 => true },
//       ...}