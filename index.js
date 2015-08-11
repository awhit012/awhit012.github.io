window.onload = function(){
  console.log('hi')
  var element = document.body;

  element.addEventListener("mousemove", function(z){
    var x = ((z.screenX * -1 / 20) - 500), y = ((z.screenY * -1 / 20) + 150);
    element.style.backgroundPosition = x + 'px ' + y + 'px';
    // console.log(z.target)
  });
};








