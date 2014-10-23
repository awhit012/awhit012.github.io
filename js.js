 x = 0;
 counter = 0;

 $( document ).ready(function(){
  setInterval(changeColors,8e3)

  var lastScrollTop = 0;
  $(window).scroll(function(event){
    console.log(counter)

    var st = $(this).scrollTop();
    if (st > lastScrollTop){
      counter += 1
      if (counter >= 2){
        spreadDots();
        counter = 0;
      }

    } else {
      tightenDots();
      counter = 0;
      console.log('tight')
    }
    lastScrollTop = st;
  });

});

 var spreadDots = function(){
  if( x <= 100 ){
    x += 1;
  }
  $(".dots").css("margin-left", x );
  $(".dots").css("margin-right", x );
}

var tightenDots = function(){
  if( x >= 10 ){
    x -= .5;
  }
  $(".dots").css("margin-left", x );
  $(".dots").css("margin-right", x );
}



var colors=["#2EB1FF","#22FF8F","#FF9C22","#FF5722"];

var changeColors=function(){

  var e=Math.floor(Math.random()*colors.length);
  var t=document.getElementsByTagName("body")[0];
  t.style.backgroundColor=colors[e];
};





