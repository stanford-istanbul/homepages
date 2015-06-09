$(document).ready(function() {
    tuval = document.getElementById('field');
    document.getElementById('field').onclick = randomCircles_v1;
    tuval.add = function(element) {
        tuval.appendChild(element.oval);
    }
});