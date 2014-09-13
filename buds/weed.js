// MODEL

HIGH_CHART = ["You are sober as hell.", "You are barely feelin' it.", "You are a little toasty.", "You are half-baked.", "You are kinda blazed.", "You are stupid geeked.", "You have no idea what's goin' on.", "You need to be reminded that no one has ever died from a overdose of weed."]

timeSinceLastSmoke = 0


function WeedPlant( ageInWeeks, heightInInches, buds, budsInStash, highnessDigit, cash ) {

  var that = this

  this.ageInWeeks = ageInWeeks;
  this.heightInInches = heightInInches;
  this.buds = buds;

  this.budsInStash = budsInStash;
  this.highnessDigit = highnessDigit;
  this.cash = cash;

  this.grow = function() {
    that.ageInWeeks += 1;
    that.heightInInches += .5;
    that.addBuds();
    that.trackTimeSinceLastSmoke();
    that.UpdateDisplay();
  }

  this.addBuds = function(){
    if (that.ageInWeeks >= 2) {
      that.buds +=1;
    }
  }

  this.trackTimeSinceLastSmoke = function(){
    timeSinceLastSmoke += 1;
    if (timeSinceLastSmoke == 20 && that.highnessDigit >= 1 ){

      that.highnessDigit -= 1;
      timeSinceLastSmoke = 0;
      that.updateHighnessLevel();
    }
  }

  this.harvest = function(){
    that.budsInStash += that.buds;
    that.buds = 0;
  }

  this.smoke = function(){
    timeSinceLastSmoke = 0;
    that.speedUpTime();
    that.increaseHighnessLevel();
    that.budsInStash = 0;
  }

  this.speedUpTime = function(){
    if (growInterval >= budsInStash * 10) {
      growInterval -= budsInStash * 10
    }
  }

  this.increaseHighnessLevel = function(){
    // var highnessLevelIncrease = that.highnessDigit += Math.round(that.budsInStash / 10)
    if(that.highnessDigit += Math.round(that.budsInStash / 10) < HIGH_CHART.length){
      that.highnessDigit += Math.round(that.budsInStash / 10)
      that.updateHighnessLevel();
    }
    else {
      that.highnessDigit = HIGH_CHART.length - 1;
      that.updateHighnessLevel
    }

    this.updateHighnessLevel = function(){
      that.highnessLevel = HIGH_CHART[that.highnessDigit];
    }

    this.sell = function(){
      that.cash += that.budsInStash * 5
      that.budsInStash = 0;
    }

  }

  this.UpdateDisplay = function(){
    $('#age-display').html(this.ageInWeeks)
    $('#height-display').html(this.heightInInches)
    $('#buds-on-plant-display').html(this.buds)
    $('#harvested-buds-display').html(this.budsInStash)
    $('#higness-display').html(this.highnessLevel)
    $('#cash-display').html('$' + this.cash)
  }
}
// CONTROLLER

$( document ).ready(function() {
  var ThisPlant = new WeedPlant( 0, 0, 0, 0, 0, 0 );

  growInterval = 3000;
  setInterval(ThisPlant.grow, growInterval);

  $( "#harvest-button" ).click(function(){
    ThisPlant.harvest();
  })
  $( "#smoke-button" ).click(function(){
    ThisPlant.smoke();
  })
  $( "#sell-button" ).click(function(){
    ThisPlant.sell();
  })
});
