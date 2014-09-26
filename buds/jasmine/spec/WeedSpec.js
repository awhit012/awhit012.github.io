describe("Weed Plant", function() {

  it("calls the grow() function", function() {
    var fakePlant = new WeedPlant();
    spyOn(fakePlant, "grow");
    fakePlant.grow();
    expect(fakePlant.grow).toHaveBeenCalled();
  });

  it("calls the addBuds() function", function() {
    var fakePlant = new WeedPlant();
    spyOn(fakePlant, "addBuds");
    fakePlant.addBuds();
    expect(fakePlant.addBuds).toHaveBeenCalled();
  });

  it("calls the trackTimeSinceLastSmoke() function", function() {
    var fakePlant = new WeedPlant();
    spyOn(fakePlant, "trackTimeSinceLastSmoke");
    fakePlant.trackTimeSinceLastSmoke();
    expect(fakePlant.trackTimeSinceLastSmoke).toHaveBeenCalled();
  });

  it("calls the getImage() function", function() {
    var fakePlant = new WeedPlant();
    spyOn(fakePlant, "getImage");
    fakePlant.getImage();
    expect(fakePlant.getImage).toHaveBeenCalled();
  });

  it("calls the UpdateDisplay() function", function() {
    var fakePlant = new WeedPlant();
    spyOn(fakePlant, "UpdateDisplay");
    fakePlant.UpdateDisplay();
    expect(fakePlant.UpdateDisplay).toHaveBeenCalled();
  });


});


describe("Harvest", function() {
  it("calls the UpdateDisplay() function", function() {
    var fakePlant = new WeedPlant();
    spyOn(fakePlant, "UpdateDisplay");
    fakePlant.harvest();
    expect(fakePlant.UpdateDisplay).toHaveBeenCalled();
  });

});

describe("sell", function() {

  it("calls the UpdateDisplay() function", function() {
    var fakePlant = new WeedPlant();
    spyOn(fakePlant, "UpdateDisplay");
    fakePlant.sell();
    expect(fakePlant.UpdateDisplay).toHaveBeenCalled();
  });

});


