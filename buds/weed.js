var WeedPlant = WeedPlant || {};


HIGH_CHART = ["You are sober as hell.", "You are barely feelin' it.", "You are a little toasty.", "You are half-baked.", "You are kinda blazed.", "You are stupid geeked.", "You have no idea what's goin' on.", "You need to be reminded that no one has ever died from a overdose of weed."];
IMAGES = ["http://www.weedist.com/wp-content/uploads/2012/07/CannabisSeedling-Time-Lapse-280x155.png", "http://geek420.files.wordpress.com/2010/01/growingweed.jpg", "http://howtogrowmarijuana.com/wp-content/uploads/2012/12/Marijuana-vegging-light-cycle.jpg", "http://www.marijuana-picture.com/gallery/marijuana_plant_picture/images/ready_to_harvest.jpg", "http://static.guim.co.uk/sys-images/Guardian/Pix/pictures/2012/10/8/1349734493183/Cannabis-plant--008.jpg"];
timeSinceLastSmoke = 0;
WeedPlant.Model = function(e, t, n, r, i, s, o) {
    var u = this;
    currentImage = "http://www.weedist.com/wp-content/uploads/2012/07/CannabisSeedling-Time-Lapse-280x155.png";
    this.ageInWeeks = e;
    this.heightInInches = t;
    this.buds = n;
    this.budsInStash = r;
    this.highnessDigit = i;
    this.cash = s;
    this.imageIndex = o;
    this.grow = function() {
        u.ageInWeeks += 1;
        u.heightInInches += .5;
        u.addBuds();
        u.trackTimeSinceLastSmoke();
        u.getImage();
        WeedPlant.View()
    };
    this.getImage = function() {
        if (u.ageInWeeks % 15 == 0) {
            o += 1;
            currentImage = IMAGES[o]
        }
    };
    this.addBuds = function() {
        if (u.ageInWeeks >= 2) {
            u.buds += 1
        }
    };
    this.trackTimeSinceLastSmoke = function() {
        timeSinceLastSmoke += 1;
        if (timeSinceLastSmoke == 20 && u.highnessDigit >= 1) {
            u.highnessDigit -= 1;
            timeSinceLastSmoke = 0;
            u.updateHighnessLevel();
            if ($audio.volume >= .1) {
                $audio.volume -= .1
            }
        }
    };
    this.harvest = function() {
        u.budsInStash += u.buds;
        u.buds = 0;
        u.UpdateDisplay()
    };
    this.smoke = function() {
        timeSinceLastSmoke = 0;
        u.speedUpTime();
        u.increaseHighnessLevel();
        u.budsInStash = 0;
        u.UpdateDisplay()
    };
    this.speedUpTime = function() {
        if (growInterval >= r * 10) {
            growInterval -= r * 10
        }
    };
    this.increaseHighnessLevel = function() {
        if (u.budsInStash == 0) {
            return
        }
        if (u.highnessDigit + Math.round(u.budsInStash / 10) < HIGH_CHART.length) {
            u.highnessDigit += Math.round(u.budsInStash / 10);
            u.updateHighnessLevel();
            u.updateSound()
        } else {
            u.highnessDigit = HIGH_CHART.length - 1;
            u.updateHighnessLevel();
            u.updateSound()
        }
    };
    this.updateHighnessLevel = function() {
        u.highnessLevel = HIGH_CHART[u.highnessDigit]
    };
    this.updateSound = function() {
        if ($audio.volume > .7) {
            $audio.volume = 1
        } else {
            $audio.volume += .2
        }
    };
    this.sell = function() {
        u.cash += u.budsInStash * 10;
        u.budsInStash = 0;
        u.UpdateDisplay()
    }
};
WeedPlant.View = function() {
    $("#age-display").html(WeedPlant.ageInWeeks);
    $("#image-display").attr("src", currentImage);
    $("#height-display").html(WeedPlant.heightInInches);
    $("#buds-on-plant-display").html(WeedPlant.buds);
    $("#harvested-buds-display").html(WeedPlant.budsInStash);
    $("#higness-display").html(WeedPlant.highnessLevel);
    $("#cash-display").html("$" + WeedPlant.cash)
};
$(document).ready(function() {
    var e = new WeedPlant.Model(0, 0, 0, 0, 0, 0, 0);
    $audio = $("#audio")[0];
    $audio.volume = 0;
    growInterval = 200;
    setInterval(WeedPlant.Model.grow, growInterval);
    $("#harvest-button").click(function() {
        WeedPlant.Model.harvest()
    });
    $("#smoke-button").click(function() {
        WeedPlant.Model.smoke()
    });
    $("#sell-button").click(function() {
        WeedPlant.Model.sell()
    })
})
