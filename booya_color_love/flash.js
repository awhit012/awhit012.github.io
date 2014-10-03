$(document).ready(function () {

  colorClasses = ["one", "two", "three", "four", "five", "six"];
  shapeClasses = ["uno", "dos", "tres", "quatro", "cinco"]

  hoverCount = 1

  $('table').hover(function() {

    hoverCount += 1;

    $(this).find('td').each(function() {
      $(this).removeClass();
      $(this).addClass(colorClasses[Math.floor(Math.random()*colorClasses.length)]);
      $(this).addClass(shapeClasses[Math.floor(Math.random()*shapeClasses.length)]);
    });

    console.log(hoverCount);
    checkCount();
  })

  var checkCount = function(){
    if (hoverCount == 10 ) {
      $('table').remove();
      $('body').css( "background-color", "#FF1E00" );
      $('body').append( "<h1 class='big-title'>booya color love</h1>" );

    }
  }

});