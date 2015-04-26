window.onload = function(){
  console.log('hi')
  var element = document.body;

  element.addEventListener("mousemove", function(z){
    var x = ((z.screenX * -1 / 20) - 600), y = ((z.screenY * -1 / 20) + 0);
    element.style.backgroundPosition = x + 'px ' + y + 'px';
    // console.log(z.target)
  });
    debugger
};








