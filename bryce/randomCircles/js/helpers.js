function randomColor() {
   return '#'+Math.floor(Math.random()*16777215).toString(16);
}

function randomInt(min, max) {
    var max = max+1;
    return Math.floor(Math.random()*(max-min)+min);
}
    

function Oval() {
    var newElem = document.createElement('div');
    newElem.className = 'ball';
    this.oval = newElem;
}

Oval.prototype = {
   setColor: function(color) {
       this.oval.style.backgroundColor = color;
   },
   setPosition: function(x,y) {
       this.oval.style.left = x;
       this.oval.style.top = y;
   },
   setSize: function(width, height) {
       this.oval.style.width = width;
       this.oval.style.height = height;
   }
};