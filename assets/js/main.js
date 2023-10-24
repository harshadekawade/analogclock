var secondDegree = 180 + 6;
var minuteDegree = 180 + 0.1;
var date = new Date();
var minute = date.getMinutes();
var second = date.getSeconds();
setInterval(function () {
    $('.second-line').css('transform', 'rotate(' + secondDegree + 'deg)');
    secondDegree += 6;
    $('.minute-line').css('transform', 'rotate(' + minuteDegree + 'deg)');
    minuteDegree += 0.1;
}, 1000);