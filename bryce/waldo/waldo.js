function respondToClick(image, x, y) {
    var waldoX = 179;
    var waldoY = 170;
    var xdist = x-waldoX;
    var ydist = y-waldoY;
    var dist = Math.sqrt(xdist*xdist + ydist*ydist);
    if (dist <= 30) {
        alert('happy day. you found him.');
    } else if (dist <= 200) {
        alert('not bad...');
    } else {
        alert('well he is not here!');
    }
}

function addWaldoGame(id) {
    var image = document.createElement('img');
    var waldoFilename = 'waldo1.jpg';
    image.src = waldoFilename;
    image.setAttribute('value', waldoFilename);
    
    document.getElementById(id).appendChild(image);
    
    image.onclick = function (e) {
        respondToClick(image, e.pageX, e.pageY);  
    };
}