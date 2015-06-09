function randomCircles_v0() {
    const MIN_BALL_DIAMETER = 20;
    var newElem = document.createElement('div');
    newElem.className = 'ball';
    var diameter = randomInt(MIN_BALL_DIAMETER, 150);
    newElem.style.backgroundColor = randomColor();
    newElem.style.width = newElem.style.height = diameter;
    newElem.style.top = randomInt(0, tuval.offsetHeight-diameter);
    newElem.style.left = randomInt(0, tuval.offsetWidth-diameter);
    tuval.appendChild(newElem);
}

function randomCircles_v1() {
    const MIN_BALL_DIAMETER = 20;
    var ball = new Oval();
    var diameter = randomInt(MIN_BALL_DIAMETER, 150);
    ball.setColor(randomColor());
    ball.setSize(diameter, diameter);
    var randomX = randomInt(0, tuval.offsetWidth-diameter);
    var randomY =  randomInt(0, tuval.offsetHeight-diameter);
    ball.setPosition(randomX, randomY);
    tuval.add(ball);
}
